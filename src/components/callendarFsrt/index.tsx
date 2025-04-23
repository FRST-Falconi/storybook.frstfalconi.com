import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as Styled from './CallendarFrst.styles';
import { lightTheme, darkTheme } from './CallendarFrst.styles';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarFrstIcon } from "@shared/icons";
import { disabled } from '../DS/select/select.stories';

export default function CalendarFrst({ darkMode = true, onClickCalendarView }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const theme = darkMode ? darkTheme : lightTheme;

  const handleClickCalendarView = () => {
    onClickCalendarView();
  }

  const renderHeader = () => (
    <Styled.Header>
      <span>{format(currentMonth, "MMMM yyyy",{ locale: ptBR })}</span>
      <Styled.MonthNav>
        <Styled.IconButton onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}><ChevronLeft size={18}  /></Styled.IconButton>
        <Styled.IconButton onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}><ChevronRight size={18}  /></Styled.IconButton>
        
      </Styled.MonthNav>
    </Styled.Header>
  );

  const renderDays = () => {
    const startDate = startOfWeek(startOfMonth(currentMonth), { locale: ptBR, weekStartsOn: 1 });
    const endDate = endOfWeek(endOfMonth(currentMonth), { locale: ptBR, weekStartsOn: 1 });

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
            onClick={() => !isSameMonth(cloneDay, currentMonth) ? null : setSelectedDate(cloneDay)}
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
        <Styled.Footer onClick={()=> handleClickCalendarView()}>
          <div style={{marginTop: '10px'}}>
            <CalendarFrstIcon width="24" height="24"/>
          </div>
          <span> Ver calendário</span>
        </Styled.Footer>
      </Styled.Container>
    </ThemeProvider>
  );
}
