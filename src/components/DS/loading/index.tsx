import { FRSTTheme } from "../../../theme";
import { ThemeProvider } from "styled-components";
import * as Styles from './loadingStyle'
import { useEffect, useState } from "react";
import { Load } from "@shared/icons";

type loadSizes = 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large' 
type loadPosition = 'right' | 'bottom' | 'left' | 'top'
interface ILoading {
    /** 
     * @prop {loadSizes} sizeLoading: extra-small: 16px | small: 20px | medium: 24px | large: 32px | extra-large: 40px
     */
    sizeLoading?: loadSizes
    loadColor?: string
    loadText?: string
    loadTextColor?: string
    /** 
     * @prop {loadPosition} positionLoadingText: position of the load text: right, bottom, left or top
     */
    positionLoadingText?: loadPosition
    style?: React.CSSProperties
}

export default function Loading ( props : ILoading) {
    const [Size, setSize] = useState('24');
    const [Color, setColor] = useState(props.loadColor ? props.loadColor : '');
    const [PositionTextLoad, setPositionTextLoad] = useState(props.positionLoadingText ? props.positionLoadingText : 'bottom');
    const [LoadText, setLoadText] = useState(props.loadText ? props.loadText : '');

    useEffect(() => {
        setLoadText(props.loadText)
    }, [props.loadText]);

    useEffect(() => {
        setColor(props.loadColor)
    }, [props.loadColor]);

    useEffect(() => {
        setPositionTextLoad(props.positionLoadingText)
    }, [props.positionLoadingText]);

    useEffect(() => {
        if(props.sizeLoading === 'extra-small'){
            setSize('16')
        }else if(props.sizeLoading === 'small'){
            setSize('20')
        }else if(props.sizeLoading === 'medium'){
            setSize('24')
        }else if(props.sizeLoading === 'large'){
            setSize('32')
        }else if(props.sizeLoading === 'extra-large'){
            setSize('40')
        }else{
            setSize('24')
        }
    }, [props.sizeLoading]);
    
    return(
        <ThemeProvider theme={FRSTTheme}>
            <Styles.container textPosition={PositionTextLoad} style={{...props.style}} >
                <Styles.loader >
                    <Load width={Size} height={Size} fill={Color !== '' && Color} />
                </Styles.loader>
                <Styles.loadText style={{color: props.loadTextColor ? props.loadTextColor : 'white'}}>
                    {LoadText}
                </Styles.loadText>
            </Styles.container>
        </ThemeProvider>
    )
}