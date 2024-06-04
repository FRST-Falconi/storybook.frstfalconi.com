import * as React from 'react'
import * as Styles from './selectListStudentsStyle'

export default function SelectListStudents(props) {
  const [selectItens, setSelectItens] = React.useState(props.listSelect)
  const [itens, setItens] = React.useState(props.listSelect)
  const [isCheck, setIsCheck] = React.useState(false)

  function handleSelectList(item) {
    let listItem = selectItens

    if (listItem.some((i) => i.id === item.id)) {
      listItem = listItem.filter((i) => i.id !== item.id)
    }else{
      listItem.push(item)
    }
    setSelectItens(listItem)
  }
  console.log('item selecionado ', selectItens)

  function handleSelecAll(){
    let listItem = selectItens

    if(listItem.length === 0 ){
      const newItens = itens.map((item) => {
        const objItem = {
          id: item.id,
          city: item.city,
          select: true 
        }
        return objItem
      })
      setSelectItens(newItens)
    }else{

      itens.map((item) =>{
       const filterItens = listItem.filter((i) =>  i.id !== item.id)
       listItem.push(filterItens)
      })
    }

    console.log("selectItens ",selectItens)

  }

  return (
    <Styles.ContainerSelect>
      <form action="">
        <label>
          <input id={'0'} type="checkbox" value={'selectAll'} onClick={handleSelecAll} />
          <span>Select All</span>
        </label>
        {selectItens.map((item) => {
          return (
            <label>
              <input id={item.id} type="checkbox" value={item.city} onClick={() => handleSelectList(item)} checked={item.select}/>
              <span>{item.city}</span>
            </label>
          )
        })}
      </form>
    </Styles.ContainerSelect>
  )
}
