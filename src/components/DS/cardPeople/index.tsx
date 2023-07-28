import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './cardPeople.styles'
import Avatar from '@components/avatar'
import Checkbox from '@components/form-elements/checkbox'
import Tooltip from '../tooltip'
import { ICardPeople } from './cardPeople'

export default function CardPeople({ labels, userInfo, isChecked, onChecked, hiddenCheckbox, style}:ICardPeople) {

    const handleChecked = () => {
        onChecked({
            ...userInfo, isChecked: !isChecked
        })
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.PeopleContainer isChecked={isChecked} style={{...style}}>
                <Styles.PeopleInfo>
                    <div style={{ paddingTop: '24px', display: 'flex', paddingLeft: '16px'}}>
                        <div style={{paddingTop:'12px'}}>
                        {hiddenCheckbox ? <div></div> : <Checkbox label="" isChecked={isChecked} handleCheck={handleChecked} />}
                        </div>
                        <Avatar size="40px" src={userInfo.avatar} />
                    </div>
                    <Styles.DescriptionPeople>
                        {userInfo.name && userInfo.name.length > 19 ? (
                            <Tooltip
                                content={userInfo.name}
                                direction={'bottom'}
                                style={{
                                    fontFamily: 'PT Sans',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    color: 'rgba(117, 117, 117, 1)',
                                    width: 'fit-content',
                                    height: '31px',
                                    top: '8px',
                                    left: '4px',
                                    whiteSpace: 'nowrap',
                                    boxShadow: ' 0px 0px 18px 0px rgba(34, 34, 34, 0.2)'
                                }}
                            >
                                <Styles.PeopleName style={{ cursor: 'pointer' }}>{userInfo.name}</Styles.PeopleName>
                            </Tooltip>
                        ) : (
                            <Styles.PeopleName>{userInfo.name}</Styles.PeopleName>
                        )}
                        {userInfo.email && userInfo.email.length > 24 ? (
                            <Tooltip
                            content={userInfo.email}
                            direction={'bottom'}
                                style={{
                                    fontFamily: 'PT Sans',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    color: 'rgba(117, 117, 117, 1)',
                                    width: 'fit-content',
                                    height: '31px',
                                    top: '8px',
                                    left: '4px',
                                    whiteSpace: 'nowrap',
                                    boxShadow: ' 0px 0px 18px 0px rgba(34, 34, 34, 0.2)'
                                }}
                            >
                                <Styles.PeopleEmail style={{cursor:'pointer'}}>{userInfo.email}</Styles.PeopleEmail>
                            </Tooltip>
                        ) : (
                        <Styles.PeopleEmail>{userInfo.email}</Styles.PeopleEmail>
                        )}
                    </Styles.DescriptionPeople>
                </Styles.PeopleInfo>

                <Styles.PositionContainer hiddenCheckbox={hiddenCheckbox}>
                    <Styles.DataBlock>
                        <div style={{paddingRight:'2px'}}>{labels?.area}:</div>
                        {userInfo.area && userInfo.area.length > 25 ? (
                        <Tooltip 
                            content={userInfo.area}
                            direction={'bottom'}
                            style={{
                                fontFamily: 'PT Sans',
                                fontWeight: 400,
                                fontSize: '14px',
                                color: 'rgba(117, 117, 117, 1)',
                                width: 'fit-content',
                                height: '31px',
                                top: '8px',
                                left: '4px',
                                whiteSpace: 'nowrap',
                                boxShadow: ' 0px 0px 18px 0px rgba(34, 34, 34, 0.2)'
                            }}
                        >
                            <span style={{cursor:'pointer'}}>{userInfo.area}</span>
                        </Tooltip>) : 
                        (
                            <span>{userInfo.area}</span>
                        )} 
                    </Styles.DataBlock>
                    <Styles.DataBlock>
                        <div style={{paddingRight:'2px'}}>{labels?.position}:</div>
                        {userInfo?.position && userInfo?.position.length > 24 ? (
                        <Tooltip
                        content={userInfo?.position}
                        direction={'bottom'}
                        style={{
                            fontFamily: 'PT Sans',
                            fontWeight: 400,
                            fontSize: '14px',
                            color: 'rgba(117, 117, 117, 1)',
                            width: 'fit-content',
                            height: '31px',
                            top: '8px',
                            left: '4px',
                            whiteSpace: 'nowrap',
                            boxShadow: ' 0px 0px 18px 0px rgba(29, 15, 15, 0.2)'
                        }}
                        >
                            <span style={{cursor:'pointer'}}>{userInfo?.position}</span>
                        </Tooltip>) : (
                            <span>{userInfo?.position}</span>
                        ) }
                    </Styles.DataBlock>
                </Styles.PositionContainer>
            </Styles.PeopleContainer>
        </ThemeProvider>
    )
}
