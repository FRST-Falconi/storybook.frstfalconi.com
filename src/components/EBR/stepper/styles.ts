import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  width: 1280px;
  height: 587px;
  background: #F2F2F2;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProgressContainer = styled.div`
  position: relative;
  padding-left: 75px;
`

export const Progress = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  align-items: flex-start;
`

export const ProgressItem = styled.li<{ active: boolean }>`
  width: 100%;
  min-height: 78px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  counter-increment: list;

  ${({ active }) => active === true && `
    padding-bottom: 70px;

    @media (max-width: 768px) {
      padding-bottom: 50px;
    }
  `}

  &:first-child {
    &::before {
      top: 10px;
    }
  }

  &:last-child {
    &::before {
      top: -30px;
      display: none;
    }
  }

  &:before {
    content: "";
    position: absolute;
    left: -79px;
    top: 2px;
    height: 100%;
    background-color: #6A3F86;
    width: 14px;
    z-index: 0;
  }

  &:after {
    content: counter(list);
    position: absolute;
    z-index: 1;
    left: -100px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
    color: #fff;
    text-align: center;
    border: 3.5px solid #9C9C9C;
    background-color: #757575;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;

    ${({ active }) => active === true && `
      background-color: #FF4D0D;
      border-color: #FF4D0D;
      -webkit-box-shadow: 0px 0px 0px 15px rgba(255,77,13,0.5); 
      box-shadow: 0px 0px 0px 15px rgba(255,77,13,0.5);
    `}
  }
`

export const ProgressItemTitle = styled.p<{ active?: boolean }>`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #757575;

  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ active }) => active === true && `
    color: #222222;
    height: auto;
    margin: 15px 0 8px 0;
    font-weight: 600;
  `}
`

export const ProgressItemSubtitle = styled.p<{ active: boolean }>`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #222222;

  ${({ active }) => active === true && `
    margin-bottom: 24px;
  `}
`