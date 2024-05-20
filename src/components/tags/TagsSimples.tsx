import React, { useEffect, useState } from 'react'
import '../../shared/global.css'
import * as Styles from './tagsStyle'

interface TagObj {
  id: number
  tag: string
}

interface TagsProps {
  listAllTags?: any
  listSelectTag?: Array<TagObj>
}

export default function TagsSimples({ listAllTags, listSelectTag }: TagsProps) {
  const [selectTags, setSelectTags] = useState([]);
  // const [Refresh, setRefresh] = useState(1);

  useEffect(() => {
    console.log("useEffect listSelectTags ",selectTags)
  }, [selectTags]);

  // useEffect(() => {
  //   console.log("NUmber listSelectTags ",Refresh)
  // }, [Refresh]);


  function handleSelectTags(item) {
    console.log('selectTags', selectTags)
    let temp:any = selectTags
    if (temp.some((i) => i.id === item.id)) {
      console.log('removendo item')
      temp = temp.filter((i) => i.id !== item.id)
    } else {
        console.log('adicionando item')
        temp.push(item)
    }
    console.log("Tags ",temp)
    // setRefresh(Refresh + 1)
    setSelectTags(temp)
  }



  return (
    <Styles.ContainetTags>
      {listAllTags.length > 0 && selectTags && Refresh > 0 && 
        listAllTags.map((item, index) => (
          <Styles.Tag
            onClick={() => handleSelectTags(item)}
            isSelectTag={selectTags.some((i) => i.id === item.id)}
            key={index}
            disabled={false}
          >
            <div>{item.tag}</div>
          </Styles.Tag>
        ))}
    </Styles.ContainetTags>
  )
}
