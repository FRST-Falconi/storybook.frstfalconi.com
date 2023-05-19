import styled from 'styled-components'

interface IEmojiWindow {
    visible?: boolean
    positionEmojiWindow?: any
}

export const SmileIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    
    min-width: 40px;
    border-radius: 50%;
    background-color: transparent;
    margin: 4px;
    &:hover {
        background-color: ${({ theme }) => theme.colors.neutralsGrey6};
    }
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`

export const EmojiWindow = styled.div<IEmojiWindow>`
    width: 375px;
    height: 332px;
    overflow: hidden;
    display:${({ visible }) => visible ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    top: -330px;
    right: 0px;
    background-color:  ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid  ${({ theme }) => theme.colors.neutralsGrey4};
    position: absolute;

    
    & > div:nth-child(1) > em-emoji-picker:nth-child(1) {
        padding: 10px;
        padding-top: 5px;
        height: 332px;
        
        & .padding-lr {
            border: 2px solid #000 !important;
        }
    }
`;

export const ButtonClose = styled.div`
    cursor: pointer;
    align-self: flex-end;
    height: 40px;
    margin-bottom: -42px;
    margin-top: 10x;
    z-index: 6;
    padding: 10px;
    border-radius: 5px;
    margin-right: 2px;
    &:hover {
        background: #efefef;
    }
}
`