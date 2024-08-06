import React from 'react'
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'
import * as Styles from './upDownButtons.styles'
import { VariantColorStyle } from '../hypothesisAndImpediment'

interface UpDownButtonsProps extends VariantColorStyle {
    onUpClick?: () => void
    onDownClick?: () => void
}

const UpDownButtons: React.FC<UpDownButtonsProps> = ({ onUpClick, onDownClick, type, variant }) => (
    <Styles.ContainerArrowButton type={type} variant={variant}>
        <Styles.ArrowButton onClick={onUpClick}>
            <ArrowDropUpOutlinedIcon />
        </Styles.ArrowButton>
        <Styles.ArrowButton onClick={onDownClick}>
            <ArrowDropDownOutlinedIcon />
        </Styles.ArrowButton>
    </Styles.ContainerArrowButton>
)

export default UpDownButtons
