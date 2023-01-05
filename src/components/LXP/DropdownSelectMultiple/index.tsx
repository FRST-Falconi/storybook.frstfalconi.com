import { useEffect, useMemo, useState } from 'react'
import { MultiSelect } from 'primereact/multiselect'
import * as StylesMultiSelect from './styles/MultiSelectDemo'
import selectItemsCss from './styles/MultiSelectItems.css'
import '../../../../node_modules/primeicons/primeicons.css'
import '../../../../node_modules/primereact/resources/themes/lara-light-indigo/theme.css'
import '../../../../node_modules/primereact/resources/primereact.css'
import '../../../../node_modules/primeflex/primeflex.css'

export default function DropdownSelectMultiple({
  placeholderSelect,
  placeholderFilter,
  handleValueSelect,
  labelSelect,
  optionLabel,
  listItems,
  isDisabled
}) {
  const [lazyItems, setLazyItems] = useState([])
  const [lazyLoading, setLazyLoading] = useState(false)
  const [selectedListItems, setSelectedListItems] = useState(null)

  useEffect(() => {
    setLazyItems(Array.from({ length: 100000 }))
    setLazyLoading(false)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const panelFooterTemplate = () => {
    const selectedItems = selectedListItems
    const length = selectedItems ? selectedItems.length : 0
    return (
      <div className="py-2 px-3">
        <b>{length}</b> item{length > 1 ? 's' : ''} selected.
      </div>
    )
  }

  const selectedCountriesTemplate = (option) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <div>{option.name}</div>
        </div>
      )
    }

    return placeholderSelect ? placeholderSelect : 'Por favor escolha'
  }

  const handleSelectItems = (items) => {
    setSelectedListItems(items)
    return handleValueSelect(items)
  }

  return (
    <>
      <StylesMultiSelect.SelectMultipesLabel>
        {labelSelect ? labelSelect : 'label'}
      </StylesMultiSelect.SelectMultipesLabel>
      <StylesMultiSelect.SelectMultipesPrimeReact>
        <MultiSelect
          value={selectedListItems}
          options={listItems}
          onChange={(e) => handleSelectItems(e.value)}
          optionLabel={optionLabel}
          placeholder={placeholderSelect ? placeholderSelect : 'Por favor escolha'}
          filter={listItems.length > 10}
          className="multiselect-custom"
          selectedItemTemplate={selectedCountriesTemplate}
          panelFooterTemplate={panelFooterTemplate}
          panelStyle={selectItemsCss}
          filterPlaceholder={placeholderFilter ? placeholderFilter : 'Pesquisar'}
          disabled={isDisabled}
        />
      </StylesMultiSelect.SelectMultipesPrimeReact>
    </>
  )
}
