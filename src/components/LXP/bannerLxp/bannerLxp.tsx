import styled, { css } from 'styled-components'

interface BannerLxp {
  backgroundBanner?: any
}

export const BannerContainer = styled.div<BannerLxp>`
  background: ${(props) => props.backgroundBanner};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-family: 'Work Sans';
  width: 100%;
  height: 214px;
  cursor: default;
  padding: 60px 80px 60px 120px;
  border-radius: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  :hover .configButton {
    display: block;
  }
`
export const ConfigButton = styled.div`
  position: absolute;
  right: 0;
  margin-right: 83px;
  display: none;
`
export const ConfigContainer = styled.div`
  width: 350px;
  height: 420px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 25px 18px -20px rgba(34, 34, 34, 0.15);
  background-color: #fff;
  font-family: 'PT Sans', 'PTSans-Regular';
  padding: 16px;
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  right: 0;
  margin-right: 83px;
`

export const EnableText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InputTextColor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 8px 0;
  margin-top: 8px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`
export const InputBgColor = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const BgInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  margin-top: 8px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;

  input[type='file'] {
    display: none;
  }
  label {
    display: flex;
    align-items: center;
    color: #0645ad;
    font-size: 16;
    font-weight: 700;
    cursor: pointer;
  }
`
export const FixImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`
