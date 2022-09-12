import { useEffect, useState } from 'react'
import { StarRating } from '@shared/icons'
import { WrapperStars, Raiting } from './ratingStyles'
import { IRating } from './rating'

import Rating from '@mui/material/Rating';

/**
 * @componente 
 */
export default function RatingFrst({ rating, isVisibleNumberRating, handleRating, size }: IRating) {
  const [ valueRating, setValueRating ] = useState(rating) 

  useEffect(() => {
    setValueRating(rating)
  }, [rating])

  return (
    <WrapperStars>
      <Rating
        name="simple-controlled"
        value={valueRating}
        onChange={(event, newValue) => {handleRating(newValue)}}
        size={size ? size : "medium"}
      />
      {isVisibleNumberRating && <Raiting>{(rating).toFixed(1)}</Raiting>}
    </WrapperStars>
  )
}