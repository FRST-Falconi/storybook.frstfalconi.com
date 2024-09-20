import { Box } from '@mui/material'
import * as S from './styles'
import { UsersChallengeProps } from './types'
import UsersChallengeFeed from './variant-feed'
import UsersChallengeForm from './variant-form'
import UsersChallengeVitrine from './variant-vitrine'

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
    variant
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
                    />
                )}
            </Box>
        </S.Container>
    )
}
