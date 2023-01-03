import { useEffect, useState } from "react";
import * as Styles from './listSelectorStyles'
import { CheckboxChecked, CheckboxEmpty } from "@shared/icons";
import { ThemeProvider } from "styled-components";
import { FRSTTheme } from "../../../theme";
import Button from "@components/buttons";

interface ItemList{
    id: string
    description: string
}

interface IListSelector{
    listTitle: string
    textViewMore: string
    textViewLess: string
/**
 * @prop {Array<ItemList>} contentList: um array do objeto a ser exibido na lista( um ID e uma descrição)
 */    
    contentList: Array<ItemList>
/**
 * @prop {number} minShowList: A quantidade minima a ser exibida da lista
 */    
    minShowList: number
    selectedItens: (itens) => void
    style: React.CSSProperties
}

export default function ListSelector( props : IListSelector ) {
    const [selectedItens, setSelectedItens] = useState([]);
    const [showSize, setShowSize] = useState(props.minShowList);

    useEffect(() => {
        props.selectedItens(selectedItens)
    }, [selectedItens]);

    const handleSelect = (id) => {
        let indexId = selectedItens.indexOf(id)
        if(indexId === -1){
            setSelectedItens(value => [...value, id])
            
        }
        else{
            setSelectedItens(selectedItens.filter( item => item !== id))
            
        }
    }

    const handleView = () => {
        if( showSize === props.minShowList)    setShowSize(props.contentList.length)
        else setShowSize(props.minShowList)
    }
    return(
        <ThemeProvider theme={FRSTTheme}>
            <Styles.containerList style={{...props.style}}>
                <Styles.titleList> {props.listTitle} </Styles.titleList>
                <Styles.listContent>
                    {props.contentList.map((item,index) => {
                        return(
                            index < showSize ?
                                <Styles.itemList key={index} >
                                    <div onClick={ () => handleSelect(item.id)}>
                                        {selectedItens.includes(item.id) ? <CheckboxChecked/> : <CheckboxEmpty/>}
                                    </div>
                                    {item.description}
                                </Styles.itemList>
                            : null
                        )}
                    )}
                </Styles.listContent>
                <Styles.viewMoreContent>
                    
                        <Button variant='link' 
                            label={showSize === props.minShowList ? props.textViewMore : props.textViewLess } 
                            handleClick={handleView}
                        />
                    
                </Styles.viewMoreContent>
            </Styles.containerList>
        </ThemeProvider>
    )
}