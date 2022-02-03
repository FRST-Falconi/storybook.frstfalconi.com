import { useState, useEffect } from 'react'
import * as Global from '../shared/globalComponentsStyle'
import * as Styles from './calendarStyle'
import { StepIconProps } from '@mui/material/StepIcon'
import { WarningIcon } from '../shared/icons'
import { useTranslation } from 'react-i18next'

import { Tooltip, MenuItem, CardContent, StepLabel } from '@mui/material'

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
  const { t } = useTranslation('common')
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

interface calendarProps {
  loading: boolean,
  short: boolean,
  trails: Array<any>,
  calendarEvents: Array<any>,
  activeEvent?: string,
  joinEventClick?: () => void
}

/**
 * @param {calendarProps} props
 */
export default function CalendarCard(props: calendarProps) {
  const { t } = useTranslation('common')

  const [module, setModule] = useState('')
  const [moduleEvents, setModuleEvents] = useState([])
  const [moduleSelector, setModuleSelector] = useState(false)

  const handleChange = (event: any) => {
    setModule(event.target?.value as string)
    setModuleEvents(props.calendarEvents[event.target.value])
  }

  useEffect(() => {
    if (props.trails[0] && props.calendarEvents) {
      setModule(props.trails[0].module_id)
      setModuleEvents(props.calendarEvents[props.trails[0].module_id])
      if (Object.values(props.calendarEvents).length > 1) setModuleSelector(true)
    }
  }, [props.calendarEvents, props.trails])

  return (
    <div>
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
                      return <MenuItem key={index} value={item.module_id}>{item.name} - {item.module_id}</MenuItem>
                    })}
                  </Styles.DropDownList>
                </Styles.FormControlSelect>
              </Styles.ContainerDescription>

              {moduleEvents?.length === 0 &&
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '140px', paddingBottom: '32px' }}>
                  <WarningIcon /><span style={{ paddingLeft: '8px' }}>Em breve você poderá visualizar sua agenda de eventos aqui.</span>
                </div>
              }

              {moduleEvents && <StepsComponent events={moduleEvents} short={props.short} />}

              {moduleEvents && moduleEvents.length > 0 &&
                <Styles.BoxLabelTimeMentoring>
                  <Styles.LabelTimeMentoring>{t('calendar.card.mentoringSchedule')} {t(`calendar.weekdays.${moduleEvents[0].weekday}`)} @ {moduleEvents[0].hour}</Styles.LabelTimeMentoring>
                </Styles.BoxLabelTimeMentoring>
              }
              <Styles.ActionContainer>
                {props.short &&
                  <Styles.LabelSchedule>
                    {/* router.push(`/student/calendar`) */}
                    <Styles.LabelScheduleClick onClick={() => alert('Clicked Label')}>
                      {t('globals.clickHere')}
                    </Styles.LabelScheduleClick>{' '}
                    {t('calendar.card.fullSchedule')}
                  </Styles.LabelSchedule>
                }
                {
                  props.activeEvent &&
                  <Global.FRSTButton style={{ marginLeft: 'auto' }} variant="contained" onClick={() => alert('Clicked Join Button')} disabled={!props.activeEvent}>
                    {t('calendar.card.joinEvent')}
                  </Global.FRSTButton>
                }
              </Styles.ActionContainer>
            </CardContent>

          </Styles.Container>
      }
    </div>
  )
}
