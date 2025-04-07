// src/components/Calendar/Calendar.stories.tsx

import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CalendarComponent, Evento } from './index'

export default {
    title: 'DS/CalendarComponent',
    component: CalendarComponent
} as ComponentMeta<typeof CalendarComponent>

const eventosIniciais: Evento[] = [
    {
        id: 1,
        title: 'Reunião de equipe',
        start: new Date(),
        end: new Date(new Date().getTime() + 60 * 60 * 1000),
        categoria: 'trabalho'
    },
    {
        id: 2,
        title: 'Academia',
        start: new Date(new Date().setHours(18, 0)),
        end: new Date(new Date().setHours(19, 0)),
        categoria: 'pessoal'
    },
    {
        id: 3,
        title: 'Cinema com amigos',
        start: new Date(new Date().setDate(new Date().getDate() + 1)),
        end: new Date(new Date().setDate(new Date().getDate() + 1)),
        categoria: 'lazer'
    }
]

export const Interativo: ComponentStory<typeof CalendarComponent> = () => {
    const [eventos, setEventos] = useState<Evento[]>(eventosIniciais)
    const [filtro, setFiltro] = useState('todos')

    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: 16 }}>
                <label style={{ marginRight: 8 }}>Filtrar por categoria:</label>
                <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                    <option value="todos">Todos</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="pessoal">Pessoal</option>
                    <option value="lazer">Lazer</option>
                </select>
            </div>
            <CalendarComponent eventos={eventos} setEventos={setEventos} filtroCategoria={filtro} />
        </div>
    )
}
