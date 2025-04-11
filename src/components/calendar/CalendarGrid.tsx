import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface CalendarGridProps {
  onDateSelect?: (date: Date) => void;
  selectedDate?: Date;
}

const Container = styled.div`
  background: #1E1E1E;
  border-radius: 8px;
  padding: 16px;
  width: fit-content;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: #FFFFFF;
`;

const MonthYear = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const Navigation = styled.div`
  display: flex;
  gap: 8px;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  padding: 4px 8px;
  font-size: 14px;
  
  &:hover {
    color: #FF6B2C;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

const WeekDay = styled.div`
  color: #FFFFFF;
  text-align: center;
  font-size: 14px;
  padding: 8px;
`;

const Day = styled.div<{ 
  isSelected?: boolean; 
  isCurrentMonth?: boolean;
  isToday?: boolean;
}>`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.isCurrentMonth ? '#FFFFFF' : '#666666'};
  background: ${props => {
    if (props.isSelected) return '#FF6B2C';
    if (!props.isCurrentMonth) return '#2A2A2A';
    return '#333333';
  }};
  border-radius: 4px;
  
  &:hover {
    background: ${props => !props.isSelected && '#444444'};
  }
`;

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  onDateSelect,
  selectedDate: propSelectedDate
}) => {
  const { t } = useTranslation();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(propSelectedDate || new Date());

  const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Ajusta para começar na segunda-feira (1) em vez de domingo (0)
    let firstDayIndex = firstDay.getDay() - 1;
    if (firstDayIndex === -1) firstDayIndex = 6;

    return {
      totalDays: lastDay.getDate(),
      firstDayIndex,
    };
  };

  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() &&
           currentMonth.getMonth() === today.getMonth() &&
           currentMonth.getFullYear() === today.getFullYear();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
  };

  const handleDateSelect = (day: number, isCurrentMonth: boolean) => {
    const newDate = new Date(currentMonth);
    if (!isCurrentMonth) {
      if (day > 15) {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
    }
    newDate.setDate(day);
    setSelectedDate(newDate);
    onDateSelect?.(newDate);
  };

  const { totalDays, firstDayIndex } = getDaysInMonth(currentMonth);
  
  // Dias do mês anterior
  const prevMonth = new Date(currentMonth);
  prevMonth.setMonth(prevMonth.getMonth() - 1);
  const prevMonthDays = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0).getDate();
  const prevDays = Array.from({ length: firstDayIndex }, (_, i) => prevMonthDays - firstDayIndex + i + 1);
  
  // Dias do mês atual
  const currentDays = Array.from({ length: totalDays }, (_, i) => i + 1);
  
  // Dias do próximo mês
  const remainingDays = 42 - (firstDayIndex + totalDays); // 42 = 6 semanas * 7 dias
  const nextDays = Array.from({ length: remainingDays }, (_, i) => i + 1);

  return (
    <Container>
      <Header>
        <MonthYear>
          {currentMonth.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}
        </MonthYear>
        <Navigation>
          <NavButton onClick={() => navigateMonth('prev')}>&lt;</NavButton>
          <NavButton onClick={() => navigateMonth('next')}>&gt;</NavButton>
        </Navigation>
      </Header>

      <Grid>
        {weekDays.map(day => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
        
        {prevDays.map(day => (
          <Day
            key={`prev-${day}`}
            isCurrentMonth={false}
            onClick={() => handleDateSelect(day, false)}
          >
            {day}
          </Day>
        ))}
        
        {currentDays.map(day => (
          <Day
            key={`current-${day}`}
            isCurrentMonth={true}
            isSelected={
              day === selectedDate.getDate() &&
              currentMonth.getMonth() === selectedDate.getMonth() &&
              currentMonth.getFullYear() === selectedDate.getFullYear()
            }
            isToday={isToday(day)}
            onClick={() => handleDateSelect(day, true)}
          >
            {day}
          </Day>
        ))}
        
        {nextDays.map(day => (
          <Day
            key={`next-${day}`}
            isCurrentMonth={false}
            onClick={() => handleDateSelect(day, false)}
          >
            {day}
          </Day>
        ))}
      </Grid>
    </Container>
  );
}; 