import React from "react"

type labelsBanner = {
    textTitle?: string,
    textDescription?: string,
    textHelperDescription?: string,
}

type bannerSRC = {
    normal?: string,
    responsive?: string
}

export interface IBannerSRG {
    style?: React.CSSProperties,
    bannerSRG?: bannerSRC,
    logoSRG?: string,
    avatarSRG?: string,
    labels?: labelsBanner,
    newProject?: {
        label?: string, 
        action?: () => void
    }
    acessHere?: {
        label?: string, 
        action?: () => void
    }
}