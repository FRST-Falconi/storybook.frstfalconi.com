// Create react context to share data between components

import React from 'react'

interface ContextProps {
    selected?: boolean
}

export const SelectLXPContext = React.createContext<ContextProps | null>(null)
