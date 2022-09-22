import Select from "./Select"
import SelectItem from  './SelectItem'

export default function SelectFRST({placeholder, valueSelect, handleValueSelect, listItems}) {
    return (
        <Select placeholder={placeholder} defaultValue={valueSelect} onChange={(e) => handleValueSelect(e.target?.attributes?.value?.value)}>
            {listItems.map((item, index) => (
                <SelectItem
                  label={item}
                  value={item}
                  key={index}
                />
              ))}
        </Select>
    )
  }