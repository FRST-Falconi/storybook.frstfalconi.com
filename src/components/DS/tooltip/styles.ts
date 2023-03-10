import styled from 'styled-components'

export const TooltipWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const TooltipTip = styled.div<{ direction: string, width: string, height: string }>`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  background: #FFF;
  z-index: 100;
  border: 1px solid #BDBDBD;

  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #757575;
  box-shadow: 0px 25px 18px -20px rgba(34, 34, 34, 0.2);

  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height}px;`}

  &::before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);
  }

  ${({ direction, height }) => {
    switch (direction) {
      case 'top':
        return `
          top: calc(${height}px * -1);

          &::before {
            top: 100%;
            border-top-color: #FFF
          }
        `
      case 'right':
        return `
          left: calc(100% + ${height}px);
          top: 50%;
          transform: translateX(0) translateY(-50%);
      
          &::before {
            left: calc(6px * -1);
            top: 50%;
            transform: translateX(0) translateY(-50%);
            border-right-color: #FFFFFF;
          }
        `
      case 'bottom':
        return `
          bottom: calc(${height}px * -1);

          &::before {
            bottom: 100%;
            border-bottom-color: #FFFFFF;
          }
        `

      case 'left':
        return `
          left: auto;
          right: calc(100% + ${height}px);
          top: 50%;
          transform: translateX(0) translateY(-50%);
      
          &::before {
            left: auto;
            right: calc(6px * -2);
            top: 50%;
            transform: translateX(0) translateY(-50%);
            border-left-color: #FFFFFF;
          }
        `
      default:
        return ''
    }
  }}
`;
