import * as Styled from './CommentaryBoxV2.styles';
import Avatar from '@components/avatar';
import {ICommentaryBoxV2} from './CommentaryBoxV2.types';


export const CommentaryBoxV2 = ({ imgProfile }: ICommentaryBoxV2)=> {
    return (
        <Styled.Container>
            <Avatar size='40px' src={imgProfile}/>
                <Styled.Box>
                    Teste
                </Styled.Box>
        </Styled.Container>
    )
}
