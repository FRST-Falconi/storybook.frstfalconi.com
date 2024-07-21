import styled from 'styled-components'

interface StatusProps {
  status?: string
}


export const ContainerTag = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WrapperTag = styled.div<StatusProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
  height: 26px;
  padding: 4px 12px 4px 8px;
  gap: 8px;
  border-radius: 30px;
  white-space: nowrap;
  min-width: fit-content;
  color: #222;
  
  ${({ status }) => {
    if (status == 'not_started') return `background-color: #FAE28D;`
    else if (status == 'completed') return `background-color: #B9E7B8; `
    else if (status == 'not_completed') return `background-color: #F2B0B0;`
    else if (status == 'in_progress') return `background-color: #B9D5FF;`
    else if (status == 'deprioritized') return `background-color: #D8D8D8;`
    else return `background-color: #FAE28D;`
  }}
`;

export const CicleTag = styled.div<StatusProps>`
  width: 12px;
  height: 12px;
  border-radius: 100px;
    
  ${({ status }) => {
    if (status == 'not_started') return `background-color: #FDAE15;`
    else if (status == 'completed') return `background-color: #1BA853; `
    else if (status == 'not_completed') return `background-color: #A50000;`
    else if (status == 'in_progress') return `background-color: #3881FA;`
    else if (status == 'deprioritized') return `background-color: #222222;`
    else return `background-color: #FDAE15;`
  }}
`;