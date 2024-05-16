import styled from "styled-components";

export const containerSelect = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row-reverse;
    gap: 12px;
    width: 600px;
    min-height: 48px;
    position: relative;

    & > p {
        font-family: 'PT Sans';
        font-size: 16px;
        font-weight: 400;
        line-height: 20.7px;
        color: ${(props) => props.theme.colors.neutralsGrey1};
    }
`

export const headerSelect = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    /* position: absolute; */
    /* z-index: 999; */
    background: ${(props) => props.theme.colors.shadeWhite};
    border: 1px solid ${(props) => props.theme.colors.borderPrimary};
    border-radius: 8px;
    min-height: 48px;
    display: flex;
    width: 100%;
    padding: 8px 52px 8px 10px;
`

export const customSelect = styled.div`
    & .custom-multiselect {
        background: transparent;
        /* background: ${(props) => props.theme.colors.shadeWhite}; */
        /* border: 1px solid ${(props) => props.theme.colors.borderPrimary}; */
        border-radius: 8px;
        height: 100%;
        display: flex;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;

        :hover {
            border: 1px solid #F18624;
        }

        .p-placeholder {
            color: ${(props) => props.theme.colors.neutralsGrey4};
            font-weight: 400;
            font-size: 14px;
            font-family: 'PT Sans';
            line-height: 18.12px;
        }

        .p-multiselect-items {
            display: flex;
            width: 100%;
        }

        .p-multiselect-label-container {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }
        
    }
    .p-multiselect:not(.p-disabled).p-focus {
        box-shadow: none;
        border: 2px #f26818 solid;
    }

`

export const searchAndButton = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;
`

export const selectItem = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'PT Sans';
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.theme.colors.neutralsGrey1};

`

export const selectTag = styled.div`
    display: inline-flex;
    align-items: center;
    min-height: 32px;
    background: #00828C;
    border-radius: 4px;
    gap: 8px;
    padding: 4px 8px;
    margin: 5px 10px 5px 0;
    z-index: 999;

    :hover {
        background: #1F6E74;
    }

    & > p {
        font-family: 'PT Sans';
        font-size: 14px;
        font-weight: 700;
        line-height: 18.12px;
        text-align: left;
        color: ${props => props.theme.colors.shadeWhite};
            overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
    }
`

export const overShowInfo = styled.div`
    height: 32px;
    padding: 4px 8px;
    margin: 5px 10px 5px 0;
    z-index: 999;
    cursor: pointer;

    & :hover{
        color: ${props => props.theme.colors.neutralsGrey1};
    }

    & > p {
        font-family: 'PT Sans';
        font-size: 14px;
        font-weight: 700;
        line-height: 18.12px;
        text-align: center;
        color: ${props => props.theme.colors.neutralsGrey2};
    }
`

export const modalContainer = styled.div`
    width: 520px;
    max-height: 500px;

    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.shadeWhite};
    border: 2px solid ${props => props.theme.colors.borderPrimary};
    border-radius: 16px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
`

export const modalHeader = styled.div`
    padding: 36px 24px;
    & > p {
        font-family: 'Work Sans';
        font-weight: 700;
        font-size: 18px;
        line-height: 21.11px;
        color: ${props => props.theme.colors.neutralsGrey1};
    }
`

export const modalContent = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        display: none;
    }

    ::-webkit-scrollbar-thumb {
        width: 4px;
        border-radius: 12px;
        background: #BDBDBD;
    }
`

export const modalCards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 24px;
`

export const cardTitle = styled.div`
    font-family: 'PT Sans';
    font-size: 16px;
    line-height: 17.6px;
    font-weight: 700;
    color: ${props => props.theme.colors.neutralsGrey1};;
`

export const cardDescription = styled.div`
    font-family: 'PT Sans';
    font-size: 16px;
    line-height: 17.6px;
    font-weight: 400;
    color: ${props => props.theme.colors.neutralsGrey1};;
`

export const closeModal = styled.div`
    position: absolute;
    top: 12px;
    right: 20px;
`