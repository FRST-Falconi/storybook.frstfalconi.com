import styled, { ThemeProvider } from "styled-components";


export const lightTheme = {
    bg: "#ffffff",
    text: "#1a1a1a",
    muted: "#cccccc",
    primary: "#fa5f2d",
    secondaryBg: "#f4f4f4",
  };
  
 export const darkTheme = {
    bg: "#2d2d2d",
    text: "#ffffff",
    muted: "#555555",
    primary: "#fa5f2d",
    secondaryBg: "#1a1a1a",
  };
  
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
    cursor: pointer;
  `;
  