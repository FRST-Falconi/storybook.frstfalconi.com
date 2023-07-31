import { color } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import VectorEllipse from './vectorEllipse'

const HeaderVectorElipses = ({ provided }) => {
  return (
    <div ref={provided ? provided.innerRef : null} {...(provided ? provided.dragHandleProps : null)}>
      {[1, 2, 3].map((thumb) => {
        const arr = new Array(10).fill('')
        return (
          <div style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }} key={thumb}>
            {arr.map((i, k) => {
              return <VectorEllipse key={k} />
            })}
          </div>
        )
      })}
    </div>
  )
}

export default HeaderVectorElipses
