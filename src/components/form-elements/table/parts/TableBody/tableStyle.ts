import styled, { css, keyframes } from 'styled-components'

interface WrapperDataRownProps {
  index: number
  width?: string
  align?: string
  isExpanded?: boolean
}

export const WrapperDataRow = styled.tr<WrapperDataRownProps>`
  min-height: 54px;
  min-width: fit-content;
  background-color: ${({ index }) => index % 2 === 0 ? '#FFFFFF' : '#F3F3F3'};
`;

export const TableDataRowItem = styled.td`
  padding: 10px;
  
  font-family: 'PT Sans';
  font-size: 16px;
  font-weight: 400;
`;

export const TableDataChildrenItem = styled.tr<WrapperDataRownProps>`
  padding: 10px;
  font-family: 'PT Sans';
  font-size: 16px;
  font-weight: 400;
  background-color: ${({ index }) => (index % 2 === 0 ? '#FFFFFF' : '#F3F3F3')};
`;

export const TableDataChildrenControlExpand = styled.div<WrapperDataRownProps>`
  max-height: ${({ isExpanded }) => (isExpanded ? '1000px' : '0px')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

export const DataRowItem = styled.div<WrapperDataRownProps>`
  display: flex;
  width: ${({ width }) => width};
  justify-content: ${({ align }) => align};
  align-items: center;
  padding: 10px;
  
  font-family: 'PT Sans';
  font-size: 16px;
  font-weight: 400;
`;

interface WrapperExpandButtonProps {
  isExpanded: boolean
}

export const WrapperExpandButton = styled.div<WrapperExpandButtonProps>`
  display: flex;
  cursor: pointer;
  min-width: 40px;
  min-height: 40px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isExpanded }) => (isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')} ;
`;
