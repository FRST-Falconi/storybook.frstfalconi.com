import { Avatar, Box, Modal, Typography, Divider } from '@mui/material'
import * as S from './styles'
import { CloseIcon, StarIcon } from '@shared/icons'

export default function ModalShowUsers({ isOpen, handleClose, goalUsers = [], goalOwner, onClickAvatar }) {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <S.ModalBox>
        <S.Container>
          <S.ModalTitle>
            <Typography component={'p'}>Grupo de execução do desafio</Typography>
            <S.CloseButton onClick={handleClose}>
              <CloseIcon stroke='#000' />
            </S.CloseButton>
          </S.ModalTitle>
          <Divider style={{ width: '100%', color: '#E0E0E0' }} />
          <S.ListOfUsers>
            {goalUsers.map((user) => (
              <Box display={'flex'} alignItems={'center'} justifyContent={"space-between"} width={"100%"}>
                <Box key={user.userId} display={'flex'} flexDirection={'column'} marginTop={'9px'} width={"100%"} >
                  <Box display={'flex'} alignItems={'center'} gap={'9px'}>
                    <Avatar
                      src={user.avatarImage}
                      sx={{ width: 48, height: 48, marginBottom: '10px', cursor: 'pointer' }}
                      onClick={() => onClickAvatar(user.userId)}
                    />
                    <S.UsersInfo>
                      <p>{user.userName}</p>
                      {user.areaName && <span>{user.areaName}</span>}
                    </S.UsersInfo>
                  </Box>

                  <Divider style={{ width: '100%', color: '#E0E0E0' }} />
                </Box>
                <Box>
                  {user.isGoalOwner && (
                    <S.Autor>
                      <StarIcon />
                      <p>Autor</p>
                    </S.Autor>
                  )}
                </Box>
              </Box>
            ))}
          </S.ListOfUsers>
        </S.Container>
      </S.ModalBox>
    </Modal>
  )
}
