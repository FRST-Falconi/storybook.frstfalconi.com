import { useEffect, useState, MouseEvent } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import '../../shared/global.css'

import { IChallengeCard } from './challengeCard'
import { MoreDotsVertical, EditIcon, TrashIcon } from '@shared/icons'
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

    const handleClickView = () => {
        onClickView();
        setActiveClick(true)
        setTimeout(() => {
            setActiveClick(false)
        }, 700)
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            { variant == 'srg' &&
                <Styles.WrapperCard active={activeClick}>
                    <Styles.BannerCard src={BannersSRC['srg']} />
                    <Styles.WrapperHeader>
                        <Styles.TitleProject>
                            {label.project}
                        </Styles.TitleProject>
                        <Styles.Dots>
                            <MoreDotsVertical/>
                        </Styles.Dots>
                    </Styles.WrapperHeader>
                </Styles.WrapperCard>
            }
            
            { variant == 'mars' &&
                <Styles.WrapperCard active={activeClick}>
                    
                    <Styles.TagStep onClick={() => handleClickView()}>
                        <Styles.TagText>{label.tagStep[variant]}</Styles.TagText>
                    </Styles.TagStep>
                    
                    <Styles.WrapperBanner onClick={() => handleClickView()}>
                        <Styles.BannerCard src={BannersSRC[variant]} />
                        <Styles.StepName>{label.nameStep[variant]}</Styles.StepName>
                    </Styles.WrapperBanner>

                    <Styles.ContentCard>
                        <Styles.WrapperHeader>
                            <Styles.TitleProject onClick={() => handleClickView()}>
                                {label.project}
                            </Styles.TitleProject>
                            <Styles.Dots>
                                <MoreVerticalMenu 
                                    textContinue={label.continue}
                                    textDelete={label.delete}
                                    handleContinue={() => onClickContinue()}
                                    handleDelete={() => onClickDelete()}
                                />
                            </Styles.Dots>
                        </Styles.WrapperHeader>

                        <Styles.DescriptionProject onClick={() => handleClickView()}>
                            {description}
                        </Styles.DescriptionProject>
                        <Styles.ButtonAction onClick={() => handleClickView()}>
                            {label.view}
                        </Styles.ButtonAction>
                    </Styles.ContentCard>

                </Styles.WrapperCard>
            }
        </ThemeProvider>
    )
}

const utilAssign = (value, optional) => {
    return value ? value : optional
}

const BannersSRC = {
    srg:'https://i.gyazo.com/d1822786ff653def884886807ec2cd65.png',
    mars:'https://i.gyazo.com/4589ee022181b3d121075480a64e7f70.png'
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
            neptune: 'Netuno',
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
            neptune: 'Neptune',
        }
    },
}


export function MoreVerticalMenu({textContinue, textDelete, handleContinue, handleDelete}) {
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
        >
            <StylesDrop.MenuItemCustom 
                onClick={() => handleSelect([true, false])} 
                style={{color: activeClick[1] ? '#663366' : '#0645AD', borderBottom: '1px solid #EBEBEB'}}
            >                
                <EditIcon width='16' height='16'/>
                <StylesDrop.TextOption>{textContinue}</StylesDrop.TextOption>
            </StylesDrop.MenuItemCustom>
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
  