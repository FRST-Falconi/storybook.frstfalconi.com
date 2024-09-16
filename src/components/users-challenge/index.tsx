import { AvatarGroup, Box, Typography, Avatar } from '@mui/material'
import { useState } from 'react'
import * as S from './styles'
import ModalShowUsers from '@components/modal/modalShowUsers'

export default function UsersChallenge({
  goalUsers = [],
  goalOwner,
  hasOnlyAutor,
  onUserNameClick,
  onClickAvatar,
  isCardVersion
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const maxVisibleUsers = 5

  const reorderedUsers = [
    ...goalUsers.filter((user) => user.isGoalOwner),
    ...goalUsers.filter((user) => !user.isGoalOwner)
  ]

  const remainingUsersCount = reorderedUsers.length - maxVisibleUsers

  return (
    <S.Container>
      {hasOnlyAutor ? (
        <S.AvatarInfo>
          <Box>
            <Avatar
              sx={{ width: 56, height: 56 }}
              className={'avatar-image-only-owner'}
              src={goalOwner.avatarImage}
              onClick={() => onClickAvatar(goalOwner.userId)}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                color: isCardVersion ? '#222222' : '#f7f9fc',
                fontWeight: 700,
                fontSize: '16px',
                fontFamily: 'PT Sans'
              }}
            >
              {goalOwner.userName}
            </Typography>
            <S.GoalInfoCompany>{`${goalOwner.areaName} · ${goalOwner.companyName}`}</S.GoalInfoCompany>
            <S.GoalInfoCompany>{`${goalOwner.createData} dias atrás`}</S.GoalInfoCompany>
          </Box>
        </S.AvatarInfo>
      ) : (
        <S.AvatarsSection>
          <AvatarGroup
            renderSurplus={() => (
              <span
                onClick={() => {
                  setIsModalOpen(true)
                }}
              >
                +{remainingUsersCount}
              </span>
            )}
            spacing="small"
          >
            {reorderedUsers.map((user) => (
              <Box key={user.userId}>
                <Avatar
                  alt={user.userName}
                  sx={{ width: 48, height: 48 }}
                  className={user.isGoalOwner ? 'avatar-image-owner' : 'avatar-image-user'}
                  src={user.avatarImage}
                  onClick={() => onClickAvatar(user.userId)}
                />
                {user.isGoalOwner && (
                  <S.AvatarAutor>
                    <p>Autor</p>
                  </S.AvatarAutor>
                )}
              </Box>
            ))}
          </AvatarGroup>

          <S.AllAvatarUsers>
            <Box>
              {reorderedUsers.slice(0, maxVisibleUsers).map((user, index) => (
                <span
                  className={`list-users ${user.isGoalOwner ? 'owner' : 'not-owner'}`}
                  onClick={() => onUserNameClick(user.userId)}
                  key={user.userId}
                >
                  {user.userName}
                  {index < reorderedUsers.slice(0, maxVisibleUsers).length - 1 && ', '}
                </span>
              ))}

              {remainingUsersCount > 0 && (
                <span
                  onClick={() => {
                    setIsModalOpen(true)
                  }}
                  className="more-users"
                >
                  {' '}
                  e mais {remainingUsersCount} pessoa
                  {remainingUsersCount > 1 ? 's' : ''}
                </span>
              )}
            </Box>
          </S.AllAvatarUsers>
        </S.AvatarsSection>
      )}

      <ModalShowUsers
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        goalOwner={goalOwner}
        goalUsers={goalUsers}
        onClickAvatar={onClickAvatar}
      />
    </S.Container>
  )
}
