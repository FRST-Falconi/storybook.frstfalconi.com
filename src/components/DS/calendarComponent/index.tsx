// src/components/Calendar/Calendar.tsx

import React, { useMemo } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarWrapper } from './style'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const DnDCalendar = withDragAndDrop(Calendar)

export type Evento = {
    id: number
    title: string
    start: Date
    end: Date
    categoria: string
}

type Props = {
    eventos: Evento[]
    setEventos: (eventos: Evento[]) => void
    filtroCategoria?: string
}

const categorias = {
    trabalho: '#e74c3c',
    pessoal: '#2ecc71',
    lazer: '#3498db'
}

export const CalendarComponent: React.FC<Props> = ({ eventos, setEventos, filtroCategoria = 'todos' }) => {
    const eventosFiltrados = useMemo(() => {
        if (filtroCategoria === 'todos') return eventos
        return eventos.filter((e) => e.categoria === filtroCategoria)
    }, [eventos, filtroCategoria])

    const onEventDrop = ({ event, start, end }) => {
        const novosEventos = eventos.map((e) => (e.id === event.id ? { ...e, start, end } : e))
        setEventos(novosEventos)
    }

    const eventStyleGetter = (event) => {
        const backgroundColor = categorias[event.categoria] || '#95a5a6'
        return {
            style: {
                backgroundColor,
                borderRadius: '8px',
                color: 'white',
                border: 'none',
                padding: '4px',
                fontFamily: 'Work Sans'
            }
        }
    }

    const localizer = dateFnsLocalizer({
        format: (date, formatStr, options) => format(date, formatStr, { ...options, locale: ptBR }),
        parse,
        startOfWeek: () => startOfWeek(new Date(), { locale: ptBR }),
        getDay,
        locales: { 'pt-BR': ptBR }
    })

    return (
        <CalendarWrapper>
            <DnDCalendar
                localizer={localizer}
                events={eventosFiltrados}
                defaultView="week"
                views={['month', 'week', 'day', 'agenda']}
                onEventDrop={onEventDrop}
                resizable
                style={{ height: '80vh', fontFamily: 'Work Sans' }}
                eventPropGetter={eventStyleGetter}
                messages={{
                    next: 'Próximo',
                    previous: 'Anterior',
                    today: 'Hoje',
                    month: 'Mês',
                    week: 'Semana',
                    day: 'Dia',
                    agenda: 'Lista',
                    date: 'Data',
                    time: 'Hora',
                    event: 'Evento',
                    noEventsInRange: 'Nenhum evento neste período.',
                    allDay: 'Dia todo'
                }}
            />
        </CalendarWrapper>
    )
}
