import Button from '@components/buttons'
import { CloseIcon } from '@shared/icons'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import * as S from './ModalNewFeatures.style'

type TopicsNewFeatues = {
  title: string
  description: React.ReactNode | string
  styleImage?: React.CSSProperties
  midia: string
  topicName: string
  typeMidia: 'gif' | 'video' | 'image'
}

type ModalNewFeaturesProps = {
  title: string
  open: boolean
  Exit?:string
  onClose: () => void
  onFinish: () => void
  onNext?: () => void
  steps: TopicsNewFeatues[]
}

const modalNewFeatures = ({ title = 'Novidades', open, onClose, onFinish, steps, Exit='X', onNext }: ModalNewFeaturesProps) => {
  const [numberCurrentStep, setNumberCurrentStep] = useState(0)
  const [currentTopic, setCurrentTopic] = useState<TopicsNewFeatues>(steps[numberCurrentStep])

  const isLastStep = currentTopic === steps[steps.length - 1]

  const labelButton = isLastStep ? 'Entendi' : 'Próximo'
  const variantButton = isLastStep ? 'primary' : 'secondary'

  useEffect(()=>{
    setCurrentTopic(steps[numberCurrentStep])
  },[steps])

  const handleClickButtonNext = () => {
    if (isLastStep) onFinish();
    else {
      setCurrentTopic(steps[numberCurrentStep + 1]);
      setNumberCurrentStep((prev) => prev + 1);
      if (onNext) onNext(); 
    }
  };

  const handleClickTopic = (id: number) => {
    const [topic] = steps.filter((item, i) => i === id)
    setCurrentTopic(topic)
    setNumberCurrentStep(id)
  }

  return (
    <>
      {open && (
        <S.ModalNewFeaturesContainer
          id="container-modal"
          onClick={(e) => {
            const target = e.target as HTMLDivElement
            target.id === 'container-modal' && onClose()
          }}
        >
          <S.ModalNewFeaturesContent>
          
          <S.divExit><S.TextExit id='exit' onClick={onClose}>{Exit}</S.TextExit></S.divExit>

            <S.AssideNewFeatures>
              <div className="list">
                <S.Text id="modal-title" className="title">{title}</S.Text>

                <S.ListTopics>
                  {steps.map((topic, i) => {
                    return (
                      <S.Topic
                        id={`step${i+1}`}
                        key={i}
                        className={currentTopic.topicName === topic.topicName ? 'active' : ''}
                        onClick={() => handleClickTopic(i)}
                      >
                        {topic.topicName}
                      </S.Topic>
                    )
                  })}

                </S.ListTopics>

              </div>
              <Button
                id={isLastStep ? 'button-finish' : 'button-nextStep'}
                label={labelButton}
                variant={variantButton}
                handleClick={handleClickButtonNext}
                style={{ padding: '8px 32px', height: 'fit-content' }}
              />
            </S.AssideNewFeatures>

            <S.MidiaContent>
              <S.Midia 
              id="midia-container"
              >
                
                {/* <div className="close" onClick={onClose}>
                  <CloseIcon />
                </div> */}
                <div className="content">
                  {currentTopic.typeMidia !== 'video' ? (
                    <img style={currentTopic.styleImage} src={currentTopic.midia} alt={currentTopic.title} />
                  ) : (
                    <ReactPlayer
                      url={'currentTopic.midia'}
                      controls
                      playing
                      style={{ width: '100%', height: '100%' }}
                      // onEnded={handleClickButtonNext}
                    />
                  )}
                </div>
              </S.Midia>
              <S.ContentDescription>

                <S.Text id="step-title" className="subtitle">{currentTopic.title}</S.Text>

                <S.Text id="step-description">{currentTopic.description}</S.Text>
              </S.ContentDescription>
            </S.MidiaContent>
          </S.ModalNewFeaturesContent>
        </S.ModalNewFeaturesContainer>
      )}
    </>
  )
}

export default modalNewFeatures
