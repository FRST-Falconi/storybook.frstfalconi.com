import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as Styled from './CallendarFrst.styles';
import { lightTheme, darkTheme } from './CallendarFrst.styles';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarFrstIcon } from "@shared/icons";
import { CalendarModal } from './CalendarModal';

interface Event {
  date: string;
  title: string;
  start: string;
  end: string;
}

export default function CalendarFrst({ darkMode = true, modalMode = false }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState<Event[]>([
    { date: "2025-04-24", title: "Reunião com equipe", start: "10:00", end: "12:00" },
    { date: "2025-04-24", title: "Reunião com equipe 2", start: "23:00", end: "23:50" },
    { date: "2025-04-26", title: "Consulta médica", start: "14:00", end: "16:00" },
  ]);
  const theme = darkMode ? darkTheme : lightTheme;

  const handleClickCalendarView = () => {
    setIsModalOpen(true);
  };

  const handleDeleteEvent = (eventToDelete: Event) => {
    setEvents(events.filter(event => event.date !== eventToDelete.date));
  };

  const renderHeader = () => (
    <Styled.Header>
      <Styled.MonthTitle modalMode={modalMode}>{format(currentMonth, "MMMM yyyy",{ locale: ptBR })}</Styled.MonthTitle>
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
        const dateStr = format(cloneDay, "yyyy-MM-dd");
        const event = events.find(e => e.date === dateStr);
  
        const DayComponent = (
          <Styled.Day
            selected={selectedDate && isSameDay(cloneDay, selectedDate)}
            dimmed={!isSameMonth(cloneDay, currentMonth)}
            isEvent={!!event}
            modalMode={modalMode}
            onClick={() => !isSameMonth(cloneDay, currentMonth) ? null : setSelectedDate(cloneDay)}
          >
            {format(cloneDay, "d")}
           {event && <Styled.PointEvent modalMode={modalMode} selected={selectedDate && isSameDay(cloneDay, selectedDate)}/>}
          </Styled.Day>
        );
        days.push(
          <Styled.TooltipWrapper key={cloneDay.toString()}>
          {DayComponent}
          {event && <Styled.Tooltip>{event.title}</Styled.Tooltip>}
        </Styled.TooltipWrapper>
        );
        day = addDays(day, 1);
      }
    }

    return <Styled.CalendarGrid modalMode={modalMode}>{days}</Styled.CalendarGrid>;
  };

  return (
    <ThemeProvider theme={theme}>
      <Styled.Container modalMode={modalMode}>
        { !modalMode && <Styled.Title>Meus eventos</Styled.Title>}
        {renderHeader()}
        <Styled.WeekDays style={{marginBottom: "12px"}}>
          {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'].map(day => (
            <div key={day}>{day}</div>
          ))}
        </Styled.WeekDays>
        {renderDays()}
       { !modalMode && <Styled.Footer onClick={handleClickCalendarView}>
          <div style={{marginTop: '10px'}}>
            <CalendarFrstIcon width="24" height="24"/>
          </div>
          <span> Ver calendário</span>
        </Styled.Footer>}

        <CalendarModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          currentMonth={currentMonth}
          events={events}
          onDeleteEvent={handleDeleteEvent}
        />
      </Styled.Container>
    </ThemeProvider>
  );
}
