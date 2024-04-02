import React from 'react'
import { CSSProperties } from 'react'

export const ExcludeVoteIcon = ({
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
      <path
        d="M8.00065 14.9381C11.6825 14.9381 14.6673 11.9533 14.6673 8.2714C14.6673 4.5895 11.6825 1.60474 8.00065 1.60474C4.31875 1.60474 1.33398 4.5895 1.33398 8.2714C1.33398 11.9533 4.31875 14.9381 8.00065 14.9381Z"
        stroke={stroke}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6673 5.60474L5.33398 10.9381"
        stroke={stroke}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.33398 5.60474L10.6673 10.9381"
        stroke={stroke}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
