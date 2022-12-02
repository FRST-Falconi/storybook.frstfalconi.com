import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './manageLearningCicles.Style'
import { IManageLearningCicles } from './manageLearningCicles';
import * as Icons from '../../../shared/icons'
import moment from 'moment';
import { useEffect, useState } from 'react';

export default function ManageLearningCicles({ variant, label, disabled, style, handleClick, handleChange }: IManageLearningCicles) {

    const dateAtual = moment().subtract(10, 'days').calendar();

    const [individualContent, setIdividualContent] = useState([
        { title: 'individualContents1' },
        { title: 'individualContents2' },
        { title: 'individualContents3' },
    ])
    const [listTrails, setListTrails] = useState([
        { id: '1', name: 'trails' },
        { id: '2', name: 'trails' },
        { id: '3', name: 'trails' },
    ])

    const [isOpen, setIsOpen] = useState(false)
    const [counterRender, setCounterRender] = useState(0)

    function handleClickCheck() {
        !isOpen ? setIsOpen(true) : setIsOpen(false)     
    }

    useEffect(()=>{
        if(counterRender > 0 && isOpen){
            handleClick()
        }else{
            setCounterRender(1)
        }
    },[isOpen])

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.Container isOpen={isOpen}>
                <Styles.TypographyDefinition>{label}</Styles.TypographyDefinition>
                <Styles.Date>{dateAtual}</Styles.Date>
                <Styles.ContetsName>
                    {individualContent.length !== 0 ?
                        individualContent.map((item, index) =>
                            <Styles.TypographyContentsName key={index}>{item.title}</Styles.TypographyContentsName>
                        )
                        : <Styles.TypographyContentsName >Introdução a blockchain</Styles.TypographyContentsName>
                    }
                </Styles.ContetsName>
                <Styles.ContainerIcon>
                    <p>{<Icons.DropdownIconWhite fill='#000000' />}</p>
                    <Styles.SelectIcon
                        onChange={handleChange}
                    >
                        {listTrails.map((item, index) =>
                            <option key={index} value={item.id}>{item.name}</option>
                        )}
                    </Styles.SelectIcon>
                </Styles.ContainerIcon>
                <Styles.GroupName isOpen={isOpen} >
                    <p>Group name</p>
                    <div onClick={handleClickCheck}>{<Icons.MoreHorizontal />}</div>
                </Styles.GroupName>
            </Styles.Container>
        </ThemeProvider>
    );
}