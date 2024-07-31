import React, { useMemo } from 'react'
import { IHypothesisAndImpedimentComponent } from './hypothesisAndImpediment'
import * as Styles from './hypothesisAndImpediment.style'
import Avatar from '@components/avatar'
import MenuMore from '@components/menu-more'
import { EditIcon, StarOutlined, TrashDelete } from '@shared/icons'

export const HypothesisAndImpediment = ({
    description,
    variant,
    type,
    avatar,
    id,
    index,
    authorGoalId,
    userLoggedId

}: IHypothesisAndImpedimentComponent) => {


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

    return (
        <Styles.MainContainer>
            <Styles.ContainerHypotheis type={type} variant={variant}>
                <Styles.SplitContainerDescription>
                    <Avatar src={avatar} size={isOwnerGoal ? "28px" : '24px'} border={avatarBorder} style={{ marginRight: '14px', cursor: 'pointer'}} />
                    <Styles.Title>{title}</Styles.Title>
                    <Styles.Separator type={type} variant={variant} />
                    <Styles.Description>{description}</Styles.Description>
                    <MenuMore options={
                        [
                            {
                                startIcon: <StarOutlined fill='#222222' width='24px' />,
                                description: 'Priorizar',
                                onClick: () => alert('editou')
                            },
                            {
                                startIcon: <EditIcon fill='#222222' width='24px' />,
                                description: 'Editar',
                                onClick: () => alert('editou')
                            },
                            {
                                startIcon: <TrashDelete fill='#C00F00' width='24px'/>,
                                description: 'Excluir',
                                onClick: () => alert('deletou'),
                                color: '#C00F00'
                            }
                        ]
                        
                    }
                    />
                </Styles.SplitContainerDescription>
            </Styles.ContainerHypotheis>
        </Styles.MainContainer>
    )
}
