import {
    ArticleContainer,
    ArticleContent,
    ArticleFooter
} from './styles'

function ExitIcon () {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.61144 16.6668H5.64847C5.25556 16.6668 4.87874 16.5107 4.60091 16.2329C4.32308 15.9551 4.16699 15.5783 4.16699 15.1853V4.81498C4.16699 4.42206 4.32308 4.04524 4.60091 3.76741C4.87874 3.48958 5.25556 3.3335 5.64847 3.3335H8.61144" stroke="#444444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.9629 13.7038L16.6666 10.0001L12.9629 6.29639" stroke="#444444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.6673 10L8.33398 10" stroke="#444444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

interface Company {
    icon?: string
    name?: string
    uuid?: string
}

interface articlesProps {
    title: string
    description: string
    company: Company
    handleClick: () => void
}

export default function ArticleCard ({
    title,
    description,
    company,
    handleClick
}: articlesProps) {

    return (
        <ArticleContainer>
            <ArticleContent>
                <p className='cardType'> Artigo </p>
                <p className='title'> {title} </p>
                <p className='description'> {description} </p>
            </ArticleContent>
            <ArticleFooter>
                <p className="cta" onClick={handleClick}>
                    Acessar
                    <ExitIcon />
                </p>
                {company &&
                    <p className='company'>
                        <img src={company.icon}/>
                        {company.name}
                    </p>
                }
            </ArticleFooter>
        </ArticleContainer>
    )
}