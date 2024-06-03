import * as React from 'react'
import * as Styles from './selectListStudentsStyle'

export default function SelectListStudents(props) {
  const [selectItens, setSelectItens] = React.useState([])

  function handleSelectList(item) {
    let listItem = selectItens

    if (listItem.some((i) => i.id! === item.id)) {
      listItem.push(item)
    }
    setSelectItens(listItem)
  }

  console.log('item selecionado ', selectItens)

  return (
    <Styles.ContainerSelect>
      <form action="">
        <label>
          <input id={'0'} type="checkbox" value={'selectAll'} onChange={() => {}} />
          <span>Select All</span>
        </label>
        {props.listSelect.map((item) => {
          return (
            <label>
              <input id={item.id} type="checkbox" value={item.city} onChange={() => handleSelectList(item)} />
              <span>{item.city}</span>
            </label>
          )
        })}
      </form>
    </Styles.ContainerSelect>
  )
}
