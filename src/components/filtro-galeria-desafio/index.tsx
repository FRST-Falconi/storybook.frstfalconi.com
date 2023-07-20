import { useEffect, useMemo, useState } from 'react'
import { MultiSelect } from 'primereact/multiselect'
import * as StylesFiltro from './styles/MultiSelectDemo'
import selectItemsCss from './styles/MultiSelectItems.css'
import './styles/theme.css'
import './styles/primereact.css'
import './styles/primeflex.css'
import 'primeicons/primeicons.css'
import Button from '@components/buttons'
import SearchField from '@components/search-field'

export default function FiltroGaleriaDesafios({
  placeholderSelect,
  handleValueSelect,
  optionLabel,
  listItems,
  isDisabled,
  maxListItems,
  textButtonClear,
  textBusca
}) {
  const [lazyItems, setLazyItems] = useState([])
  const [lazyLoading, setLazyLoading] = useState(false)
  const [onClickFilter, setOnClickFilter] = useState(false)
  const [selectedListItems, setSelectedListItems] = useState(null)
  const [textFilter, setTextFilter] = useState('')
  const [listItemsFilter, setListItemsFilter] = useState(listItems)

  useEffect(() => {
    setLazyItems(Array.from({ length: 100000 }))
    setLazyLoading(false)
  }, [])

  const handleSelectItems = (items) => {
    setSelectedListItems(items)
    return handleValueSelect(items)
  }

  const listFilterSearch = useMemo(() => {
    return listItemsFilter.filter((resp) => resp.name.toLowerCase().includes(textFilter))
  }, [textFilter])

  const handleTemplateHeader = () => {
    const selectedItems = selectedListItems
    const lengthList = selectedItems ? selectedItems.length : 0
    return listItems.length >= maxListItems ? (
      <StylesFiltro.searchAndButton>
        <div style={{ marginBottom: '1rem' }}>
          <SearchField
            placeholder={textBusca}
            className={null}
            handleClickButton={null}
            isButton
            hasSearchIcon={true}
            onChange={(e: any) => {
              setTextFilter(e.target.value)
            }}
          />
        </div>
        {lengthList >= 1 ? (
          <Button
            variant={'link'}
            label={textButtonClear}
            disabled={false}
            handleClick={() => {
              setSelectedListItems(null)
            }}
          />
        ) : (
          <div></div>
        )}
      </StylesFiltro.searchAndButton>
    ) : lengthList >= 1 ? (
      <StylesFiltro.searchAndButton>
        <Button
          variant={'link'}
          label={textButtonClear}
          disabled={false}
          handleClick={() => {
            setSelectedListItems(null)
          }}
        />
      </StylesFiltro.searchAndButton>
    ) : (
      <div></div>
    )
  }

  const handleDropdownIcon = () => {
    return <i className="pi pi-chevron-down" style={{ color: '#f26818' }}></i>
  }

  const handleRemoveIcon = () => {
    return <i className="pi pi-spin pi-spinner" style={{ color: 'red' }}></i>
  }

  const selectedItems = selectedListItems
  const length = selectedItems ? selectedItems.length : 0

  return (
    <>
      <StylesFiltro.containerFiltro>
        {length >= 1 && (
          <StylesFiltro.countSelect>
            <StylesFiltro.textCountSelectNumber>{length}</StylesFiltro.textCountSelectNumber>
          </StylesFiltro.countSelect>
        )}
        <StylesFiltro.FiltroPrimeReact onClickFilter={onClickFilter}>
          <MultiSelect
            value={selectedListItems}
            options={listFilterSearch}
            onChange={(e) => handleSelectItems(e.value)}
            optionLabel={optionLabel}
            placeholder={placeholderSelect ? placeholderSelect : 'Por favor escolha'}
            className="multiselect-custom"
            panelStyle={selectItemsCss}
            // selectedItemTemplate={selectedCountriesTemplate()}
            selectedItemsLabel={placeholderSelect}
            disabled={isDisabled}
            maxSelectedLabels={0}
            filter={false}
            showSelectAll={false}
            onClick={() => (onClickFilter ? setOnClickFilter(false) : setOnClickFilter(true))}
            panelHeaderTemplate={handleTemplateHeader()}
            removeIcon={handleRemoveIcon}
            dropdownIcon={handleDropdownIcon}
          />
        </StylesFiltro.FiltroPrimeReact>
      </StylesFiltro.containerFiltro>
    </>
  )
}
