import React, { useState } from 'react'
import ContentCycle from '../ContentCycle'
import { IListContentCycleProps } from './ListContentCycle'
import * as S from './ListContentCycleStyles'

export default function ListContentCycle({
  stepContentCompleted = false,
  listContent,
  onSelect
}: IListContentCycleProps) {
  return (
    <S.Container>
      {listContent.map((content, index) => {
        return (
          <ContentCycle
            description={content.description}
            onSelect={() => onSelect(index)}
            selected={content.selected}
            title={content.title}
            listSkils={content.listSkils}
            urlPhoto={content.urlPhoto}
            urlVideo={content.urlVideo}
            titleVideo={content.titleVideo}
            progress={content.progress}
            started={content.started}
            stepContent={stepContentCompleted}
          />
        )
      })}
    </S.Container>
  )
}
