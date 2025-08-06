import React, { useState } from 'react'
import * as S from './actioExperience.styles'
import { ActioLogo, TuneLogo, LiftLogo, Woman, CloseIcon } from './icons'

export const ActioExperience = ({
    handleClickTune,
    handleClickLift,
    stylesButton,
    stylesModal,
    isModalStartOpen,
    idButton,
    mainText = 'Você está saindo da Plataforma FRST e indo para o ambiente da Actio. Consulte as soluções abaixo para alinhar o seu desenvolvimento com:'
}: {
    handleClickTune: () => void
    handleClickLift: () => void
    mainText?: string
    stylesButton?: any
    stylesModal?: any
    isModalStartOpen?: boolean
    idButton?: string
}) => {
    const [isModalOpen, setIsModalOpen] = useState(!!isModalStartOpen)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <S.ButtonActionExperience onClick={handleOpenModal} style={{ ...stylesButton }} id={idButton}>
                <ActioLogo />
            </S.ButtonActionExperience>
            {isModalOpen && (
                <ModalActionExperience
                    styles={stylesModal}
                    onClose={handleCloseModal}
                    handleClickTune={handleClickTune}
                    handleClickLift={handleClickLift}
                    mainText={mainText}
                />
            )}
        </>
    )
}

const ModalActionExperience = ({
    onClose,
    handleClickTune,
    handleClickLift,
    mainText,
    styles
}: {
    onClose: () => void
    handleClickTune: () => void
    handleClickLift: () => void
    mainText?: string
    styles?: any
}) => {
    return (
        <S.ModalOverlay onClick={onClose}>
            <S.ModalContainer onClick={(e) => e.stopPropagation()} style={{ ...styles }}>
                <S.CloseButton onClick={onClose}>
                    <CloseIcon />
                </S.CloseButton>
                <S.WomanIllustration>
                    <Woman />
                </S.WomanIllustration>
                <S.ModalHeader>
                    <ActioLogo width={194} height={50} />
                </S.ModalHeader>

                <S.ModalContent>
                    <S.TextSection>
                        <S.MainText>{mainText}</S.MainText>

                        <S.SolutionsContainer>
                            <S.SolutionItem>
                                <strong>Tune:</strong> Indicadores estratégicos da empresa
                            </S.SolutionItem>
                            <S.SolutionItem>
                                <strong>Lift:</strong> Seu desenvolvimento e da sua equipe
                            </S.SolutionItem>
                        </S.SolutionsContainer>

                        <S.ButtonsContainer>
                            <S.SolutionButton onClick={handleClickTune} variant="secondary">
                                <TuneLogo width={104} height={54} />
                            </S.SolutionButton>
                            <S.SolutionButton onClick={handleClickLift} variant="primary">
                                <LiftLogo width={60} height={44} />
                            </S.SolutionButton>
                        </S.ButtonsContainer>
                    </S.TextSection>
                </S.ModalContent>
            </S.ModalContainer>
        </S.ModalOverlay>
    )
}
