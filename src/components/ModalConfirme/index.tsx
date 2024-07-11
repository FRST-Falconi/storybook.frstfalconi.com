import { Modal } from "@mui/material"
import * as S from "./styles";
import Button from "@components/buttons";
import { ReactNode } from "react";

interface ModalConfirmeProps {
    open: boolean;
    onClose: () => void;
    title: string
    children: ReactNode;
    onConfirm: () => void;
}

export const ModalConfirme = ({open, onClose, title, children, onConfirm}: ModalConfirmeProps) => {
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
                    <Button variant="link" style={{color:'#444444'}} handleClick={onClose} label="Não, cancelar"/>
                    <Button variant="primary" label="Sim, excluir" handleClick={onConfirm}/>
                </S.ButtonContainer>
                </S.ContainerContent>
            </S.ModalContainer>
        </Modal>
    )
}