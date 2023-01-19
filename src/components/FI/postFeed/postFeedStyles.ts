import styled from "styled-components";

export const Wrapper = styled.div<({isCompletePost})>`
  opacity: ${({isCompletePost}) => isCompletePost ? '0' : '1'};
  transition: opacity 0.5s ease-in-out;
`

export const postContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    border: 1px solid ${({theme}) => theme.colors.borderPrimary};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: ${({theme}) => theme.colors.shadeWhite};
    padding-top: 24px;
    padding-bottom: 24px;
    
    &>img{
        max-width: 100%;
        max-height: 100%;
    }

`

export const postHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const postTitle = styled.span`
    font-family: 'Work Sans';
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    color: ${({theme}) => theme.colors.primary1};
    margin-top: 32px;
    padding-left: 22px;
    padding-right: 22px;
`

export const postDescription = styled.span`
    font-family: 'PT Sans';
    font-weight: 400;
    font-size: 16px;
    text-align: left;
    color: ${({theme}) => theme.colors.neutralsGrey1};
    margin-top: 32px;
    width: 100% !important;
`

export const postImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 32px;
    width: 100%;
    object-fit: cover;

    & img{
        max-width: 100%;
        width: 100%;
        max-height: 100%;
    }
`

export const postVideo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 32px;
    width: 100%;
`

export const buttonCheck = styled.span`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    /* identical to box height, or 18px */

    display: flex;
    align-items: center;

    /* link/onfocus */

    color: #0645AD;
`


export const TooltipText = styled.div`
  color: #757575;
  text-align: center;
  line-height: 44px;
  border-radius: 3px;
  cursor: pointer;
`;
export const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: -10px;
  visibility: hidden;
  
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #757575;

  background-color: #FFF;
  width: 150px;
  padding: 5px 5px;
  border-radius: 4px;
  border: 1px solid #BDBDBD;
  -webkit-box-shadow: 10px 35px 40px -8px rgba(0,0,0,0.31);
  -moz-box-shadow: 10px 35px 40px -8px rgba(0,0,0,0.31);
  box-shadow: 10px 35px 40px -8px rgba(0,0,0,0.31);

  &:after {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -7px;
    position: absolute;

    border: 7px solid #fff;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }

  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -8px;
    position: absolute;

    border: 7px solid #BDBDBD;
    transform: rotate(135deg);
  }
  
`;
export const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #757575;
    background-color: #FFFFFF;
    width: 230px;
    padding: 8px 8px;


    &:after {
        content: "";
        width: 0;
        height: 0;
        left: 40px;
        top: -7px;
        position: absolute;
    
        border-color: transparent transparent #FFF #FFF;
        transform: rotate(135deg);
      }
    
      &:before {
        content: "";
        width: 0;
        height: 0;
        left: 40px;
        top: -8px;
        position: absolute;
    
        border-color: transparent transparent #BDBDBD #BDBDBD;
        transform: rotate(135deg);
      }
    
  }
`;