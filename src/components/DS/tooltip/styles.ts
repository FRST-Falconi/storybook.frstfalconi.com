import styled from 'styled-components'

interface ITooltipWrapper {
  width?: string
}

export const TooltipWrapper = styled.div<ITooltipWrapper>`
  display: inline-flex;
  position: relative;
  ${({ width }) => width && `width: ${width};`}
`;

export const TooltipTip = styled.div<{
  direction: string,
  width: string,
  height: string
}>`
  background: #FFF;
  border-radius: 4px;
  border: 1px solid #BDBDBD;
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #757575;
  box-shadow: 0px 25px 18px -20px rgba(34, 34, 34, 0.2);
  padding: 6px;
  position: relative;

  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}

  &::after {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 5px;
    margin-left: calc(5px * -1);
  }

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

  ${({ direction }) => {
    switch (direction) {
      case 'top':
        return `
          &::before,
          &::after {
            top: 100%;
            border-top-color: #BDBDBD
          }

          &::after {
            border-top-color: #FFFFFF;
          }
        `
      case 'right':
        return `
          &::before,
          &::after {
            left: calc(6px * -1);
            top: 50%;
            transform: translateX(0) translateY(-50%);
            border-right-color: #BDBDBD;
          }

          &::after {
            border-right-color: #FFFFFF;
          }
        `
      case 'bottom':
        return `
          &::before,
          &::after {
            bottom: 100%;
            border-bottom-color: #BDBDBD;
          }

          &::after {
            border-bottom-color: #FFFFFF;
          }
        `

      case 'left':
        return `
          &::before,
          &::after {
            left: auto;
            right: calc(6px * -2);
            top: 50%;
            transform: translateX(0) translateY(-50%);
            border-left-color: #BDBDBD;
          }

          &::after {
            border-left-color: #FFFFFF;
          }
        `
      default:
        return ''
    }
  }}

`

export const TooltipGhost = styled.div<{
  direction: string,
  width: string,
  height: string
}>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;


  ${({ direction, height }) => {
    switch (direction) {
      case 'top':
        return `
          top: calc(${height} * -1);
        `
      case 'right':
        return `
          left: calc(100% + 5px);
          top: 50%;
          transform: translateX(0) translateY(-50%);
        `
      case 'bottom':
        return `
          bottom: calc(${height} * -1);
        `

      case 'left':
        return `
          left: auto;
          right: calc(100% + 5px);
          top: 50%;
          transform: translateX(0) translateY(-50%);
        `
      default:
        return ''
    }
  }}
`;
