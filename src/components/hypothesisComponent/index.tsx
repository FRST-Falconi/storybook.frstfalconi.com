import { useEffect, useRef, useState } from 'react'
import * as Styles from './hypothesisComponent.style'
import { Vote } from './types'
import { ExcludeVoteIcon, VoteCurrentIcon, VoteIcon } from '@public/customIcons'
import Avatar from '@components/avatar'
import Loading from '@components/DS/loading'
import MenuMore from '@components/menu-more'
import { ModalConfirme } from '@components/ModalConfirme'

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
  handleViewProfile,
  avatar,
  hasEditHipotesis,
  onDeleteHipotesis,
  showAvatar,
  authorId,
  hasVoteGoal,
  loading,
  onChangeVote,
  authorGoalId,
  changeVoteText,
  onSaveEditHipotesis
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
  hasVoteGoal?: boolean
  hasEditHipotesis?: boolean
  votesSingularText?: string
  votesPluralText?: string
  voteText?: string
  deleteVoteText?: string
  avatar?: string
  onDeleteHipotesis?: () => void
  showAvatar?: boolean
  authorId?: string
  authorGoalId?: string
  loading?: boolean
  onChangeVote?: (hypothesiId: string) => any
  changeVoteText?: string
  onSaveEditHipotesis?: (description: string) => void
}) => {
  const [isHover, seIsHover] = useState(false)
  const [hasVoteHypothesis, setHasVoteHypothesis] = useState(false)
  const [showVotesList, setShowVotesList] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editDescription, setEditDescription] = useState(description)
  const [isConfirmeDeleteHypothesis, setIsConfirmeDeleteHypothesis] = useState(false)

  const ContainerRef = useRef<HTMLDivElement>(null)
  const [heightContainer, seHeightContainer] = useState(0)

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

  const  handleDoubleClick = (e) => {
    if (authorId === userLoggedId || authorGoalId === userLoggedId) {
      setIsEditing(true);
    }
  }


  useEffect(() => {
    setHasVoteHypothesis(votes?.some((vote) => vote?.user_uuid === userLoggedId))
  }, [votes])

  useEffect(() => {
    if (loading) seIsHover(false)
  }, [loading])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideVote)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideVote)
    }
  }, [setShowVotesList])

  useEffect(() => {
    const Container = ContainerRef?.current
    if (ContainerRef) {
      const height = Container.clientHeight
      seHeightContainer(height)
    }
  }, [ContainerRef])

  const handleVote = async (hyphoteseId: string) => {
    await onVote(hyphoteseId)
  }
  const handleDeleteVote = async (voteId: number) => {
    await deleteVote(voteId)
  }

  const handleChangeVote = async (hyphoteseId: string) => {
    await onChangeVote(hyphoteseId)
  }

  const handleSaveDescription = () => {
    onSaveEditHipotesis(editDescription)
    setIsEditing(false)
  }

  const validHasEditHipotesis = hasEditHipotesis && (authorId === userLoggedId || authorGoalId === userLoggedId);


  return (
    <Styles.MainContainer>
      <Styles.Container type={type} id={id} ref={ContainerRef}>
        <Styles.SplitContainerDescription>
          {showAvatar && (
            <Avatar
              src={avatar}
              size="24px"
              style={{ marginRight: '8px', cursor: authorId ? 'pointer' : 'default' }}
              onClick={() => handleViewProfile(authorId)}
            />
          )}
          <Styles.Title>{title}</Styles.Title>
          <Styles.Separator>|</Styles.Separator>

          <Styles.Description>
            {isEditing ? (
              <span style={{ display: 'flex', width: '100%' }}>
                <div
                  contentEditable
                  style={{ width: '100%', background: 'white' }}
                  onInput={(e) => setEditDescription(e.currentTarget.textContent)}
                  onBlur={handleSaveDescription}
                >
                  {description}
                </div>
              </span>
            ) : (
              <div style={{width: '100%'}} onDoubleClick={handleDoubleClick}>
                  <span>{editDescription}</span>
              </div>
            )}
          </Styles.Description>
          {validHasEditHipotesis &&( 
            <MenuMore
              options={[
                {
                  description: 'Editar',
                  onClick: (e) => setIsEditing(true)
                },
                {
                  description: 'Excluir',
                  onClick: () => setIsConfirmeDeleteHypothesis(true),
                  color: '#C00F00'
                }
              ]}
            />
          )}
        </Styles.SplitContainerDescription>

        {loading && (
          <Styles.SplitContainer>
            <Styles.VoteButtonContainer
              type={type}
              modeDelete={isHover}
              height={heightContainer}
              style={{ cursor: 'default' }}
            >
              <Loading />
            </Styles.VoteButtonContainer>
          </Styles.SplitContainer>
        )}
        {!loading && (
          <>
            {!canVote && canViewVote && votes?.length > 0 && (
              <div style={{ position: 'relative', height: '100%' }}>
                <Styles.SplitContainer>
                  <Styles.VoteButtonContainer
                    ref={viewVotesRef}
                    height={heightContainer}
                    style={{ cursor: canViewListVotes ? 'pointer' : 'default' }}
                    type={type}
                    onClick={canViewListVotes ? toggleVotes : null}
                  >
                    <Styles.VoteCount>
                      <Styles.VoteContent>
                        {votes?.slice(0, 2)?.map((vote, index) => {
                          return (
                            <Styles.ImageContent key={vote?.id} style={{ zIndex: 14 - index }}>
                              <img src={vote?.user?.avatar || 'https://cdn-images.frstfalconi.cloud/path582.svg'} />
                            </Styles.ImageContent>
                          )
                        })}
                        {votes?.length > 2 && (
                          <Styles.ImageContent style={{ background: '#444444' }}>
                            <p
                              style={{
                                fontSize: votes?.length > 9 ? 10 : votes?.length > 99 ? 8 : 14
                              }}
                            >
                              +{votes?.length - 2}
                            </p>
                          </Styles.ImageContent>
                        )}
                      </Styles.VoteContent>
                      {votes?.length} {votes?.length > 1 ? votesPluralText : votesSingularText}
                    </Styles.VoteCount>
                  </Styles.VoteButtonContainer>
                </Styles.SplitContainer>
                <VoteList hypothesisVotes={votes} showVotes={showVotesList} viewProfile={handleViewProfile} />
              </div>
            )}
            {canVote && hasVoteGoal && votes?.length > 0 ? (
              <Styles.SplitContainer
                onClick={() =>
                  hasVoteHypothesis && isHover
                    ? handleDeleteVote(votes?.find((vote) => vote?.user_uuid === userLoggedId)?.id)
                    : handleChangeVote(id)
                }
              >
                <Styles.VoteButtonContainer
                  type={type}
                  modeDelete={isHover}
                  height={heightContainer}
                  onMouseEnter={() => seIsHover(true)}
                  onMouseLeave={() => seIsHover(false)}
                  style={{ cursor: 'pointer' }}
                >
                  {isHover ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        justifyContent: 'center'
                      }}
                    >
                      {!hasVoteHypothesis ? (
                        <>
                          <VoteCurrentIcon width="24" height="24" style={{ marginLeft: '4px', marginRight: '4px' }} />
                          <Styles.VoteButton>{changeVoteText}</Styles.VoteButton>
                        </>
                      ) : (
                        <>
                          <ExcludeVoteIcon width="24" height="24" />
                          <Styles.VoteButton>{deleteVoteText}</Styles.VoteButton>
                        </>
                      )}
                    </div>
                  ) : (
                    <Styles.VoteCount>
                      <Styles.VoteContent>
                        {votes?.slice(0, 2)?.map((vote, index) => {
                          return (
                            <Styles.ImageContent key={vote?.id} style={{ zIndex: 14 - index }}>
                              <img src={vote?.user?.avatar || 'https://cdn-images.frstfalconi.cloud/path582.svg'} />
                            </Styles.ImageContent>
                          )
                        })}
                        {votes.length > 2 && (
                          <Styles.ImageContent style={{ background: '#444444' }}>
                            <p>+{votes?.length - 2}</p>
                          </Styles.ImageContent>
                        )}
                      </Styles.VoteContent>
                      <p>
                        {votes?.length} {votes?.length > 1 ? votesPluralText : votesSingularText}
                      </p>
                    </Styles.VoteCount>
                  )}
                </Styles.VoteButtonContainer>
              </Styles.SplitContainer>
            ) : (
              canVote &&
              !hasVoteHypothesis &&
              hasVoteGoal && (
                <Styles.SplitContainer onClick={() => handleChangeVote(id)}>
                  <Styles.VoteButtonContainer
                    type={type}
                    modeDelete={isHover}
                    height={heightContainer}
                    onMouseEnter={() => seIsHover(true)}
                    onMouseLeave={() => seIsHover(false)}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: '4px',
                        height: '100%'
                      }}
                    >
                      <VoteCurrentIcon width="24" height="24" style={{ marginLeft: '4px', marginRight: '4px' }} />
                      <Styles.VoteButton>{changeVoteText}</Styles.VoteButton>
                    </div>
                  </Styles.VoteButtonContainer>
                </Styles.SplitContainer>
              )
            )}
            {canVote && !hasVoteGoal ? (
              <Styles.SplitContainer onClick={() => handleVote(id)}>
                <Styles.VoteButtonContainer
                  type={type}
                  modeDelete={isHover}
                  height={heightContainer}
                  onMouseEnter={() => seIsHover(true)}
                  onMouseLeave={() => seIsHover(false)}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingLeft: '4px',
                      height: '100%'
                    }}
                  >
                    <VoteIcon width="24" height="24" style={{ marginLeft: '4px', marginRight: '4px' }} />
                    <Styles.VoteButton>{voteText}</Styles.VoteButton>
                  </div>
                </Styles.VoteButtonContainer>
              </Styles.SplitContainer>
            ) : (
              canVote &&
              !hasVoteHypothesis &&
              !canViewVote && (
                <Styles.SplitContainer onClick={() => handleChangeVote(id)}>
                  <Styles.VoteButtonContainer
                    type={type}
                    modeDelete={isHover}
                    height={heightContainer}
                    onMouseEnter={() => seIsHover(true)}
                    onMouseLeave={() => seIsHover(false)}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: '4px',
                        height: '100%'
                      }}
                    >
                      <VoteCurrentIcon width="24" height="24" style={{ marginLeft: '4px', marginRight: '4px' }} />
                      <Styles.VoteButton>{changeVoteText}</Styles.VoteButton>
                    </div>
                  </Styles.VoteButtonContainer>
                </Styles.SplitContainer>
              )
            )}
            <ModalConfirme
              title="Excluir hipótese"
              open={isConfirmeDeleteHypothesis}
              onClose={() => {
                setIsConfirmeDeleteHypothesis(false)
              }}
              onConfirm={() => {
                onDeleteHipotesis()
                setIsConfirmeDeleteHypothesis(false)
              }}
            >
              <p style={{ marginTop: '16px', fontFamily: 'PT Sans', fontWeight: 400 }}>
                Tem certeza que deseja excluir essa hipótese cadastrada?
              </p>
            </ModalConfirme>
          </>
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

const ViewVotes = ({ hypothesisVotes, votesPluralText, votesSingularText }) => {
  return (
    <>
      {hypothesisVotes?.length > 0 && (
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
      )}
    </>
  )
}
