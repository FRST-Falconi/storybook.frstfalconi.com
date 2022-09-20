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
export default function VectorCross(props: VectorIconParam) {

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2051 1.53845V22.8718" stroke="#EBEBEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.53809 12.2051H22.8714" stroke="#EBEBEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}