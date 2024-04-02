import { useEffect, useRef, useState } from 'react'
import * as Styles from './hypothesisComponent.style'
import { Vote } from './types'
import { ExcludeVoteIcon, VoteIcon } from '@public/customIcons'
import Avatar from '@components/avatar'

export const HypothesisComponent = ({
  description,
  type,
  id,
  title,
  votes = [],
  onVote,
  canVote = false,
  canViewVote = false,
  userLoggedId,
  deleteVote,
  canViewListVotes,
  votesSingularText,
  votesPluralText,
  voteText,
  deleteVoteText,
  handleViewProfile
}: {
  description: string
  type: string
  id: string
  title: string
  votes: Vote[]
  userLoggedId: string
  onVote?: (hypothesiId: string) => any
  deleteVote?: (voteId: number) => any
  handleViewProfile?: (userId: string) => any
  canVote?: boolean
  canViewListVotes?: boolean
  canViewVote?: boolean
  votesSingularText?: string
  votesPluralText?: string
  voteText?: string
  deleteVoteText?: string
}) => {
  const [isHover, seIsHover] = useState(false)
  const [hasVote, setHasVote] = useState(votes?.some((vote) => vote?.user_uuid === userLoggedId))
  const [hypothesisVotes, setHypothesisVotes] = useState<Vote[]>(votes)
  const [showVotesList, setShowVotesList] = useState(false)

  const toggleVotes = () => {
    setShowVotesList(!showVotesList)
  }
  const viewVotesRef = useRef(null)

  const handleClickOutsideVote = (event) => {
    if (
      viewVotesRef?.current &&
      !viewVotesRef?.current?.contains(event?.target) &&
      !event.target.closest('.VoteListItem')
    ) {
      setShowVotesList(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideVote)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideVote)
    }
  }, [setShowVotesList])

  const handleVote = async (hyphoteseId: string) => {
    const vote = await onVote(hyphoteseId)
    if (vote?.status === 201) {
      let updateVotes = hypothesisVotes
      if (!updateVotes?.some((vot) => vot?.id === vote?.data?.id)) {
        updateVotes.push(vote.data)
        setHypothesisVotes(updateVotes)
      }
      setHasVote(true)
    }

    if (vote?.status !== 201) setHasVote(false)
  }
  const handleDeleteVote = async (voteId: number) => {
    const vote = await deleteVote(voteId)
    if (vote?.status === 204) {
      let updateVotes = hypothesisVotes
      if (updateVotes.some((vot) => vot?.id === voteId)) {
        const newArrayVotes = updateVotes.filter((vot) => vot.id !== voteId)
        setHypothesisVotes(newArrayVotes)
      }
      setHasVote(false)
    }
  }

  return (
    <Styles.MainContainer>
      <Styles.Container type={type} id={id}>
        <Styles.SplitContainer>
          <Styles.Title>{title}</Styles.Title>
          <Styles.Separator>|</Styles.Separator>
          <Styles.Description>{description}</Styles.Description>
        </Styles.SplitContainer>
        {!canVote && canViewVote && hypothesisVotes.length > 0 && (
          <div style={{ position: 'relative' }}>
            <Styles.SplitContainer>
              <Styles.VoteMainContainer>
                <Styles.VoteButtonContainer
                  ref={viewVotesRef}
                  style={{ cursor: canViewListVotes ? 'pointer' : 'default' }}
                  type={type}
                  onClick={canViewListVotes ? toggleVotes : null}
                >
                  <Styles.VoteCount>
                    <Styles.VoteContent>
                      {hypothesisVotes?.slice(0, 2)?.map((vote, index) => {
                        return (
                          <Styles.ImageContent key={vote?.id} style={{ zIndex: 14 - index }}>
                            <img src={vote?.user?.avatar || 'https://cdn-images.frstfalconi.cloud/path582.svg'} />
                          </Styles.ImageContent>
                        )
                      })}
                      {hypothesisVotes?.length > 2 && (
                        <Styles.ImageContent style={{ background: '#444444' }}>
                          <p
                            style={{
                              fontSize: hypothesisVotes?.length > 9 ? 10 : hypothesisVotes?.length > 99 ? 8 : 14
                            }}
                          >
                            +{hypothesisVotes?.length - 2}
                          </p>
                        </Styles.ImageContent>
                      )}
                    </Styles.VoteContent>
                    {hypothesisVotes?.length} {hypothesisVotes?.length > 1 ? votesPluralText : votesSingularText}
                  </Styles.VoteCount>
                </Styles.VoteButtonContainer>
              </Styles.VoteMainContainer>
            </Styles.SplitContainer>
            <VoteList hypothesisVotes={votes} showVotes={showVotesList} viewProfile={handleViewProfile} />
          </div>
        )}
        {canVote && (
          <Styles.SplitContainer>
            <Styles.VoteMainContainer>
              <Styles.VoteButtonContainer
                type={type}
                modeDelete={isHover}
                onMouseEnter={() => seIsHover(true)}
                onMouseLeave={() => seIsHover(false)}
              >
                {hasVote ? (
                  isHover ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        justifyContent: 'center'
                      }}
                      onClick={() =>
                        handleDeleteVote(hypothesisVotes.find((vote) => vote.user_uuid === userLoggedId).id)
                      }
                    >
                      <ExcludeVoteIcon width="24" height="24" />
                      <Styles.VoteButton>{deleteVoteText}</Styles.VoteButton>
                    </div>
                  ) : (
                    <Styles.VoteCount>
                      <Styles.VoteContent>
                        {hypothesisVotes?.slice(0, 2)?.map((vote, index) => {
                          return (
                            <Styles.ImageContent key={vote?.id} style={{ zIndex: 14 - index }}>
                              <img src={vote?.user?.avatar || 'https://cdn-images.frstfalconi.cloud/path582.svg'} />
                            </Styles.ImageContent>
                          )
                        })}
                        {hypothesisVotes.length > 2 && (
                          <Styles.ImageContent style={{ background: '#444444' }}>
                            <p>+{hypothesisVotes?.length - 2}</p>
                          </Styles.ImageContent>
                        )}
                      </Styles.VoteContent>
                      <p>
                        {hypothesisVotes?.length} {hypothesisVotes?.length > 1 ? votesPluralText : votesSingularText}
                      </p>
                    </Styles.VoteCount>
                  )
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingLeft: '4px',
                      height: '100%'
                    }}
                    onClick={() => handleVote(id)}
                  >
                    <VoteIcon width="24" height="24" style={{ marginLeft: '4px', marginRight: '4px' }} />
                    <Styles.VoteButton>{voteText}</Styles.VoteButton>
                  </div>
                )}
              </Styles.VoteButtonContainer>
            </Styles.VoteMainContainer>
          </Styles.SplitContainer>
        )}
      </Styles.Container>
    </Styles.MainContainer>
  )
}

const VoteList = ({ hypothesisVotes, showVotes, viewProfile }) => {
  const sortedVotes = [...hypothesisVotes].sort((a, b) => a.user.name.localeCompare(b.user.name))
  return (
    <Styles.VoteListContainer showVotes={showVotes}>
      {sortedVotes?.map((vote, index) => (
        <Styles.VoteListItem
          className="VoteListItem"
          key={vote?.id}
          lastVote={hypothesisVotes?.length === index + 1}
          onClick={() => viewProfile(vote?.user?.uuid)}
        >
          <Avatar
            src={vote?.user?.avatar}
            size={'24px'}
            alt={vote?.user?.name}
            style={{ marginLeft: '6px', cursor: 'pointer' }}
          />
          <p>{vote?.user?.name}</p>
        </Styles.VoteListItem>
      ))}
    </Styles.VoteListContainer>
  )
}
