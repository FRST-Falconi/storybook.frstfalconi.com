import styled, { css } from 'styled-components'

const colorVariants = {
  '#F26818': { hover: '#ee4c15', pressed: '#d14211' }, // default
  '#E7AD00': { hover: '#D49F00', pressed: '#C79500' }, //amarelo
  '#2457E3': { hover: '#2652CC', pressed: '#2A4DAC' }, //azul
  '#27AA3D': { hover: '#1F9B33', pressed: '#238D35' }, //verde
  '#9A37E1': { hover: '#8E29D6', pressed: '#7F28BE' }, //roxo
  '#E64040': { hover: '#D13A3A', pressed: '#C23636' } //vermelho
}

export const LinkButton = styled.a<{ disabled: boolean }>`
  border: none;
  text-decoration: none;
  ${({ theme }) => theme.fonts.textMessageComponentsBodyBold}
  color: ${({ theme }) => theme.colors.linkOnfocus};
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.linkHover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.linkPressed};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.linkOnfocus};
  }

  & > svg {
    margin-right: 12px;
    max-height: 16px;
    height: 100%;
    width: auto;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      color: ${({ theme }) => theme.colors.linkDisabled};
    `}
`
export const LinkButtonStartIcon = styled.a<{ disabled: boolean; sizeIcon: string }>`
  border: none;
  text-decoration: none;
  ${({ theme }) => theme.fonts.textMessageComponentsBodyBold};
  color: ${({ theme }) => theme.colors.linkOnfocus};
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.linkHover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.linkPressed};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.linkOnfocus};
  }

  & > svg {
    margin-right: 8px;
    max-height: ${({ sizeIcon }) => (sizeIcon ? sizeIcon : '16px')};
    height: 100%;
    width: auto;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      color: ${({ theme }) => theme.colors.linkDisabled};
    `}
`
export const LinkButtonEndIcon = styled.a<{ disabled: boolean; sizeIcon: string }>`
  border: none;
  text-decoration: none;
  ${({ theme }) => theme.fonts.textMessageComponentsBodyBold}
  color: ${({ theme }) => theme.colors.linkOnfocus};
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.linkHover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.linkPressed};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.linkOnfocus};
  }

  & > svg {
    margin-left: 12px;
    max-height: ${({ sizeIcon }) => (sizeIcon ? sizeIcon : '16px')};
    height: 100%;
    width: auto;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      color: ${({ theme }) => theme.colors.linkDisabled};
    `}
