import { Icon } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { StepsLearningCycle } from './StepLearningCycle'
import * as S from './StepLearningCycleStyle'
import * as Icons from '../../../shared/icons'
export default function StepLearningCycle({
  listSteps,
  setListSteps,
  direction = 'row',
  size = 'medium',
  completed = false
}: StepsLearningCycle) {
  const [stepsList, setStepsList] = useState<any>(listSteps)

  useEffect(() => {
    if (completed) {
      const newSteps = listSteps.map((step) => {
        return {
          ...step,
          status: 'finished'
        }
      })
      setStepsList(newSteps)
      setListSteps(newSteps)
    }
  }, [completed])

  useEffect(() => {
    setStepsList(listSteps)
  }, [listSteps])

  const handleChangeStep = (id: number) => {
    const newListStep = stepsList.map((step, index) => {
      if (index < id) {
        return {
          ...step,
          status: 'finished'
        }
      } else if (index === id) {
        return {
          ...step,
          status: 'inProgress'
        }
      } else {
        return {
          ...step,
          status: 'waiting'
        }
      }
    })

    setStepsList(newListStep)
    setListSteps(newListStep)
  }

  const variantsChek = {
    large: {
      width: '14.17px',
      heigth: '11px'
    },
    medium: {
      width: '9.45px',
      heigth: '7.33px'
    },
    small: {
      width: '8px',
      heigth: '6px'
    }
  }

  const variantsSize = {
    large: {
      icon: {
        width: '46px',
        height: '36px',
        fontSize: '18px'
      },
      title: {
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '130%'
      },
      description: {
        fontSize: '16px',
        marginLeft: '51px'
      }
    },

    medium: {
      icon: {
        width: '29px',
        height: '24px',
        fontSize: '16px',
        lineHeight: '19px'
      },
      title: {
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '21px'
      },
      description: {
        fontSize: '14px',
        marginLeft: '39px'
      }
    },
    small: {
      icon: {
        width: '20px',
        height: '17px',
        fontSize: '1px'
      },
      title: {
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px'
      },
      description: {
        display: 'none'
      }
    }
  }

  return (
    <S.ContainerStepLearningCycle className={direction}>
      {stepsList &&
        stepsList.map((step, i) => {
          return (
            <S.StepCycle key={i + 1} className={step.status}>
              <S.StepCycleArticle>
                <S.IconStatus
                  className={step.status}
                  style={variantsSize[size].icon}
                  onClick={() => handleChangeStep(i)}
                >
                  {step.status === 'finished' ? (
                    <Icons.CheckIconSimple height={variantsChek[size].heigth} width={variantsChek[size].width} />
                  ) : (
                    i + 1
                  )}
                </S.IconStatus>

                <h2 style={variantsSize[size].title}>{step.title}</h2>
              </S.StepCycleArticle>

              {step.status === 'inProgress' && step.description && (
                <p style={variantsSize[size].description}>{step.description}</p>
              )}
            </S.StepCycle>
          )
        })}
    </S.ContainerStepLearningCycle>
  )
}
