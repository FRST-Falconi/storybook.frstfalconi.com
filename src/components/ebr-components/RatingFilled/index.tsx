import { useEffect, useState } from 'react'
import { StarRating } from '@shared/icons'
import { WrapperStars, Raiting } from './ratingStyles'
import { IRating } from './rating'

/**
 * @componente 
 */
export default function Rating({ rating, isVisibleNumberRating, qtdStars, handleRating, sizeStars, orientation }: IRating) {
  const [ tempRating, setTempRating ] = useState(rating+1)
  const [ hoverRaiting, setHoverRaiting ] = useState(-1)

  

  const rederStars = () => {
    var groupStars = [];
    let temRating = tempRating;

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
          handleClick={handleRating} 
          sizeStars={sizeStars}
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

function StarRatingComponent({id, active, handleClick, sizeStars, setOnHover}) {
  const [ actionArea, setActionArea ] = useState(false);

  useEffect(()=> {
    if(actionArea)
      setOnHover(id)
    else
      setOnHover(-1)
  }, [actionArea]);

  return <>
    <div 
      onMouseOver={() => setActionArea(true)}
      onMouseOut={() => setActionArea(false)}
      onClick={() => handleClick(id)}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3.5px' }}
    >
      <StarRating 
        width={sizeStars ? sizeStars : null}
        height={sizeStars ? sizeStars : null}
        fill={active ? '#FFC200': '#757575'}
      />
    </div>
  </>
}