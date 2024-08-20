import React, { useEffect, useMemo, useState } from 'react'
import { IHypothesisAndImpedimentComponent } from './hypothesisAndImpediment'
import * as Styles from './hypothesisAndImpediment.style'
import Avatar from '@components/avatar'
import MenuMore from '@components/menu-more'
import { AddAction, AddIcon, EditHipoteses, EditIcon, StarPrioritize, TrashDelete, TrashHipoteses } from '@shared/icons'
import Tooltip from '../tooltip'
import UpDownButtons from './UpDownButtons'
import { Voting } from './Voting'
import { EditHypotesisAndImpediment } from './editHypotesisAndImpediment'

export const HypothesisAndImpediment = ({
    description,
    variant,
    type,
    avatar,
    id,
    index,
    authorGoalId, // id do dono do desafio
    userLoggedId,
    authorName, // nome autor da hipotese ou do impedimento
    handleViewProfile,
    authorId, // id do autor do impedimento ou da hipotese
    hasVoting,
    voteHasAlreadyBeenRegistered,
    isVotedByUserLogged,
    voteText,
    onDeleteVote,
    onChangeVote,
    votersList,
    onDeleteHipotesisOrImpediment,
    onSaveEditHipotesisOrImpediment,
    hasEditHipotesisOrImpediment,
    onVote,
    onPrioritize,
    onDown,
    onUp,
    hasUpdownButtons,
    onClickAction,
    onAddActions,
    hasAddActions,
    popperStyle
}: IHypothesisAndImpedimentComponent) => {
    const [editDescription, setEditDescription] = useState(description)
    const [isEditing, setIsEditing] = useState(false)
    const isOwnerGoal = authorGoalId === authorId
    const options = [
        hasUpdownButtons && userLoggedId === authorGoalId &&
        ({
            startIcon: <StarPrioritize stroke={type === 'prioritize' ? "#9C9C9C" : "#222222"} />,
            description: 'Priorizar',
            onClick: () => onPrioritize(id),
            disabled: type === 'prioritize',
            color: type === 'prioritize' ? '#9C9C9C' : '#222222'
        }),
        {
            startIcon: <EditHipoteses />,
            description: 'Editar',
            onClick: (e) => setIsEditing(true)
        },
        hasAddActions && isOwnerGoal &&
        ({
            startIcon: <AddAction />,
            description: 'Adicionar ações',
            onClick: () => onAddActions(id),
            color: '#222222'
        }),
        {
            startIcon: <TrashHipoteses />,
            description: 'Excluir',
            onClick: () => onDeleteHipotesisOrImpediment(id),
            color: '#C00F00'
        }
    ].filter(item => item)

    useEffect(() => {
        setEditDescription(description)
    }, [description])

    const title = useMemo(() => {
        if (type === 'prioritize' && variant === 'hypothesis') return 'HIPÓTESE PRIORIZADA'
        if (type === 'prioritize' && variant === 'impediment') return 'IMPEDIMENTO PRIORIZADO'
        if (variant == 'hypothesis') return `HIPÓTESE ${index}`
        return `IMPEDIMENTO ${index}`
    }, [type, variant, index])

    const avatarBorder = isOwnerGoal ? `2px solid ${Styles.borderAvatar[variant][type]}` : 'none'

    const handleSaveDescription = () => {
        onSaveEditHipotesisOrImpediment(editDescription)
        setIsEditing(false)
    }

    const handleCancel = () => {
        setIsEditing(false)
    }

    const validHasEditHipotesisOrImpediment = useMemo(() => {
        if (!hasEditHipotesisOrImpediment) return false

        if (authorGoalId === userLoggedId) return true

        if (type !== 'prioritize') {
            return authorId === userLoggedId
        }

        return false
    }, [type, hasEditHipotesisOrImpediment, authorGoalId, authorId, userLoggedId])

    const handleClickAction = (event) => {
        event.stopPropagation();
        onClickAction()
    };

    return (
        <>
            <Styles.MainContainer>
                {isEditing ? (
                    <EditHypotesisAndImpediment
                        setEditDescription={setEditDescription}
                        editDescription={editDescription}
                        onSave={handleSaveDescription}
                        onCancel={handleCancel}
                        originalDescription={description}
                    />
                ) : (
                    <Styles.ContainerHypotheis type={type} variant={variant}>
                        {
                            hasUpdownButtons &&
                            <UpDownButtons
                                type={type}
                                variant={variant}
                                onDownClick={() => onDown(id, index)}
                                onUpClick={() => onUp(id, index)}
                            />
                        }
                        <Styles.SplitContainerDescription>
                            <Tooltip
                                content={authorName}
                                direction={'bottom'}
                                style={{
                                    fontFamily: 'PT Sans',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    color: 'rgba(117, 117, 117, 1)',
                                    width: 'fit-content',
                                    height: '31px',
                                    top: '8px',
                                    left: '4px',
                                    whiteSpace: 'nowrap',
                                    boxShadow: ' 0px 0px 18px 0px rgba(34, 34, 34, 0.2)'
                                }}
                            >
                                <Avatar
                                    src={avatar}
                                    size={isOwnerGoal ? '28px' : '24px'}
                                    border={avatarBorder}
                                    style={{ marginRight: '14px', cursor: 'pointer', marginLeft: '16px' }}
                                    onClick={() => handleViewProfile(authorId)}
                                />
                            </Tooltip>
                            <Styles.Title>{title}</Styles.Title>
                            <Styles.Separator type={type} variant={variant} />
                            
                            <Styles.Description onClick={handleClickAction}>
                                <Tooltip
                                    content={'Clique na hipótese para ver as ações vinculadas'}
                                    direction={'bottom'}
                                    wrapperWidth='100%'
                                    style={{
                                        fontFamily: 'PT Sans',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        color: '#757575',
                                        width: '171px',
                                        height: '52px',
                                        top: '8px',
                                        left: '4px',
                                        whiteSpace: 'wrap',
                                        boxShadow: ' 0px 25px 18px -20px #22222233;',
                                        display: variant === 'impediment' ? 'none' : 'block'
                                    }}
                                >
                                    <div style={{ width: '100%' }}>
                                        {editDescription}
                                    </div>
                                </Tooltip>

                            </Styles.Description>

                            {hasVoting && (
                                <Voting
                                    voteText={voteText}
                                    type={type}
                                    onDeleteVote={onDeleteVote}
                                    votersList={votersList}
                                    onVote={() => onVote(id)}
                                    onChangeVote={() => onChangeVote(id)}
                                    isVotedByUserLogged={isVotedByUserLogged}
                                    voteHasAlreadyBeenRegistered={voteHasAlreadyBeenRegistered}
                                    popperStyle={popperStyle}
                                />
                            )}
                            {validHasEditHipotesisOrImpediment && (
                                <MenuMore
                                    options={options}
                                    isContainerOptions={true}
                                    closeAfterClick
                                />
                            )}
                        </Styles.SplitContainerDescription>
                    </Styles.ContainerHypotheis>
                )}
            </Styles.MainContainer>
        </>
    )
}
