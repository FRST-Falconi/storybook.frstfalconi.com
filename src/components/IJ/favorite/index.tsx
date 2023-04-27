import React, { useEffect, useState } from 'react'
import { SFavorite } from './favoriteStyles'
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone'
import { StarFavorite } from '@shared/icons'
export type IFavoriteProps = {
  variant: 'default' | 'pressed'
  disable?: boolean
  action: Function
}

export default function Favorite({ variant, disable = false, action }: IFavoriteProps) {
  const types = {
    default: {
      name: 'default',
      fill: '#E0E0E0',
      stroke: '#BDBDBD'
    },
    pressed: {
      name: 'pressed',
      fill: '#FFD600',
      stroke: '#FDAE15'
    },
    disabled: {
      name: 'disabled',
      fill: '#757575',
      stroke: '#BDBDBD'
    }
  }
  const [status, setStatus] = useState(types[variant])

  function handleSetStatus() {
    const newStatus = status.name === 'default' ? 'pressed' : 'default'
    setStatus(types[newStatus])
    action()
  }

  useEffect(() => {
    setStatus(types[!disable ? variant : 'disabled'])
  }, [disable])
  return (
    <SFavorite onClick={!disable && handleSetStatus} className={disable && 'disable'}>
      <StarFavorite fill={status.fill} stroke={status.stroke} />
    </SFavorite>
  )
}
