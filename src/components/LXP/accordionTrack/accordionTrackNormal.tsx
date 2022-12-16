import '../../../shared/global.css'
import VectorDown from './vectorDown'
import VectorUp from './vectorUp'
import * as Styles from './accordionTrackStyle'
import { useState } from 'react'
import * as Icons from '../../../shared/icons'
import Switch from 'react-switch';
import { IAccordionTranslate } from './IAccordionTrack'
import PopOver,{ PopOverItem } from '../popOver'

export default function AccordionTrackNormal(data: any, props: IAccordionTranslate) {

    const [checked, setChecked] = useState(true)
    const [up, setUp] = useState(true)
    const [ElementPopover, setElementPopover] = useState(null);

    const handleChange = (checkedValue) => {
      setChecked(checkedValue)
      data.handleChangeCheck(checkedValue)
    };

    const changeSelect = () => {
      {
        if(up) {
          setUp(false)
          data.handleChangeShow(false)
        }
        else {
          setUp(true)
          data.handleChangeShow(true)
        }
      }
    }

    return (
      <>
        <Styles.ContainerHeader className={"opened"} active={data.ativo}>
          <Styles.ContentTrailName>
              <Styles.TypographyTrailName>{data.TrailName}</Styles.TypographyTrailName>
              <Styles.Select onClick={changeSelect} >
                {data.show ? <VectorUp /> : <VectorDown />}
              </Styles.Select>
          </Styles.ContentTrailName>
          <Styles.ContentActiveHeader>
              <Styles.TypographyActiveHeader active={data.ativo} style={{ fontWeight: data.ativo ? 700 : 400 }}>
                {props.txtAtivarCurso ? props.txtAtivarCurso : 'Ativar curso'}
                <Switch
                  onChange={handleChange}
                  checked={data.ativo}
                  height={16}
                  width={40}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  handleDiameter={24}
                  onHandleColor='#ffffff'
                  offHandleColor='#ffffff'
                  onColor='#FF4D0D'
                  offColor='#757575'
                  activeBoxShadow={data.ativo ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                  boxShadow={data.ativo ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                />
              </Styles.TypographyActiveHeader>
              <Styles.IconVerticalHeader 
                onClick={(element: any) => {
                    setElementPopover(element.currentTarget)
                }}
              >
                <div style={{ marginRight: 8 }}>
                  <Icons.MoreVertical 
                    fill={data.ativo ? '#000000' : '#bdbdbd'} 
                  />
                </div>
              </Styles.IconVerticalHeader>
          </Styles.ContentActiveHeader>
        </Styles.ContainerHeader>

        <PopOver
          element={ElementPopover}
          onClosePopover={() => {
            setElementPopover(null)
          }}
          variant={'upRight'}
        >
          <div style={{display: 'flex', flexDirection: 'column', padding: 0}}>            
            <PopOverItem 
              label={props.txtTrailsPopOverEdit ? props.txtTrailsPopOverEdit : "Editar nome da trilha"}
              onClick={() =>{ 
                props.handlePopOverEdit
              }}
            />
            <PopOverItem 
              label={props.txtTrailsPopOverDuplicar ? props.txtTrailsPopOverDuplicar : "Duplicar trilha"}
              onClick={() => {
                props.handlePopOverDuplicate
              }}
            />
            <PopOverItem 
              label={props.txtTrailsPopOverDelete ? props.txtTrailsPopOverDelete : "Excluir trilha"}
              onClick={() => {
                props.handlePopOverDelete
              }}
              icon={<Icons.Trash fill='#C00F00'/>}
              noBorder={true}
              isFontBold={true}
              color={'#C00F00'}
            />
          </div>
        </PopOver>   

        {data.children}
      </>
    )
}