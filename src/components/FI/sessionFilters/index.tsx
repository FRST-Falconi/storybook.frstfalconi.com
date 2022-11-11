import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './sessionFiltersStyle'
import * as Icons from '../../../shared/icons'
import { ISessionFilters } from './sessionFilters'
import { useEffect, useState } from 'react'
import { ListItemText, MenuItem, Select, Checkbox, autocompleteClasses } from '@mui/material'

type enumVariant = 'myBusiness' | 'mission' |  'trail'

interface IFilterButton{
    /**
     * @prop {string} variant: As variants dos botões dos filtros:(myBusiness, mission, trail)
     */  
    variant: enumVariant
    label: string
    id: string
    handleClick ?: () => void
}

const MenuProps = {
    PaperProps: {
    style: {
        overflow: 'auto',
        maxHeight: 255,
        borderRadius: 8,
    },
    },
};


export default function SessionFilters(props: ISessionFilters) {
    const [selectedFilter, setSelectedFilter] = useState(props.selectedFilter);
    const [selectFilterContent, setSelectFilterContent] = useState([]);

   
    useEffect(() => {
        setSelectedFilter(props.selectedFilter)
    }, [props.selectedFilter]);

    const selectItem = (item) => {
        let index = selectFilterContent.indexOf(item.title)
        let newArray = [].concat(selectFilterContent)
        if(selectFilterContent.includes(item.title) ){
            newArray.splice(index, 1)
            setSelectFilterContent(currentValue => currentValue = newArray )
        }
        else{
            newArray.push(item.title)
            setSelectFilterContent(currentValue => currentValue = newArray)
        }
    }

    function FilterButton(props: IFilterButton) {
        return (
            <>
                {props.variant === 'myBusiness' ?
                    <Styles.ButtonSessionFilters active={selectedFilter === props.id} onClick={props.handleClick}>                    
                        <Icons.Handshake />                                    
                        {props.label}
                    </Styles.ButtonSessionFilters>  
                :  props.variant === 'mission' ?
                    <Styles.ButtonSessionFilters active={selectedFilter === props.id} onClick={props.handleClick}>                    
                        <Icons.Mission />                                        
                        {props.label}
                    </Styles.ButtonSessionFilters> 
                : props.variant ===  'trail' ?
                    <Styles.ButtonSessionFilters active={selectedFilter === props.id} onClick={props.handleClick}>                    
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
                                {FilterButton({variant:item.variant, label: item.label, id: item.id, handleClick: item.handleClick})}
                            </div>
                        )
                    })}
                </Styles.ButtonList>
                {props.selectedFilterContentList ?
                <>
                    {props.labelSelectItens}
                    <Styles.SelectedItens>
                        <Select  
                            multiple
                            labelId='selectedFilterInfoLabel'
                            id='selectedFilterInfo'
                            value={selectFilterContent} 
                            renderValue={(selected) =>`${selected.length} ${selected.length > 1 ? props.textMultipleSelected : props.textSingleSelected}`}
                            style={{height: 48, width: 384}}
                            MenuProps={MenuProps}
                            onChange={props.handleSelectedFilterData(selectFilterContent)}
                        >
                            {
                                props.selectedFilterContentList.map((item) => (
                                    <MenuItem
                                        onClick={() => selectItem(item)} 
                                        defaultValue={item.title} key={item.id} 
                                        style={{borderBottom: `1px solid ${FRSTTheme['colors'].neutralsGrey7}`}}
                                    >
                                        
                                        <Checkbox
                                            checked={selectFilterContent.indexOf(item.title) > -1}
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
                        <div style={{color: FRSTTheme['colors'].linkOnfocus, marginRight: 24, cursor: 'pointer'}} 
                            // onClick={props.handleDeleteFilter}
                            onClick={() => setSelectFilterContent(currentValue => currentValue = [])} 
                        >
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