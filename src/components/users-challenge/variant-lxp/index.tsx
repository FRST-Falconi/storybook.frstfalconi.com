import { AvatarGroup, Box, Typography, Avatar } from '@mui/material'
import { useState } from 'react'
import * as S from './styles'
import ModalShowUsers from '@components/modal/modalShowUsers'
import { UsersChallengeProps } from '../types'

export default function UsersChallengeLXP({
    goalUsers = [],
    hasOnlyAutor,
    onUserNameClick,
    onClickAvatar,
    avatar,
    name,
    userId,
    areaName,
    companyName,
    createData
}: UsersChallengeProps) {
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
                            sx={{ width: 56, height: 56, cursor: 'pointer' }}
                            className={'avatar-image-only-owner'}
                            src={avatar || 'https://cdn-images.frstfalconi.cloud/path582.svg'}
                            onClick={() => onClickAvatar(userId)}
                        />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                color: '#f7f9fc',
                                fontWeight: 700,
                                fontSize: '16px',
                                fontFamily: 'PT Sans',
                                cursor: 'pointer'
                            }}
                            onClick={() => onUserNameClick(userId)}
                        >
                            {name}
                        </Typography>
                        <Box>
                            <S.StyledText>
                                {`${areaName} `} · {` ${companyName}`}
                            </S.StyledText>
                        </Box>

                        <S.StyledText>{`${createData}`}</S.StyledText>
                    </Box>
                </S.AvatarInfo>
            ) : (
                <S.AvatarsSection>
                    <AvatarGroup spacing="small">
                        {reorderedUsers.slice(0, maxVisibleUsers).map((user) => (
                            <Box key={user.user_uuid}>
                                <Avatar
                                    alt={user.name}
                                    sx={{ width: 40, height: 40 }}
                                    className={user.author ? 'avatar-image-owner' : 'avatar-image-user'}
                                    src={user.avatar || 'https://cdn-images.frstfalconi.cloud/path582.svg'}
                                    onClick={() => onClickAvatar(user.user_uuid)}
                                />
                            </Box>
                        ))}
                        {remainingUsersCount > 0 && (
                            <div className="plus-users" onClick={() => setIsModalOpen(true)}>
                                <span>+{remainingUsersCount}</span>
                            </div>
                        )}
                    </AvatarGroup>
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
