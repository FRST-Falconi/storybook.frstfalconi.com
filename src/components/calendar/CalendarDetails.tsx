import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface CalendarEvent {
  id: string;
  time: string;
  title: string;
  canAccess?: boolean;
}

interface Period {
  title: string;
  timeRange: string;
  events: CalendarEvent[];
}

interface CalendarDetailsProps {
  selectedDate: Date;
  periods: {
    morning: CalendarEvent[];
    afternoon: CalendarEvent[];
    night: CalendarEvent[];
  };
  onEventAccess?: (event: CalendarEvent) => void;
  onEventDelete?: (event: CalendarEvent) => void;
}

const Container = styled.div`
  color: #FFFFFF;
`;

const DateHeader = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 24px 0;
`;

const PeriodSection = styled.div`
  background: #1E1E1E;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

const PeriodHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background: #2A2A2A;
  gap: 8px;
`;

const PeriodIcon = styled.span`
  color: #999;
`;

const PeriodTitle = styled.span`
  color: #FFFFFF;
  font-size: 14px;
  flex: 1;
`;

const PeriodTime = styled.span`
  color: #666;
  font-size: 12px;
`;

const EventsList = styled.div`
  padding: 8px;
`;

const EventItem = styled.div<{ canAccess?: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px;
  background: ${props => props.canAccess ? '#333333' : '#2A2A2A'};
  border-radius: 4px;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const EventTime = styled.span`
  color: #FF6B2C;
  font-size: 14px;
  width: 48px;
`;

const EventTitle = styled.span`
  color: #FFFFFF;
  font-size: 14px;
  flex: 1;
  margin: 0 16px;
`;

const AccessButton = styled.button`
  background: #FF6B2C;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 12px;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    background: #E55B1C;
  }
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 4px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #FF6B2C;
  }
`;

export const CalendarDetails: React.FC<CalendarDetailsProps> = ({
  selectedDate,
  periods,
  onEventAccess,
  onEventDelete,
}) => {
  const { t } = useTranslation();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const periodIcons = {
    morning: '🌅',
    afternoon: '☀️',
    night: '🌙'
  };

  const renderEvents = (events: CalendarEvent[], period: string) => (
    <PeriodSection>
      <PeriodHeader>
        <PeriodIcon>{periodIcons[period as keyof typeof periodIcons]}</PeriodIcon>
        <PeriodTitle>
          {t(`calendar.periods.${period}`)}
        </PeriodTitle>
        <PeriodTime>12h-18h</PeriodTime>
      </PeriodHeader>
      <EventsList>
        {events.map(event => (
          <EventItem key={event.id} canAccess={event.canAccess}>
            <EventTime>{event.time}</EventTime>
            <EventTitle>{event.title}</EventTitle>
            {event.canAccess && (
              <>
                <AccessButton onClick={() => onEventAccess?.(event)}>
                  {t('calendar.access')}
                </AccessButton>
                <DeleteButton onClick={() => onEventDelete?.(event)}>
                  🗑️
                </DeleteButton>
              </>
            )}
          </EventItem>
        ))}
      </EventsList>
    </PeriodSection>
  );

  return (
    <Container>
      <DateHeader>
        {formatDate(selectedDate)}
      </DateHeader>
      {renderEvents(periods.morning, 'morning')}
      {renderEvents(periods.afternoon, 'afternoon')}
      {renderEvents(periods.night, 'night')}
    </Container>
  );
}; 