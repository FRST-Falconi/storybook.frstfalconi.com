import React from 'react'
import { CSSProperties } from 'react'

export const VoteIcon = ({
  style,
  width = '16',
  height = '17',
  stroke = '#444444'
}: {
  style?: CSSProperties | undefined
  width?: string
  height?: string
  stroke?: string
}) => {
  return (
    <svg style={style} width={width} height={height} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2067_11382)">
        <path
          d="M7.9987 14.9192C11.6806 14.9192 14.6654 11.9345 14.6654 8.25257C14.6654 4.57068 11.6806 1.58591 7.9987 1.58591C4.3168 1.58591 1.33203 4.57068 1.33203 8.25257C1.33203 11.9345 4.3168 14.9192 7.9987 14.9192Z"
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 8.25256L8 5.25256L5 8.25256"
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 11.2526V5.25256" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_2067_11382">
          <rect width="16" height="16" fill="white" transform="translate(0 0.252563)" />
        </clipPath>
      </defs>
    </svg>
  )
}
