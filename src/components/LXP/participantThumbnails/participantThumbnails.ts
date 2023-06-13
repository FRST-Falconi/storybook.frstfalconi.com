import styled, { css } from 'styled-components'

interface HeaderThumbnailsProps {
  img?: any
}

export const CardThumbnails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.fonts.neutralsGrey1};
  width: 230px;
  gap: 8px;
  font-family: 'PT Sans';
  font-style: normal;

  :hover {
    > .title {
      color: ${({ theme }) => theme.colors.primary1};
    }
    > img {
      border: 2px solid ${({ theme }) => theme.colors.primary1};
    }
  }

  .title {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    line-height: 23px;
    word-break: break-word;
    white-space: normal;
    transition: all 0.3s;
  }

  > img {
    width: 230px;
    height: 140px;
    border-radius: 8px;
    object-fit: cover;
    object-position: center;
    border: 2px solid transparent;
    transition: all 0.3s;
    cursor: pointer;
  }

  .author {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #000000;

    > span {
      font-weight: 700;
      text-transform: capitalize;
    }
  }
`

export const DescriptionThumbnails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  width: 100%;

  p {
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fonts.textMessageComponentsBodySmall.fontWeight};
    font-size: 13px;
    line-height: 18px;
    font-family: 'PT Sans';
    font-family: ${({ theme }) => theme.fonts.textMessageComponentsBodySmall.fontFamily};
    width: 100%;
    transition: all 0.5s;

    &.short {
      display: -webkit-box;
      -webkit-line-clamp: 3; /** número de linhas que você quer exibir */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  > small {
    cursor: pointer;
    transition: all 0.3s;

    :hover {
      transform: scale(1.05);
    }
  }
`
