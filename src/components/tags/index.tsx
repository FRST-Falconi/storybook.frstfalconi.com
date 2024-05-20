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

export default function Tags({ listAllTags, listSelectTag }: TagsProps) {
  const [selectTags, setSelectTags] = React.useState([])

  React.useEffect(() => {
    console.log("useEffect listSelectTags ",selectTags)
  },[selectTags,setSelectTags])


  function handleSelectTags(item) {
    let temp:any = selectTags
    // if (tags.some((i) => i.id === item.id)) {
    //   console.log('removendo item')
    //   tags.remove((i) => i.id === item.id)
    // } else {
    //     console.log('adicionando item')
    //     tags.push(item)
    // }
    console.log('adicionando item')
    temp.push(item)
    console.log("Tags ",temp)
    setSelectTags(temp)
  }



  return (
    <Styles.ContainetTags>
      {listAllTags.length > 0 && selectTags &&
        listAllTags.map((item) => (
          <Styles.Tag
            onClick={() => handleSelectTags(item)}
            isSelectTag={selectTags.some((i) => i.id === item.id)}
            key={item.id}
            disabled={false}
          >
            <div>{item.tag}</div>
          </Styles.Tag>
        ))}
    </Styles.ContainetTags>
  )
}
