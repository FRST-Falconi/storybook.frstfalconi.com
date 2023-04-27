import Button from '@components/buttons'
import { IContentCycleProps } from './ContentCycle'
import * as S from './ContentCycleStyles'
import * as Icons from '../../../shared/icons'
import ModalVideo from '@components/modal/modalVideo'
import { useState } from 'react'
import Tooltip from '@components/LXP/tooltip'
export default function ContentCycle({
  title,
  description,
  selected,
  listSkils,
  urlPhoto,
  urlVideo,
  titleVideo,
  progress,
  started,
  stepContent,
  onSelect
}: IContentCycleProps) {
  const [openModal, setOpenModal] = useState(false)
  const [select, setSelect] = useState(selected)

  const handleClick = () => {
    onSelect()
    setSelect(!select)
  }
  return (
    <S.Container className={selected && 'selected'} onClick={handleClick}>
      <S.Thumbnail>
        <img src={urlPhoto} alt={title} />
      </S.Thumbnail>
      <S.Content>
        <S.Article>
          <S.Options>
            <S.Title>{title}</S.Title>
            {stepContent && (
              <Tooltip position="top" textTooltip="Remover">
                <Icons.Trash />
              </Tooltip>
            )}
          </S.Options>
          <S.Description>{description}</S.Description>
        </S.Article>
        <S.SkillsList>
          <p className="title">Competencias: </p>
          {listSkils.map((skill, index) => {
            return (
              <S.Skill key={index} id={skill}>
                {skill}
              </S.Skill>
            )
          })}
        </S.SkillsList>
        {started ? (
          <S.ContentBarProgess>
            <S.BarProgress>
              <S.Progress progress={progress}></S.Progress>
            </S.BarProgress>
            <p>{progress}%</p>
          </S.ContentBarProgess>
        ) : (
          <Button
            startIcon={<Icons.PlayLineIcon fill="#0645AD" />}
            variant="link"
            label="Ver Teaser"
            handleClick={() => setOpenModal(true)}
            sizeIcon="24px"
          />
        )}
      </S.Content>
      <ModalVideo
        timeBegin={0}
        open={openModal}
        handleClose={() => setOpenModal(false)}
        videoUrl={urlVideo}
        nameVideo={titleVideo}
      />
    </S.Container>
  )
}
