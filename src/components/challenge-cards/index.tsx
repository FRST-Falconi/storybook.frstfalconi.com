import { useEffect, useState, MouseEvent } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import '../../shared/global.css'

import { IChallengeCard } from './challengeCard'
import {
    MoreDotsVertical,
    EditIcon,
    TrashIcon,
    CheckInCicle,
    Plus,
    FowardArrow
} from '@shared/icons'

import * as Styles from './challengeCardStyles'
import * as StylesDrop from './dropdownMenuStyle'
import Button from '@mui/material/Button'

export default function ChallengeCard({ 
    variant, 
    description, 
    language, 
    onClickView, 
    onClickNewProject, 
    onClickContinue, 
    onClickDelete,
    onClickEdit,
    style }: IChallengeCard) {
    
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
            <Styles.WrapperCard style={{...style}} active={activeClick}>                
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
                        { variant != 'srg' && onClickContinue && onClickDelete &&
                            <Styles.Dots>
                                <MoreVerticalMenu 
                                    textContinue={label.continue}
                                    textDelete={label.delete}
                                    textEdit={label.edit}
                                    handleContinue={() => onClickContinue()}
                                    handleDelete={() => onClickDelete()}
                                    handleEdit={() => onClickEdit()}
                                    variant={variant}
                                />
                            </Styles.Dots> }
                    </Styles.WrapperHeader>
                    { variant != 'srg'  ?
                    <Styles.DescriptionProject onClick={() => handleClick()}>
                        {resumeString(description, 73)}
                    </Styles.DescriptionProject>
                    :
                    <Styles.DescriptionSRG onClick={() => handleClick()}>
                    {label.srgDecription}
                    </Styles.DescriptionSRG>
                    }

                    <Styles.ButtonActionWrapper>
                        <Styles.ButtonAction onClick={() => handleClick()} variant={variant}>
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
                        {variant !== 'srg' && variant !== 'completed' &&
                            <Styles.ButtonAction onClick={() => onClickContinue()} variant={variant}>
                                <span style={{marginLeft: '12px'}}>
                                    {label.continue}
                                </span>
                            </Styles.ButtonAction>
                        }
                    </Styles.ButtonActionWrapper>
                </Styles.ContentCard>

            </Styles.WrapperCard>
        </ThemeProvider>
    )
}

const resumeString = (str, limit) => {
    if(!str) return str
    if(str?.length < limit) return str;

    return `${str.substr(0, limit)}...`
}

const utilAssign = (value, optional) => {
    return value ? value : optional
}

const BannersSRC = {
    srg:'https://api-deimos.s3.amazonaws.com/srg.png',
    incompleteMars:'https://api-deimos.s3.amazonaws.com/step1Mars.png',
    mars:'https://api-deimos.s3.amazonaws.com/step1Mars.png',
    jupiter: 'https://api-deimos.s3.amazonaws.com/step2Jupiter.png',
    saturn: 'https://api-deimos.s3.amazonaws.com/step3Saturn.png',
    uranus: 'https://api-deimos.s3.amazonaws.com/step4Uranus.png',
    neptune: 'https://api-deimos.s3.amazonaws.com/step4Neptune.png',
    completed: 'https://api-deimos.s3.amazonaws.com/completed.png'
}

