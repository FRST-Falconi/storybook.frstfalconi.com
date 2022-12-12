import { useState } from 'react'
import { FRSTTheme } from '../../../theme/'
import Checkbox from '../../form-elements/checkbox'
import { SelectContext } from './SelectContext'
import * as StylesSelectItensMultiple from './styles/StylesSelectItensMultiple'

type valueEnum = string | number | boolean | null

interface SelectItensProps {
  value?: valueEnum
  label?: string
  selected?: boolean
  handleSelect?: (value: any) => void
  disabled?: boolean
  selectAll?: boolean
}

export default function SelectItens({ value, label, handleSelect, disabled, selectAll }: SelectItensProps) {
  const [isChecked, setIsChecked] = useState(null)
  return (
    <SelectContext.Consumer>
      {({ selected }) => (
        <StylesSelectItensMultiple.ListItensAndCheckbox checked={isChecked || selectAll} theme={FRSTTheme}>
          <StylesSelectItensMultiple.ListItens
            disabled={disabled}
            selected={selected === value}
            value={value}
            onClick={handleSelect}
            tabIndex={0}
            theme={FRSTTheme}
          >
            {label}
          </StylesSelectItensMultiple.ListItens>
          <Checkbox
            label=""
            handleCheck={(e: boolean) => {
              !isChecked ? setIsChecked(true) : setIsChecked(false)
            }}
            isChecked={isChecked || selectAll}
          />
        </StylesSelectItensMultiple.ListItensAndCheckbox>
      )}
    </SelectContext.Consumer>
  )
}
