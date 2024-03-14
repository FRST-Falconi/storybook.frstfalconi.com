import { useEffect, useMemo, useState } from 'react'
import { MultiSelect } from 'primereact/multiselect'
import * as StylesFiltro from './styles/MultiSelectDemo'
// import selectItemsCss from './styles/MultiSelectItems.css'
import './styles/theme.css'
import './styles/primereact.css'
import './styles/primeflex.css'
// import 'primeicons/primeicons.css'
import Button from '@components/buttons'
import SearchField from '@components/search-field'
import { Margin } from '@mui/icons-material'

export default function FiltroGaleriaDesafios({
  placeholderSelect,
  handleValueSelect,
  optionLabel,
  listItems,
  isDisabled,
  maxListItems,
  textButtonClear,
  textBusca,
  valueSelect=[]
}) {

  /// TODO: Não está implementado Lazyloading nesse componente. 
  // const [lazyItems, setLazyItems] = useState([])
  // const [lazyLoading, setLazyLoading] = useState(false)
  // useEffect(() => {
  //   setLazyItems(Array.from({ length: 100000 }))
  //   setLazyLoading(false)
  // }, [])

  ///
  const [selectedListItems, setSelectedListItems] = useState([])
  const [textFilter, setTextFilter] = useState('')
  const [listItemsFilter, setListItemsFilter] = useState(listItems)


  useEffect(() => {
    if (valueSelect.length > 0) {
      setSelectedListItems(valueSelect);
    }
  }, [valueSelect])

  useMemo(() => {
    handleValueSelect(selectedListItems)
  }, [selectedListItems])

  const listFilterSearch = useMemo(() => {
    return listItemsFilter.filter((resp) => resp.name.toLowerCase().includes(textFilter))
  }, [textFilter])

  const handleTemplateHeader = () => {
    const selectedItems = selectedListItems
    const lengthList = selectedItems ? selectedItems.length : 0
    return listItems.length >= maxListItems ? (
      <StylesFiltro.searchAndButton>
        <div>
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
        {lengthList >= 2 ? (
          <Button
            style={{marginTop: "1rem"}}
            variant={'link'}
            label={textButtonClear}
            disabled={false}
            handleClick={() => {
              setSelectedListItems([])
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
            setSelectedListItems([])
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
        <StylesFiltro.FiltroPrimeReact>
          <MultiSelect
            value={selectedListItems}
            options={listFilterSearch}
            onChange={(e) => setSelectedListItems(e.value)}
            optionLabel={optionLabel}
            placeholder={placeholderSelect ? placeholderSelect : 'Por favor escolha'}
            className="multiselect-custom"
            // panelStyle={selectItemsCss}
            // selectedItemTemplate={selectedCountriesTemplate()}
            selectedItemsLabel={placeholderSelect}
            disabled={isDisabled}
            maxSelectedLabels={0}
            filter={false}
            showSelectAll={false}
            panelHeaderTemplate={handleTemplateHeader()}
            removeIcon={handleRemoveIcon}
            dropdownIcon={handleDropdownIcon}
            // itemCheckboxIcon={iconT}
          />
        </StylesFiltro.FiltroPrimeReact>
      </StylesFiltro.containerFiltro>
    </>
  )
}
