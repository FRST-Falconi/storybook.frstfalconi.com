import { AvatarGroup, Box, Typography, Avatar } from '@mui/material'
import { useState } from 'react'
import * as S from './styles'
import ModalShowUsers from '@components/modal/modalShowUsers'

export default function UsersChallenge({
    goalUsers = [],
    hasOnlyAutor,
    onUserNameClick,
    onClickAvatar,
    isCardVersion,
    avatar,
    name,
    userId,
    areaName,
    companyName,
    createData
}) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const maxVisibleUsers = 4

    const reorderedUsers = [...goalUsers.filter((user) => user.author), ...goalUsers.filter((user) => !user.author)]

    const remainingUsersCount = reorderedUsers.length - maxVisibleUsers

    return (
        <S.Container>
            {hasOnlyAutor ? (
                <S.AvatarInfo>
                    <Box>
                        <Avatar
                            sx={{ width: 56, height: 56 }}
                            className={'avatar-image-only-owner'}
                            src={avatar || 'https://cdn-images.frstfalconi.cloud/path582.svg'}
                            onClick={() => onClickAvatar(userId)}
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
                            onClick={() => onUserNameClick(userId)}
                        >
                            {name}
                        </Typography>
                        <S.GoalInfoCompany>{`${areaName} · ${companyName}`}</S.GoalInfoCompany>
                        <S.GoalInfoCompany>{`${createData} dias atrás`}</S.GoalInfoCompany>
                    </Box>
                </S.AvatarInfo>
            ) : (
                <S.AvatarsSection>
                    <AvatarGroup spacing="small">
                        {reorderedUsers.slice(0, maxVisibleUsers).map((user) => (
                            <Box key={user.user_uuid}>
                                <Avatar
                                    alt={user.name}
                                    sx={{ width: 48, height: 48 }}
                                    className={user.author ? 'avatar-image-owner' : 'avatar-image-user'}
                                    src={user.avatar || 'https://cdn-images.frstfalconi.cloud/path582.svg'}
                                    onClick={() => onClickAvatar(user.user_uuid)}
                                />
                                {user.author && (
                                    <S.AvatarAutor>
                                        <p>Autor</p>
                                    </S.AvatarAutor>
                                )}
                            </Box>
                        ))}
                        {remainingUsersCount > 0 && (
                            <div className="plus-users" onClick={() => setIsModalOpen(true)}>
                                <span>+{remainingUsersCount}</span>
                            </div>
                        )}
                    </AvatarGroup>

                    <S.AllAvatarUsers>
                        <Box>
                            {reorderedUsers.slice(0, maxVisibleUsers).map((user, index) => (
                                <span
                                    className={`list-users ${user.author ? 'owner' : 'not-owner'}`}
                                    onClick={() => onUserNameClick(user.user_uuid)}
                                    key={user.user_uuid}
                                >
                                    {user.name}
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
                goalUsers={goalUsers}
                onClickAvatar={onClickAvatar}
            />
        </S.Container>
    )
}
