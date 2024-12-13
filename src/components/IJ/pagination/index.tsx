import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import * as Styles from './paginationStyles'
import { BackArrow, FowardArrow } from '@shared/icons'

interface IPagination {
    totalRegistry: number
    registryPerPage: number
    qtdNumberShowPagination: number
    showFirstLastButton?: boolean
    isLoading?: boolean
    textFirstButton?: string
    textLastButton?: string
    children: React.ReactNode
    onLoadPage: (page: number) => void
    style?: React.CSSProperties
    buttonBackgroundColor?: string
}

export default function Pagination(props: IPagination) {
    const [activePage, setActivePage] = useState(0)
    const [TotalRegistry, setTotalRegistry] = useState(props.totalRegistry)
    const [totalPages, setTotalPages] = useState(Math.ceil(props.totalRegistry / props.registryPerPage))
    const [paginationElements, setPaginationElements] = useState([])
    const [IsLoading, setIsLoading] = useState(props.isLoading)
    const [Refresh, setRefresh] = useState(0)

    const handleSwitchPage = (page: number) => {
        if (page < 0) {
            setActivePage(0)
            props.onLoadPage(0)
        } else if (page > totalPages - 1) {
            setActivePage(totalPages - 1)
            if (page === 0) {
                props.onLoadPage(totalPages - 1)
            }
        } else {
            setActivePage(page)
            props.onLoadPage(page)
        }
    }

    useEffect(() => {
        setIsLoading(props.isLoading)
    }, [props.isLoading])

    useEffect(() => {
        if (props.totalRegistry === 0) {
            setActivePage(0)
        }
        setTotalRegistry(props.totalRegistry)
        setTotalPages(Math.ceil(props.totalRegistry / props.registryPerPage))
        CalcPaginations(Math.ceil(props.totalRegistry / props.registryPerPage))
        setRefresh(Refresh + 1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.totalRegistry])

    useEffect(() => {
        CalcPaginations(totalPages)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activePage])

    const CalcPaginations = (totalPages) => {
        let elements = []
        let start = 1
        let finish = 0
        let showEllipsis = true
        if (totalPages <= props.qtdNumberShowPagination) {
            start = 1
            finish = totalPages
        } else {
            if (activePage + props.qtdNumberShowPagination + 1 > totalPages) {
                start = totalPages - props.qtdNumberShowPagination + 1
                finish = totalPages
                showEllipsis = false
            } else {
                start = activePage + 1
                finish = activePage + props.qtdNumberShowPagination
            }
        }

        for (let i = start; i <= finish; i++) {
            if (showEllipsis && i === finish) {
                elements.push('...')
                elements.push(totalPages)
            } else {
                elements.push(i)
            }
        }

        setPaginationElements(elements)
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.containerPagination style={{ ...props.style }} id="container-pagination">
                <Styles.contentPagination id="content-pagination">{props.children}</Styles.contentPagination>

                {!IsLoading && Refresh > 0 && (
                    <Styles.pageButtonList id="page-button-list">
                        {props.showFirstLastButton ? (
                            <Styles.ButtonPage
                                disabled={activePage === 0}
                                onClick={() => activePage > 0 && handleSwitchPage(0)}
                                selected={false}
                                backgroundColor={props.buttonBackgroundColor}
                            >
                                {props.textFirstButton ? props.textFirstButton : 'Primeiro'}
                            </Styles.ButtonPage>
                        ) : null}

                        <Styles.ButtonPage
                            disabled={activePage === 0}
                            onClick={() => activePage > 0 && handleSwitchPage(activePage - 1)}
                            selected={false}
                            backgroundColor={props.buttonBackgroundColor}
                        >
                            <BackArrow width="16" height="16" fill="currentColor" />
                        </Styles.ButtonPage>

                        {paginationElements.map((item, index) => (
                            <Styles.ButtonPage
                                disabled={item === '...'}
                                key={index}
                                onClick={() => item != '...' && handleSwitchPage(item - 1)}
                                selected={activePage === item - 1}
                                backgroundColor={props.buttonBackgroundColor}
                            >
                                {item}
                            </Styles.ButtonPage>
                        ))}

                        <Styles.ButtonPage
                            disabled={activePage === totalPages - 1}
                            onClick={() => activePage < totalPages - 1 && handleSwitchPage(activePage + 1)}
                            selected={false}
                            backgroundColor={props.buttonBackgroundColor}
                        >
                            <FowardArrow width="18" height="18" fill="currentColor" />
                        </Styles.ButtonPage>

                        {props.showFirstLastButton ? (
                            <Styles.ButtonPage
                                disabled={activePage === totalPages - 1}
                                onClick={() => activePage < totalPages - 1 && handleSwitchPage(totalPages - 1)}
                                selected={false}
                                backgroundColor={props.buttonBackgroundColor}
                            >
                                {props.textLastButton ? props.textLastButton : 'Último'}
                            </Styles.ButtonPage>
                        ) : null}
                    </Styles.pageButtonList>
                )}
            </Styles.containerPagination>
        </ThemeProvider>
    )
}
