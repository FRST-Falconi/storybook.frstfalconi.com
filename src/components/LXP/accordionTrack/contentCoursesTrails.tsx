import React, { useRef } from 'react'
import '../../../shared/global.css'
import VectorDown from './vectorDown'
import VectorUp from './vectorUp'
import * as Styles from './accordionTrackStyle'
import { useState } from 'react'
import * as Icons from '../../../shared/icons'
import Button from '@components/buttons'
import Switch from 'react-switch';
import PopOver, { PopOverItem } from '../popOver'
import Loading from '@components/DS/loading'

import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';


export default function ContentCoursesTrails(props: any) {

  const [checked, setChecked] = useState(true)
  const [up, setUp] = useState(true)
  const [ElementPopover, setElementPopover] = useState(null);
  const [ElementPopoverPublish, setElementPopoverPublish] = useState(null);
  const [active, setActive] = useState(false)
  const [nameTrail, setNameTrail] = useState('')  
  const [Publishing, setPublishing] = useState<boolean>(false);
  const [CanPublishing, setCanPublishing] = useState<boolean>(true);
  // const refContainer = useRef(null);

  const handleChange = (checkedValue) => {
    setChecked(checkedValue)
    props.handleChangeCheck(checkedValue)
  };

  const changeSelect = () => {
    {
      if (up) {
        setUp(false)
        props.handleChangeShow(false)
      }
      else {
        setUp(true)
        props.handleChangeShow(true)
      }
    }
  }

  const handleClickActiveNameTrail = () => { 
    setNameTrail('')   
    if(active) {
      return setActive(false)
    } else{      
      setActive(true)
     }
  }

  return (
    <>
      <Styles.ContainerHeader className={"opened"} active={props.ativo}>

        <Styles.ContentTrailName active={active}>
          {!active ?
            <>
              <Styles.TypographyTrailName>{props.TrailName}</Styles.TypographyTrailName>
              <Styles.Select onClick={changeSelect}>
                {props.show ? <VectorUp /> : <VectorDown />}
              </Styles.Select>
            </>
            :
            <Styles.ContainerInputNameTrail>
              <input 
                placeholder={props.txtPlacerolderInputNameTrail ? props.txtPlacerolderInputNameTrail : 'Digite o nome da trilha'}        
                value={nameTrail}
                onChange={(e) =>{                  
                  setNameTrail(e.target.value)                  
                }} 
                onKeyPress={(event) => {
                  if(event.key === 'Enter'){
                    if (nameTrail) {
                      setActive(false)
                      props.handleChangeTrailName(nameTrail)
                    }
                  }                  
                }}
              />
            </Styles.ContainerInputNameTrail>
          }          
        </Styles.ContentTrailName>
        
        {
          props.showButtonActive &&
            <Styles.ContentActiveHeader>
              <Styles.TypographyActiveHeader active={props.ativo} style={{ fontWeight: props.ativo ? 700 : 400 }}>
                {props.txtAtivarTrilha ? props.txtAtivarTrilha : 'Ativar trilha'}
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
              <Styles.TypographyActiveHeader active={props.ativo} style={{ fontWeight: props.ativo ? 700 : 400 }}>
                <Button 
                  id={`btnPublish${props.id}`}
                  handleMount={(element) => {
                    setElementPopoverPublish(document.getElementById(element))
                  }}
                  handleClick={() => {
                    setCanPublishing(false)
                    setPublishing(true)                    
                  }} 
                  startIcon={Publishing &&  <Loading sizeLoading='small' loadColor='#bdbdbd' style={{width: 40}}/>}
                  label={Publishing ? 'Publicando...' : 'Publicar'} 
                  variant='secondary'
                  disabled={!CanPublishing}
                />
                {/* ToDo: Migrar o conteúdo */}
                <Popper 
                  id={CanPublishing ? `btnPublishPopper${props.id}` : undefined} 
                  open={CanPublishing} 
                  anchorEl={ElementPopoverPublish} 
                  placement={'top'} 
                  transition
                >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps}>
                      <Styles.PopOver style={{display: CanPublishing ? 'flex' : 'none'}}>
                      <div style={{ display: 'flex', flexDirection: 'column', padding: 0, width: 150, textAlign: 'center' }}>
                        Após realizar todas as alterações na trilha, é necessário clicar em publicar para que o conteúdo editado esteja disponível
                      </div>
                        <Styles.RectangleLowCenter variant={'lowCenter'} />
                      </Styles.PopOver>
                    </Fade>
                  )}
                </Popper>                
                                            
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
        }        
        <>
          <PopOver
            element={ElementPopover}
            onClosePopover={() => {
              setElementPopover(null)
            }}
            variant={'upRight'}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
              <PopOverItem
                label={props.txtTrailsPopOverEdit ? props.txtTrailsPopOverEdit : "Editar nome da trilha"}
                onClick={() => {
                  //props.handlePopOverTrailEdit(props.id)
                  handleClickActiveNameTrail()
                  setElementPopover(null)                  
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
                  setElementPopover(null)
                }}
                icon={<Icons.Trash fill='#C00F00' />}
                noBorder={true}
                isFontBold={true}
                color={'#C00F00'}
              />
            </div>
          </PopOver>      
        </>        
      </Styles.ContainerHeader>

      {props.children}
    </>
  )
}