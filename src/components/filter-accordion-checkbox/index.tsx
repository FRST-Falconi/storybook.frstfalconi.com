import React,{ useEffect, useState } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './filterAccordionCheckboxStyles'
import { IFilterAccordion } from './filterAccordionCheckbox'
import { randID } from './filterAccordionCheckbox.utils'

import AccordionTabs from '@components/accordion-tabs'
import Checkbox from '@components/form-elements/checkbox'

export default function FilterAccordionCheckbox({ generalTitle, object }: IFilterAccordion) {
    const [ activeTab, setActiveTab ] = useState('-1');
    const [ contentTabActiveShow, setContentTabActiveShow ] = useState(<div></div>);
    const [ tabs, setTabs ] = useState([]);

    const [ allCheckboxes, setAllCheckboxes ] = useState([]);

    useEffect(() => {
      let allCheck = [];
      for(let tabGroup of object) {
        for(let checkboxElement of tabGroup.group) {
          allCheck.push(checkboxElement)
        }
      }
      console.log('------------------')
      console.log(allCheck)
      console.log('------------------')
      // object.map((element: any) => {
      //   return {
      //     id: randID(),   
      //     description: element.description,
      //     title: element.category,
      //     totalCounter: 0,
      //     group: element.group
      //     }
      // },)
    }, []);

    useEffect(() => {
      let tabsForAccordion = object.map((element: any) => {
                          return {
                            id: randID(),   
                            description: element.description,
                            title: element.category,
                            totalCounter: 0,
                            group: includeStatusCheck(element.group)
                          }
                      },)
      setTabs(tabsForAccordion)
    }, []);

    useEffect(() => {
      let activeTabContent = tabs.filter((item) => item.id == activeTab)

      { activeTabContent && 
        activeTabContent[0] && 
        activeTabContent[0].group && 
        setContentTabActiveShow(buildCheckbox(activeTabContent[0].group))
      }

    }, [activeTab, tabs]);

    const buildCheckbox = (groupActive) => {      
        return <div>
          { 
            groupActive.map((item) => {
              let myID = item.id;    
              let isCheck = item.isChecked;            
              return <Checkbox label={item.description} isChecked={isCheck} handleCheck={() => handleCheck(myID)}/> 
            })
          }
        </div>
    }

    function handleCheck(e) {
      console.log(e)
    }

    const handleActiveTab = (newActive) => {
        if(newActive == activeTab) setActiveTab("-1")
        else setActiveTab(newActive);
    }

    const handleClean = () => {
      alert('limpar checkbox');
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <AccordionTabs
                hasCounterTab
                titleAccordion={generalTitle}
                titleTabs={tabs}

                activeTabID={activeTab}
                handleActiveTab={(e) => handleActiveTab(e)}
                
                hasCleanButton
                textCleanButton="Excluir filtros"
                handleActionClean={() => handleClean()}

                typeAccordion={"horizontal"}
                typeButtonTab={"transparent"}
            >
              { contentTabActiveShow }
            </AccordionTabs>
        </ThemeProvider>
    )

    function includeStatusCheck(group) {
      let newGroupWithStatusCheck = []
      for(let element of group) {
        element.isChecked = false;
        newGroupWithStatusCheck.push(element);
      }

      return newGroupWithStatusCheck;
    }
}