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
        font-weight: 700;
        color:rgba(165, 0, 0, 1);
        line-height: 17.6px;
    }
`

export const TableContainer = styled.div`
    width: 100%;
`
export const Table = styled.table`
    border-collapse: collapse;
    width:100%;
    background:${({ theme }) => theme.colors.neutralsGrey8};
        tbody{
            tr:nth-child(even){
                background:${({ theme }) => theme.colors.shadeWhite};
                :hover{
                    background: rgba(248, 248, 248, 1);
                }
        }
    }
`
export const TableHeader = styled.th`
    background-color: rgba(69, 160, 160, 0.4);
    height:54px;
    font-family: PT Sans;
    font-weight: 700;
`

export interface TableRowProps {
    isRoot: boolean
}


export const TableRow = styled.tr<TableRowProps>`
    height: 54px;
    border-top: 1px solid rgba(189, 189, 189, 1);
    border-bottom:  1px solid rgba(189, 189, 189, 1);
    text-align: center;
    &:hover {
        background-color:rgba(223, 226, 226, 1);
    }
    background-color: ${({isRoot}) => isRoot ? '#FFEFE1 !important' : '' }; ;
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
export const TableAdm = styled.td`
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 11px;               
    div{
        flex-direction: row-reverse;
        display: flex;
        :nth-child(1n){
        margin-left: -4px;
    }
    }

`

export const TableVisit = styled.td``

export const TableVisitContent = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 8px;               
    div{
        flex-direction: row-reverse;
        display: flex;
        :nth-child(1n){
        margin-left: -4px;
    }
}

`
