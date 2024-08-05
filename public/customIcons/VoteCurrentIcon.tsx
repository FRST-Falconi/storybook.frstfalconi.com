import React from 'react'
import { CSSProperties } from 'react'

export const VoteCurrentIcon = ({
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
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33398 5.05884V8.906H6.97035" stroke="#444444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.6676 15.318V11.4708H13.0312" stroke="#444444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.1461 8.26484C14.8387 7.34587 14.3163 6.52425 13.6276 5.87666C12.939 5.22906 12.1064 4.77659 11.2077 4.56147C10.3091 4.34634 9.37353 4.37557 8.48841 4.64643C7.6033 4.9173 6.79747 5.42096 6.14611 6.11043L3.33398 8.90603M16.6673 11.4708L13.8552 14.2664C13.2038 14.9559 12.398 15.4595 11.5129 15.7304C10.6278 16.0013 9.69223 16.0305 8.79355 15.8154C7.89487 15.6003 7.06235 15.1478 6.37366 14.5002C5.68497 13.8526 5.16257 13.031 4.8552 12.112" stroke="#444444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
