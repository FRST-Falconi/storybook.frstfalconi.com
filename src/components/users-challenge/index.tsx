import { Box } from '@mui/material'
import * as S from './styles'
import { UsersChallengeProps } from './types'
import UsersChallengeFeed from './variant-feed'
import UsersChallengeForm from './variant-form'
import UsersChallengeVitrine from './variant-vitrine'
import UsersChallengeLXP from './variant-lxp'

export default function UsersChallenge({
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
    variant,
    accessLevel
}: UsersChallengeProps) {
    return (
        <S.Container>
            <Box>
                {variant === 'feed' && (
                    <UsersChallengeFeed
                        areaName={areaName}
                        avatar={avatar}
                        companyName={companyName}
                        createData={createData}
                        goalUsers={goalUsers}
                        hasOnlyAutor={hasOnlyAutor}
                        name={name}
                        onClickAvatar={onClickAvatar}
                        onUserNameClick={onUserNameClick}
                        userId={userId}
                        accessLevel={accessLevel}
                    />
                )}
                {variant === 'form' && (
                    <UsersChallengeForm
                        areaName={areaName}
                        avatar={avatar}
                        companyName={companyName}
                        createData={createData}
                        goalUsers={goalUsers}
                        hasOnlyAutor={hasOnlyAutor}
                        name={name}
                        onClickAvatar={onClickAvatar}
                        onUserNameClick={onUserNameClick}
                        userId={userId}
                    />
                )}
                {variant === 'vitrine' && (
                    <UsersChallengeVitrine
                        areaName={areaName}
                        avatar={avatar}
                        companyName={companyName}
                        createData={createData}
                        goalUsers={goalUsers}
                        hasOnlyAutor={hasOnlyAutor}
                        name={name}
                        onClickAvatar={onClickAvatar}
                        onUserNameClick={onUserNameClick}
                        userId={userId}
                        accessLevel={accessLevel}
                    />
                )}
                {variant === 'lxp' && (
                    <UsersChallengeLXP
                        areaName={areaName}
                        avatar={avatar}
                        companyName={companyName}
                        createData={createData}
                        goalUsers={goalUsers}
                        hasOnlyAutor={hasOnlyAutor}
                        name={name}
                        onClickAvatar={onClickAvatar}
                        onUserNameClick={onUserNameClick}
                        userId={userId}
                    />
                )}
            </Box>
        </S.Container>
    )
}
