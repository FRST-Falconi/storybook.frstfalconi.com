import '../../../shared/global.css'
import VectorDown from './vectorDown'
import VectorUp from './vectorUp'
import * as Styles from './accordionTrackStyle'
import { useState } from 'react'
import * as Icons from '../../../shared/icons'
import Switch from 'react-switch';
import { IAccordionTranslate } from './IAccordionTrack'
import PopOver,{ PopOverItem } from '../popOver'

export default function AccordionTrackNormal(props: any) {

    const [checked, setChecked] = useState(true)
    const [up, setUp] = useState(true)
    const [ElementPopover, setElementPopover] = useState(null);

    const handleChange = (checkedValue) => {
      setChecked(checkedValue)
      props.handleChangeCheck(checkedValue)
    };

    const changeSelect = () => {
      {
        if(up) {
          setUp(false)
          props.handleChangeShow(false)
        }
        else {
          setUp(true)
          props.handleChangeShow(true)
        }
      }
    }

    return (
      <>
        <Styles.ContainerHeader className={"opened"} active={props.ativo}>
          <Styles.ContentTrailName>
              <Styles.TypographyTrailName>{props.TrailName}</Styles.TypographyTrailName>
              <Styles.Select onClick={changeSelect} >
                {props.show ? <VectorUp /> : <VectorDown />}
              </Styles.Select>
          </Styles.ContentTrailName>
          <Styles.ContentActiveHeader>
              <Styles.TypographyActiveHeader active={props.ativo} style={{ fontWeight: props.ativo ? 700 : 400 }}>
                {props.txtAtivarCurso ? props.txtAtivarCurso : 'Ativar curso'}
                <Switch
                  onChange={handleChange}
                  checked={props.ativo}
                  height={16}
                  width={40}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  handleDiameter={24}
                  onHandleColor='#ffffff'
                  offHandleColor='#ffffff'
                  onColor='#FF4D0D'
                  offColor='#757575'
                  activeBoxShadow={props.ativo ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                  boxShadow={props.ativo ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                />
              </Styles.TypographyActiveHeader>
              <Styles.IconVerticalHeader 
                onClick={(element: any) => {
                    setElementPopover(element.currentTarget)
                }}
              >
                <div style={{ marginRight: 8 }}>
                  <Icons.MoreVertical 
                    fill={props.ativo ? '#000000' : '#bdbdbd'} 
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
              onClick={() => { 
                props.handlePopOverTrailEdit(props.id)
              }}
            />
            {/* <PopOverItem 
              label={props.txtTrailsPopOverDuplicar ? props.txtTrailsPopOverDuplicar : "Duplicar trilha"}
              onClick={() => {
                props.handlePopOverDuplicate
              }}
            /> */}
            <PopOverItem 
              label={props.txtTrailsPopOverDelete ? props.txtTrailsPopOverDelete : "Excluir trilha"}
              onClick={() => {
                props.handlePopOverTrailDelete(props.id)
              }}
              icon={<Icons.Trash fill='#C00F00'/>}
              noBorder={true}
              isFontBold={true}
              color={'#C00F00'}
            />
          </div>
        </PopOver>   

        {props.children}
      </>
    )
}