import React,{ useEffect, useState, useLayoutEffect } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './filterAccordionCheckboxStyles'
import { IFilterAccordion } from './filterAccordionCheckbox'
import { randID } from './filterAccordionCheckbox.utils'

import AccordionTabs from '@components/accordion-tabs'
import Checkbox from '@components/form-elements/checkbox'

export default function FilterAccordionCheckbox({ generalTitle, object, onSelected }: IFilterAccordion) {
    const [ activeTab, setActiveTab ] = useState('-1');
    const [ contentTabActiveShow, setContentTabActiveShow ] = useState(<div></div>);
    const [ tabs, setTabs ] = useState([]);

    const [ allCheckboxes, setAllCheckboxes ] = useState([]);

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

    useLayoutEffect(() => {
      renderNewContent(tabs)
    }, [activeTab, tabs]);

    const handleActiveTab = (newActive) => {
        if(newActive == activeTab) setActiveTab("-1")
        else setActiveTab(newActive);
    }

    function handleCheck(idCheck) {
      let copyObjectTab = tabs;

      for(let indexTab in tabs) {
        for(let indexChecks in (tabs[indexTab].group)) {
          if(tabs[indexTab].group[indexChecks].id == idCheck) {
            copyObjectTab[indexTab].group[indexChecks].isChecked = !(copyObjectTab[indexTab].group[indexChecks].isChecked);
            
            // Handle counter in tab title
            if(copyObjectTab[indexTab].group[indexChecks].isChecked)
              copyObjectTab[indexTab].totalCounter += 1;
            else
              copyObjectTab[indexTab].totalCounter -= 1;
          }
        }
      }

      setTabs(copyObjectTab);
      renderNewContent(copyObjectTab);

      onSelected(buildReturnSelecteds(copyObjectTab));
    }

    const handleClean = () => {      
      let copyObjectTab = tabs;

      for(let indexTab in tabs) {
        for(let indexChecks in (tabs[indexTab].group)) {
            copyObjectTab[indexTab].group[indexChecks].isChecked = false;
            copyObjectTab[indexTab].totalCounter = 0;
        }
      }
      
      setTabs(copyObjectTab);
      renderNewContent(copyObjectTab);

      onSelected(buildReturnSelecteds(copyObjectTab));
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

    function buildReturnSelecteds(copyObjectTab) {
      let resultSelected = []

      console.log(copyObjectTab);
      let counter = 0;
      copyObjectTab.forEach(tab => {
          resultSelected[counter] = {
            description: tab.title,
            selected: []
          }
          if(tab.totalCounter > 0) {
            tab.group.map((item) =>{
              if(item.isChecked)
                resultSelected[counter].selected.push(item.id)
            })
          }          
          counter++;
      });

      console.log(resultSelected)

      return resultSelected;
    }

    function renderNewContent(copyObjectTab) {
      let activeTabContent = copyObjectTab.filter((item) => item.id == activeTab)

      { activeTabContent && 
        activeTabContent[0] && 
        activeTabContent[0].group && 
        setContentTabActiveShow(buildCheckbox(activeTabContent[0].group)) }
    }
    
    function buildCheckbox(groupActive) {
      let setGroupQuantity = 3;
      if(groupActive.length > 12) setGroupQuantity = 5;

      let splitGroup = splitGroupInLots(groupActive, setGroupQuantity);

      return (
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          
          { splitGroup.map((container) => {
              return <div key={randID()} style={{ display: 'flex', flexDirection: 'column', marginRight: '24px' }}>
                  {
                    container.map((item) => {
                      let myID = item.id;    
                      let isCheck = item.isChecked;            
                      return <Checkbox key={myID} label={item.description} isChecked={isCheck} handleCheck={() => handleCheck(myID)}/> 
                    })
                  }
                </div>
              }
            )
          } 
        </div>
      )
    }

    function splitGroupInLots(group, qtdPerGroup) {
      let newGroup = []

      let totalItems = group.length;
      let totalColumns = Math.ceil(totalItems/qtdPerGroup);

      let counterLinear = 0;
      for(let i=0; i < totalColumns; i++) {
        if(!newGroup[i]) newGroup[i] = []
        for(let j=0; j < qtdPerGroup; j++) {
          if(group[counterLinear]) {
            newGroup[i][j] = group[counterLinear];
            counterLinear++;
          }
        }
      }
      return newGroup;
    }
}