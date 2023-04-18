import styled from 'styled-components'

export const ContainerStepController = styled.div`
  width: 100%;
  height: 51px;
  background: #efeded;
  padding: 10px;
  position: relative;
  top: 25px;
  display: flex;
  justify-content: space-between;
  color: #272727;
  font-weight: lighter;
  border-radius: 0 0 10px 10px;
  border-top: 1px solid #bdbdbd;
  font-size: 14px;
  font-weight: 600;
  > div {
    font-size: 0.8rem;
    cursor: pointer;
    display: inline-flex;
    vertical-align: text-bottom;
    box-sizing: inherit;
    text-align: center;
    align-items: center;
  }
`

export const StepControllerArrow = styled.span`
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  color: #272727;
  transition: all 0.2s;
  margin: 5px;

  :hover {
    opacity: 0.5;
    background-color: #272727;
    color: #bdbdbd;
  }
`
