
import { ThemeProvider } from 'styled-components';
import { FRSTTheme } from '../../../../theme';
import { ButtonControllStyled } from './buttonControlStyles';
import { useLongPress } from './useLongPress'

export function ButtonControll({ 
        onClick, 
        onClickLongPress,
        isVisible, 
        direction, 
        ArrowScroll, 
        sizeButton,
        styles
    }) {
    const longPressEvent = useLongPress(() => {
        onClickLongPress()
    }, 500);
    
    return (
    <ThemeProvider theme={FRSTTheme}>
        <ButtonControllStyled
            onClick={onClick}
            {...longPressEvent}
            style={{
                visibility: isVisible ? 'visible' : 'hidden',
                position: 'absolute',
                [direction]: 0,
                ...styles
            }}
            sizeButton={sizeButton}
            direction={direction}
        >
        <ArrowScroll />
        </ButtonControllStyled>
    </ThemeProvider>
    );
  }