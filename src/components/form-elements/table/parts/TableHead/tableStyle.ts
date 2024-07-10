import styled, { keyframes } from 'styled-components';

interface ItemHeaderColumnProps {
  width?: string
  align?: string
}

export const THeadColumn = styled.thead`
  width: 100%;
`;

export const TRowColumn = styled.tr`
  background-color: #BEDCDC;
`;

export const THColumnTitleItem = styled.th<ItemHeaderColumnProps>`
  display: table-cell;
  padding: 10px;
  width: ${({ width }) => width};
  text-align: ${({ align }) => align};
  white-space: nowrap;
  
  font-family: 'PT Sans';
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.borderSecondary4};
`;