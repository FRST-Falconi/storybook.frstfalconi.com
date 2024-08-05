import React, { useMemo, useState } from 'react'
import { IHypothesisAndImpedimentComponent } from './hypothesisAndImpediment'
import * as Styles from './hypothesisAndImpediment.style'
import Avatar from '@components/avatar'
import MenuMore from '@components/menu-more'
import { EditIcon, StarPrioritize, TrashDelete } from '@shared/icons'
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
    authorName,  // nome autor da hipotese ou do impedimento
    handleViewProfile,
    authorId,  // id do autor do impedimento ou da hipotese
    hasVoting,
    voteText,
    onDeleteVote,
    votersList,
    onDeleteHipotesisOrImpediment,
    onSaveEditHipotesisOrImpediment
}: IHypothesisAndImpedimentComponent) => {

    const [editDescription, setEditDescription] = useState(description)
    const [isEditing, setIsEditing] = useState(false)
    const isOwnerGoal = authorGoalId === userLoggedId;


    const title = useMemo(() => {
        if (type === 'prioritize' && variant === 'hypothesis') return 'HIPÓTESE PRIORIZADA'
        if (type === 'prioritize' && variant === 'impediment') return 'IMPEDIMENTO PRIORIZADO'
        if (variant == 'hypothesis') return `HIPÓTESE ${index}`
        return `IMPEDIMENTO ${index}`
    }, [type, variant, index])

    const avatarBorder = isOwnerGoal
    ? `2px solid ${Styles.borderAvatar[variant][type]}`
    : 'none';


    const handleSaveDescription = () => {
        onSaveEditHipotesisOrImpediment(editDescription)
        setIsEditing(false)
    }

    const handleCancel = () => {
        setIsEditing(false)
    }

    return (
        <>
        <Styles.MainContainer>
            {
                isEditing ? (
                    <EditHypotesisAndImpediment
                        setEditDescription={setEditDescription}
                        editDescription={editDescription}
                        onSave={handleSaveDescription}
                        onCancel={handleCancel}
                        originalDescription={description}
                    />
                ) :
                <Styles.ContainerHypotheis type={type} variant={variant}>
                <Styles.SplitContainerDescription>
                <UpDownButtons type={type} variant={variant} onDownClick={() => alert('baixo')} onUpClick={() => alert('cima')}/>
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
                                }}>
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

                    <Styles.Description>{editDescription}</Styles.Description>
                    {
                        hasVoting &&
                            <Voting voteText={voteText} type={type} onDeleteVote={onDeleteVote} votersList={votersList}/>
                    }
                        <MenuMore
                            options={[
                                {
                                startIcon: <StarPrioritize/>,
                                description: 'Priorizar',
                                onClick: () => alert('Priorizou'),
                                },
                                {
                                startIcon: <EditIcon fill="#222222" width="24px" />,
                                description: 'Editar',
                                onClick: (e) => setIsEditing(true)
                                },
                                {
                                startIcon: <TrashDelete fill="#C00F00" width="24px" />,
                                description: 'Excluir',
                                onClick: () => onDeleteHipotesisOrImpediment(id),
                                color: '#C00F00'
                                }
                            ]}
                            isPaddingInMenu={false}
                            />
                </Styles.SplitContainerDescription>
            </Styles.ContainerHypotheis>
            }
        </Styles.MainContainer>
        </>
    )
}
