require('@shared/global.css')
import { useState, useEffect } from 'react'
import * as Global from '@shared/globalComponentsStyle'
import * as Styles from './calendarStyle'
import { StepIconProps } from '@mui/material/StepIcon'
import { WarningIcon } from '@shared/icons'
import { useTranslation } from 'react-i18next'

import { Tooltip, MenuItem, CardContent, StepLabel } from '@mui/material'

interface Trail {
  id: string,
  moduleID: string,
  name: string,
  events: Array<any>
  nextEvent?: any,
  joinEventAction?: () => void,
}

interface CalendarProps {
  loading: boolean,
  short: boolean,
  trails: Array<Trail>,
  showFullPageAction?: () => void
}

function getStepIcon(props: StepIconProps) {
  const { active, completed } = props

  return (
    <Styles.ColorlibStepIconRoot ownerState={{ completed, active }}>
      {
        completed ? <Styles.CheckIconCustom /> : active ? <Styles.LoginIconCustom /> : <div />
      }
    </Styles.ColorlibStepIconRoot>
  )
}

function getMissedStepIcon() {
  return (
    <Styles.ColorlibStepIconRoot ownerState={{ completed: true, active: true }} >
      <div />
    </Styles.ColorlibStepIconRoot>
  )
}

function StepsComponent(props: any) {
  const { t } = useTranslation()
  let { events } = props

  return (
    <Styles.BoxStepper>
      <Styles.CustomStepper alternativeLabel connector={<Styles.ColorlibConnector />}>
        {events && events.length > 0 && events?.map((event) => (
          <Styles.CustomStep key={event.id} completed={event.completed} active={event.today}>
            <Styles.LabelDateStepper>{event.day} {t(`calendar.monthsInitials.${event.month}`)}</Styles.LabelDateStepper>
            <Styles.ContainerStepper>
              <Tooltip title={event.title}>
                <StepLabel StepIconComponent={event.completed && !event.present ? getMissedStepIcon : getStepIcon}>
                  <Styles.LabelTitleStepper>{event.title}</Styles.LabelTitleStepper>
                </StepLabel>
              </Tooltip>
            </Styles.ContainerStepper>
          </Styles.CustomStep>
        ))}
      </Styles.CustomStepper>
    </Styles.BoxStepper >
  )
}

/**
 * @param {CalendarProps} props
 */
export default function CalendarCard(props: CalendarProps) {
  const { t } = useTranslation()

  const [module, setModule] = useState(null)
  const [moduleEvents, setModuleEvents] = useState([])
  const [moduleSelector, setModuleSelector] = useState(false)

  const handleChange = (event: any) => {
    let val = event.target?.value
    setModule(val)
    if (props.trails[val].events) setModuleEvents(props.trails[val].events)
  }

  useEffect(() => {
    if (props.trails[0]) {
      setModule(0)
      if (props.trails[0].events) setModuleEvents(props.trails[0].events)
      if (props.trails.length > 1) setModuleSelector(true)
    }
  }, [props.trails])

  return (
    <div style={{ height: '100%' }}>
      {
        props.loading ?
          <Styles.Container className='shimmer'></Styles.Container>
          :
          <Styles.Container>
            <CardContent style={{ padding: '0px' }} >
              <Styles.Title>{t('calendar.title')}</Styles.Title>
              <Styles.ContainerDescription hidden={!moduleSelector}>
                <Styles.TextDescription>{t('calendar.card.description')}</Styles.TextDescription>
                <Styles.FormControlSelect fullWidth>
                  <Styles.DropDownList id="module-id" value={module} onChange={handleChange}>
                    {props.trails?.map((item, index) => {
                      return <MenuItem key={index} value={index}>{item.name} - {item.moduleID}</MenuItem>
                    })}
                  </Styles.DropDownList>
                </Styles.FormControlSelect>
              </Styles.ContainerDescription>

              {moduleEvents?.length === 0 &&
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '140px', paddingBottom: '32px' }}>
                  <WarningIcon /><span style={{ paddingLeft: '8px' }}>{t('calendar.notAvailable')}</span>
                </div>
              }

              {moduleEvents && <StepsComponent events={moduleEvents} short={props.short} />}

              {moduleEvents && moduleEvents.length > 0 &&
                <Styles.BoxLabelTimeMentoring>
                  {props.trails[module]?.nextEvent ?
                    <Styles.LabelTimeMentoring>{t('calendar.card.mentoringSchedule')} {t(`calendar.weekdays.${props.trails[module].nextEvent.weekday}`)} @ {props.trails[module]?.nextEvent.hour}</Styles.LabelTimeMentoring>
                    :
                    <Styles.LabelTimeMentoring>{t(`calendar.noMoreEvents`)}</Styles.LabelTimeMentoring>
                  }

                </Styles.BoxLabelTimeMentoring>
              }
              <Styles.ActionContainer>
                {props.short &&
                  <Styles.LabelSchedule>
                    <Styles.LabelScheduleClick onClick={props.showFullPageAction}>
                      {t('globals.clickHere')}
                    </Styles.LabelScheduleClick>{' '}
                    {t('calendar.card.fullSchedule')}
                  </Styles.LabelSchedule>
                }
                {
                  props.trails[module]?.joinEventAction &&
                  <Global.FRSTButton style={{ marginLeft: 'auto' }} variant="contained" onClick={props.trails[module]?.joinEventAction}>
                    {t('calendar.card.joinEvent')}
                  </Global.FRSTButton>
                }
              </Styles.ActionContainer>
            </CardContent>

          </Styles.Container>
      }
    </div >
  )
}
