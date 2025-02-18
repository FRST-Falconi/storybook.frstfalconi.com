import { Modal } from "@mui/material"
import * as S from "./styles";
import Button from "@components/buttons";
import { ReactNode } from "react";

interface ConfirmationModalProps {
    open: boolean;
    onClose: () => void;
    title: string
    children: ReactNode;
    onConfirm: () => void;
    labelButton: string;
}

export const ConfirmationModal = ({open, onClose, title, children, onConfirm, labelButton}: ConfirmationModalProps) => {
    return (
        <Modal open={open} onClose={onClose}>
            <S.ModalContainer>
                <S.ModalHeader>
                <S.ModalTitle>{title}</S.ModalTitle>
                    <S.CloseButton onClick={onClose}>X</S.CloseButton>
                </S.ModalHeader>
                <S.HorizontalLine />
                <S.ContainerContent>
                {children}
                <S.ButtonContainer>
                    <Button variant="primary" label={labelButton} handleClick={onConfirm}/>
                </S.ButtonContainer>
                </S.ContainerContent>
            </S.ModalContainer>
        </Modal>
    )
}