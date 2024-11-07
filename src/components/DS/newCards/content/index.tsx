import { ThemeProvider } from 'styled-components'
import {
    CardContainer,
    WrapperImage,
    CardInfo,
    DescriptionWrapper,
    CardFooter
} from './styles'
import { FRSTTheme } from '../../../../theme'

function DownloadIcon () {
    return (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9031 12.1523V14.7604C15.9031 15.1062 15.7657 15.4379 15.5212 15.6825C15.2766 15.927 14.945 16.0644 14.5991 16.0644H5.47101C5.12516 16.0644 4.79348 15.927 4.54893 15.6825C4.30438 15.4379 4.16699 15.1062 4.16699 14.7604V12.1523" stroke="#444444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.17285 9.66699L9.92285 13.0003L13.6729 9.66699" stroke="#444444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.92285 13.0002V3.8335" stroke="#444444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

interface Company {
    icon?: string
    name?: string
    uuid?: string
}
interface cardContentProps {
    contentType: string
    contentImage: string
    contentDescription: string
    company?: Company
    handleDownload: () => void
}

export default function CardContent ({
    contentType,
    contentImage,
    contentDescription,
    company,
    handleDownload
}: cardContentProps) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            <CardContainer>
                <WrapperImage>
                    <img
                        src={contentImage}
                    />
                </WrapperImage>
                <CardInfo>
                    <DescriptionWrapper>
                        <p className='title'> {contentType.toUpperCase()} </p>
                        <p className='description'> {contentDescription} </p>
                    </DescriptionWrapper>
                    <CardFooter>
                        <p className='download' onClick={handleDownload}>
                            Baixar
                            <DownloadIcon />
                        </p>
                        {company &&
                            <p className='company'>
                                <img src={company.icon}/>
                                {company.name}
                            </p>
                        }
                    </CardFooter>
                </CardInfo>
            </CardContainer>
        </ThemeProvider>
    )
}