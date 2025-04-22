import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as Styled from './CallendarFrst.styles';
import { lightTheme, darkTheme } from './CallendarFrst.styles';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns";


export default function Calendar({ darkMode = true }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const theme = darkMode ? darkTheme : lightTheme;

  const renderHeader = () => (
    <Styled.Header>
      <span>{format(currentMonth, "MMMM yyyy")}</span>
      <Styled.MonthNav>
        <ChevronLeft size={18} onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} />
        <ChevronRight size={18} onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} />
      </Styled.MonthNav>
    </Styled.Header>
  );

  const renderDays = () => {
    const startDate = startOfWeek(startOfMonth(currentMonth));
    const endDate = endOfWeek(endOfMonth(currentMonth));

    const days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        days.push(
          <Styled.Day
            key={cloneDay.toString()}
            selected={selectedDate && isSameDay(cloneDay, selectedDate)}
            dimmed={!isSameMonth(cloneDay, currentMonth)}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {format(cloneDay, "d")}
          </Styled.Day>
        );
        day = addDays(day, 1);
      }
    }

    return <Styled.CalendarGrid>{days}</Styled.CalendarGrid>;
  };

  return (
    <ThemeProvider theme={theme}>
      <Styled.Container>
        <Styled.Title>Meus eventos</Styled.Title>
        {renderHeader()}
        <Styled.WeekDays>
          {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'].map(day => (
            <div key={day}>{day}</div>
          ))}
        </Styled.WeekDays>
        {renderDays()}
        <Styled.Footer>
          <ChevronRight size={16} /> Ver calendário
        </Styled.Footer>
      </Styled.Container>
    </ThemeProvider>
  );
}
