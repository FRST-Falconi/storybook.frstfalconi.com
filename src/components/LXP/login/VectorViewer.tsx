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
export default function Vectorviewer(props: VectorIconParam) {

    return (
        <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12C4 12 6.90909 6 12 6C17.0909 6 20 12 20 12C20 12 17.0909 18 12 18C6.90909 18 4 12 4 12Z" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </>
    )
}