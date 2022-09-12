import styled from 'styled-components'

interface Colorpicker{
  width?: string,
  height?: string,

}
export const Container = styled.span<Colorpicker>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.width || '147px'};
  height: ${props => props.height || '48px'};
  padding: 12px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  background: #EBEBEB;
  

  input[type="color"] {
    -webkit-appearance: none;
    border: none;
    width: auto;
    height: auto;
    cursor: pointer;
    background: none;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      width: 23px;
      height: 23px;
    }
    &::-webkit-color-swatch {
      border: 1px solid #E0E0E0;
      border-radius: 4px;
      padding: 0;
    }
  }

  input[type="text"] {
    border: none;
    width: 60px;
    height: 18px;
    font-size: 14px;
    background: #EBEBEB;
  }
`;
