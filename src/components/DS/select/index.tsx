import Select from './Select'
import SelectItem from './SelectItem'

export default function SelectFRST({ placeholder, valueSelect, handleValueSelect, listItems, isError, style, disabled }) {
  return (
    <Select
      placeholder={placeholder}
      defaultValue={valueSelect}
      onChange={(e) => handleValueSelect(e.target?.attributes?.value?.value)}
      isError={isError}
      style={style}
      disabled={disabled}
    >
      {listItems.map((item, index) => (
        <SelectItem label={item} value={item} key={index} />
      ))}
    </Select>
  )
}
