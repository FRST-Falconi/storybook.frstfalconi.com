import { useEffect, useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { Grid, Box, Modal } from '@mui/material'
import { IInteractionsModal, IUser } from './interactionsModal'
import { 
    Container, 
    Typography, 
    CloseButton,
    HeaderDiv, 
    ContentDiv, 
    CardItemUser, 
    ContentScroll, 
    ScrollContentContainer, 
    UserInfoContainer,
    NameUser,
    PositionUser,
    OrgUser } from './InteractionsModalStyles'
import { CloseIcon } from '@shared/icons'
import Avatar from '@components/avatar'

export default function InteractionsModal({
    textTitle, 
    textSubtitle, 
    listUsers, 
    isOpen, 
    handleClickClose, 
    newListUsers,
    checkScrollEnd,
    style }: IInteractionsModal) {
    
    const scrollContainerRef = useRef(null);
    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;

        if (scrollTop + clientHeight >= scrollHeight) {
            if(checkScrollEnd) checkScrollEnd()
        }
    }
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
          scrollContainer.addEventListener('scroll', handleScroll);
        }
    
        return () => {
          if (scrollContainer) {
            scrollContainer.removeEventListener('scroll', handleScroll);
          }
        };
    }, []);

    const [listUsersState, setListUsersState]  = useState(listUsers)
    useEffect(() => {
        if(newListUsers) {
            setListUsersState((listUsersState) => [...listUsersState, ...newListUsers])
        }
    }, [newListUsers])

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Modal open={isOpen} onClose={() => handleClickClose()} >
                    <Container 
                        style={{
                            top: '50%', 
                            left: '50%', 
                            transform: 'translate(-50%, -50%)', 
                            ...style 
                        }
                    }>
                        <HeaderDiv>
                            <div style={{width:'100%', display:'flex', justifyContent: 'flex-end'}}>
                                <CloseButton onClick={() => handleClickClose()}> 
                                    <CloseIcon width='11'/> 
                                </CloseButton>
                            </div>
                            <Typography>{textTitle}</Typography>
                            <Typography>{textSubtitle}</Typography>
                        </HeaderDiv>
                        <ContentDiv 
                            ref={scrollContainerRef}
                            onScroll={handleScroll}
                        >
                            <ContentScroll>
                                { listUsersState && listUsersState.map((item: IUser) => {
                                        return (<>
                                            <CardItemUser key={item?.id}>
                                                <Avatar size='50px' src={item?.avatar}/>
                                                <UserInfoContainer>
                                                    <NameUser> {item?.name} </NameUser>
                                                    <PositionUser> {item?.position}  </PositionUser>
                                                    <OrgUser> {item?.organization} </OrgUser>
                                                </UserInfoContainer>
                                            </CardItemUser>
                                        </>)
                                    })
                                }
                            </ContentScroll>
                        </ContentDiv>
                    </Container>
            </Modal>
        </ThemeProvider>
    )
}
