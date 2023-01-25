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
export default function VectorUp(props: VectorIconParam) {

    return (

        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9L9 1L17 9" stroke="#FF4D0D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}