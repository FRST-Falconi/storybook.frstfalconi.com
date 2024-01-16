import styled from 'styled-components';

export const Container = styled.div`
  background-color: inerit;
  display: flex;
  align-items: left;
  flex-direction: column;
  width:100%;
`
export const CommentarysContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`

export const CommentaryBoxContainer = styled.div`
display:flex;
margin-bottom:16px;
`
export const InputContainer = styled.div`
display:flex;
flex-direction:column;
margin-left:0px
`

export const ViewReplysButtonContainer = styled.div`
color: #444444;
font-family: PT Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 110%; 
position: relative;
left: 50px;
margin-bottom:10px;
margin-top: 8px;

span{
    cursor:pointer;
}
`

export const RepplysContainer = styled.div<{ width?: number;}>`
width: ${({ width }) => (width ? `${width}px` : 'auto')};
margin-left:45px`