import * as React from 'react'
import * as Styles from './moduleStyle'
import { Grid } from '@mui/material/'
import Avatar from '@components/avatar'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'

import { HeaderImage, MyCardContent, MyBox, WrapperDate } from './cardTrailStyle'

interface Mentor {
  avatar: string
  name: string
  linkedin: string
}

interface ModuleCardProps {
  name: string
  start: string
  bannerImage: string
  description: string
  progress?: number | null
  variant: string
  mentor: Mentor
  action: () => any
  notStarted?: boolean
  labels: any
}

export default function CardTrail(props: ModuleCardProps) {

  const redirectToD2L = async () => {
    if (props.notStarted) return

    let URL = await props.action()
    return window.open(URL)
  }

  const getResumeDescription = (description, isResume) => {
    if(isResume && description.length > 50)
      return `${description.substring(0, 50)}...`
    else 
      return description
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.CardContainer>
        {!props.notStarted && props.variant == 'primary' &&
          <PercentageProgress 
            progress={props.progress}
          />
        }
        <HeaderImage
          onClick={redirectToD2L}
          image={props.bannerImage}
          notStarted={props.notStarted}
        />

        <MyBox>
          <MyCardContent notStarted={props.notStarted} >
            <Styles.TitleCard onClick={redirectToD2L} >{props.name}</Styles.TitleCard>
            <Styles.TextDescription onClick={redirectToD2L} >
              { getResumeDescription(props.description, props.notStarted) }
            </Styles.TextDescription>
            {props.variant == 'primary' ? 
            <>
              <WrapperDate onClick={redirectToD2L} notStarted={props.notStarted}>
                <b>{props.labels?.dateStart ? props.labels?.dateStart : 'Data de início'}: </b>
                {props.start}
              </WrapperDate>
              <Styles.TitleMentoring style={{background: '#fff'}} onClick={redirectToD2L}>
              {props.labels?.mentor ? props.labels?.mentor : 'Mentor(a)'}
              </Styles.TitleMentoring>
              <MentorComponent
                mentor={props.mentor}
                notStarted={props.notStarted}
              />
            </> 
            : 
            <>
            <WrapperDate onClick={redirectToD2L} notStarted={true} style={{margin: '0px'}}>
                <b>{props.labels?.dateStart ? props.labels?.dateStart : 'Data de início'}: </b>
                {props.start}
              </WrapperDate>
            </>
            }
          </MyCardContent>
        </MyBox>
      </Styles.CardContainer>
    </ThemeProvider>
  )
}


function MentorComponent(props) {
  return <>
      <Styles.GridFooter
        container
        spacing={2}
        onClick={() => {
          window.open(`${props.mentor.linkedin}`, '_blank')
        }}
        style={{margin: '0px', cursor: 'pointer'}}
      >
            <Avatar
              size="32px"
              alt="Mentoring"
              src={props.mentor?.avatar ? props.mentor.avatar : "https://certificates-mentor.s3.amazonaws.com/frst-avatar-default.png"}
              disabled={props.notStarted}
            />
            <Styles.GridNameMentoring item>
              <Styles.NameMentoring>{props.mentor?.name}</Styles.NameMentoring>
            </Styles.GridNameMentoring>
            <IconLinkedin/>
      </Styles.GridFooter>
  </>
}

function PercentageProgress({progress}) {
  return <>
      { progress && (
        <Styles.ProgressBox>
          <Grid container spacing={0} alignItems="center">
            {progress > 0 && 
              <>
                <Grid item xs={10}>
                  <Styles.ProgressBar variant="determinate" value={progress} />
                </Grid> 
                <Grid item xs={2}>
                  <Styles.ProgressLabel>{progress}%</Styles.ProgressLabel>
                </Grid>
              </>
            }
          </Grid>
        </Styles.ProgressBox>
      )}
  </>
}


function IconLinkedin() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="16" height="16" rx="2" fill="#0274B3"/>
  <path d="M10.6673 6C11.5514 6 12.3992 6.35659 13.0243 6.99133C13.6495 7.62607 14.0007 8.48696 14.0007 9.38462V13.3333H11.7784V9.38462C11.7784 9.0854 11.6614 8.79843 11.453 8.58685C11.2446 8.37527 10.962 8.25641 10.6673 8.25641C10.3726 8.25641 10.09 8.37527 9.88164 8.58685C9.67327 8.79843 9.55621 9.0854 9.55621 9.38462V13.3333H7.33398V9.38462C7.33398 8.48696 7.68517 7.62607 8.3103 6.99133C8.93542 6.35659 9.78326 6 10.6673 6Z" fill="white"/>
  <path d="M5.33268 6.66699H2.66602V13.3337H5.33268V6.66699Z" fill="white"/>
  <path d="M3.99935 5.33366C4.73573 5.33366 5.33268 4.73671 5.33268 4.00033C5.33268 3.26395 4.73573 2.66699 3.99935 2.66699C3.26297 2.66699 2.66602 3.26395 2.66602 4.00033C2.66602 4.73671 3.26297 5.33366 3.99935 5.33366Z" fill="white"/>
  </svg>  
}