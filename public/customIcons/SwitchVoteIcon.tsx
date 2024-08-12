import React from 'react'
import { CSSProperties } from 'react'

export const SwitchVoteIcon = ({
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
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.3335 4.36444V7.05746H5.87895" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.6665 11.5459V8.85284H10.1211" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.602 6.60864C11.3868 5.96536 11.0211 5.39023 10.5391 4.93691C10.057 4.4836 9.47421 4.16687 8.84513 4.01628C8.21606 3.86569 7.56118 3.88616 6.9416 4.07576C6.32202 4.26536 5.75793 4.61792 5.30198 5.10055L3.3335 7.05748M12.6668 8.85282L10.6983 10.8097C10.2424 11.2924 9.67831 11.6449 9.05873 11.8345C8.43915 12.0241 7.78427 12.0446 7.15519 11.894C6.52612 11.7434 5.94335 11.4267 5.46127 10.9734C4.97919 10.5201 4.61351 9.94493 4.39834 9.30166" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  )
}
