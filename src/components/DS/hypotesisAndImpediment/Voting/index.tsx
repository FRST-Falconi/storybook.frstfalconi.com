import { ExcludeVoteIcon, NewVoteIcon, SwitchVoteIcon } from '@public/customIcons'
import { VariantColorStyle, VotingProps } from '../hypothesisAndImpediment'
import * as Styles from './voting.styles'
import { useMemo, useState } from 'react'
import Avatar from '@components/avatar'
import { Box, Popper } from '@mui/material'

export const Voting = ({ type, voteText, onDeleteVote, onChangeVote, votersList, onVote, voteHasAlreadyBeenRegistered, isVotedByUserLogged}: VotingProps) => {
    const [isVotingListHover, setIsVotingListHover] = useState(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


    const handleDeleteVote = () => {
        onDeleteVote()
    }

    const handleChangeVote = () => {
        onChangeVote()
    }

    const handleHoverVoteList = () => {
        setAnchorEl(null)
        setIsVotingListHover(true)
    }

    const handleLeaveVoteList = () => {
        setIsVotingListHover(false)
    }
    const handleClickVotingList = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const votersToDisplay = useMemo(() => {
        return votersList?.slice(0, 2)
    }, [votersList])

    return (
        <>
            {(isVotedByUserLogged || voteHasAlreadyBeenRegistered) ? (
                <Styles.ContainerVoting type={type}>
                    {(isVotedByUserLogged || voteHasAlreadyBeenRegistered) && (
                        <Styles.VotingList onClick={handleClickVotingList}>
                            {votersToDisplay?.map(i => <Avatar src={i.avatar} size="24px" border="1px solid #fff"/>)}
                        </Styles.VotingList>
                    )}

                    <Popper id={id} open={open} anchorEl={anchorEl} sx={{ paddingTop: 1.5, paddingRight: 6.5 }}>
                        <Styles.ContainerListUsers>
                            <Styles.ContainerScroll>
                                {votersList?.map((voter, index) => (
                                    <Styles.VoterItem key={index}>
                                        <Avatar
                                            src={voter.avatar}
                                            size="24px"
                                        />
                                        <Styles.VoterName>{voter.name}</Styles.VoterName>
                                    </Styles.VoterItem>
                                ))}
                            </Styles.ContainerScroll>
                        </Styles.ContainerListUsers>
                    </Popper>

                    <Styles.VotesCount onMouseEnter={handleHoverVoteList} onMouseLeave={handleLeaveVoteList}>
                        {isVotingListHover ? (
                            <> { isVotedByUserLogged ?
                                    <div onClick={handleDeleteVote}>
                                        <ExcludeVoteIcon />
                                        Excluir voto
                                    </div> 
                                    :
                                    <div onClick={handleChangeVote}>
                                        <SwitchVoteIcon />
                                        Trocar voto
                                    </div> 
                                }
                            </>
                        ) : (
                            <span>
                                {votersList?.length} {votersList?.length > 1 ? 'votos' : 'voto'}
                            </span>
                        )}
                    </Styles.VotesCount>
                </Styles.ContainerVoting>
            ) : (
                <Styles.ContainerVoting type={type}>
                    <Styles.ContainerTitleVoting  onClick={onVote}>
                        <NewVoteIcon />
                        <Styles.TitleVoting>{voteText}</Styles.TitleVoting>
                    </Styles.ContainerTitleVoting>
                </Styles.ContainerVoting>
            )}
        </>
    )
}
