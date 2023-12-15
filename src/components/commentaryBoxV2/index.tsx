import * as Styled from './CommentaryBoxV2.styles';
import Avatar from '@components/avatar';
import {ICommentaryBoxV2} from './CommentaryBoxV2.types';
import { EditIcon, IconLikeFilled, IconLikeLine, TrashIconNew } from '@shared/icons';
import MiniButton from '@components/mini-button';
import MenuMore from '@components/menu-more';



export const CommentaryBoxV2 = ({ user,comment, onClickUserInfo, hasActionToClickOnAvatar,answerButtonText,likeButtonText, actionLike, actionAnswer,actionEdit,actionDelete}: ICommentaryBoxV2)=> {

    const options = [
        {
            description: 'Editar',
            startIcon: <EditIcon fill='#222'/>,
            onClick: actionEdit
        },
        {
            description: 'Excluir',
            startIcon: <TrashIconNew fill='#C1341A'/>,
            onClick: actionDelete,
            color: '#C1341A'
        },
    ]
    return (
        <>
            <Styled.Container >
                <Avatar size='32px' src={user?.imgProfile} onClick={onClickUserInfo} style={{cursor: hasActionToClickOnAvatar ? 'pointer': 'default'}}/>
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
                        <p>{comment.text}</p>
                    </Styled.Box>
            </Styled.Container>
            <Styled.InteractiveButtonsContainer> 
                <Styled.FlexButtonContainer   disabled={false}>
                    <IconLikeLine fill='#444'  />               
                    <MiniButton variant='secondary' onClick={actionLike} label={likeButtonText} styles={{}}/>
                </Styled.FlexButtonContainer>
               
                <MiniButton variant='secondary' onClick={actionAnswer} label={answerButtonText} styles={{}}/>
                <MenuMore options={options}/>
            </Styled.InteractiveButtonsContainer>
         </>

    )
}
