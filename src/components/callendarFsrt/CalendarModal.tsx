import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { X } from 'lucide-react';
import * as Styled from './CallendarFrst.styles';
import { lightTheme, darkTheme } from './CallendarFrst.styles';
import { format, isSameMonth } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import CalendarFrst from '.';

interface Event {
  date: string;
  title: string;
}

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMonth: Date;
  events: Event[];
  onDeleteEvent: (event: Event) => void;
  darkMode?: boolean;
  modalMode?: boolean;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  onClose,
  currentMonth,
  events,
  onDeleteEvent,
  darkMode = true
}) => {
  const theme = darkMode ? darkTheme : lightTheme;
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const monthEvents = events.filter(event => 
    isSameMonth(new Date(event.date), currentMonth)
  );

  if (!isOpen) return null;

  return (
    <ThemeProvider theme={theme}>
      <Styled.ModalOverlay onClick={onClose}>
        <Styled.ModalContent onClick={e => e.stopPropagation()}>
          <Styled.ModalHeader>
            <h2>Calendário Detalhado</h2>
            <Styled.CloseButton onClick={onClose}>
              <X size={24} />
            </Styled.CloseButton>
          </Styled.ModalHeader>
          
          <Styled.ModalBody>
            <Styled.CalendarSection>
                <CalendarFrst darkMode={darkMode} />
            </Styled.CalendarSection>
            
            <Styled.EventsSection>
              <h3>Eventos do Mês</h3>
              {monthEvents.length === 0 ? (
                <Styled.NoEvents>Nenhum evento neste mês</Styled.NoEvents>
              ) : (
                <Styled.EventsList>
                  {monthEvents.map((event, index) => (
                    <Styled.EventItem
                      key={index}
                      selected={selectedEvent?.date === event.date}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <Styled.EventDate>
                        {format(new Date(event.date), "dd/MM/yyyy", { locale: ptBR })}
                      </Styled.EventDate>
                      <Styled.EventTitle>{event.title}</Styled.EventTitle>
                      <Styled.DeleteButton
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteEvent(event);
                        }}
                      >
                        Excluir
                      </Styled.DeleteButton>
                    </Styled.EventItem>
                  ))}
                </Styled.EventsList>
              )}
            </Styled.EventsSection>
          </Styled.ModalBody>
        </Styled.ModalContent>
      </Styled.ModalOverlay>
    </ThemeProvider>
  );
}; 