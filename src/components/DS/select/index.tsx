import Select from './Select'
import SelectItem from './SelectItem'

export default function SelectFRST({ placeholder, valueSelect, handleValueSelect, listItems, isError }) {
  return (
    <Select
      placeholder={placeholder}
      defaultValue={valueSelect}
      onChange={(e) => handleValueSelect(e.target?.attributes?.value?.value)}
      isError={isError}
    >
      {listItems.map((item, index) => (
        <SelectItem label={item} value={item} key={index} />
      ))}
    </Select>
  )
}
