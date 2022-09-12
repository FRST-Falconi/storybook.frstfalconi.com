import React from "react"
export interface IAvatar {
    size?: string,
    channel?: string,
    alt?: string,
    className?: string,
<<<<<<< HEAD
    disabled?: boolean, 
    color?: string,   
=======
    disabled?: boolean,
    style?: React.CSSProperties,    
>>>>>>> develop
    onChange: () => void
}
