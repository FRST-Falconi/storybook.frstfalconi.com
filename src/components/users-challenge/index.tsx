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

  const reorderedUsers = goalUsers.sort((a, b) => b.isGoalOwner - a.isGoalOwner)
  const visibleUsers = reorderedUsers.slice(0, maxVisibleUsers)
  const remainingUsersCount = Math.max(reorderedUsers.length - maxVisibleUsers, 0)

  const handleAvatarClick = (userId) => onClickAvatar(userId)

  return (
    <S.Container>
      {hasOnlyAutor ? (
        <S.AvatarInfo>
          <Avatar
            sx={{ width: 56, height: 56 }}
            src={goalOwner.avatarImage}
            className="avatar-image-only-owner"
            onClick={() => handleAvatarClick(goalOwner.userId)}
          />
          <Box>
            <Typography
              sx={{
                color: isCardVersion ? '#222' : '#f7f9fc',
                fontWeight: 700,
                fontSize: 16,
                fontFamily: 'PT Sans',
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
            renderSurplus={() => <span onClick={() => setIsModalOpen(true)}>+{remainingUsersCount}</span>}
            spacing="small"
          >
            {visibleUsers.map((user) => (
              <Box key={user.userId}>
                <Avatar
                  sx={{ width: 48, height: 48 }}
                  src={user.avatarImage}
                  className={user.isGoalOwner ? 'avatar-image-owner' : 'avatar-image-user'}
                  onClick={() => handleAvatarClick(user.userId)}
                />
                {user.isGoalOwner && <S.AvatarAutor><p>Autor</p></S.AvatarAutor>}
              </Box>
            ))}
          </AvatarGroup>
          <S.AllAvatarUsers>
            <Box>
              {visibleUsers.map((user, index) => (
                <span
                  key={user.userId}
                  className={`list-users ${user.isGoalOwner ? 'owner' : 'not-owner'}`}
                  onClick={() => onUserNameClick(user.userId)}
                >
                  {user.userName}
                  {index < visibleUsers.length - 1 && ', '}
                </span>
              ))}
              {remainingUsersCount > 0 && (
                <span onClick={() => setIsModalOpen(true)} className="more-users">
                  e mais {remainingUsersCount} pessoa{remainingUsersCount > 1 ? 's' : ''}
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
        onClickAvatar={handleAvatarClick}
      />
    </S.Container>
  )
}
