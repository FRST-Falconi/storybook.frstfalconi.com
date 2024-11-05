import React from 'react'
import * as Styled from './InputField.styles'
import { Lupa } from '../../../../shared/icons'

export const InputField = () => {
    return (
        <Styled.InputContainer>
            <Styled.Input type="text" placeholder="Procure por desafios, pessoas, conteúdos, dúvidas..." />
            <Styled.IconContainer>
                <Lupa fill="#BDBDBD" />
            </Styled.IconContainer>
        </Styled.InputContainer>
    )
}
