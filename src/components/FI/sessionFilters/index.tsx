import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './sessionFiltersStyle'
import * as Icons from '../../../shared/icons'
import { ISessionFilters } from './sessionFilters'
import { useState } from 'react'
import { ListItemText, MenuItem, Select, Checkbox } from '@mui/material'

type enumVariant = 'myBusiness' | 'mission' |  'trail'

interface IFilterButton{
    /**
     * @prop {string} variant: As variants dos botões dos filtros:(myBusiness, mission, trail)
     */  
    variant: enumVariant
    label: string
    id: number
    handleClick ?: () => void
}


export default function SessionFilters(props: ISessionFilters) {
    const [selectedFilter, setSelectedFilter] = useState(0);
    const selectFilterContent = []
    const checkedList = []

    function handleClick (id){
        setSelectedFilter(id)
        selectFilterContent.splice(0,selectFilterContent.length)
    }
    
    function FilterButton(props: IFilterButton) {
        return (
            <>
                {props.variant === 'myBusiness' ?
                    <Styles.ButtonSessionFilters active={selectedFilter === props.id} onClick={ () => handleClick(props.id)}>                    
                        <Icons.Handshake />                                    
                        {props.label}
                    </Styles.ButtonSessionFilters>  
                :  props.variant === 'mission' ?
                    <Styles.ButtonSessionFilters active={selectedFilter === props.id} onClick={ () => handleClick(props.id)}>                    
                        <Icons.Mission />                                        
                        {props.label}
                    </Styles.ButtonSessionFilters> 
                : props.variant ===  'trail' ?
                    <Styles.ButtonSessionFilters active={selectedFilter === props.id} onClick={ () => handleClick(props.id)}>                    
                        <Icons.Lamp />                                        
                        {props.label}
                    </Styles.ButtonSessionFilters>
                : null}
            </>
            
        );
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.ContainerFilter style={{...props.style}}>
                {props.labelFilters}
                <Styles.ButtonList>
                    {props.filterList.map((item,index) => {
                        return(
                            <div style={{marginRight: 24}} key={index}>
                                {FilterButton({variant:item.variant, label: item.label, id: index})}
                            </div>
                        )
                    })}
                </Styles.ButtonList>
                {props.filterList[selectedFilter].filterContentList ?
                <>
                    {props.labelSelectItens}
                    <Styles.SelectedItens>
                        <Select  
                            multiple
                            labelId='selectedFilterInfoLabel'
                            id='selectedFilterInfo'
                            value={selectFilterContent} 
                            renderValue={(selected) => `${selected.length} ${props.textSelected}`}
                            style={{height: 48, width: 384}}
                            >
                            {
                                props.filterList[selectedFilter].filterContentList.map((item) => (
                                    <MenuItem
                                    onClick={item.onChangeChecked} 
                                    // onClick={() => {
                                        //     let index = selectFilterContent.indexOf(item.title)
                                        //     if(index > -1 ){
                                            //         selectFilterContent.splice(index, 1)
                                            //         checkedList[indexMap] = false
                                            //     }
                                            //     else{
                                        //         selectFilterContent.push(item.title)
                                        //         checkedList[indexMap] = true
                                        //     }
                                        // }} 
                                        defaultValue={item.title} key={item.id} 
                                    >
                                        
                                        <Checkbox
                                            checked={item.checked}
                                            
                                            sx={{
                                                color: FRSTTheme['colors'].neutralsGrey5,
                                                '&.Mui-checked': {
                                                    color: FRSTTheme['colors'].primary1,
                                                },
                                            }}
                                        />
                                        <ListItemText style={{color: FRSTTheme['colors'].neutralsGrey1, fontSize: 16, fontWeight: 400}} primary={item.title} />
                                    </MenuItem>
                                ))
                            }
                        </Select>
                        <div style={{color: FRSTTheme['colors'].linkOnfocus, marginRight: 24, cursor: 'pointer'}} onClick={props.handleDeleteFilter} >
                            <Icons.Trash fill={FRSTTheme['colors'].linkOnfocus} />
                            &nbsp;
                            {props.textDeleteFilter}
                        </div>
                    </Styles.SelectedItens>
                </>
                : null
                }
            </Styles.ContainerFilter>
        </ThemeProvider>
    );
}