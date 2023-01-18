import styled, { css } from 'styled-components'
import ArrowIcon from './icons/DropdownChevron.png'

export const SelectMultipesPrimeReact = styled.div`
  width: 100%;
  .multiselect-custom {
    width: 100%;
    :hover {
      border-color: #0645ad;
    }
  }
  .p-multiselect-items-label {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .country-item-value {
    margin-bottom: 0.5rem;
  }

  .p-multiselect {
    min-width: 15rem;
  }
  .p-multiselect:not(.p-disabled):hover {
    border-color: #0645ad;
  }

  .p-multiselect:not(.p-disabled).p-focus {
    box-shadow: none;
    border-color: #663366;
    border-width: 2px;
  }

  .multiselect-custom .p-multiselect-label:not(.p-placeholder):not(.p-multiselect-items-label) {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    background-color: #c63737;
  }

  .multiselect-custom .country-item-value {
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    display: inline-flex;
    margin-right: 0.5rem;
    background-color: #663366;
    color: #ffffff;
  }

  .multiselect-custom .country-item-value img.flag {
    width: 17px;
    background-color: #663366;
  }
  .p-multiselect .p-component .p-inputwrapper .p-inputwrapper-focus .multiselect-custom {
    border-color: #663366;
  }

  .p-multiselect .p-multiselect-trigger {
    span {
      background-image: url(${ArrowIcon});
      background-size: 1rem;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      margin-top: 0.6rem;
      margin-left: 0.2rem;
    }
  }
`

export const SelectMultipesLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: flex-end;
  color: #222222;
  margin-bottom: 0.5rem;
`
