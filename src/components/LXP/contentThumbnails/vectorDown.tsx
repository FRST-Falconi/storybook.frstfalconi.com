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
export default function VectorDown(props: VectorIconParam) {

    return (
        <>
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1L9 9L1 0.999999" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    )
}