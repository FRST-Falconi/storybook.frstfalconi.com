import { useState, useEffect } from 'react'
import * as Global from '@styles/globalComponentsStyle'
import * as Styles from './calendarStyle'
import { SelectChangeEvent } from '@mui/material/Select'
import { StepIconProps } from '@mui/material/StepIcon'
import { WarningIcon } from '../shared/icons'

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

function StepsComponent(props) {
  let { events } = props

  return (
    <Styles.BoxStepper>
      <Styles.CustomStepper alternativeLabel connector={<Styles.ColorlibConnector />}>
        {events && events.length > 0 && events.map((event, index) => (
          <Styles.CustomStep key={event.id} completed={event.completed} active={event.today}>
            <Styles.LabelDateStepper>{event.day} {`globals.monthsInitials.${event.month}`}</Styles.LabelDateStepper>
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
  short: boolean,
  mentors: boolean
}

export default function CalendarCard(props: calendarProps) {

  // const router = useRouter() should create action props

  const isTablet = false
  const trails = []
  const calendarEvents = []
  const activeEvent = []
  const loading = true

  const [module, setModule] = useState('')
  const [moduleEvents, setModuleEvents] = useState(null)
  const [moduleSelector, setModuleSelector] = useState(false)

  const handleChange = (event: SelectChangeEvent) => {
    setModule(event.target.value as string)
    setModuleEvents(calendarEvents[event.target.value])
  }

  useEffect(() => {
    if (trails[0] && calendarEvents) {
      setModule(trails[0].module_id)
      setModuleEvents(calendarEvents[trails[0].module_id])
      if (Object.values(calendarEvents).length > 1) setModuleSelector(true)
    }
  }, [calendarEvents, trails])

  return (
    <div>
      {
        loading ?
          <Styles.Container className='shimmer' $isMobile={isTablet}></Styles.Container>
          :
          <Styles.Container $isMobile={isTablet}>

            <CardContent>
              <Styles.Title>events.title</Styles.Title>
              <Styles.ContainerDescription hidden={!moduleSelector}>
                <Styles.TextDescription>events.card.description</Styles.TextDescription>
                <Styles.FormControlSelect fullWidth>
                  <Styles.DropDownList id="module-id" value={module} onChange={handleChange}                  >
                    {trails.map((item, index) => {
                      return <MenuItem key={index} value={item.module_id}>{item.name} - {item.module_id}</MenuItem>
                    })}
                  </Styles.DropDownList>
                </Styles.FormControlSelect>
              </Styles.ContainerDescription>

              {moduleEvents?.length === 0 &&
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '56px', paddingBottom: '32px' }}>
                  <WarningIcon /><span style={{ paddingLeft: '8px' }}>Em breve você poderá visualizar sua agenda de eventos aqui.</span>
                </div>
              }

              {moduleEvents && <StepsComponent events={moduleEvents} short={props.short} />}

              {moduleEvents && moduleEvents.length > 0 &&
                <Styles.BoxLabelTimeMentoring>
                  <Styles.LabelTimeMentoring>events.card.mentoringSchedule {`globals.weekdays.${moduleEvents[0].weekday}`} @ {moduleEvents[0].hour}</Styles.LabelTimeMentoring>
                </Styles.BoxLabelTimeMentoring>
              }
            </CardContent>

            <Styles.ActionContainer>
              {props.short &&
                <Styles.LabelSchedule>
                  {/* router.push(`/student/calendar`) */}
                  <Styles.LabelScheduleClick onClick={() => alert('Clicked Label')}>
                    globals.clickHere
                  </Styles.LabelScheduleClick>{' '}
                  events.card.fullSchedule
                </Styles.LabelSchedule>
              }
              {
                activeEvent &&
                <Global.FRSTButton style={{ marginLeft: 'auto' }} variant="contained" onClick={() => alert('Clicked Join Button')} disabled={!activeEvent}>
                  events.card.joinEvent
                </Global.FRSTButton>
              }
            </Styles.ActionContainer>

          </Styles.Container>
      }
    </div>
  )
}
