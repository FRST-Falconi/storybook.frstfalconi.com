import React from 'react'

export function CheckIcon({ color = "#1BA853" }) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" fill="#D1F6D1" />
            <path
                d="M21.3332 12L13.9998 19.3333L10.6665 16"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
