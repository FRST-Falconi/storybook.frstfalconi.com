import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import VectorDown from './vectorDown'
import VectorUp from './vectorUp'
import { IAccordionTrack } from './accordionTrack'
import * as Styles from './accordionTrackStyle'
import { useState } from 'react'
import * as Icons from '../../../shared/icons'
import Switch from 'react-switch';
import Thumbnails from '../thumbnails'
import ScrollContainer from '@components/scroll-container'

export default function AccordionTrack({ ObjectsCard, variant, TrailName, handleClickContent, handleClickSelect, handleChangeCheck }: IAccordionTrack) {

    const [checked, setChecked] = useState(true)
    const [down, setDown] = useState(true)
    const [up, setUp] = useState(false)

    const handleChange = (checkedValue) => {
        console.log(checkedValue)
        setChecked(checkedValue)
        handleChangeCheck(checkedValue)
    };

    const changeSelect = () => {
        {
            up ?
                setUp(false)
                :
                setUp(true)
            setDown(false)
        }
    }

    function rendeCard(item, index) {
        return (
            <Thumbnails
                key={index}
                title={item.title}
                variant={item.variant}
            />
        )
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            {variant === 'closedDefault' ?
                <Styles.ContainerHeader className={variant = "closedDefault"} active={checked}>
                    <Styles.ContentTrailName>
                        <Styles.TypographyTrailName>{TrailName}</Styles.TypographyTrailName>
                        <Styles.Select onClick={handleClickSelect} >
                            {up ? <VectorUp /> : <VectorDown />}
                        </Styles.Select>
                    </Styles.ContentTrailName>
                    <Styles.ContentActiveHeader>
                        <Styles.TypographyActiveHeader active={checked} style={{ fontWeight: checked ? 700 : 400 }}>
                            Ativar curso
                            <Switch
                                onChange={handleChangeCheck}
                                checked={checked}
                                height={16}
                                width={40}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                handleDiameter={24}
                                onHandleColor='#ffffff'
                                offHandleColor='#ffffff'
                                onColor='#FF4D0D'
                                offColor='#757575'
                                activeBoxShadow={checked ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                                boxShadow={checked ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                            />
                        </Styles.TypographyActiveHeader>
                        <Styles.IconVerticalHeader onClick={handleClickContent}>
                            <Icons.MoreVertical fill={checked ? '#000000' : '#bdbdbd'} />
                        </Styles.IconVerticalHeader>
                    </Styles.ContentActiveHeader>
                </Styles.ContainerHeader>                

                : variant === 'opened' ?
                    <>
                        <Styles.ContainerHeader className={variant = "opened"} active={checked}>
                            <Styles.ContentTrailName>
                                <Styles.TypographyTrailName>{TrailName}</Styles.TypographyTrailName>
                                <Styles.Select onClick={changeSelect} >
                                    {up ? <VectorUp /> : <VectorDown />}
                                </Styles.Select>
                            </Styles.ContentTrailName>
                            <Styles.ContentActiveHeader>
                                <Styles.TypographyActiveHeader active={checked} style={{ fontWeight: checked ? 700 : 400 }}>
                                    Ativar curso
                                    <Switch
                                        onChange={handleChange}
                                        checked={checked}
                                        height={16}
                                        width={40}
                                        checkedIcon={false}
                                        uncheckedIcon={false}
                                        handleDiameter={24}
                                        onHandleColor='#ffffff'
                                        offHandleColor='#ffffff'
                                        onColor='#FF4D0D'
                                        offColor='#757575'
                                        activeBoxShadow={checked ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                                        boxShadow={checked ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                                    />
                                </Styles.TypographyActiveHeader>
                                <Styles.IconVerticalHeader onClick={handleClickContent}>
                                    <Icons.MoreVertical fill={checked ? '#000000' : '#bdbdbd'} />
                                </Styles.IconVerticalHeader>
                            </Styles.ContentActiveHeader>
                        </Styles.ContainerHeader>

                        {
                            up ?
                                <Styles.ContainerAccordion active={checked}>
                                    <ScrollContainer
                                        stepMove={380}
                                        isVisibleControlsButtons
                                        sizeArrowButton={80}
                                        marginsArrowButton={10}
                                        horizontalMarginInternScroll={'20px'}
                                        styles={{ backgroundColor: '#ebebeb' }}
                                    >
                                        <Styles.ContainerCard>
                                            {ObjectsCard.map(rendeCard)}
                                            <Thumbnails variant='add' />
                                        </Styles.ContainerCard>
                                    </ScrollContainer>
                                </Styles.ContainerAccordion>

                                :
                                null
                        }
                    </>

                    : null
            }
        </ThemeProvider>
    );
}