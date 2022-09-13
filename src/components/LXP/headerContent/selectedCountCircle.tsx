import React from "react"

export default function SelectedCountCircle() {
    return(
        <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="#E0E0E0"/>
                <svg x='3' y='3' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="5" fill="#FF4D0D"/>
                </svg>
            </svg>
        </>
    )
}