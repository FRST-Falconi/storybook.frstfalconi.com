import styled, { css } from 'styled-components'
import ArrowIcon from './icons/arrow_carrossel_down.png'
import ArrowIconWhite from './icons/arrowCarrosselDown.png'

interface PropsFilter {
  onClickFilter?: boolean
}

export const FiltroPrimeReact = styled.div<PropsFilter>`
  .multiselect-custom {
    width: fit-content;
    background: #ffffff;
    height: 37px;
    border-radius: 16px;
    border: 2px #f26818 solid;
    box-shadow: 2px 2px 15px 0px #00000040;

    :hover {
      border: 2px #f26818 solid !important;
      background: #f26818;
      color: #fff;

      .p-placeholder {
        color: #fff !important;
      }
      .country-item-value {
        color: #ffffff !important;
      }

      .p-placeholder {
        color: #ffffff !important;
      }
      .p-multiselect-trigger i {
        color: #ffffff !important;
      }
      p {
        color: #ffffff !important;
      }
      .p-multiselect-items-label {
        color: #ffffff;
      }
      .p-multiselect-trigger {
        i {
          background-image: url(${ArrowIconWhite});
          background-size: 1rem;
          width: 15px;
          height: 15px;
          background-repeat: no-repeat;
        }
      }
    }

    .p-placeholder {
      color: #f26818 !important;
      font-family: 'PT Sans';
      font-weight: 700;
      padding: 0.5rem 0rem 0.5rem 1rem;
    }

    .p-multiselect-label-container {
      display: flex;
      align-items: center;
    }

    .p-multiselect-trigger {
      width: fit-content;
      padding: 0 0.7rem;
    }

    ${(props) =>
      props.onClickFilter &&
      css`
        border: 2px #f26818 solid !important;
        background: #f26818;
        color: #fff;

        .p-placeholder {
          color: #fff !important;
        }

        .country-item-value {
          color: #ffffff !important;
        }
      `}
  }

  .p-multiselect .p-multiselect-trigger {
    i {
      background-image: url(${ArrowIcon});
      background-size: 1rem;
      width: 15px;
      height: 15px;
      background-repeat: no-repeat;
    }
  }

  .p-multiselect-items-label {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: #f26818;
    font-weight: 700;
    font-size: 14px;
    margin-right: 10px;
  }

  .country-item-value {
    margin-bottom: 0.5rem;
  }

  .p-multiselect:not(.p-disabled).p-focus {
    box-shadow: none;
    border: 2px #f26818 solid;
  }

  .multiselect-custom .p-multiselect-label:not(.p-placeholder):not(.p-multiselect-items-label) {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    background-color: #c63737;
  }

  .multiselect-custom .country-item-value {
    padding: 0px;
    margin: 0px;
    border-radius: 3px;
    display: inline-flex;
    color: #f26818;
    font-family: 'PT Sans';
    font-weight: 700;

    :hover {
      color: #ffffff !important;
    }
  }

  .multiselect-custom .country-item-value img.flag {
    width: 17px;
    background-color: #663366;
  }

  .p-multiselect .p-component .p-inputwrapper .p-inputwrapper-focus .multiselect-custom {
    border-color: #663366;
  }
`

export const FiltroLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: flex-end;
  color: #222222;
  margin-bottom: 0.5rem;
`

export const textCountSelect = styled.p<PropsFilter>`
  font-family: 'PT Sans';
  font-size: 16px;
  font-weight: 700;
  color: #f26818;

  :hover {
    color: #ffff;
  }

  ${(props) =>
    props.onClickFilter &&
    css`
      color: #ffff;
    `}
`

export const textCountSelectNumber = styled.b`
  width: 18px;
  height: 18px;
  padding: 1px 5.5px 1px 5.5px;
  border-radius: 60px;
  gap: 10px;
  border-radius: 100%;
  background: #ebeded;
  font-family: PT Sans;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  color: #000000;
`

export const searchAndButton = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
`

export const containerFiltro = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row-reverse;
`

export const countSelect = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  margin-right: 35px;
  margin-top: 10px;
  z-index: 999;
`
