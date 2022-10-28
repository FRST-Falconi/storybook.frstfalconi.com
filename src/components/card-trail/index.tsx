import * as React from 'react'
import * as Styles from './moduleStyle'
import { Grid } from '@mui/material/'
import Avatar from '@components/avatar'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'

import { LinkedinIconMentor } from '@shared/icons'
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
    if (props?.notStarted) return

    let URL = await props.action()
    return window.open(URL)
  }

  const getResumeDescription = (description, isResume) => {
    if(isResume && description.length > 50)
      return `${description.substring(0, 50)}...`
    else 
      return description
  }

  const getAlign = () => {
    if(props.variant == 'primary' && props.notStarted) {
      if(props.start || props.mentor?.name) return +true
      if(!props.start || !props.mentor?.name) return +false
    }
    if(props.variant == 'primary' && !props.notStarted) {
      if(props.start && !props.mentor?.name) return +false
      if(!props.start && props.mentor?.name) return +false
      if(!props.start && !props.mentor?.name) return +false
    }

    return +true
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.CardContainer>
        {!props?.notStarted && props.variant == 'primary' &&
          <PercentageProgress 
            progress={props.progress}
          />
        }
        <HeaderImage
          onClick={redirectToD2L}
          image={props.bannerImage}
          notstarted={+props?.notStarted}
        />

        <MyBox>{/* ((props.mentor?.name && props.start) || props.variant !== 'primary') */}
          <MyCardContent 
            notstarted={+props?.notStarted} 
            hasmentor={getAlign()}
          >
            <Styles.TitleCard onClick={redirectToD2L} >{props.name}</Styles.TitleCard>
            <Styles.TextDescription onClick={redirectToD2L} >
              {props.description}
            </Styles.TextDescription>
            {props.variant == 'primary' ? 
            <> 
              { props.start &&
                <WrapperDate onClick={redirectToD2L} notstarted={+props?.notStarted}>
                  <b>{props.labels?.dateStart ? props.labels?.dateStart : 'Data de início'}:&nbsp;</b> 
                  {props.start}
                </WrapperDate>
              }
              { props.mentor?.name && 
                <>
                  <Styles.TitleMentoring onClick={redirectToD2L}>
                  {props.labels?.mentor ? props.labels?.mentor : 'Mentor(a)'}
                  </Styles.TitleMentoring>
                  <MentorComponent
                    mentor={props.mentor}
                    notstarted={+props?.notStarted}
                  /> 
                </>
                }
            </> 
            : 
            <>
            <WrapperDate onClick={redirectToD2L} notstarted={+true} style={{margin: '0px'}}>
                <b>{props.labels?.dateStart ? props.labels?.dateStart : 'Data de início'}:&nbsp;</b> 
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
        onClick={() => { props.mentor.linkedin && window.open(`${props.mentor.linkedin}`, '_blank') }}
        style={{margin: '0px', cursor: 'pointer'}}
      >
            <Avatar
              size="32px"
              alt="Mentoring"
              src={props.mentor?.avatar ? props.mentor.avatar : "https://certificates-mentor.s3.amazonaws.com/frst-avatar-default.png"}
              disabled={props?.notStarted}
            />
            <Styles.GridNameMentoring item>
              <Styles.NameMentoring>{props.mentor?.name}</Styles.NameMentoring>
            </Styles.GridNameMentoring>
            {props.mentor.linkedin && <LinkedinIconMentor/>}
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