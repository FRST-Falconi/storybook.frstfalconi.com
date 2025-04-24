import { primary } from './../mini-button/miniButton.stories';
import styled, { ThemeProvider } from "styled-components";


export const lightTheme = {
    bg: "#ffffff",
    text: "#1a1a1a",
    muted: "#cccccc",
    primary: "#F26818",
    secondaryBg: "#f4f4f4",
    hover: "#ccc",
    pressed: "#484848",
    border: "#D5D4DF"
  };
  
 export const darkTheme = {
    bg: "#2f2f2f",  
    text: "#ffffff",
    muted: "#555555",
    primary: "#F26818",
    secondaryBg: "#1a1a1a",
    hover: "#444444",
    pressed: "#484848",
    border: "#454545"
  };

  export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
  &:active {
    transform: scale(0.95);
    background-color: ${({ theme }) => theme.pressed};
    color: #fff;
  }
`;
  
 export const Container = styled.div`
    background-color: ${({ theme }) => theme.secondaryBg};
    color: ${({ theme }) => theme.text};
    padding: 16px;
    border-radius: 16px;
    width: 320px;
    font-family: sans-serif;
  `;
  
  export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  `;
  
  export const Title = styled.h2`
    font-size: 18px;
    margin-bottom: 8px;
  `;
  
  export const MonthNav = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `;
  
  export const WeekDays = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-weight: bold;
    font-size: 12px;
  `;
  
  export const CalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    border: 0.39px solid ${({ theme }) =>  theme.border};
    border-radius: 8px;
    
  `;
  
  export const Day = styled.div<{selected, dimmed, isEvent}>`
    padding: ${({ isEvent }) => (isEvent ? "6px" : "8px")};
    background-color: ${({ selected, theme }) => (selected ? theme.primary : "transparent")};
    color: ${({ selected, theme }) => (selected ? "#fff" : theme.text)};
    opacity: ${({ dimmed }) => (dimmed ? 0.4 : 1)};
    border-bottom: 0.39px solid ${({ theme }) =>  theme.border};
    border-left: 0.39px solid ${({ theme }) =>  theme.border};
    cursor: pointer;
    &:hover {
      background-color: ${({ selected, theme }) => (selected ? theme.primary : theme.muted)};
      color: #fff;
    }
  `;
  
  export const Footer = styled.div`
    margin-top: 12px;
    font-size: 14px;
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    gap: 4px;
    width: fit-content;
    cursor: pointer;
  `;
  

  export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

export const Tooltip = styled.span`
  visibility: hidden;
  opacity: 0;
  width: max-content;
  color: ${({ theme }) => theme.text};
  background-color:${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) =>  theme.border};
  box-shadow: 0px 25px 18px -20px #22222233;
  text-align: center;
  border-radius: 8px;
  padding: 12px 20px;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.3s;
  font-size: 12px;
  white-space: nowrap;
  font-family: "PT Sans";
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  /* seta externa (borda) */
  &::before {
    content: '';
    position: absolute;
    top: -17px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent ${({ theme }) => theme.border} transparent;
    z-index: 0;
  }

  /* seta interna (cor de fundo) */
  &::after {
    content: '';
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent ${({ theme }) => theme.bg} transparent;
    z-index: 1;
  }
`;

export const PointEvent =  styled.div<{selected}>`
  width:4px;
  height: 4px;
  border-radius: 50%;
  background-color:${({ theme, selected }) => selected ? "#fff" : theme.primary};
  margin-left: auto;
  margin-right: auto;
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: 8px;
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.border};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    color: ${props => props.theme.text};
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

export const CalendarSection = styled.div`
  flex: 1;
  padding: 20px;
  border-right: 1px solid ${props => props.theme.border};
`;

export const EventsSection = styled.div`
  width: 300px;
  padding: 20px;
  overflow-y: auto;

  h3 {
    margin-top: 0;
    color: ${props => props.theme.text};
  }
`;

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EventItem = styled.div<{ selected?: boolean }>`
  padding: 10px;
  border-radius: 4px;
  background-color: ${props => props.selected ? props.theme.primary : 'transparent'};
  border: 1px solid ${props => props.theme.border};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;

  &:hover {
    background-color: ${props => props.theme.hover};
  }
`;

export const EventDate = styled.span`
  font-size: 0.8em;
  color: ${props => props.theme.textSecondary};
`;

export const EventTitle = styled.span`
  font-weight: 500;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.error};
  cursor: pointer;
  padding: 5px;
  font-size: 0.8em;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

export const NoEvents = styled.div`
  color: ${props => props.theme.textSecondary};
  text-align: center;
  padding: 20px;
`;