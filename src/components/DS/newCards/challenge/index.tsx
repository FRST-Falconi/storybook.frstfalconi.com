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
    goalUUID?: string
    authorUUID?: string
    userLoggedUUID?: string
    group_uuid: string
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
    goalExecutionGroup: any;
    iteratorNumber?:number
    isCompanyAbleGroupExecution: boolean;
    resultNumber?:number
}

export default function ChallengeCard ({
    selected,
    avatar,
    name,
    role,
    description,
    lastStep,
    cardID,
    goalUUID,
    authorUUID,
    userLoggedUUID,
    group_uuid,
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
    goalExecutionGroup,
    handleGroupExecution,
    iteratorNumber,
    isCompanyAbleGroupExecution,
    resultNumber
}: ChallengeCardProps) {
    const isAuthor = userLoggedUUID === authorUUID;
    const isGroupExecution = !!goalExecutionGroup?.room_uuid
    const showExecutionGroupButton = isCompanyAbleGroupExecution && ((isAuthor && !isGroupExecution ) || isGroupExecution);
    const isMemberGroup = goalExecutionGroup?.users_room_uuid?.some(userRoom => userRoom?.uuid === userLoggedUUID);
      
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
        showExecutionGroupButton && {
            description: 'Grupo de execução',
            startIcon: <RoomGroupIcon />,
            onClick: ()=>  handleGroupExecution({isGroup: !!goalExecutionGroup?.room_uuid, isMemberGroup: isMemberGroup, goalTitle: description, goalUuid: goalUUID, isAuthor: isAuthor, executionDetails: goalExecutionGroup })
        }
    ]?.filter(Boolean);

    const getStepName = (step: string) => {
        const GroupUuids = [
            "b1005836-b0a6-4a50-8147-537ebdc64a75",
            "f280489d-2997-4d47-a2ab-47f85c54c72a",
            "ef205633-b90d-4331-ad67-064355bb85d9",
            "cb67cb4b-5209-4f3b-88cb-d612829735a9",
            'd99a6401-330b-48b8-8a01-85205fcfeff7',
            'dd9a9f20-8481-4f32-9562-6f0ddf80cd91',
            '67ae3079-521a-4747-852d-8b3601c46e24'
        ];
        let steps
        if(GroupUuids.includes(group_uuid)
        ) {
            steps = {
                '0-problema': {
                    name: 'Fase 1 - Definição (meta)',
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
        }
        else {
            steps = {
                '0-problema': {
                    name: 'Fase 1: Definição',
                    color: '#EBEBEB'
                },
                '1-hipotese': {
                    name: 'Fase 2: Hipóteses',
                    color: '#FCDFA6'
                },
                '2-testes': {
                    name: 'Fase 3: Testes',
                    color: '#DACEF2'
                },
                '3-aprendizados-e-resultados': {
                    name: 'Fase 4: Resultados',
                    color: '#F2CEE4'
                },
                '4-proximos-passos': {
                    name: 'Desafio finalizado',
                    color: '#BDE3B9'
                }
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
                            color: '#9C9C9C',
                            '&.Mui-checked': {
                                color: '#FF4D0D',
                            },
                        }} 
                    />
                </S.checkboxWrapper>
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