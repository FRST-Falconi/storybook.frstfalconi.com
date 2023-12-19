import * as Styled from './CommentaryBoxV2.styles';
import Avatar from '@components/avatar';
import {ICommentaryBoxV2} from './CommentaryBoxV2.types';
import { IconLikeFilled, IconLikeLine  } from '@shared/icons';
import MiniButton from '@components/mini-button';
import MenuMore from '@components/menu-more';
import {buildStringWithLinkHTML, createUUID} from '../../utilityFunctions/'
import { useEffect, useState } from 'react';
import { FRSTTheme } from '../../theme'
import { ThemeProvider } from 'styled-components'



export const CommentaryBoxV2 = ({ user,comment, actions, hasActionToClickOnAvatar,texts, showOptions, options, itsLiked}: ICommentaryBoxV2)=> {
    const iDCommentPosted = comment.id ? comment.id : `IDCommentPosted-${createUUID()}`;

    const [isLiked, setIsLiked] = useState(itsLiked);

    const handleLike = () =>{
        try {
            actions?.actionLike(!isLiked);
        } catch (error) {  }

        setIsLiked(!isLiked);

    }

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

    useEffect(() =>  {
        document.getElementById(iDCommentPosted) ? 
            document.getElementById(iDCommentPosted).innerHTML = buildStringWithLinkHTML(comment.text) : null;
    }, []);

    return (

        <ThemeProvider theme={FRSTTheme}>
            <Styled.Container >
                <Avatar size='32px' src={user?.imgProfile} onClick={actions?.onClickUserInfo} style={{cursor: hasActionToClickOnAvatar ? 'pointer': 'default'}}/>
                    <Styled.Box>
                        <Styled.UserDataContainer>
                            <Styled.FirstChildUserData>
                                <strong>{user.name}</strong>
                                {comment.likesCount > 0 && (
                                <Styled.LikesContainer>
                                    <Styled.IconLikeContainer>
                                        <IconLikeFilled fill='#fff' stroke='#fff' customColor_1={'#757575'} width='16px' height='16px'/>
                                    </Styled.IconLikeContainer>
                                    <p>{comment.likesCount}</p>
                                </Styled.LikesContainer>
                                
                                ) }
                            </Styled.FirstChildUserData>
                            <Styled.LastChildUserData>
                                {user.office} • {user.company} • {comment.date}
                            </Styled.LastChildUserData>
                        </Styled.UserDataContainer>
                        <Styled.TextContainer>
                            <Styled.Text style={isExpanded ?{ display: 'block'}: {display: '-webkit-box'}} id={iDCommentPosted}>{comment.text}</Styled.Text>
                            <Styled.ShowMore isVisible={comment.text.length > 220} onClick={toggleExpand}>
                               {isExpanded? texts.showLessText : texts.showMoreText}
                            </Styled.ShowMore>
                        </Styled.TextContainer>
                    </Styled.Box>
            </Styled.Container>
            <Styled.InteractiveButtonsContainer> 
                <Styled.FlexButtonContainer onClick={handleLike} >
                    {isLiked? 
                    <IconLikeFilled />  :  <IconLikeLine fill='#444'  />       }
                    <MiniButton variant='secondary' onClick={handleLike} label={texts?.likeButtonText} active={isLiked} styles={{}}/>
                </Styled.FlexButtonContainer>
               
                <MiniButton variant='secondary' onClick={actions.actionAnswer} label={texts?.answerButtonText}  styles={{}}/>
                {showOptions && options ? <MenuMore options={options}/> : <div/>}
            </Styled.InteractiveButtonsContainer>
    </ThemeProvider>
    )
}
