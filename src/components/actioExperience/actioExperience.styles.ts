import styled from 'styled-components'

export const ButtonActionExperience = styled.div`
    display: inline-flex;
    padding: 8px 16px 12px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    background-color: #fff;
    border-radius: 100px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateY(-1px);
    }
`

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    backdrop-filter: blur(2px);
`

export const ModalContainer = styled.div`
    background: #fff;
    border-radius: 16px;
    padding: 28px;
    max-width: 90vw;
    width: 654px;
    max-height: 90vh;
    height: 363px;
    position: relative;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
`

export const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 20px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;

    &:hover {
        background: #f5f5f5;
        color: #333;
    }
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
`

export const ModalContent = styled.div`
    display: flex;
    gap: 24px;
    align-items: flex-start;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`

export const WomanIllustration = styled.div`
    position: absolute;    
    width: 140px;
    right:634px;
    svg {
        width: 100%;
        height: auto;
    }
`

export const TextSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const MainText = styled.p`
color: #444;
font-family: "Poppins", "PT Sans";
font-size: 18px;
font-weight: 400;
line-height: normal;
`


export const SolutionsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const SolutionItem = styled.span`
    color: #444;
    font-family: "Poppins", "PT Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`


export const ButtonsContainer = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 4px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
`

export const SolutionButton = styled.button<{ variant: 'primary' | 'secondary' }>`
    background: ${({ variant }) => (variant === 'primary' ? '#1E7787' : '#EBEBEB')};
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px 24px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 151px;
    height: 60px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
    
    &:hover {
        background: ${({ variant }) => (variant === 'primary' ? '#1E7787' : '#EBEBEB')};
        border-color: ${({ variant }) => (variant === 'primary' ? '#1E7787' : '#EBEBEB')};
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
    }

    svg {
        opacity: 1;
        filter: none;
    }
`
