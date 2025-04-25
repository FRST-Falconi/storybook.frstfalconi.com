import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as Styled from './CallendarFrst.styles';
import { lightTheme, darkTheme } from './CallendarFrst.styles';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarFrstIcon } from "@shared/icons";
import { CalendarModal } from './CalendarModal';

export interface Event {
  date: string;
  title: string;
  start: string;
  end: string;
  class?: {
    type: string;
    subtitle: string;
    location: string;
    duration: string;
    description: string;
    instructor: string;
    topics: string[];
    additionalInfo?: string;
  };
}

export default function CalendarFrst({ darkMode = true, modalMode = false }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState<Event[]>([
    { 
      date: "2025-04-24", 
      title: "Criando e gerenciando times de sucesso", 
      start: "09:00", 
      end: "12:00",
      class: {
        type: "Aula presencial",
        subtitle: "Criando e gerenciando times de sucesso",
        location: "Sede da empresa",
        duration: "3 horas de carga horária",
        description: "Neste aula presencial nós teremos como convidada a especialista em Negócios e Inteligência emocional, Mariane Vasconcelos.",
        instructor: "Mariane Vasconcelos",
        topics: [
          "Identificando e reunindo diferentes habilidades",
          "Definição de papéis e diretrizes",
          "Colhendo resultados: celebrando os acertos e analisando os erros"
        ],
        additionalInfo: "Ao final, teremos uma momento direcionado para esclarecimentos de dúvidas."
      }
    },
    { 
      date: "2025-04-24", 
      title: "Workshop de Liderança Ágil", 
      start: "14:00", 
      end: "17:00",
      class: {
        type: "Workshop",
        subtitle: "Workshop de Liderança Ágil",
        location: "Sala de Treinamento A",
        duration: "3 horas de carga horária",
        description: "Workshop prático sobre metodologias ágeis e sua aplicação na liderança moderna.",
        instructor: "Carlos Silva",
        topics: [
          "Fundamentos do Agile",
          "Ferramentas de gestão ágil",
          "Práticas de liderança adaptativa"
        ],
        additionalInfo: "Traga seu laptop para os exercícios práticos."
      }
    },
    { 
      date: "2025-04-26", 
      title: "Gestão Financeira para Líderes", 
      start: "10:00", 
      end: "12:00",
      class: {
        type: "Curso",
        subtitle: "Gestão Financeira para Líderes",
        location: "Auditório Principal",
        duration: "2 horas de carga horária",
        description: "Curso focado em desenvolver habilidades financeiras essenciais para líderes de equipe.",
        instructor: "Ana Paula Mendes",
        topics: [
          "Análise de indicadores financeiros",
          "Gestão de orçamento de equipe",
          "Tomada de decisão baseada em dados"
        ],
        additionalInfo: "Material didático será fornecido no início da aula."
      }
    }
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
        const eventsDay = events.filter(e => e.date === dateStr);
  
        const DayComponent = (
          <Styled.Day
            selected={selectedDate && isSameDay(cloneDay, selectedDate)}
            dimmed={!isSameMonth(cloneDay, currentMonth)}
            isEvent={!!eventsDay?.length}
            modalMode={modalMode}
            onClick={() => !isSameMonth(cloneDay, currentMonth) ? null : setSelectedDate(cloneDay)}
          >
            {format(cloneDay, "d")}
           {eventsDay?.length > 0 && <Styled.PointEvent modalMode={modalMode} selected={selectedDate && isSameDay(cloneDay, selectedDate)}/>}
          </Styled.Day>
        );
        days.push(
          <Styled.TooltipWrapper key={cloneDay.toString()}>
          {DayComponent}
          {eventsDay?.length > 0 && <Styled.Tooltip>{eventsDay.map(e => <div style={{marginBottom: "4px"}}>{e.start} - {e.title}</div>)}</Styled.Tooltip>}
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
