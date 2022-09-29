import styled from 'styled-components'

interface IButtonContoll {
    isLeftButton?: boolean,
    sizeButton?: number,
    visibility?: string,
    marginsArrowButton?: string
}

export const WrapperHorizontal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;    
    width: 100%;
    height: auto;
`

export const WrapperContent = styled.div<{paddingIntern?: string}>`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
    padding-left: ${({paddingIntern}) => paddingIntern ? paddingIntern : '150px'};
    padding-right: ${({paddingIntern}) => paddingIntern ? paddingIntern : '150px'};
`

export const ButtonControll = styled.div<IButtonContoll>`
    display: flex;
    visibility: ${({visibility}) => visibility};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    width: ${({sizeButton}) => sizeButton+'px'};
    height: ${({sizeButton}) => sizeButton+'px'};

    min-width: ${({sizeButton}) => sizeButton+'px'};
    min-height: ${({sizeButton}) => sizeButton+'px'};

    background: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid #E8E8E8;

    border-radius: 50%;
    
    ${({sizeButton, isLeftButton, marginsArrowButton}) => {
        let result =  '';
        if(sizeButton >= 80) {
            result = isLeftButton ? 
            'padding-right: 6px; margin-right: ' + marginsArrowButton + ';'
             : 
            'padding-left: 6px; margin-left: ' + marginsArrowButton + ';'
        } else {
            result = isLeftButton ? 
            'padding-right: 3px; margin-right:  ' + marginsArrowButton + ';'
             :
            'padding-left: 3px; margin-left:  ' + marginsArrowButton + ';'
        }

        return result;
    }}

    &:hover { 
        background: ${({ theme }) => theme.colors.secondary2};
        border: 0px solid #E8E8E8;
    }

    box-shadow: 8px 21px 8px 0 rgb(34 34 34 / 30%) !important;
    z-index: 9;
    transition: all 0.2s ease-in-out;
`;
// ${({ isLeftButton }) => isLeftButton ? 'margin-right: -28px' : 'margin-left: -28px'};
    // ${({ isLeftButton }) => isLeftButton ? 'padding-right: 6px' : 'padding-left: 6px'};
    // ${({ isLeftButton }) => isLeftButton ? 'margin-right: -138px' : 'margin-left: -138px'};


export const CardTest = styled.div`
    min-width: 350px;
    min-height: 300px;
    margin: 10px;
    margin-left: 40px;
    margin-right: 40px;
    background-color: #0f0;
    z-index: 1;
    border-radius: 20px
`