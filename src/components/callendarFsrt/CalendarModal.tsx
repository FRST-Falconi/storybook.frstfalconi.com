import React, { useEffect, useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { X } from 'lucide-react'
import * as Styled from './CallendarFrst.styles'
import { darkTheme } from './CallendarFrst.styles'
import { isSameMonth } from 'date-fns'
import CalendarFrst, { Event } from './index'
import { TrashIcon2 } from '@shared/icons'
import { DeleteEventModal } from './DeleteEventModal'
import { EventDetailsModal } from './EventDetailsModal'



interface CalendarModalProps {
    isOpen: boolean
    onClose: () => void
    currentMonth: Date
    events: Event[]
    onDeleteEvent: (event: Event) => void
}

export const CalendarModal: React.FC<CalendarModalProps> = ({
    isOpen,
    onClose,
    currentMonth,
    events,
    onDeleteEvent
}) => {
    const theme = darkTheme
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
    const [isHoverTrash, setIsHoverTrash] = useState(false)
    const [eventToDelete, setEventToDelete] = useState<Event | null>(null)
    const [showEventDetails, setShowEventDetails] = useState(false)
    const monthEvents = events.filter((event) => isSameMonth(new Date(event.date + 'T12:00:00'), currentMonth))
    const trashRef = useRef<HTMLButtonElement>(null)

    // Agrupa eventos por dia
    const groupedEvents = monthEvents.reduce((acc, event) => {
        const date = new Date(event.date + 'T12:00:00')
        const dateKey = date.toISOString().split('T')[0]
        
        if (!acc[dateKey]) {
            acc[dateKey] = []
        }
        acc[dateKey].push(event)
        return acc
    }, {} as Record<string, Event[]>)

    useEffect(() => {
        const now = new Date()
        const currentEvent = monthEvents.find(event => {
            const eventDate = new Date(event.date + 'T12:00:00')
            const [startHour, startMinute] = event.start.split(':').map(Number)
            const [endHour, endMinute] = event.end.split(':').map(Number)
            
            const eventStart = new Date(eventDate)
            eventStart.setHours(startHour, startMinute, 0, 0)
            
            const eventEnd = new Date(eventDate)
            eventEnd.setHours(endHour, endMinute, 0, 0)
            
            const isToday = eventDate.toDateString() === now.toDateString()
            const isCurrentTimeInRange = now >= eventStart && now <= eventEnd
            
            return isToday && isCurrentTimeInRange
        })
        
        if (currentEvent) {
            setSelectedEvent(currentEvent)
        }
    }, [monthEvents])

    const handleDeleteClick = (event: Event, e: React.MouseEvent) => {
        e.stopPropagation()
        setEventToDelete(event)
    }

    const handleConfirmDelete = () => {
        if (eventToDelete) {
            onDeleteEvent(eventToDelete)
            setEventToDelete(null)
        }
    }

    const handleAccessClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        setShowEventDetails(true)
    }

    const formatEventDate = (date: string) => {
        return new Date(date + 'T12:00:00').toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    if (!isOpen) return null

    return (
        <ThemeProvider theme={theme}>
            <Styled.ModalOverlay onClick={onClose}>
                <Styled.ModalContent onClick={(e) => e.stopPropagation()}>
                    <Styled.ModalHeader>
                        <div>
                            <h2>Sua agenda</h2>
                            <span>Consulte os seus eventos agendados.</span>
                        </div>
                        <Styled.CloseButton onClick={onClose}>
                            <X size={24} />
                        </Styled.CloseButton>
                    </Styled.ModalHeader>

                    <Styled.ModalBody>
                        <Styled.CalendarSection>
                            <CalendarFrst darkMode={true} modalMode={true} />
                        </Styled.CalendarSection>

                        <Styled.EventsSection>
                            <h3 style={{marginBottom: "16px"}}>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
                            {Object.keys(groupedEvents).length === 0 ? (
                                <Styled.NoEvents>Nenhum evento neste mês</Styled.NoEvents>
                            ) : (
                                <Styled.EventsList>
                                    {Object.entries(groupedEvents).map(([date, dayEvents]) => (
                                        <div key={date} style={{display: 'flex', flexDirection: 'column', gap: '10px', background:"#2F2F2F", padding: "16px", borderRadius: "18px"}}>
                                            <Styled.EventDayTitle>
                                                {new Date(date + 'T12:00:00').toLocaleDateString('pt-BR', {
                                                    day: 'numeric',
                                                    month: 'long'
                                                })}
                                            </Styled.EventDayTitle>
                                            {dayEvents.map((event, index) => {
                                                const isSelected = selectedEvent?.date === event.date && 
                                                                 selectedEvent?.start === event.start && 
                                                                 selectedEvent?.end === event.end
                                                return (
                                                    <Styled.EventItem
                                                        key={index}
                                                        selected={isSelected}
                                                        onClick={() => setSelectedEvent(event)}
                                                    >
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                            <Styled.EventDate>{event.start}</Styled.EventDate>
                                                            <Styled.EventTitle>{event.title}</Styled.EventTitle>
                                                        </div>
                                                        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                                                            {isSelected && (
                                                                <Styled.AccessButton onClick={handleAccessClick}>
                                                                    Acessar
                                                                </Styled.AccessButton>
                                                            )}
                                                            <Styled.DeleteButton
                                                                ref={trashRef}
                                                                onMouseEnter={() => setIsHoverTrash(true)}
                                                                onMouseLeave={() => setIsHoverTrash(false)}
                                                                onClick={(e) => handleDeleteClick(event, e)}
                                                            >
                                                                <TrashIcon2 
                                                                    fill={isHoverTrash ? isSelected ? '#fff' : '#FF4D3E' : '#fff'}
                                                                    customColor_1={isHoverTrash ? isSelected ? '#F26818' : '#525252' : 'transparent'}
                                                                />
                                                            </Styled.DeleteButton>
                                                        </div>
                                                    </Styled.EventItem>
                                                )
                                            })}
                                        </div>
                                    ))}
                                </Styled.EventsList>
                            )}
                        </Styled.EventsSection>
                    </Styled.ModalBody>
                </Styled.ModalContent>
            </Styled.ModalOverlay>
            
            <DeleteEventModal
                isOpen={!!eventToDelete}
                onClose={() => setEventToDelete(null)}
                onConfirm={handleConfirmDelete}
            />

            <EventDetailsModal
                isOpen={showEventDetails}
                onClose={() => setShowEventDetails(false)}
                eventDate={selectedEvent ? formatEventDate(selectedEvent.date) : ''}
                eventTime={selectedEvent ? `${selectedEvent.start} - ${selectedEvent.end}` : ''}
                classDetails={selectedEvent?.class}
            />
        </ThemeProvider>
    )
}