`

const variantStyles = (variant = 'contained', backgroundColor?: string) =>
  ({
    primary: ({ theme }) => {
      const isDefault = !backgroundColor || backgroundColor === '#F26818';
      const baseColor = isDefault ? '#F26818' : backgroundColor;
      const hoverColor = isDefault
        ? colorVariants['#F26818'].hover
        : colorVariants[backgroundColor]?.hover || baseColor;
      const pressedColor = isDefault
        ? colorVariants['#F26818'].pressed
        : colorVariants[backgroundColor]?.pressed || baseColor;

      return css`
        background-color: ${baseColor};
        color: ${theme.colors.shadeWhite};

        &:hover {
          background-color: ${hoverColor};
        }

        &:active {
          background-color: ${pressedColor};
        }

        &:focus {
          border: 2px solid ${baseColor}4D;
          -webkit-background-clip: padding-box;
          background-clip: padding-box;
        }

        &:disabled {
          background-color: ${theme.colors.neutralsGrey5};
          cursor: not-allowed;
          pointer-events: none;
        }
      `;
    },
    secondary: css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary1};
      border: 1px solid ${({ theme }) => theme.colors.primary1};

      &:hover {
        color: ${({ theme }) => theme.colors.primary2};
        border: 1px solid ${({ theme }) => theme.colors.primary2};
      }

      &:active {
        color: ${({ theme }) => theme.colors.primary3};
        border: 1px solid ${({ theme }) => theme.colors.primary3};
      }

      &:focus {
        border: 2px solid ${({ theme }) => theme.colors.primary1}4D;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
      }

      &:disabled {
        color: ${({ theme }) => theme.colors.neutralsGrey5};
        border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
        cursor: not-allowed;
        pointer-events: none;
      }
    `,
     expandedPrimary: ({ theme }) => {
      const isDefault = !backgroundColor || backgroundColor === '#F26818';
      const baseColor = isDefault ? '#F26818' : backgroundColor;
      const hoverColor = isDefault
        ? colorVariants['#F26818'].hover
        : colorVariants[backgroundColor]?.hover || baseColor;
      const pressedColor = isDefault
        ? colorVariants['#F26818'].pressed
        : colorVariants[backgroundColor]?.pressed || baseColor;

      return css`
        background-color: ${baseColor};
        color: ${theme.colors.shadeWhite};
        width: 100%;

        &:hover {
          background-color: ${hoverColor};
        }

        &:active {
          background-color: ${pressedColor};
        }

        &:focus {
          border: 2px solid ${baseColor}4D;
          -webkit-background-clip: padding-box;
          background-clip: padding-box;
        }

        &:disabled {
          background-color: ${theme.colors.neutralsGrey5};
          cursor: not-allowed;
          pointer-events: none;
        }
      `;
    },
    expandedSecondary: css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary1};
      border: 1px solid ${({ theme }) => theme.colors.primary1};
      width: 100%;

      &:hover {
        color: ${({ theme }) => theme.colors.primary2};
        border: 1px solid ${({ theme }) => theme.colors.primary2};
      }

      &:active {
        color: ${({ theme }) => theme.colors.primary3};
        border: 1px solid ${({ theme }) => theme.colors.primary3};
      }

      &:focus {
        border: 2px solid ${({ theme }) => theme.colors.primary1}4D;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
      }

      &:disabled {
        color: ${({ theme }) => theme.colors.neutralsGrey5};
        border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
        cursor: not-allowed;
        pointer-events: none;
      }
    `
    
  }[variant])

export const Button = styled.button<{
  variant: string
  active: boolean
  length: number
  backgroundColor?: string
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9px 16px;
  height: 48px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  box-shadow: none;

  ${({ variant, backgroundColor }) => variantStyles(variant, backgroundColor)}

  ${({ theme, length }) =>
    theme.type === 'group' &&
    length === 2 &&
    `
        &:first-child {
            border-radius: 4px 0px 0px 4px;
            border-right: 1px solid rgba(255, 255, 255, 0.5) !important;
            border-left: none !important;
        }

        &:last-child {
            border-radius: 0px 4px 4px 0px;
            border: none !important;
        }
    `}

  ${({ theme, length }) =>
    theme.type === 'group' &&
    length > 2 &&
    `
        border-radius: 0px;

        border-right: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
    
        &:focus,
        &:active {
            border-right: 1px solid rgba(255, 255, 255, 0.5) !important;
            border-left: 1px solid rgba(255, 255, 255, 0.5) !important;
        }
        
        &:first-child {
            border-radius: 4px 0px 0px 4px;
            border: none !important;
        }

        &:last-child {
            border-radius: 0px 4px 4px 0px;
            border: none !important;
        }
    `}

  ${({ active }) =>
    active === true &&
    css`
      background: #d14211;
    `}

  /* AQUI COMEÇA A ADIÇÃO NOVA: */

  ${({ backgroundColor }) =>
    backgroundColor &&
    backgroundColor !== '#F26818' &&
    css`
      background-color: ${backgroundColor};

      &:hover {
        background-color: ${colorVariants[backgroundColor]?.hover || backgroundColor};
      }

      &:active {
        background-color: ${colorVariants[backgroundColor]?.pressed || backgroundColor};
      }
    `}
`
export const ButtonStartIcon = styled.button<{ variant: string; sizeIcon: string, backgroundColor: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9px 16px;
  height: 48px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  box-shadow: none;

  & > svg {
    margin-right: 12px;
    max-height: ${({ sizeIcon }) => (sizeIcon ? sizeIcon : '16px')};
    height: 100%;
    width: auto;
  }

  ${({ variant, backgroundColor}) => variantStyles(variant, backgroundColor)}
`
export const ButtonEndIcon = styled.button<{ variant: string; sizeIcon: string, backgroundColor: string}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9px 16px;
  height: 48px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  box-shadow: none;

  & > svg {
    margin-left: 12px;
    max-height: ${({ sizeIcon }) => (sizeIcon ? sizeIcon : '16px')};
    height: 100%;
    width: auto;
  }

  ${({ variant, backgroundColor }) => variantStyles(variant, backgroundColor)}
`
