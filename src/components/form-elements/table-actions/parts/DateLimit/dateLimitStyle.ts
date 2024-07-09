import styled from 'styled-components'

interface DateLimitRownProps {
  status?: string
}


export const WrapperDateLimit = styled.div<DateLimitRownProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-family: PT Sans;
  font-size: 16px;
  line-height: 17.6px;
  text-align: center;
  
  ${({ status }) => {
    if (status == 'completed') return `font-weight: 700; color: #1BA853; `
    else if (status == 'not_completed') return `font-weight: 700; color: #A50000;`
    else if (status == 'in_progress') return `font-weight: 400; color: #222222;`
    else if (status == 'deprioritized') return `font-weight: 400; color: #9C9C9C;`
    else return `font-weight: 400; color: #222222;`
  }}
`;