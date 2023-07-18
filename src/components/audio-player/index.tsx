import '../../shared/global.css'
import { useEffect, useState } from 'react';
import { FRSTTheme } from '../../theme';
import { ThemeProvider } from 'styled-components';
import * as Styles from './audioPlayerStyles'
import useSound from 'use-sound'
import { Back15, Foward15, PlayIcon, PauseIcon, VolumeIcon, MuteIcon } from '@shared/icons';
import { Box, Skeleton } from '@mui/material';

interface IAudioPlayer {
    audio: any
    /**
     * @prop {number} startAt: o tempo em que o audio deve começar (em segundos)
    */
    startAt ?: number
    coverImage ?: string
    title ?: string
    description ?: string
    date ?: string
    /**
     * @prop {number} volume: valor do volume (minimo 0 - máximo 1)
    */
    volume ?: number
    onProgress ?: (data) => void
    onEnded ?: () => void
    exitSound? : number 
    style ?: React.CSSProperties
}

export default function AudioPlayer ( props : IAudioPlayer ) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [CurrentTimeAudio, setCurrentTimeAudio] = useState();
    const [time, setTime] = useState({
        min: 0,
        sec: 0
    });
    const [currTime, setCurrTime] = useState({
        min: 0,
        sec: 0
    });    
    const [seconds, setSeconds] = useState(0);
    const [audioVolume, setAudioVolume] = useState(props.volume ? props.volume : 0.5);
    const [play, { pause, duration, sound }] = useSound(props.audio, {volume : audioVolume, 
        onend : () => {
            setIsPlaying(false)
            props.onEnded()
        }})
    
    const [Loading, setLoading] = useState(true);
    
    //porcentagem percorrida da musica
    const [percentagePlaytime, setPercentagePlaytime] = useState(0);
    const defaultThumb = 'https://i.gyazo.com/f201e5ef302347108c31a2129104adc1.png'

    useEffect(() => {
        setAudioVolume(props.volume)
    }, [props.volume]);

    useEffect(() => {
        setIsPlaying(false);
        pause();
    }, [props.exitSound]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 8000)
    }, []);

    useEffect(() => {
        if (props.onProgress) {
            if (isPlaying) {
                props.onProgress({
                    loadedSeconds: duration / 1000,
                    playedSeconds: sound.seek([])
                })
            }
        }
    }, [seconds]);
    
    useEffect(() => {
        if (duration) {
            const sec = duration / 1000;
            const min = Math.floor(sec / 60);
            const secRemain = Math.floor(sec % 60);
            setTime({
                min: min,
                sec: secRemain
            });
        }
        
        const interval = setInterval(() => {
            if (sound) {
                if(!isPlaying && props.startAt && sound.seek([]) === 0){
                    setSeconds(props.startAt)
                    sound.seek([props.startAt])
                }
                setSeconds(sound.seek([]));
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);

                setCurrTime({
                    min,
                    sec
                });

                setPercentagePlaytime(calcCurrentInputPercentage(0, duration/1000, sound.seek([])))
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);

    const playingButton = () => {
        if (isPlaying) {
            setIsPlaying(false);
            pause();
        } else {
            setIsPlaying(true);
            play();
        }
    };

    // função para calcular a porcentagem que foi percorrida a musica, para fazer o acompanhamento da barra
    const calcCurrentInputPercentage = (valorMin, valorMax, valorAtual) => {        
        const min = valorMin
        const max = valorMax
        const val = valorAtual
        let result = (val - min) * 100 / (max - min)
        return result
    }


    return (
        <ThemeProvider theme={FRSTTheme}>
            {
                <>
                    {
                    Loading ?
                        <Styles.container style={{...props.style, backgroundColor: '#717171' }} >                        
                            <Skeleton height={390} width={'100%'} style={{position: 'absolute', zIndex: 9, background: '#FFF', marginLeft: -20, marginTop: -107, borderRadius: 16, }}/>
                        </Styles.container>
                        :
                        <Styles.container style={{...props.style, backgroundImage: props.coverImage ? `url(${props.coverImage})` : ''}} >                        
                            <Styles.containerMask></Styles.containerMask>
                            <Styles.thumb style={{...props.style, backgroundImage: props.coverImage ? `url(${props.coverImage})` : `url(${defaultThumb})`}}/>
                            <Styles.content style={{width: '100%'}}>
                                <Styles.title> {props.title} </Styles.title>
                                <Styles.description> {props.description} </Styles.description>
                                <Styles.date> {props.date} </Styles.date>
                                <Styles.controls>
                                    <Styles.navigationButton onClick={ () => {
                                        sound.seek([seconds ? seconds - 15 : 0])
                                    }} >
                                        <Back15 fill='currentColor' />
                                    </Styles.navigationButton>
                                    {!isPlaying ?
                                        <Styles.playButton onClick={playingButton}>
                                            <PlayIcon customColor_1='currentColor' />
                                        </Styles.playButton>
                                        :
                                        <Styles.playButton onClick={playingButton}>
                                            <PauseIcon customColor_1='currentColor' />
                                        </Styles.playButton>
                                    }
                                    <Styles.navigationButton onClick={ () => {
                                        sound.seek([seconds ? seconds + 15 : 15])
                                    }}>
                                        <Foward15 fill='currentColor' />
                                    </Styles.navigationButton>
                                    <Styles.volumeControl>
                                        {audioVolume === 0 ?
                                            <Styles.volume onClick={() => {
                                                setAudioVolume(0.1)
                                            }}>
                                                <MuteIcon />
                                            </Styles.volume>
                                            :
                                            <Styles.volume>
                                                <div onClick={() => {
                                                    setAudioVolume(0)
                                                }}>
                                                    <VolumeIcon />
                                                </div>
                                                <Styles.volumeBar
                                                    type='range'
                                                    min='0'
                                                    max='1'
                                                    value = {audioVolume}
                                                    className='volumeBar'
                                                    step='0.1'
                                                    onChange={(e) => {
                                                        setAudioVolume(Number(e.target.value))
                                                    }} 
                                                    currentInputValue={calcCurrentInputPercentage(0, 1, audioVolume)}
                                                />
                                            </Styles.volume>
                                        }
                                    </Styles.volumeControl>
                                </Styles.controls>
                                <Styles.audioTimeline>
                                        <Styles.timeText>
                                            {currTime.min.toString().padStart(2, '0')}:{currTime.sec.toString().padStart(2, '0')}
                                        </Styles.timeText>
                                        <Styles.timeline
                                            type="range"
                                            min="0"
                                            max={duration / 1000}
                                            value={seconds}
                                            className="timeline"
                                            onChange={(e) => {
                                                sound.seek([e.target.value]);
                                            }}
                                            currentInputValue={percentagePlaytime}
                                        />
                                        <Styles.timeText>
                                            {time.min.toString().padStart(2, '0')}:{time.sec.toString().padStart(2, '0')}
                                        </Styles.timeText>
                                </Styles.audioTimeline>                    
                            </Styles.content>
                        </Styles.container>
                    }
                    
                </>

            }
            
        </ThemeProvider>
    )
}