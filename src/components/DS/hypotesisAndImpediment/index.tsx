import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IHypothesisAndImpedimentComponent } from './hypothesisAndImpediment'
import * as Styles from './hypothesisAndImpediment.style'
import Avatar from '@components/avatar'
import MenuMore from '@components/menu-more'
import { AddAction, EditHipoteses, StarPrioritize, TrashHipoteses } from '@shared/icons'
import Tooltip from '../tooltip'
import UpDownButtons from './UpDownButtons'
import { Voting } from './Voting'
import { EditHypotesisAndImpediment } from './editHypotesisAndImpediment'
import { TextField } from '@mui/material'
import { TagAlert } from '@public/customIcons'

export const HypothesisAndImpediment = ({
    description,
    variant,
    type,
    avatar,
    id,
    index,
    authorGoalId,
    userLoggedId,
    authorName,
    handleViewProfile,
    authorId,
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
    const limitCaraterers = variant === 'impediment' ? 365 : 200
    const [isLimitExceeded, setIsLimitExceeded] = useState(false)
    const options = [
        hasUpdownButtons &&
            userLoggedId === authorGoalId && {
                startIcon: <StarPrioritize stroke={type === 'prioritize' ? '#9C9C9C' : '#222222'} />,
                description: 'Priorizar',
                onClick: () => onPrioritize(id),
                disabled: type === 'prioritize',
                color: type === 'prioritize' ? '#9C9C9C' : '#222222'
            },
        {
            startIcon: <EditHipoteses />,
            description: 'Editar',
            onClick: (e) => setIsEditing(true)
        },
        hasAddActions && {
            startIcon: <AddAction />,
            description: 'Adicionar ações',
            onClick: () => onAddActions(id),
            color: '#222222'
        },
        {
            startIcon: <TrashHipoteses />,
            description: 'Excluir',
            onClick: () => onDeleteHipotesisOrImpediment(id),
            color: '#C00F00'
        }
    ].filter((item) => item)

    useEffect(() => {
        setEditDescription(description)
    }, [description])

    useEffect(() => {
        editDescription?.length >= limitCaraterers ? setIsLimitExceeded(true) : setIsLimitExceeded(false)
    }, [editDescription])

    const title = useMemo(() => {
        if (type === 'prioritize' && variant === 'hypothesis') return 'HIPÓTESE PRIORIZADA'
        if (type === 'prioritize' && variant === 'impediment') return 'IMPEDIMENTO PRIORIZADO'
        if (variant == 'hypothesis') return `HIPÓTESE ${index}`
        return `IMPEDIMENTO ${index}`
    }, [type, variant, index])

    const avatarBorder = isOwnerGoal ? `2px solid ${Styles.borderAvatar[variant][type]}` : 'none'

    const handleSaveDescription = () => {
        if (isEditing) {
            onSaveEditHipotesisOrImpediment(editDescription)
            setIsEditing(false)
        }
    }

    const handleCancel = () => {
        setEditDescription(description)
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
    const clickTimeoutRef = useRef(null)

    const handleClickAction = (event) => {
        if (clickTimeoutRef.current) {
            clearTimeout(clickTimeoutRef.current)
        }

        clickTimeoutRef.current = setTimeout(() => {
            if (!isEditing) {
                event.stopPropagation()
                onClickAction()
            }
        }, 300)
    }

    const inputRef = useRef(null)

    const handleBlur = () => {
        setEditDescription(description)
        setIsEditing(false)
    }

    const handleChange = (event) => {
        if (limitCaraterers > editDescription?.length || event.target.value?.length < editDescription?.length) {
            let newValue = event.target.value
            if (newValue.length > limitCaraterers) {
                newValue = newValue.substring(0, limitCaraterers)
            }
            setEditDescription(newValue)
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSaveDescription()
        } else if (event.key === 'Escape') {
            handleCancel()
        }
    }

    useEffect(() => {
        if (isEditing && inputRef.current) {
            setTimeout(() => {
                inputRef.current.focus()
            }, 200)
        }
    }, [isEditing])

    return (
        <>
            <Styles.MainContainer>
                {/*isEditing ? (
                    <EditHypotesisAndImpediment
                        setEditDescription={setEditDescription}
                        editDescription={editDescription}
                        onSave={handleSaveDescription}
                        onCancel={handleCancel}
                        originalDescription={description}
                    />
                ) : (*/}
                <Styles.ContainerHypotheis type={type} variant={variant}>
                    {hasUpdownButtons && (
                        <UpDownButtons
                            type={type}
                            variant={variant}
                            onDownClick={() => onDown(id, index)}
                            onUpClick={() => onUp(id, index)}
                        />
                    )}
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
                                size={isOwnerGoal ? '24px' : '24px'}
                                border={avatarBorder}
                                style={{ cursor: 'pointer', marginLeft: '16px' }}
                                onClick={() => handleViewProfile(authorId)}
                            />
                        </Tooltip>
                        <Styles.Title>{title}</Styles.Title>

                        <Styles.Description
                            type={type}
                            variant={variant}
                            onClick={handleClickAction}
                            onDoubleClick={() => {
                                if (clickTimeoutRef.current) {
                                    clearTimeout(clickTimeoutRef.current)
                                }
                                if (hasEditHipotesisOrImpediment) setIsEditing(true)
                            }}
                            style={{ height: isEditing ? 'auto' : 'fit-content' }}
                        >
                            {isEditing ? (
                                <TextField
                                    inputRef={inputRef}
                                    value={editDescription}
                                    onBlur={handleSaveDescription}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    multiline
                                    fullWidth
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true,
                                        style: {
                                            fontFamily: 'PT Sans',
                                            fontSize: '14px',
                                            lineHeight: 1.3
                                        }
                                    }}
                                    onFocus={(e) =>
                                        e.currentTarget.setSelectionRange(
                                            e.currentTarget.value.length,
                                            e.currentTarget.value.length
                                        )
                                    }
                                />
                            ) : (
                                <Tooltip
                                    content={'Clique na hipótese para ver as ações vinculadas'}
                                    direction={'bottom'}
                                    wrapperWidth="100%"
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
                                        display: variant === 'impediment' || isEditing ? 'none' : 'block'
                                    }}
                                >
                                    <div style={{ width: '100%', overflow: 'hidden' }}>{editDescription}</div>
                                </Tooltip>
                            )}
                        </Styles.Description>

                        {!isEditing && hasVoting && (
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
                        {!isEditing && validHasEditHipotesisOrImpediment && (
                            <MenuMore options={options} isContainerOptions={true} closeAfterClick />
                        )}
                    </Styles.SplitContainerDescription>
                </Styles.ContainerHypotheis>

                {/*)*/}
            </Styles.MainContainer>
            {isEditing && isLimitExceeded && (
                <Styles.LimitCharsContainer>
                    <TagAlert color="#A50000" />
                    <Styles.LimitCharsExceededMessage>
                        {'Você atingiu a quantidade máxima de caracteres'}
                    </Styles.LimitCharsExceededMessage>
                </Styles.LimitCharsContainer>
            )}
        </>
    )
}
