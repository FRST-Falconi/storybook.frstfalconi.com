import React, { useEffect, useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { X } from 'lucide-react'
import * as Styled from './CallendarFrst.styles'
import { darkTheme } from './CallendarFrst.styles'
import { format, isSameMonth } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import CalendarFrst from './index'
import { TrashIcon2 } from '@shared/icons'

interface Event {
    date: string
    title: string
    start: string
    end: string
}

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
                            <h3>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
                            {Object.keys(groupedEvents).length === 0 ? (
                                <Styled.NoEvents>Nenhum evento neste mês</Styled.NoEvents>
                            ) : (
                                <Styled.EventsList>
                                    {Object.entries(groupedEvents).map(([date, dayEvents]) => (
                                        <div key={date} style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                                            <h2>
                                                {new Date(date + 'T12:00:00').toLocaleDateString('pt-BR', {
                                                    day: 'numeric',
                                                    month: 'long'
                                                })}
                                            </h2>
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

                                                        <Styled.DeleteButton
                                                            ref={trashRef}
                                                            onMouseEnter={() => setIsHoverTrash(true)}
                                                            onMouseLeave={() => setIsHoverTrash(false)}
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                onDeleteEvent(event)
                                                            }}
                                                        >
                                                            <TrashIcon2 
                                                                fill={isHoverTrash ? isSelected ? '#fff' : '#FF4D3E' : '#fff'}
                                                                customColor_1={isHoverTrash ? isSelected ? '#F26818' : '#525252' : 'transparent'}
                                                            />
                                                        </Styled.DeleteButton>
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
        </ThemeProvider>
    )
}
