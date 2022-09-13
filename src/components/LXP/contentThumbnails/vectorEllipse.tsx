///-----------------------------------------

import React from "react";

/// Interface do Componente
interface VectorIconParam {
    color?: string;
}

///-----------------------------------------
/// Componente

/**
 * 
 * @componente 
 */
export default function VectorEllipse(props: VectorIconParam) {

    return (
        <>
            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="2.57143" cy="2.35" rx="1.65" ry="1.57143" transform="rotate(-90 2.57143 2.35)" fill="url(#paint0_angular_4285_2572)" />
                <ellipse cx="2.57143" cy="2.35" rx="1.65" ry="1.57143" transform="rotate(-90 2.57143 2.35)" fill="url(#paint1_radial_4285_2572)" fillOpacity="0.6" />
                <ellipse cx="2.57143" cy="2.35" rx="1.65" ry="1.57143" transform="rotate(-90 2.57143 2.35)" stroke="#BDBDBD" strokeWidth="0.1" />
                <defs>
                    <radialGradient id="paint0_angular_4285_2572" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.57143 2.35) rotate(90) scale(1.57143 1.65)">
                        <stop stopColor="#757575" />
                        <stop offset="0.526042" stopColor="#757575" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_4285_2572" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.57143 2.35) rotate(90) scale(1.57143 1.65)">
                        <stop offset="0.380208" stopColor="white" />
                        <stop offset="1" stopColor="#EBEBEB" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </>
    )
}