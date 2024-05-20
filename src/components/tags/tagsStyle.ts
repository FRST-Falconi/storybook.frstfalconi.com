import styled, { css } from 'styled-components'


export const ContainetTags = styled.div`
  width: 100%;
  margin: 1rem 0rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Tag = styled.div<{ isSelectTag, disabled }>`
  width: fit-content;
  height: fit-content;
  padding: 0.6rem 1rem;
  display: flex;
  border-radius: 40px;
  border: 1.5px;
  gap: 16px;
  border: 1.5px solid #f18624;
  margin: 0.2rem;
  cursor: pointer;

  ${({disabled}) => 
    disabled === true && `
      cursor: not-allowed;
      background: #00000042;
      border: 1.5px solid #00000042;
      filter: contrast(0.1);
  `}

  ${({ isSelectTag }) =>
    isSelectTag === true && `
      background: #F18624 !important;
      border: 1.5px solid #F18624 !important;
      color:#fff !important;
      filter: none;
  `}

`;