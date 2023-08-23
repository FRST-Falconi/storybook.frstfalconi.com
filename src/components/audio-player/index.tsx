import { useRef, useState, useEffect } from 'react'
import { FRSTTheme } from '../../theme'
import { ThemeProvider } from 'styled-components'
import ReactPlayer from 'react-player'
import * as Styles from './audioPlayerStyles'
import { Box, Skeleton } from '@mui/material'
import { Back15, Foward15, MuteIcon, PauseIcon, PlayIcon, VolumeIcon } from '@shared/icons'

interface IAudioPlayer {
  audio: string
  startAt?: number
  coverImage?: string
  title?: string
  description?: string
  date?: string
  longLoading?: boolean
  volume?: number
  onProgress?: (data: any) => void
  onEnded?: () => void
  exitSound?: number
  style?: React.CSSProperties
}

export default function AudioPlayer(props: IAudioPlayer) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [playedSeconds, setPlayedSeconds] = useState(0)
  const [duration, setDuration] = useState(0) // Added duration state
  const playerRef = useRef<ReactPlayer | null>(null)
  const [loading, setLoading] = useState(true)
  const [audioVolume, setAudioVolume] = useState(props?.volume ?? 0.5)

  const defaultThumb = 'https://i.gyazo.com/f201e5ef302347108c31a2129104adc1.png'

  useEffect(() => {
    if (props.exitSound) {
      setIsPlaying(false)
      if (playerRef.current) {
        playerRef.current.seekTo(0)
      }
    }
  }, [props.exitSound])

  const onProgress = (data) => {
    if (props.onProgress && isPlaying) {
      props.onProgress(data)
    }
    setPlayedSeconds(data.playedSeconds) // Update the playedSeconds state
  }

  const onVolumeChange = (newVolume: number) => {
    setAudioVolume(newVolume) // Atualize o estado interno
    if (playerRef.current) {
      const internalPlayer = playerRef.current.getInternalPlayer()
      if (internalPlayer) {
        internalPlayer.volume = newVolume // Atualize o volume diretamente no player interno
      }
    }
  }

  const onDuration = (duration) => {
    setDuration(duration) // Store the duration when it's available
  }

  const onEnded = () => {
    setIsPlaying(false)
    if (props.onEnded) {
      props.onEnded()
    }
  }

  useEffect(() => {
    if (props.audio) setLoading(false)
  }, [props.audio])

  function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      {
        <>
          <Styles.container
            style={{
              ...props.style,
              backgroundImage: props.coverImage ? `url(${props.coverImage})` : ''
            }}
          >
            <Styles.containerMask></Styles.containerMask>
            {loading ? (
              <>
                <Styles.thumbLoading
                  style={{
                    ...props.style,
                    backgroundImage: props.coverImage ? `url(${props.coverImage})` : `url(${defaultThumb})`
                  }}
                />
              </>
            ) : (
              <>
                <Styles.thumb
                  style={{
                    ...props.style,
                    backgroundImage: props.coverImage ? `url(${props.coverImage})` : `url(${defaultThumb})`
                  }}
                />
              </>
            )}

            <Styles.content style={{ width: '100%' }}>
              <Styles.title> {props.title} </Styles.title>
              <Styles.description> {props.description} </Styles.description>
              <Styles.date> {props.date} </Styles.date>

              {props.longLoading && loading ? (
                <Box justifyContent={'center'} alignItems={'center'} width={'100%'}>
                  <Skeleton height={48} width={150} sx={{ marginLeft: 24 }} />
                  <Skeleton height={24} />
                </Box>
              ) : (
                <>
                  <Styles.controls>
                    <Styles.navigationButton
                      onClick={() => {
                        const newTime = playedSeconds - 15
                        setPlayedSeconds(newTime >= 0 ? newTime : 0)
                        if (playerRef.current) {
                          playerRef.current.seekTo(newTime >= 0 ? newTime : 0)
                        }
                      }}
                    >
                      <Back15 fill="currentColor" />
                    </Styles.navigationButton>
                    {!isPlaying ? (
                      <Styles.playButton onClick={() => setIsPlaying(true)}>
                        <PlayIcon customColor_1="currentColor" />
                      </Styles.playButton>
                    ) : (
                      <Styles.playButton onClick={() => setIsPlaying(false)}>
                        <PauseIcon customColor_1="currentColor" />
                      </Styles.playButton>
                    )}
                    <Styles.navigationButton
                      onClick={() => {
                        const newTime = playedSeconds + 15
                        setPlayedSeconds(newTime <= duration ? newTime : duration)
                        if (playerRef.current) {
                          playerRef.current.seekTo(newTime <= duration ? newTime : duration)
                        }
                      }}
                    >
                      <Foward15 fill="currentColor" />
                    </Styles.navigationButton>
                    <Styles.volumeControl>
                      {audioVolume === 0 ? (
                        <Styles.volume onClick={() => onVolumeChange(0.1)}>
                          <MuteIcon />
                        </Styles.volume>
                      ) : (
                        <Styles.volume>
                          <div onClick={() => onVolumeChange(0)}>
                            <VolumeIcon />
                          </div>
                          <Styles.volumeBar
                            type="range"
                            min="0"
                            max="1"
                            value={audioVolume}
                            className="volumeBar"
                            step="0.1"
                            onChange={(e) => onVolumeChange(Number(e.target.value))}
                            currentInputValue={(audioVolume / 1) * 100}
                          />
                        </Styles.volume>
                      )}
                    </Styles.volumeControl>
                  </Styles.controls>
                  <Styles.thumb
                    style={{
                      ...props.style,
                      backgroundImage: `url(${props.coverImage})` ?? `url(${defaultThumb})`
                    }}
                  />
                  <Styles.audioTimeline>
                    <Styles.timeText>{formatTime(playedSeconds)}</Styles.timeText>
                    <Styles.timeline
                      type="range"
                      min="0"
                      max={duration}
                      value={playedSeconds}
                      className="timeline"
                      onChange={(e) => {
                        setPlayedSeconds(Number(e.target.value))
                      }}
                      onMouseUp={(e) => {
                        const newPlayedSeconds = Number((e.target as HTMLInputElement).value)
                        setPlayedSeconds(newPlayedSeconds)
                        const seekTime = (newPlayedSeconds / duration) * duration
                        if (playerRef.current) {
                          playerRef.current.seekTo(seekTime)
                        }
                      }}
                      onTouchEnd={(e) => {
                        const newPlayedSeconds = Number((e.target as HTMLInputElement).value)
                        setPlayedSeconds(newPlayedSeconds)
                        const seekTime = (newPlayedSeconds / duration) * duration
                        if (playerRef.current) {
                          playerRef.current.seekTo(seekTime)
                        }
                      }}
                      currentInputValue={(playedSeconds / duration) * 100}
                    />
                    <Styles.timeText>{formatTime(duration)}</Styles.timeText>
                  </Styles.audioTimeline>
                  <ReactPlayer
                    ref={playerRef}
                    url={props.audio}
                    playing={isPlaying}
                    onProgress={onProgress}
                    onDuration={onDuration} // Added onDuration callback
                    onEnded={onEnded}
                    volume={audioVolume}
                    hidden
                  />
                </>
              )}
            </Styles.content>
          </Styles.container>
        </>
      }
    </ThemeProvider>
  )
}
