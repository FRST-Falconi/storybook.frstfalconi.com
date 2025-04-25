import React from 'react';
import styled, { keyframes } from 'styled-components';
import { X } from 'lucide-react';

interface DeleteEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
const BlowUpAnimation = keyframes`
  0% { transform: scale(0) }
  100% { transform: scale(1) }
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
`;

const ModalContent = styled.div`
  background-color: #1A1A1A;
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 585px;
  position: relative;

  animation: ${BlowUpAnimation} 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  color: #fff;
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px 0;
`;

const Message = styled.p`
  color:#E0E0E0;
  font-family: "PT Sans";
  font-size: 16px;
  margin: 0 0 8px 0;
`;

const Warning = styled.p`
  color:#E0E0E0;
  font-family: "PT Sans";
  font-size: 14px;
  margin: 0 0 24px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  font-family: "PT Sans";
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  ${({ variant }) =>
    variant === 'primary'
      ? `
    background-color: #F26818;
    color: #fff;
    &:hover {
      background-color: #D95A14;
    }
  `
      : `
    background-color: transparent;
    color: #fff;
    &:hover {
      background-color: #2F2F2F;
    }
  `}
`;

export const DeleteEventModal: React.FC<DeleteEventModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent 
        onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>
        <Title>Remover evento</Title>
        <Message>
          Tem certeza que deseja remover este evento da agenda de todos os usuários?
        </Message>
        <Warning>O conteúdo presencial será deletado!</Warning>
        <ButtonContainer>
          <Button variant="secondary" onClick={onClose}>
            Não, manter evento
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            Sim, tenho certeza
          </Button>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};
