import Button from "@components/buttons"
import { Box, Popover, Switch } from "@mui/material";
import { AddIcon, EyeOff } from "@shared/icons"
import { useState } from "react";
import { FRSTTheme } from "../../../theme";
import { ThemeProvider } from "styled-components";
import * as Styles from './followStyles'

interface IFollow {
    style: React.CSSProperties

    textButtonFollow: string

    followItemsChallenge?: Array<FollowInfo>
    doNotFollowChallenge?: FollowInfo

    doNotFollowPostText?: string
    handleDoNotFollowPostClick ?: () => void
}

interface FollowInfo {
    title: string
    isFollowing: boolean
    handleChange: () => void
}

export default function Follow ( props : IFollow){
    const [openFollow, setOpenFollow] = useState(false);
    const [anchor, setAnchor] = useState(null);

    const handleFollow = (event) => {
        setOpenFollow(!openFollow)
        setAnchor(event.currentTarget)
    }

    const handleClose = () => {
        setOpenFollow(false)
        setAnchor(null)
    }

    return(
        <ThemeProvider theme={FRSTTheme}>
            <Styles.followButton style={{...props.style}} onClick={handleFollow}>
                <AddIcon fill="currentColor" /> 
                {props.textButtonFollow} 
            </Styles.followButton>
            <Popover open={openFollow}
                anchorEl={anchor}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    style: {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        borderRadius: 0
                    }
                }}
                onClose={handleClose}
            >
                <Box
                    sx={{
                        position: "relative",
                        mt: "10px",
                        "&::before": {
                            backgroundColor: "white",
                            content: '""',
                            display: "block",
                            position: "absolute",
                            width: 12,
                            height: 12,
                            top: -6,
                            transform: "rotate(45deg)",
                            left: "calc(100% - 30px)"
                        }
                    }}
                />
                <Styles.followContainer style={{width: props.doNotFollowPostText ? 'fit-content' : 300}}>
                    {props.followItemsChallenge ? 
                        props.followItemsChallenge.map((item, index) => {
                            return(
                                <Styles.followItems key={index}>
                                    {item.title}
                                    <Switch 
                                        checked={item.isFollowing}
                                        onChange={item.handleChange}
                                        sx={{
                                            '& .MuiSwitch-switchBase.Mui-checked': {
                                                color: '#FFF', 
                                            },
                                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                backgroundColor: '#FF4D0D !important',
                                                opacity: 1,
                                            },
                                        }}
                                    />
                                </Styles.followItems>
                            )
                        })
                        : null
                    }
                    {props.doNotFollowChallenge ?
                        <Styles.followItems style={{border: 'none'}}>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#D60000', fontWeight: 700, gap: 8}}>
                                <EyeOff width="24" height="24" fill="currentColor" />
                                {props.doNotFollowChallenge.title}
                            </div>
                            <Switch 
                                checked={props.doNotFollowChallenge.isFollowing}
                                onChange={props.doNotFollowChallenge.handleChange}
                                sx={{
                                    '& .MuiSwitch-switchBase.Mui-checked': {
                                        color: '#FFF', 
                                    },
                                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                        backgroundColor: '#FF4D0D !important',
                                        opacity: 1,
                                    },
                                }}
                            />
                        </Styles.followItems>
                        : null
                    }
                    {props.doNotFollowPostText ?
                        <Styles.followItems style={{border: 'none'}}>
                            <div onClick={props.handleDoNotFollowPostClick}
                                style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#D60000', fontWeight: 700, gap: 8}}
                                >
                                <EyeOff width="24" height="24" fill="currentColor" />
                                {props.doNotFollowPostText}
                            </div>
                        </Styles.followItems>
                        : null
                    }
                </Styles.followContainer>
            </Popover>
        </ThemeProvider>
    )
}