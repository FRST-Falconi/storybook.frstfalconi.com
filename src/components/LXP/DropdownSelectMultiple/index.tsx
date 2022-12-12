import SelectMultiple from './SelectMultiple'
import SelectItens from './SelectItens'
import Button from '../../buttons'
import { useEffect, useMemo, useState } from 'react'
import * as StyleSelect from './styles/StylesSelect'
import TextField from '../../form-elements/textfield'
import { Lupa } from '../../../shared/icons'

export default function DropdownSelectMultiple({
  placeholder,
  valueSelect,
  handleValueSelect,
  listItems,
  isError,
  style,
  isIcon,
  iconSelect,
  isDisabled
}) {
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const listItensFilter = useMemo(() => {
    const lowerSearch = search.toLocaleLowerCase()
    return listItems.filter((itens) => itens.includes(lowerSearch))
  }, [search, listItems])

  return (
    <>
      <SelectMultiple
        placeholder={placeholder}
        defaultValue={valueSelect}
        onChange={(e) => handleValueSelect(e.target?.attributes?.value?.value)}
        isError={isError}
        style={style}
        listItems={listItems}
        isIcon={isIcon}
        iconSelect={iconSelect}
        isDisabled={isDisabled}
      >
        <StyleSelect.ContainerSelectItens>
          {listItems.length > 10 ? (
            <TextField
              placeholder={'Buscar'}
              required={false}
              startIcon={<Lupa />}
              type={'text'}
              error={false}
              disabled={false}
              id={'MyTextField'}
              name={''}
              className={''}
              onChange={(e: any) => {
                setSearch(e.target.value)
              }}
              style={{ margin: '0rem 0.7rem' }}
            />
          ) : null}
          <Button
            variant="link"
            label="Selecionar Tudo"
            disabled={false}
            handleClick={() => {
              !selectAll ? setSelectAll(true) : setSelectAll(false)
            }}
          />
          {listItems.length > 10
            ? listItensFilter.map((item, index) => (
                <SelectItens label={item} value={item} key={index} selectAll={selectAll} />
              ))
            : listItems.map((item, index) => (
                <SelectItens label={item} value={item} key={index} selectAll={selectAll} />
              ))}
        </StyleSelect.ContainerSelectItens>
      </SelectMultiple>
    </>
  )
}
