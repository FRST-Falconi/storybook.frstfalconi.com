import React, { useEffect, useRef } from 'react'
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

import {
  Box,
  ClickAwayListener,
  Fade,
  makeStyles,
  Paper,
  Popper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  const color = theme.palette.background.paper; // Feel free to customise this like they do in Tooltip
  return {
    popoverRoot: {
      backgroundColor: color,
      maxWidth: 200,      
    },
    content: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
    // Stolen from https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Tooltip/Tooltip.js and https://github.com/mui-org/material-ui/blob/4f2a07e140c954b478a6670c009c23a59ec3e2d4/docs/src/pages/components/popper/ScrollPlayground.js
    popper: {
      zIndex: 2000,
      margin: 12,
      '&[x-placement*="bottom"] $arrow': {
        top: 0,
        left: 0,
        marginTop: "-0.71em",
        marginLeft: 4,
        marginRight: 4,
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      '&[x-placement*="top"] $arrow': {
        bottom: 0,
        left: 0,
        marginBottom: "-0.71em",
        marginLeft: 4,
        marginRight: 4,
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      '&[x-placement*="right"] $arrow': {
        left: 0,
        marginLeft: "-0.71em",
        height: "1em",
        width: "0.71em",
        marginTop: 4,
        marginBottom: 4,
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      '&[x-placement*="left"] $arrow': {
        right: 0,
        marginRight: "-0.71em",
        height: "1em",
        width: "0.71em",
        marginTop: 4,
        marginBottom: 4,
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    },
    // Stolen from https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Tooltip/Tooltip.js
    arrow: {
      overflow: "hidden",
      position: "absolute",
      width: "1em",
      height: "0.71em" /* = width / sqrt(2) = (length of the hypotenuse) */,
      boxSizing: "border-box",
      color,
      "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: "100%",
        height: "100%",
        boxShadow: theme.shadows[2],
        backgroundColor: "currentColor",
        transform: "rotate(45deg)"
      },

    }
  };
});

export default function ContentCoursesTrails(props: any) {
  
  const [OpenPopper, setOpenPopper] = useState<boolean>(false);
  const [checked, setChecked] = useState(true)
  const [checkedPrivate, setCheckedPrivate] = useState(true)
  const [up, setUp] = useState(true)
  const [ElementPopover, setElementPopover] = useState(null);
  const [ElementPopoverPublish, setElementPopoverPublish] = useState(null);
  const [active, setActive] = useState(false)
  const [nameTrail, setNameTrail] = useState('')  
  const [Publishing, setPublishing] = useState<string>(props.publishStatus);
  const [arrowRef, setArrowRef] = React.useState<HTMLElement | null>(null);
  const classes = useStyles();
  // const refContainer = useRef(null);

  useEffect(() => {
    setPublishing(props.publishStatus)
    setOpenPopper(props.publishStatus === "pending")
  }, [props.publishStatus])

  useEffect(() => {
    if (props.publishStatus && props.publishStatus === "processing") {
      console.log(" . --- Startando Verificacao Publicacao", props.trailId)
      setTimeout(() => {
          checkStatusPublish()
        }, 5000)
    }
  }, [])

  const handleChange = (checkedValue) => {
    setChecked(checkedValue)
    props.handleChangeCheck(checkedValue)
  };

  const handleChangePrivate = (checkedValue) => {
    setCheckedPrivate(checkedValue)
    props.handleChangePrivate(!checkedValue)
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

  const checkStatusPublish = async () => {
    let publicacao = await props.handlePublicarCheck(props.trailId)
    console.log(props.trailId, 'publicacao', publicacao)
    setPublishing(publicacao)
    if (publicacao) {
      if (publicacao === "processing") {
        setTimeout(() => {
          checkStatusPublish()
        }, 5000)
      }
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
                {props.show ? props.show === true ? <VectorUp /> : <VectorDown /> : null}
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
                {props.txtPrivateTrilha ? props.txtPrivateTrilha : 'Tornar a Trilha Pública'}
                <Switch
                  onChange={handleChangePrivate}
                  checked={!props.private}
                  height={16}
                  width={40}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  handleDiameter={24}
                  onHandleColor='#ffffff'
                  offHandleColor='#ffffff'
                  onColor='#FF4D0D'
                  offColor='#757575'
                  activeBoxShadow={props.private ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                  boxShadow={props.private ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                />
              </Styles.TypographyActiveHeader>
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
                    let el = document.getElementById(element)
                    setElementPopoverPublish(el ? el : null)
                  }}
                  handleClick={async () => {    
                    setPublishing('processing')                
                    await props.handlePublicarTrilha(props)              
                    checkStatusPublish()
                  }} 
                  startIcon={Publishing === 'processing' &&  <Loading sizeLoading='small' loadColor='#a5a5a5' style={{width: 40}}/>}
                  label={Publishing === 'pending' ? "Publicar" : Publishing === 'complete' ? "Publicado" : "Publicando..."}             
                  variant='secondary'
                  disabled={Publishing === 'pending' ? false : true}
                />
                <Popper 
                  key={props}
                  id={Publishing === 'pending' ? `btnPublishPopper${props.id}` : undefined} 
                  open={OpenPopper} 
                  anchorEl={ElementPopoverPublish ? ElementPopoverPublish : null} 
                  placement={'top'} 
                  className={classes.popper}
                  transition
                  modifiers={{
                      preventOverflow: {
                        enabled: true,
                        boundariesElement: "window"
                      },
                      arrow: {
                        enabled: true,
                        element: arrowRef
                      }
                  }}
                >
                  {({ TransitionProps }) => (                  
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper>
                        <ClickAwayListener onClickAway={() => {setOpenPopper(false)}}>
                          <Paper className={classes.popoverRoot}>
                              <span className={classes.arrow} ref={setArrowRef} />
                            <Box className={classes.content}>Após realizar todas as alterações na trilha, é necessário clicar em publicar para que o conteúdo editado esteja disponível</Box>
                          </Paper>
                        </ClickAwayListener>
                      </Paper>
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
                  setElementPopover(null)
                  setTimeout(() => {
                    props.handlePopOverTrailDelete(props.id)
                  }, 500)
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
      
      { up && props.children}
    </>
  )
}