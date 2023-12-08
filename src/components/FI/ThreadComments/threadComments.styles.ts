import styled from 'styled-components';

export const Container = styled.div<{ width?: string;}>`
  background-color: #ffff;
  display: flex;
  align-items: left;
  flex-direction: column;
  width: ${({ width }) => (width ? `${width}` : '100%')};
`
export const CommentarysContainer = styled.div<{ width?: number;}>`
width: ${({ width }) => (width ? `${width}` : '70%')};
margin:18px;
align-items: center;
justify-content:center;
`

export const CommentaryBoxContainer = styled.div`
display:flex;
margin-bottom:20px;
`
export const InputContainer = styled.div`
display:flex;
flex-direction:column;
margin-bottom:40px;
margin-left:55px
`

export const ViewReplysButtonContainer = styled.div`
color: #444444;
font-family: PT Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 110%; 
position: relative;
left: 55px;
margin-bottom:10px;

span{
    cursor:pointer;
}
`

export const RepplysContainer = styled.div<{ width?: number;}>`
width: ${({ width }) => (width ? `${width}px` : 'auto')};
margin-left:50px`