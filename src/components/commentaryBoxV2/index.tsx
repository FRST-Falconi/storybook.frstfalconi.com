import * as Styled from './CommentaryBoxV2.styles';
import Avatar from '@components/avatar';
import {ICommentaryBoxV2} from './CommentaryBoxV2.types';
import { IconLikeFilled, IconLikeLine  } from '@shared/icons';
import MiniButton from '@components/mini-button';
import MenuMore from '@components/menu-more';
import {buildStringWithLinkHTML, createUUID} from '../../utilityFunctions/'
import { useEffect, useLayoutEffect, useState } from 'react';
import { FRSTTheme } from '../../theme'
import { ThemeProvider } from 'styled-components'



export const CommentaryBoxV2 = ({ userName, imgProfile, userCompany, userOffice,showMoreText,relationToPhaseText, showLessText,showLikeButton, styles,
    actionLike,answerButtonText,likeButtonText, commentTextWithMention,
    howLongAgo,commentId,commentText,actionAnswer, onClickUserInfo,
    likesCount, hasActionToClickOnAvatar, showOptions, options, itsLiked}: ICommentaryBoxV2)=> {
    const iDCommentPosted = commentId ? commentId : `IDCommentPosted-${createUUID()}`;
    const [isLiked, setIsLiked] = useState(itsLiked);

    const handleLike = () =>{
        try {
            actionLike(!isLiked);
        } catch (error) {  }

        setIsLiked(!isLiked);

    }

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

    const [isEllipsisVisible, setIsEllipsisVisible] = useState(false);

    useEffect(() => {
        const textContainer = document.getElementById(iDCommentPosted); 
        if (textContainer) {  
            setIsEllipsisVisible( textContainer.scrollHeight > textContainer.clientHeight);
        }
    }, [commentText]);

    useLayoutEffect(() => {
        const handleResize = () => {
          const textContainer = document.getElementById(iDCommentPosted);
          if (textContainer) {
            setIsEllipsisVisible(textContainer.scrollHeight > textContainer.clientHeight);
          }
        };
            window.addEventListener('resize', handleResize);
    
        handleResize();
            return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styled.Container style={{...styles}}>
                <Avatar size='32px' src={imgProfile} onClick={onClickUserInfo} style={{cursor: hasActionToClickOnAvatar ? 'pointer': 'default'}}/>
                    <Styled.Box>
                        <Styled.UserDataContainer>
                            <Styled.FirstChildUserData>
                                <Styled.Username>{userName}</Styled.Username>
                                {likesCount > 0 && (
                                <Styled.LikesContainer>
                                    <Styled.IconLikeContainer>
                                        <IconLikeFilled fill='#fff' stroke='#fff' customColor_1={'#757575'} width='16px' height='16px'/>
                                    </Styled.IconLikeContainer>
                                    <p>{likesCount}</p>
                                </Styled.LikesContainer>
                                
                                ) }
                            </Styled.FirstChildUserData>
                            <Styled.UserDataLastChild>
                                {userOffice && userOffice} {userCompany && `• ${userCompany}`} {howLongAgo && `• ${howLongAgo}`}
                            </Styled.UserDataLastChild>
                        </Styled.UserDataContainer>
                        {relationToPhaseText && <Styled.RelationContainer>{relationToPhaseText}</Styled.RelationContainer>}
                        <Styled.TextContainer id='textContainerId'>
                            <Styled.Text style={isExpanded ?{ display: 'block'}: {display: '-webkit-box'}} id={iDCommentPosted} dangerouslySetInnerHTML={{__html:buildStringWithLinkHTML(commentTextWithMention ? commentTextWithMention: commentText)}}/>
                            <Styled.ShowMore isVisible={isEllipsisVisible} onClick={toggleExpand}>
                               {isExpanded? showLessText : showMoreText}
                            </Styled.ShowMore>
                        </Styled.TextContainer>
                    </Styled.Box>
            </Styled.Container>
            <Styled.InteractiveButtonsContainer> 
                {showLikeButton &&(
                    <Styled.FlexButtonContainer onClick={handleLike} >
                    {isLiked? 
                    <IconLikeFilled />  :  <IconLikeLine fill='#444'  />       }
                    <MiniButton variant='secondary' onClick={handleLike} label={likeButtonText} active={isLiked} styles={{}}/>
                </Styled.FlexButtonContainer>
                )}
        
                <MiniButton variant='secondary' onClick={actionAnswer} label={answerButtonText}  styles={{}}/>
                {showOptions && options ? <MenuMore options={options}/> : <div/>}
            </Styled.InteractiveButtonsContainer>
    </ThemeProvider>
    )
}
