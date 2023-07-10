import styled from 'styled-components'

interface IButtonContoll {
  sizeButton?: string
  direction?: string
}


export const ButtonControllStyled = styled.div<IButtonContoll>`  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid #e8e8e8;

    width: ${({ sizeButton }) => sizeButton ? SIZE_BUTTON[sizeButton] : '50px'};
    height: ${({ sizeButton }) => sizeButton ? SIZE_BUTTON[sizeButton] : '50px'};
  
    min-width: ${({ sizeButton }) => sizeButton ? SIZE_BUTTON[sizeButton] : '50px'};
    min-height: ${({ sizeButton }) => sizeButton ? SIZE_BUTTON[sizeButton] : '50px'};

    border-radius: 50%;
    padding: ${({ sizeButton, direction }) => 
        (sizeButton && direction) ? PADDING_SIZE_BUTTON[direction][sizeButton] : '3px'} !important;
    
    svg {
        width: ${({ sizeButton }) => SIZE_ARROW[sizeButton]} !important;
        height: ${({ sizeButton }) => SIZE_ARROW[sizeButton]} !important;
    }
    &:hover {
        background: ${({ theme }) => theme.colors.primary1} !important;
        border: 0px solid #e8e8e8;
        path {
            stroke: #fff;
        }
    }

    box-shadow: 8px 21px 8px 0 rgb(34 34 34 / 30%) !important;
    z-index: 9;
    transition: all 0.2s ease-in-out;
`

const SIZE_BUTTON = {
    'small': '20px',
    'medium': '50px',
    'large': '80px',
    'extra-large': '100px'
}

const SIZE_ARROW = {
    'small': '8px',
    'medium': '25px',
    'large': '30px',
    'extra-large': '50px'
}

const PADDING_SIZE_BUTTON = {
    'right' : {
        'small': '0px 0px 0px 1px',
        'medium': '0px 0px 0px 5px',
        'large': '0px 0px 0px 7px',
        'extra-large': '0px 0px 0px 10px'
    },
    'left': {
        'small': '0px 1px 0px 0px',
        'medium': '0px 5px 0px 0px',
        'large': '0px 7px 0px 0px',
        'extra-large': '0px 10px 0px 0px'
    }
}