import styled from 'styled-components'

interface ParticipantCardI {
    size?: string,
    src?: any,
    disabled?: boolean,
}


export const Tooltip = styled.div<{position}>`
    position: relative;
    display: inline-block;
    
    &:after #tooltipinfo {
        content: "";
        position: absolute;

        ${({position}) => {
            switch(position) {
                case 'top':
                    return 'top: 100%; left: 50%;'

                case 'bottom':
                    return 'bottom: 100%; left: 50%;'
                
                case 'right':
                    return 'top: 50%; right: 100%;'

                case 'left':
                    return 'top: 50%; left: 100%;'
            }
        }}
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }

    &:hover #tooltipinfo {
        visibility: visible;
    }

    &:hover {
        visibility: visible;
    }
`


export const Tooltiptext = styled.div<{position}>`
    visibility: hidden;
    width: 156px;
    background-color: #fff;
    border: solid 1px #BDBDBD;

    padding: 8px! important;
    padding-bottom: 4px;

    word-break: break-all;

    color: #757575;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    ${({position}) => {
        switch(position) {
            case 'top':
                return 'bottom: 160%; left: 50%;'
            case 'bottom':
                return 'top: 160%; left: 50%;'
            case 'right':
                return 'top: -5px; left: 220%;'
            case 'left':
                return 'top: -5px; right: 120%;'
        }
    }}

    margin-left: -70px;

    -webkit-box-shadow: 10px 35px 40px -8px rgba(0,0,0,0.31);
    -moz-box-shadow: 10px 35px 40px -8px rgba(0,0,0,0.31);
    box-shadow: 10px 35px 40px -8px rgba(0,0,0,0.31);

    &:after {
        content: "";
        width: 0;
        height: 0;
        
        ${({position}) => {
            switch(position) {
                case 'top':
                    return 'left: 48%; bottom: -6px;'
                case 'bottom':
                    return 'left: 48%; top: -6px;'
                case 'right':
                    return 'top: 35%; left: -6px; border: 5px solid #fff !important;'
                case 'left':
                    return 'top: 35%; right: -6px; border: 5px solid #fff !important;'
            }
        }}
        position: absolute;
    
        border: 6px solid #fff;
        transform: rotate(135deg);
        transition: border 0.3s ease-in-out;
      }
`
