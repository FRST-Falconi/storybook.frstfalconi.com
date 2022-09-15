import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './urlAddressStyle'
import { IURLAddress } from './urlAddress'
import Button from "@components/buttons"
import * as Icons from '../../../shared/icons'

export default function URLAddress({ variant, url, onClickEncurta, onClickCopia }: IURLAddress) {

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.Container>
                <Styles.ContainerLink>
                    <Styles.TypographyCanal>Endereço do seu canal</Styles.TypographyCanal>
                    <Styles.BoxLink>
                        <Styles.TypographyLink>{url}</Styles.TypographyLink>
                        <Styles.TypographyMsn>
                            Este é o endereço do seu site LXP, ele sempre pode ser acessado dese domínio e nunca expira.
                        </Styles.TypographyMsn>
                    </Styles.BoxLink>
                </Styles.ContainerLink>
                <Styles.ContainerButton>
                    <Button handleClick={onClickEncurta} label={'Encurtar link'} variant={'secondary'} startIcon={<Icons.Link fill={'#FF4D0D'} />} />
                    <Button handleClick={onClickCopia} label={'Copiar link'} variant={'secondary'} startIcon={<Icons.CopyPaste fill={'#FF4D0D'} />} />
                </Styles.ContainerButton>
            </Styles.Container>
        </ThemeProvider>
    );
}