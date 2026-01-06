import { AvatarGroup, Box, Typography, Avatar } from '@mui/material'
import { useState } from 'react'
import * as S from './styles'
import ModalShowUsers from '@components/modal/modalShowUsers'
import { UsersChallengeProps } from '../types'
import {LightTooltip} from '@components/DS/LightTooltip'
import { LightPrivateIcon, LightProtectedIcon, PrivateIcon, ProtectedIcon } from '@shared/icons'

export default function UsersChallengeFeed({
    goalUsers = [],
    hasOnlyAutor,
    onUserNameClick,
    onClickAvatar,
    avatar,
    name,
    userId,
    areaName,
    companyName,
    createData,
    accessLevel
}: UsersChallengeProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const maxVisibleUsers = 4

    const reorderedUsers = [...goalUsers.filter((user) => user.author), ...goalUsers.filter((user) => !user.author)]

    const remainingUsersCount = reorderedUsers.length - maxVisibleUsers

    
        const AccessLevelIcon = ({ accessLevel }: { accessLevel: 'protected' | 'private' }) => {
        if (accessLevel === 'private') {
            return (
                <LightTooltip title="Este desafio pode ser visto e acessado apenas por pessoas selecionadas">
                    <span style={{ display: 'inline-flex', cursor: 'pointer' }}>
                        <LightPrivateIcon/>
                    </span>
                </LightTooltip>
            );
        }
    
        if (accessLevel === 'protected') {
            return (
                <LightTooltip title="Este desafio pode ser visto e acessado por todas as pessoas da organização de seu autor" >
                    <span style={{ display: 'inline-flex', cursor: 'pointer' }}>
                        <LightProtectedIcon/>
                    </span>
                </LightTooltip>
            );
        }
    
        return null;
    };

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
                                color: '#222222',
                                fontWeight: 700,
                                fontSize: '16px',
                                fontFamily: 'PT Sans',
                                cursor: 'pointer'
                            }}
                            onClick={() => onUserNameClick(userId)}
                        >
                            {name}
                        </Typography>
                        <Box sx={{display: 'flex', gap:'4px'}}>
                            <S.StyledTypography>
                                {`${areaName} `} · {` ${companyName}`} .
                            </S.StyledTypography>
                            <span>
                                <AccessLevelIcon accessLevel={accessLevel}/>
                            </span>
                        </Box>

                        <S.StyledTypography>{`${createData}`}</S.StyledTypography>
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
                        <Box display={'flex'} gap={'4px'} alignItems={'center'} flexWrap={'wrap'}>
                            {reorderedUsers.slice(0, maxVisibleUsers).map((user, index) => (
                                <Box
                                    onClick={() => onUserNameClick(user.user_uuid)}
                                    key={user.user_uuid}
                                    color={'#222222'}
                                >
                                    <span className={`list-users ${user.author ? 'owner' : 'not-owner'}`}>
                                        {user.name}
                                    </span>
                                    {index === reorderedUsers.slice(0, maxVisibleUsers).length - 2 ? (
                                        <span style={{ color: '#222222', fontFamily: 'PT Sans', fontWeight: 'bold' }}>
                                            {' '}
                                            e{' '}
                                        </span>
                                    ) : (
                                        index < reorderedUsers.slice(0, maxVisibleUsers).length - 1 && ', '
                                    )}
                                </Box>
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

                            <span>
                                <AccessLevelIcon accessLevel={accessLevel}/>
                            </span>
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
