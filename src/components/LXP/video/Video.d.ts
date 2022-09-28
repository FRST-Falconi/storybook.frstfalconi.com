import React from "react"

type enumQuality= '240p' | '360p' | '540p' | '720p' | '1080p' | '2K' | '4K'
type enumBoolean= 0 | 1 

export interface IVideo {
    videoId: string,    
    privateHash: string,
    width?: number,
    height?: number,
    autoplay?: enumBoolean,
    quality?: enumQuality,
    timeStart?: string
    showSpeedControl?: enumBoolean
    controls?: enumBoolean
    loop?: enumBoolean
    keyboard?: enumBoolean
    style?: React.CSSProperties, 
}
