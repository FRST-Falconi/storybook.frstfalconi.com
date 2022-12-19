import Select from "./SelectLXP"
import SelectLXPItem from  './SelectLXPItem'

export default function SelectLXP({placeholder, valueSelect, handleValueSelect, listItems}) {
    return (
        <Select placeholder={placeholder} defaultValue={valueSelect} onChange={(e) => handleValueSelect(e.target?.attributes?.value?.value)}>
            {listItems.map((item, index) => (
                <SelectLXPItem
                  label={item.label}
                  value={item.id}
                  key={index}
                />
              ))}
        </Select>
    )
  }