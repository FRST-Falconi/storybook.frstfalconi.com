import styled from 'styled-components'

export const ContainerSelected = styled.div`
    display:flex;
    margin-bottom: 15px;
    div{
        font-family: 'PT Sans';
        font-weight: 700;
        line-height: 17.6px;
    }
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        font-family: 'PT Sans';
        padding-left: 24px;
        cursor: pointer;
        font-weight: 700;
        color:rgba(165, 0, 0, 1);
        line-height: 17.6px;
    }
`

export const TableContainer = styled.div`
    width: 100%;
    /* background-color: rgba(255, 255, 255, 1); */
`
export const Table = styled.table`
    border-collapse: collapse;
`
export const TableHeader = styled.th`
    background-color: rgba(69, 160, 160, 0.4);
    width: 846px;
    height:54px;
    font-family: PT Sans;
    font-weight: 700;
    span{
        margin-right: 16px;
    }
`
export const TableRow = styled.tr`
    background-color: rgba(255, 255, 255, 1);
    height: 54px;
    border-top: 1px solid rgba(189, 189, 189, 1);
    border-bottom:  1px solid rgba(189, 189, 189, 1);
    text-align: center;
    &:hover {
        background-color:rgba(248, 248, 248, 1) 
    }
`

export const TableChecked = styled.td`
    vertical-align:middle;
    padding-left: 18px;
    text-align: left;
    width: 40%;

    span{
        font-family:'PT Sans';
        color:'rgba(34, 34, 34, 1)';
    }
`
