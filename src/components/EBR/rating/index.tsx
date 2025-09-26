import { useEffect, useRef, useState } from 'react'
import { StarRating, StarRatingRondedTips } from '@shared/icons'
import { WrapperStars, Raiting } from './ratingStyles'
import { IRating } from './rating'
import { Box } from '@mui/material'

export default function Rating({
    variant = 'primary',
    rating,
    isVisibleNumberRating,
    qtdStars,
    marginStars,
    handleRating,
    sizeStars,
    orientation,
    disabled,
    removeEvaluation,
    evaluationType,
    isUserLoggedChallenge,
    valueRatingOwner
}: IRating) {
    const [hoverRaiting, setHoverRaiting] = useState(-1)

    const renderStars = () => {
        const groupStars = []

        const handleClick = (value) => {
            if (!disabled) {
                handleRating(value)
            }
        }

        const getStatusActive = (id) => {
            if (id < hoverRaiting) return true
            else if (hoverRaiting !== -1) return false
            else if (id < rating) return true
            return false
        }

        for (let i = 0; i < qtdStars; i++) {
            groupStars.push(
                <StarRatingComponent
                    key={i}
                    variant={variant}
                    isEmpty={rating <= 0}
                    id={i + 1}
                    active={getStatusActive(i)}
                    setOnHover={setHoverRaiting}
                    handleClick={handleClick}
                    sizeStars={sizeStars}
                    marginStars={marginStars}
                    disabled={disabled}
                    removeEvaluation={() => removeEvaluation(evaluationType)}
                />
            )
        }
        return groupStars
    }

    return (
        <Box>
            <WrapperStars orientation={orientation}>
                {renderStars()}
                {isUserLoggedChallenge && <span style={{ marginLeft: '6px' }}>{valueRatingOwner}</span>}
                {isVisibleNumberRating && <Raiting>{rating.toFixed(1)}</Raiting>}
            </WrapperStars>
        </Box>
    )
}

function StarRatingComponent({
    id,
    variant,
    isEmpty,
    active,
    handleClick,
    sizeStars,
    marginStars,
    setOnHover,
    disabled,
    removeEvaluation
}) {
    const [actionArea, setActionArea] = useState(false)
    const clickTimeout = useRef(null)

    const getColorStarPrimary = () => (active ? '#FFC200' : '#757575')
    const getColorStarSecondary = () => {
        if (isEmpty && !active) return '#BDBDBD'
        return active ? '#FDD836' : '#BDBDBD'
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (actionArea) setOnHover(id)
            else setOnHover(-1)
        }, 150)
        return () => clearTimeout(timer)
    }, [actionArea, id, setOnHover])

    const onClickHandler = () => {
        if (disabled) return
        if (clickTimeout.current !== null) return

        clickTimeout.current = setTimeout(() => {
            handleClick(id)
            clickTimeout.current = null
        }, 250)
    }

    const onDoubleClickHandler = () => {
        if (disabled) return
        if (clickTimeout.current) {
            clearTimeout(clickTimeout.current)
            clickTimeout.current = null
        }
        removeEvaluation()
        handleClick(0)
    }

    return (
        <div
            onMouseOver={() => !disabled && setActionArea(true)}
            onMouseOut={() => !disabled && setActionArea(false)}
            onClick={onClickHandler}
            onDoubleClick={onDoubleClickHandler}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: marginStars || '3.5px'
            }}
        >
            {variant === 'primary' ? (
                <StarRating
                    width={sizeStars || 30}
                    height={sizeStars || 29}
                    fill={getColorStarPrimary()}
                    fillOpacity={disabled ? '0.6' : '1'}
                />
            ) : (
                <StarRatingRondedTips
                    width={sizeStars || 30}
                    height={sizeStars || 28}
                    stroke={isEmpty && !active ? '#BDBDBD' : 'transparent'}
                    strokeWidth={isEmpty && !active ? '1' : '0'}
                    fill={getColorStarSecondary()}
                    fillOpacity={disabled ? '0.6' : '1'}
                />
            )}
        </div>
    )
}
