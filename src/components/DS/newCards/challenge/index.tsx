import { Checkbox, Typography } from '@mui/material'
import * as S from './styles'
import { CopyIcon, LookChallengeIcon, PinIcon, PresentationIcon, StarRatingIcon, UncheckedBox, UserIcon, RoomGroupIcon } from '@shared/icons'
import { abbreviateMiddleSurnames } from '../../../../utilityFunctions/abbreviateMiddleSurnames'
import Tooltip from '@components/DS/tooltip'
import Avatar from '@components/avatar'
import MenuMore from '@components/menu-more'
import { ProgressGoalBar } from '@components/DS/progressGoalBar'

interface ChallengeCardProps {
    selected?: boolean
    avatar?: string
    name?: string
    role?: string
    description?: string
    lastStep?: string
    cardID: string
    type_challenge?: string
    isIterator?: boolean
    indicatorStart?:number
    indicatorCurrent?:number
    indicatorGoal?:number
    impact?:number
    relevance?:number
    handleSelected?: (e) => void
    handleClickChallenge?: () => void
    handleClickPresentation?: () => void
    onClickAvatar?: () => void
    isVisibleHeaderTypeChallenge?: boolean
    handleGroupExecution: (params: any) => void;
    iteratorNumber?:number
    resultNumber?:number
    showCheckbox?: boolean
    showExecutionGroup: boolean
}

export default function NewChallengeCard ({
    selected,
    avatar,
    name,
    role,
    description,
    lastStep,
    cardID,
    type_challenge = "original",
    isIterator,
    isVisibleHeaderTypeChallenge = false,
    indicatorStart,
    indicatorCurrent,
    indicatorGoal,
    impact,
    relevance,
    handleSelected,
    handleClickChallenge,
    handleClickPresentation,
    onClickAvatar,
    handleGroupExecution,
    iteratorNumber,
    resultNumber,
    showCheckbox,
    showExecutionGroup,
}: ChallengeCardProps) {
      
    const options = [
        {
            description: 'Ver desafio',
            startIcon: <LookChallengeIcon />,
            onClick: handleClickChallenge
        },
        {
            description: 'Apresentar desafio',
            startIcon: <PresentationIcon />,
            onClick: handleClickPresentation
        },
        showExecutionGroup && {
            description: 'Grupo de execução',
            startIcon: <RoomGroupIcon />,
            onClick: handleGroupExecution
        }
    ]?.filter(Boolean);

    const getStepName = (step: string) => {
        let steps = {
            '0-problema': {
                name: 'Fase 1 - Definição da meta',
                color: '#F2CEE4'
            },
            '1-hipotese': {
                name: 'Fase 2 - Plano de ação',
                color: '#FCDFA6'
            },
            '2-testes': {
                name: 'Fase 3 - Execução',
                color: '#DACEF2'
            },
            '3-aprendizados-e-resultados': {
                name: 'Fase 4 - Resultado',
                color: '#EBEBEB'
            },
            '4-proximos-passos': {
                name: 'Desafio finalizado',
                color: '#BDE3B9'
            }
        }
        
        return steps[step]
    }

    return (
        <S.cardWrapper id={cardID}>
            {isVisibleHeaderTypeChallenge ? <S.tagTypeChallenge isIterator={isIterator}>
                    <div style={{marginTop: "6px"}}>
                        {type_challenge == "duplicated" ? 
                            <CopyIcon fill={isIterator ? "#F8FAFC" : "#334155"}/> 
                            :
                            type_challenge == "assigned" ?
                            <UserIcon fill={isIterator ? "#F8FAFC" : "#334155"}/>
                            : 
                            <PinIcon fill={isIterator ? "#F8FAFC" : "#334155"}/>
                        } 
                    </div>
                    <S.labelTypeChallenge isIterator={isIterator}>
                        {type_challenge == "duplicated" ? "Desafio duplicado" 
                        :
                        type_challenge == "assigned" ? "Desafio atribuído"
                        : 
                        "Desafio original"} 
                        {isIterator && ` / Iteração ${iteratorNumber}`}
                    </S.labelTypeChallenge>
                </S.tagTypeChallenge> 
                :
                <div style={{height: "28px"}}></div>
            }
            
            <S.cardContentWrapper>
                {showCheckbox &&
                    <S.checkboxWrapper selected={selected}>
                        <Checkbox
                            checked={selected}
                            onChange={(e) => {
                                e.stopPropagation()
                                handleSelected(e)}
                            }
                            icon={<UncheckedBox />}
                            size='small'
                            sx={{
                                padding: 0,
                                color: '#9C9C9C',
                                '&.Mui-checked': {
                                    color: '#FF4D0D',
                                },
                            }} 
                        />
                    </S.checkboxWrapper>
                }
                <S.contentWrapper>
                    <S.headerContent>
                        <Tooltip
                            direction="bottom"
                            content={'Visitar perfil'}
                            trigger='hover'
                            width='101px'
                            height='32px'
                            style={{ top: '10px', textAlign: 'center' }}
                        >
                            <S.userInfo onClick={onClickAvatar}>
                                <Avatar 
                                    size={'40px'}
                                    src={avatar}
                                    isActiveClick={true}
                                    onClick={onClickAvatar}
                                />
                                <S.namePositionInfo>
                                    <Typography component={'h6'}>
                                        {abbreviateMiddleSurnames(name)}
                                    </Typography>
                                    <Typography component={'p'}>
                                        {role}
                                    </Typography>
                                </S.namePositionInfo>
                            </S.userInfo>
                        </Tooltip>
                        <MenuMore
                            options={options}
                            closeAfterClick
                        />
                    </S.headerContent>
                    <S.contentDescription onClick={() => handleClickChallenge?.()}>
                        <Typography component={'h6'}>
                            {(lastStep ==  "3-aprendizados-e-resultados" || lastStep == "4-proximos-passos") && indicatorCurrent ? `RESULTADO ${resultNumber === 1 ? '' : resultNumber}`: "DESAFIO"}
                        </Typography>
                        <Typography component={'p'}>
                            {description}
                        </Typography>
                    </S.contentDescription>
                    {(lastStep ==  "3-aprendizados-e-resultados" || lastStep == "4-proximos-passos") && indicatorCurrent ? 
                            <S.wrapperResults onClick={() => handleClickChallenge?.()}>
                                <ProgressGoalBar
                                    start={indicatorStart || 0}
                                    current={indicatorCurrent || 0}
                                    goal={indicatorGoal || 0}
                                    isVisibleMessage={false}
                                />
                            </S.wrapperResults>
                        : 
                        <S.wrapperStepTag onClick={() => handleClickChallenge?.()}>
                            <S.wrapperRating>
                                <S.rating><StarRatingIcon/> {impact ? Math.floor(impact) : "0"} - Impacto</S.rating>
                                <S.rating><StarRatingIcon/> {relevance ? Math.floor(relevance) : "0"} - Relevância </S.rating>
                            </S.wrapperRating>
                            <S.contentUpdatedChallenge style={{background: getStepName(lastStep).color}}>
                                <Typography component={'p'}>
                                    {getStepName(lastStep).name}
                                </Typography>
                            </S.contentUpdatedChallenge>
                        </S.wrapperStepTag>
                    }
                    
                </S.contentWrapper>
            </S.cardContentWrapper>
        </S.cardWrapper>
    )
}