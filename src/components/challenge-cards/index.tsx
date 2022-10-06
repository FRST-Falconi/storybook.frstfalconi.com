import { useEffect, useState, MouseEvent } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import '../../shared/global.css'

import { IChallengeCard } from './challengeCard'
import { MoreDotsVertical, EditIcon, TrashIcon, CheckInCicle, Plus } from '@shared/icons'
import PopOver from '@components/LXP/popOver'

import * as Styles from './challengeCardStyles'
import { Select, MenuItem } from '@material-ui/core';

import * as StylesDrop from './dropdownMenuStyle'
import Button from '@mui/material/Button'



export default function ChallengeCard({ variant, description, language, 
    onClickView, onClickNewProject, onClickContinue, onClickDelete }: IChallengeCard) {
    
    const [ label, setLabel] = useState<any>(labels['ptBR'])
    const [ activeClick, setActiveClick ] = useState(false)

    useEffect(() => {
        let valuesTranslate = language?.replace(/\-/g, "")
        setLabel(utilAssign(labels[valuesTranslate], labels['ptBR']))
    }, [language])

    const handleClick = () => {
        if(variant == 'srg') onClickNewProject()
        else onClickView();

        setActiveClick(true)
        setTimeout(() => {
            setActiveClick(false)
        }, 700)
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.WrapperCard active={activeClick}>                
                <Styles.TagStep onClick={() => handleClick()} variant={variant}>
                    <Styles.TagText>
                        {label.tagStep[variant]}
                    </Styles.TagText>
                    { variant == 'completed' &&
                        <span style={{marginLeft: '10px', height: '100%'}}>
                            <CheckInCicle customColor_1="transparent" height='16' width='16'/>
                        </span>
                    }
                </Styles.TagStep>                    
                <Styles.WrapperBanner onClick={() => handleClick()}>
                    <Styles.BannerCard src={BannersSRC[variant]} />
                    <Styles.StepName variant={variant}>{label.nameStep[variant]}</Styles.StepName>
                </Styles.WrapperBanner>

                <Styles.ContentCard>
                    <Styles.WrapperHeader>
                        <Styles.TitleProject onClick={() => handleClick()}>
                        {variant == 'srg' ? 'Space Race Game': label.project}
                        </Styles.TitleProject>
                        { variant != 'srg' &&
                            <Styles.Dots>
                                <MoreVerticalMenu 
                                    textContinue={label.continue}
                                    textDelete={label.delete}
                                    handleContinue={() => onClickContinue()}
                                    handleDelete={() => onClickDelete()}
                                    variant={variant}
                                />
                            </Styles.Dots> }
                    </Styles.WrapperHeader>

                    <Styles.DescriptionProject onClick={() => handleClick()}>
                        {description}
                    </Styles.DescriptionProject>
                    <Styles.ButtonAction onClick={() => handleClick()}>
                        {variant == 'srg' ? 
                        <>
                            <Plus/>
                            <span style={{marginLeft: '12px'}}>
                                {label.newProject}
                            </span>
                        </>
                        : 
                        label.view
                        }
                    </Styles.ButtonAction>
                </Styles.ContentCard>

            </Styles.WrapperCard>
        </ThemeProvider>
    )
}

const utilAssign = (value, optional) => {
    return value ? value : optional
}

const BannersSRC = {
    srg:'https://i.gyazo.com/d1822786ff653def884886807ec2cd65.png',
    mars:'https://i.gyazo.com/4589ee022181b3d121075480a64e7f70.png',
    jupiter: 'https://i.gyazo.com/7ff54ec9a81904b30812e1f9a5c6726c.png',
    saturn: 'https://i.gyazo.com/04c2c6633c8461fc29dc991435116f9b.png',
    uranus: 'https://i.gyazo.com/7160ba6dac10303a5f02345cccc36780.png',
    neptune: 'https://i.gyazo.com/fe7ca40994dff191e9208e0804aa9936.png',
    completed: 'https://i.gyazo.com/9745c730328d6111846565485929dd6a.png'
}

const labels = {
    ptBR: {
        project: 'Projeto',
        delete: 'Excluir',
        continue: 'Continuar',
        view: 'Visualizar',
        newProject: 'Criar novo projeto',
        tagStep: {
            mars: 'Problema Definido',
            jupiter: 'Hipóteses levantadas',
            saturn: 'Testes realizados',
            uranus: 'Resultados e aprendizados',
            neptune: 'Próximos Passos',
            completed: 'Finalizado'
        },
        nameStep: {
            mars: 'Marte',
            jupiter: 'Júpiter',
            saturn: 'Saturno',
            uranus: 'Urano',
            neptune: 'Netuno'
        }
    },
    enUS: {
        project: 'Project',
        delete: 'Delete',
        continue: 'Continue',
        view: 'View',
        newProject: 'Create a new project',
        tagStep: {
            mars: 'Defined problem',
            jupiter: 'Defined hypotheses',
            saturn: 'Performed tests',
            uranus: 'Results and learnings',
            neptune: 'Next steps',
            completed: 'Completed'
        },
        nameStep: {
            mars: 'Mars',
            jupiter: 'Jupiter',
            saturn: 'Saturn',
            uranus: 'Uranus',
            neptune: 'Neptune'
        }
    },

    es: {
        project: 'Proyecto',
        delete: 'Elimina',
        continue: 'Continúa',
        view: 'Para ver',
        newProject: 'Crear un nuevo proyecto',
        tagStep: {
            mars: 'Problema definido',
            jupiter: 'Hipótesis definidas',
            saturn: 'Pruebas realizadas',
            uranus: 'Resultados y aprendizajes',
            neptune: 'Próximos pasos',
            completed: 'Terminada'
        },
        nameStep: {
            mars: 'Marte',
            jupiter: 'Júpiter',
            saturn: 'Saturno',
            uranus: 'Urano',
            neptune: 'Neptuno'
        }
    },
}


export function MoreVerticalMenu({textContinue, textDelete, handleContinue, handleDelete, variant}) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [activeClick, setActiveClick] = useState([false, false])
    const open = Boolean(anchorEl)
    
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }
    const handleSelect = (value) => {
      setActiveClick(value)
      
      setTimeout(() => {
        if(value[0]) handleContinue()
        if(value[1]) handleDelete()
        setActiveClick([false, false])
        setAnchorEl(null)
      }, 600);
    }
    
    return (
      <div style={{width: '27px', height: '24px', overflow: 'hidden'}}>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          style={{margin: 0, padding: 0, display: 'flex', justifyContent: 'flex-start'}}
        >
            <MoreDotsVertical/>
        </Button>

        <StylesDrop.MenuCustom
          id="basic-menu"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          variant={variant}
        >   
            { variant != 'completed' &&
                <StylesDrop.MenuItemCustom 
                    onClick={() => handleSelect([true, false])} 
                    style={{color: activeClick[1] ? '#663366' : '#0645AD', borderBottom: '1px solid #EBEBEB'}}
                >                
                    <EditIcon width='16' height='16'/>
                    <StylesDrop.TextOption>{textContinue}</StylesDrop.TextOption>
                </StylesDrop.MenuItemCustom>
            }
            <StylesDrop.MenuItemCustom 
                onClick={() => handleSelect([false, true])} 
                style={{color: activeClick[1] ? '#A50000' : '#FF0000' }}
            >
                <TrashIcon fill={activeClick[1] ? '#A50000' : '#FF0000'} width='13' height='16' /> 
                <StylesDrop.TextOption>{textDelete}</StylesDrop.TextOption>
            </StylesDrop.MenuItemCustom>
        </StylesDrop.MenuCustom>
      </div>
    )
}
  