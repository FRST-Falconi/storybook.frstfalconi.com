import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './sessionFiltersStyle'
import * as Icons from '../../../shared/icons'
import { ISessionFilters } from './sessionFilters'
import { useState } from 'react'
import Select from '@components/DS/select/Select'
// import FilterButton from './filterButton'

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


export default function SessionFilters(props: ISessionFilters) {
    const [selectedFilter, setSelectedFilter] = useState(0);

    function handleClick (id){
        setSelectedFilter(id)
    }
    
    function FilterButton(props: IFilterButton) {
        return (
            <>
                {console.log('Amigo estou aqui!')}
                {props.variant === 'myBusiness' ?
                    <Styles.ButtonSessionFilters onClick={ () => handleClick(props.id)}>                    
                        <Icons.Handshake />                                    
                        {props.label}
                    </Styles.ButtonSessionFilters>  
                :  props.variant === 'mission' ?
                    <Styles.ButtonSessionFilters onClick={ () => handleClick(props.id)}>                    
                        <Icons.Mission />                                        
                        {props.label}
                    </Styles.ButtonSessionFilters> 
                : props.variant ===  'trail' ?
                    <Styles.ButtonSessionFilters onClick={ () => handleClick(props.id)}>                    
                        <Icons.Lamp />                                        
                        {props.label}
                    </Styles.ButtonSessionFilters>
                : null}
            </>
            
        );
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.ContainerFilter>
                {props.labelFilters}
                <Styles.ButtonList>
                    {props.filterList.map((item,index) => {
                        return(
                            <div style={{marginRight: 24}}>
                            {FilterButton({variant:item.variant, label: item.label, id: index.toString()})}
                            </div>
                        )
                    })}
                </Styles.ButtonList>
                {props.labelSelectItens}
                <Styles.SelectedItens>
                    <Select  />
                    <div style={{color: FRSTTheme['colors'].linkOnfocus}}  >
                        <Icons.Trash fill={FRSTTheme['colors'].linkOnfocus} />
                        &nbsp;
                        {props.textDeleteFilter}
                    </div>
                </Styles.SelectedItens>
            </Styles.ContainerFilter>
        </ThemeProvider>
    );
}