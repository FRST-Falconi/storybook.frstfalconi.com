import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { CardWrapper, WrapperHeader, TitleCard, WrapperFooter, AvatarInternal, WrapperAvatar, ButtonMore} from './stepCardStyles'
import { IStepCard } from './stepCard'

import { Bullseye } from '@shared/icons'

import Avatar from '@components/avatar'

export default function StepCard({ title, onClick, numberPeople, textButtonMore, active, src, width }: IStepCard) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            <CardWrapper active={active} onClick={onClick} width={width}>
                <WrapperHeader>
                    <Bullseye/>
                    <TitleCard>{title}</TitleCard>
                </WrapperHeader>
                <WrapperFooter>
                    <WrapperAvatar>
                        { numberPeople > 0 ? (
                        <AvatarInternal size={'30px'} zIndex={'1'} margin={'0 0 0 0px'}>
                            <Avatar size={'28px'} src={src && src.length > 0 ? src[0] : null}/> 
                        </AvatarInternal>) : (null)}
                        
                        { numberPeople > 1 ? (
                        <AvatarInternal size={'30px'} zIndex={'2'} margin={'0 0 0 -10px'}>
                            <Avatar size={'28px'} src={src && src.length > 0 ? src[1] : null}/> 
                        </AvatarInternal>) : (null)}

                        { numberPeople > 2 ? (
                        <AvatarInternal size={'30px'} zIndex={'3'} margin={'0 0 0 -10px'}>
                            <Avatar size={'28px'} src={src && src.length > 0 ? src[2] : null}/> 
                        </AvatarInternal>) : (null)}

                        { (numberPeople-3) > 0 ? (
                            <AvatarInternal size={'30px'} zIndex={'4'} margin={'0 0 0 -10px'} backgroundColor={'#E8E8E8'} padding={'2px 0 0 0'}>
                                +{numberPeople-3 > 99 ? 99 : numberPeople-3}
                            </AvatarInternal>) : (null)}
                    </WrapperAvatar>
                    <ButtonMore>
                        {textButtonMore}
                    </ButtonMore>
                </WrapperFooter>
            </CardWrapper>
        </ThemeProvider>
    )
}
