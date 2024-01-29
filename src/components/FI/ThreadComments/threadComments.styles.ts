import styled from 'styled-components';

export const Container = styled.div`
  background-color: inerit;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width:100%;
`
export const CommentarysContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
`

export const InputContainer = styled.div`
display:flex;
flex-direction:column;
`

export const ViewReplysButtonContainer = styled.div`
color: #444444;
font-family: PT Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 110%; 
position: relative;
left: 59px;
margin-top: 6px;

span{
    cursor:pointer;
}

@media screen  and (max-width:768px){
color: #444444;
font-family: PT Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 110%; 
position: relative;
left: 59px;
margin-top: 6px;
max-width: 150px !important;

span{
    cursor:pointer;
}
}
`

export const RepplysContainer = styled.div<{ width?: number;}>`
width: ${({ width }) => (width ? `${width}px` : 'auto')};
margin-left:60px;
`