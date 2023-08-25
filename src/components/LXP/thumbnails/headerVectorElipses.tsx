import { color } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import VectorEllipse from './vectorEllipse'



const HeaderVectorElipses = ({ provided, direction }) => {
  return (
    <div ref={provided ? provided.innerRef : null} {...(provided ? provided.dragHandleProps : null)} style={{display: 'flex', width:'fit-content', height:'fit-content', flexDirection: direction === 'column' ? 'row' : 'column'}}>
      {[1, 2, 3].map((thumb) => {
        const arr = new Array(10).fill('')
        return (
          <div style={{ width: 'fit-content', display: 'flex', justifyContent: 'center', cursor: 'pointer', flexDirection: direction === 'column' ? 'column' : 'row'}} key={thumb}>
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
