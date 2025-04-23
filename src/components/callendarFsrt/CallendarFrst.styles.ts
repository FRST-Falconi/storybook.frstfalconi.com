import styled, { ThemeProvider } from "styled-components";


export const lightTheme = {
    bg: "#ffffff",
    text: "#1a1a1a",
    muted: "#cccccc",
    primary: "#F26818",
    secondaryBg: "#f4f4f4",
  };
  
 export const darkTheme = {
    bg: "#1a1a1a",
    text: "#ffffff",
    muted: "#555555",
    primary: "#F26818",
    secondaryBg: "#1a1a1a",
  };

  export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  &:hover {
    background-color: ${({ theme }) => theme.muted};
  }
  &:active {
    transform: scale(0.95);
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
    gap: 4px;
  `;
  
  export const Day = styled.div<{selected, dimmed}>`
    padding: 8px;
    border-radius: 8px;
    background-color: ${({ selected, theme }) => (selected ? theme.primary : "transparent")};
    color: ${({ selected, theme }) => (selected ? "#fff" : theme.text)};
    opacity: ${({ dimmed }) => (dimmed ? 0.4 : 1)};
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
  