import { style } from '@mui/system'
import styled from 'styled-components'

interface ISpeechBubble {
    height?:string,
    width?:string,
    highlight?: boolean,
    flap?: string
}

export const SpeechBubbleWrapper = styled.div<ISpeechBubble>`
    width: ${props => props.width ? props.width  : "auto"};
    height: ${props => props.height ? props.height  : "auto"};
    min-height: 20px
`

export const SpeechBubble = styled.div<ISpeechBubble>`
    width: auto;
    height: inherit;
    min-height: 20px;
    background-color: ${({theme}) => theme.colors.shadeWhite};
    border: 1px solid  ${ ({highlight, theme}) => highlight ?   theme.colors.primary1 :  theme.colors.neutralsGrey4 };

    border-radius: ${ (props:any) => getStyleValuesBorder(props) };   
    margin-left: 12px;
`

const getStyleValuesBorder = (props: any) => {
    console.log(props)
    switch (props.flap) {
        case 'left-top':
            return '0 4px 4px 4px;'

        case 'left-bottom':
            return '4px 4px 4px 0;'
        
        default:
            return '0 4px 4px 4px;'
    }
}


export const Flap = styled.div<ISpeechBubble>`
    position: absolute;
    width: 0px;
    height: inherit;
    min-height: 20px;
    background-color: black;
    z-index: 2;

    ${ (props:any) => getStylePositionFlap(props) };

`

const getStylePositionFlap = (props: any) => {
    console.log(props)
    switch (props.flap) {
        case 'left-top':
            return StyleFlapLeftTop(props)

        case 'left-bottom':
            return StyleFlapLeftBottom(props)
        
        default:
            return StyleFlapLeftTop(props)
    }
}

const StyleFlapLeftTop = (props: any) => {
    console.log(props.flap)
    let fill = props.theme.colors.shadeWhite
    let border = props.highlight ? props.theme.colors.primary1 :  props.theme.colors.neutralsGrey4

    return (
        `&:before {
            content: "";
            position: relative;
            top: 12px;
            left: 4px;
            border-top: 12px solid ${border};
            border-bottom: 0px solid transparent;
            border-left: 8px solid transparent; 
            border-right: 0px solid transparent;
        }

        &:after {
            content: "";
            position: relative;
            top: 13px;
            left: -2px;
            border-top: 12px solid ${fill};
            border-bottom: 0px solid transparent;
            border-left: 8px solid transparent;
            border-right: 0px solid transparent;
        }`)
}

const StyleFlapLeftBottom = (props: any) => {
    let fill = props.theme.colors.shadeWhite
    let border = props.highlight ? props.theme.colors.primary1 :  props.theme.colors.neutralsGrey4

    return (
        `&:before {
            content: "";
            position: absolute;
            bottom: 0px;
            left: 4px;
            border-top: 0px solid transparent;
            border-bottom: 12px solid ${border};
            border-left: 8px solid transparent; 
            border-right: 0px solid transparent;
        }

        &:after {
            content: "";
            position: absolute;
            bottom: 1px;
            left: 6px;
            border-top: 0px solid transparent;
            border-bottom: 12px solid ${fill};
            border-left: 8px solid transparent;
            border-right: 0px solid transparent;
        }`)
}
