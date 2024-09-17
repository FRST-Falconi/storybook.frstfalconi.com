import { Avatar, Box, Modal, Typography, Divider } from '@mui/material'
import * as S from './styles'
import { CloseIcon, StarIcon } from '@shared/icons'

export default function ModalShowUsers({ isOpen, handleClose, goalUsers = [], onClickAvatar }) {
  console.log('goalUsers', goalUsers)
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
              <S.ListOfUsersContent key={user.user_uuid}>
                <Box display={'flex'} flexDirection={'column'} marginTop={'9px'} width={"100%"} >
                  <Box display={'flex'} alignItems={'center'} gap={'9px'}>
                    <Avatar
                      src={user.avatar || 'https://cdn-images.frstfalconi.cloud/path582.svg'} 
                      sx={{ width: 48, height: 48, marginBottom: '10px', cursor: 'pointer' }}
                      onClick={() => onClickAvatar(user.user_uuid)}
                    />
                    <S.UsersInfo>
                      <p>{user.name}</p>
                      {user.area_name && <span>{user.area_name}</span>}
                    </S.UsersInfo>
                  </Box>

                </Box>
                <Box>
                  {user.author && (
                    <S.Autor>
                      <StarIcon />
                      <p>Autor</p>
                    </S.Autor>
                  )}
                </Box>
              </S.ListOfUsersContent>
            ))}
          </S.ListOfUsers>
        </S.Container>
      </S.ModalBox>
    </Modal>
  )
}
