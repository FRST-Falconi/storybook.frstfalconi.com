import styled from 'styled-components'

interface ITag {
  disabled: boolean
}
interface ILearningCycleCard {
  status: string
  disabled: boolean
}

interface IAccordionList {
  disabled: boolean
}

export const WrapperCard = styled.div<ILearningCycleCard>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;

  background: ${(props) => (props.disabled ? '#E0E0E0' : '#fff')};

  border-radius: 10px;

  padding: 20px;

  :hover {
    cursor: pointer;
  }
`

export const TagArea = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TagStatus = styled.div<ITag>`
  background-color: ${(props) => (props.disabled ? '#757575' : '#398787')};
  color: #fff;
  font-weight: 300;
  border-radius: 4px;
  width: 100%;
  max-width: 160px !important;
  padding: 4px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Actions = styled.div`
  display: flex;

  .MuiMenu-root {
    position: relative;
    border: 1px solid red !important;
  }

  #long-menu::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 0;
    height: 0;
    border-top: solid 10px #fff;
    border-right: solid 10px transparent;
  }

  #long-menu {
    border: 1px solid red !important;
  }

  .MuiMenu-paper {
    border: 1px solid red !important;
  }
`

export const AccordionList = styled.div<IAccordionList>`
  border: none;

  .MuiAccordion-root {
    border: none;
    box-shadow: none;
    margin-top: 0;
    background: ${(props) => (props.disabled ? '#E0E0E0' : '#fff')};
  }
  .MuiButtonBase-root {
    padding: 0;
  }
  .MuiAccordionDetails-root {
    padding: 0;
  }
  #panel1bh-content {
    margin-top: -5px;
    box-shadow: none;
    padding: 0 !important;
  }
`

export const AccortionTitle = styled.span`
  color: #222222;

  display: flex;
  align-items: center;
  font-size: 16px;

  span {
    font-weight: 600;
  }

  span:last-child {
    margin-right: 5px;
    margin-left: 5px;
  }
`

export const CycleName = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  font-weight: 700;
  font-size: 25px;
  color: #222222;
`

export const FooterButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  justify-content: space-around;
  align-items: center;
`

export const DataList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 0 !important;
  line-height: 35px;
  overflow-y: scroll;
  height: 194px;
  color: #222222;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -moz-scrollbars-none: none;
`

export const DataListItem = styled.li`
  list-style-type: none;
  margin: 0;
  font-weight: 400;
`

export const Button = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px auto;

  border: none;
  font-size: 16px;
  color: #64748b;

  :hover {
    cursor: pointer;
  }
`
