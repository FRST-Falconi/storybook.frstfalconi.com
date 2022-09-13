import { useEffect, useState } from 'react'
import { StarRating } from '@shared/icons'
import { WrapperStars, Raiting } from './ratingStyles'
import { IRating } from './rating'

/**
 * @componente 
 */
export default function Rating({ rating, isVisibleNumberRating, qtdStars, marginStars, handleRating, sizeStars, orientation, disabled }: IRating) {
  const [ tempRating, setTempRating ] = useState(rating+1)
  const [ hoverRaiting, setHoverRaiting ] = useState(-1)

  

  const rederStars = () => {
    var groupStars = [];
    let temRating = tempRating;

    const handleClick = (e) => {
      if(!disabled) handleRating(e)
    }

    const getStatusActive = (id) => {
      if(id < hoverRaiting) return true; 
      else if(hoverRaiting != -1) return false
      else if(id < rating) return true;
    }

    for (var i = 0; i < qtdStars; i++) {
      groupStars.push(
        <StarRatingComponent 
          id={i+1}
          active={getStatusActive(i)} 
          setOnHover={setHoverRaiting} 
          handleClick={handleClick} 
          sizeStars={sizeStars}
          marginStars={marginStars}
          disabled={disabled}
        />);
      temRating--;
    }
    return groupStars;
  }

  return (
    <WrapperStars orientation={orientation}>
      {rederStars()}
      {isVisibleNumberRating && <Raiting>{(rating).toFixed(1)}</Raiting>}
    </WrapperStars>
  )
}

function StarRatingComponent({id, active, handleClick, sizeStars, marginStars, setOnHover, disabled}) {
  const [ actionArea, setActionArea ] = useState(false);

  const getSizeStar = () => {

  }

  const getColorStar = () => {
    if(active)
      return '#FFC200'
    else 
      return '#757575'
  }

  useEffect(()=> {
    setTimeout(() => {
    if(actionArea)
      setOnHover(id)
    else
      setOnHover(-1)
  }, 150)
  }, [actionArea]);

  return <>
    <div 
      onMouseOver={() => setActionArea(true && !disabled)}
      onMouseOut={() => setActionArea(false && !disabled)}
      onClick={() => handleClick(id)}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: marginStars ? marginStars : '3.5px' 
      }}
    >
      <StarRating 
        width={sizeStars ? sizeStars : 30}
        height={sizeStars ? sizeStars : 29}
        fill={getColorStar()}
        fillOpacity={disabled ? '0.6' : '1'}
      />
    </div>
  </>
}