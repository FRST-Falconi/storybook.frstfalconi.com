import React, { useMemo } from 'react'
import { IHypothesisAndImpedimentComponent } from './hypothesisAndImpediment'
import * as Styles from './hypothesisAndImpediment.style'
import Avatar from '@components/avatar'

export const HypothesisAndImpediment = ({
    description,
    variant,
    type,
    avatar,
    id,
    index
}: IHypothesisAndImpedimentComponent) => {

    const title = useMemo(() => {
        if (type === 'prioritize' && variant === 'hypothesis') return 'HIPÓTESE PRIORIZADA'
        if (type === 'prioritize' && variant === 'impediment') return 'IMPEDIMENTO PRIORIZADO'
        if (variant == 'hypothesis') return `HIPÓTESE ${index}`
        return `IMPEDIMENTO ${index}`
    }, [type, variant, index])

    return (
        <Styles.MainContainer>
            <Styles.ContainerHypotheis type={type} variant={variant}>
                <Styles.SplitContainerDescription>
                    <Avatar src={avatar} size="24px" style={{ marginRight: '14px', cursor: 'pointer' }} />
                    <Styles.Title>{title}</Styles.Title>
                    <Styles.Separator type={type} variant={variant} />
                </Styles.SplitContainerDescription>
            </Styles.ContainerHypotheis>
        </Styles.MainContainer>
    )
}
