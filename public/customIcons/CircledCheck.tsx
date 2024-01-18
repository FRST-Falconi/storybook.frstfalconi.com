import React from 'react'

export const CircledCheck = ({
  width = '22',
  height = '22',
  fill = '#1BA853'
}:{fill?:string, width?:string, height?:string}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={width} height={height} rx="11" fill={fill} />
      <path
        d="M16.3327 7L8.99935 14.3333L5.66602 11"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