const labels = {
    ptBR: {
        srgDecription: 'Nossa ferramenta ágil para atingir resultados e garantir aprendizados reais com ciclos de colaboração e experimentação.',
        project: 'Desafio',
        delete: 'Excluir',
        edit: 'Editar',
        continue: 'Continuar',
        view: 'Visualizar',
        newProject: 'Criar desafio',
        tagStep: {
            incompleteMars: 'Problema criado',
            mars: 'Definição do desafio',
            jupiter: 'Hipóteses e plano de ação',
            saturn: 'Testes e experimentos',
            uranus: 'Resultados e aprendizados',
            neptune: 'Próximos passos',
            completed: 'Finalizado'
        },
        nameStep: {
            incompleteMars: 'Marte',
            mars: 'Marte',
            jupiter: 'Júpiter',
            saturn: 'Saturno',
            uranus: 'Urano',
            neptune: 'Netuno'
        }
    },
    enUS: {
        srgDecription: 'Our agile tool to achieve results and ensure real learning with cycles of collaboration and experimentation.',
        project: 'Challenge',
        delete: 'Delete',
        edit: 'Edit',
        continue: 'Continue',
        view: 'View',
        newProject: 'Create challenge',
        tagStep: {
            incompleteMars: 'Created problem',
            mars: 'Challenge definition',
            jupiter: 'Hypotheses and action plan',
            saturn: 'Tests and experiment',
            uranus: 'Results and learnings',
            neptune: 'Next steps',
            completed: 'Completed'
        },
        nameStep: {
            incompleteMars: 'Mars',
            mars: 'Mars',
            jupiter: 'Jupiter',
            saturn: 'Saturn',
            uranus: 'Uranus',
            neptune: 'Neptune'
        }
    },

    es: {
        srgDecription: 'Nuestra herramienta ágil para lograr resultados y asegurar un aprendizaje real con ciclos de colaboración y experimentación.',
        project: 'Desafio',
        delete: 'Elimina',
        edit: 'Edita',
        continue: 'Continúa',
        view: 'Para ver',
        newProject: 'Crear desafio',
        tagStep: {
            incompleteMars: 'Problema creado',
            mars: 'Definición del desafío',
            jupiter: 'Hipótesis y plan de acción',
            saturn: 'Pruebas y Experimentos',
            uranus: 'Resultados y aprendizajes',
            neptune: 'Próximos pasos',
            completed: 'Terminado'
        },
        nameStep: {
            incompleteMars: 'Marte',
            mars: 'Marte',
            jupiter: 'Júpiter',
            saturn: 'Saturno',
            uranus: 'Urano',
            neptune: 'Neptuno'
        }
    },
}


export function MoreVerticalMenu({textContinue, textDelete, textEdit, handleContinue, handleDelete, handleEdit, variant}) {
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
        if(value[1]) handleEdit()
        if(value[2]) handleDelete()
        setActiveClick([false, false])
        setAnchorEl(null)
      }, 600);
    }
    
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          style={{
            width: '51px',
            minWidth: '30px',
            height: '47px',
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center'
        }}
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
          step={variant}
        >   
            {variant !== 'completed' &&
                <StylesDrop.MenuItemCustom 
                    onClick={() => handleSelect([true, false, false])} 
                    style={{color: activeClick[0] ? '#663366' : '#0645AD', borderBottom: '1px solid #EBEBEB'}}
                >                
                    <FowardArrow width='16' height='16' fill={activeClick[0] ? '#663366' : '#0645AD'}/>
                    <StylesDrop.TextOption>{textContinue}</StylesDrop.TextOption>
                </StylesDrop.MenuItemCustom>
            }
            <StylesDrop.MenuItemCustom 
                onClick={() => handleSelect([false, true, false])} 
                style={{color: activeClick[0] ? '#663366' : '#0645AD', borderBottom: '1px solid #EBEBEB'}}
            >                
                <EditIcon width='16' height='16' fill={activeClick[0] ? '#663366' : '#0645AD'}/>
                <StylesDrop.TextOption>{textEdit}</StylesDrop.TextOption>
            </StylesDrop.MenuItemCustom>
            <StylesDrop.MenuItemCustom 
                onClick={() => handleSelect([false, false, true])} 
                style={{color: activeClick[1] ? '#C00F00' : '#FF0000' }}
            >
                <TrashIcon fill={activeClick[1] ? '#C00F00' : '#FF0000'} width='13' height='16' /> 
                <StylesDrop.TextOption>{textDelete}</StylesDrop.TextOption>
            </StylesDrop.MenuItemCustom>
        </StylesDrop.MenuCustom>
      </div>
    )
}
  