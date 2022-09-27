import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './loginStyle'
import { ILogin } from './login'
import * as Icons from '../../../shared/icons'
import VectorViewer from './VectorViewer'
import ViewerError from './ViewerError'
import Button from '@components/buttons'
import { useState } from 'react'
import TextField from '@components/form-elements/textfield'

export default function Login(props: ILogin) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [keepConnected, setKeepConnected] = useState(true)

    const onClikLogin = () => {
        props.handleClickLogin(email, password, keepConnected)
    }

    const onClickSubmit = () => {
        props.handleClickSubmit(email)
    }

    const onClickSave = () => {
        props.handleClickSave(newPassword, confirmPassword)
    }

    const handleClickCheckbox = () => {
        setKeepConnected(!keepConnected)
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            {props.variant === 'default' ?
                <Styles.Container >
                    <Styles.ContainerLogo>
                        <Icons.FRSTLogoBig />
                    </Styles.ContainerLogo>
                    <Styles.ContainerTypography>
                        <Styles.TypographyWelcome>Bem-vindo</Styles.TypographyWelcome>
                    </Styles.ContainerTypography>
                    <Styles.TypographyFill>Para acessar, preencha os campos abaixo:</Styles.TypographyFill>
                    {props.isError ?
                        <Styles.ContainerEmail>
                            <TextField 
                            error={false} 
                            placeholder='Email' 
                            label='Email' 
                            type='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} />                            
                        </Styles.ContainerEmail>
                        :
                        <Styles.ContainerEmail>
                            <TextField 
                            error={true} 
                            placeholder='Email' 
                            label='Email' 
                            type='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} />
                        </Styles.ContainerEmail>
                    }
                    <Styles.ContainerButtonLink>
                        <Button 
                        variant='link' 
                        label='Esqueceu a senha?' 
                        handleClick={props.handleClickForgotPassword} />
                    </Styles.ContainerButtonLink>
                    {props.isError ?
                        <Styles.ContainerPassword>
                            <TextField 
                            error={false}
                            endIcon={<VectorViewer />} 
                            placeholder='Senha' 
                            label='Senha' 
                            type='password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} />
                        </Styles.ContainerPassword>
                        :
                        <Styles.ContainerPasswordError>
                            <TextField 
                            error={true} 
                            helperText={'E-mail ou senha incorretos'} 
                            endIcon={<ViewerError />} 
                            placeholder='Senha' 
                            label='Senha' 
                            type='password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} />
                            <Styles.IconAlert>
                                <Icons.AlertCicle />
                            </Styles.IconAlert>
                        </Styles.ContainerPasswordError>
                    }
                    <Styles.ContainerConnect>
                        <Styles.ContainerCheckbox onClick={handleClickCheckbox}>
                            <Icons.CheckboxEmpty fill={'#ebeded'} />
                            <Styles.TypographyConnect>Manter-me conectado</Styles.TypographyConnect>
                        </Styles.ContainerCheckbox>
                        <Button variant='primary' label='Entrar' handleClick={onClikLogin} />
                    </Styles.ContainerConnect>
                </Styles.Container>
                : props.variant === 'recover' ?
                    <Styles.ContainerRecover>
                        <Styles.ContainerLogoRecover>
                            <Icons.FRSTLogoBig />
                        </Styles.ContainerLogoRecover>
                        <Styles.ContainerTypographyRecover>
                            <Styles.TypographyRecover>Digite seu e-mail de cadastro abaixo e clique em enviar.</Styles.TypographyRecover>
                            <Styles.TypographyRecover>Nós lhe enviaremos um e-mail com o link para recastrar sua senha.</Styles.TypographyRecover>
                        </Styles.ContainerTypographyRecover>
                        { props.isError ?
                        <Styles.ContainerEmailRecover>
                            <TextField 
                            error={false} 
                            placeholder='Email' 
                            label='Email' 
                            type='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} />
                        </Styles.ContainerEmailRecover>
                        :
                        <Styles.ContainerEmailRecover>
                            <TextField 
                            error={true} 
                            helperText='E-mail incorreto ou não cadastrado' 
                            placeholder='Email' 
                            label='Email' 
                            type='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} />
                        </Styles.ContainerEmailRecover>
                        }
                        <Styles.ContainerButtonRecover>
                            <Button variant='link' label='Não, cancelar' handleClick={props.handleClickNotCancel} />
                            <Button variant='primary' label='Enviar' handleClick={onClickSubmit} />
                        </Styles.ContainerButtonRecover>
                    </Styles.ContainerRecover>

                    : props.variant === 'newPassword' ?
                        <Styles.Container >
                            <Styles.ContainerLogoRecover>
                                <Icons.FRSTLogoBig />
                            </Styles.ContainerLogoRecover>
                            <Styles.TypographyNewPassword>
                                Para criar uma nova senha, preencha os campos abaixo:
                            </Styles.TypographyNewPassword>
                            <Styles.ContainerPasswordNew>
                                <TextField 
                                error={false} 
                                endIcon={<VectorViewer />} 
                                placeholder='Nova senha' 
                                label='Nova senha' 
                                type={'password'} 
                                value={newPassword} 
                                onChange={(e) => setNewPassword(e.target.value)} />
                                <TextField 
                                error={false} 
                                endIcon={<VectorViewer />} 
                                placeholder='Confirma senha' 
                                label='Confirma senha' 
                                type={'password'} 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                            </Styles.ContainerPasswordNew>
                            <Styles.ContainerButtonRecover>
                                <Button variant='link' label='Voltar Login' handleClick={props.handleClickComeBack} />
                                <Button variant='primary' label='Salvar' handleClick={onClickSave} />
                            </Styles.ContainerButtonRecover>
                        </Styles.Container>
                        : props.variant === 'sendConfirmation' ?
                            <Styles.ContainerSendComfirmation>
                                <Styles.ContainerLogoRecover>
                                    <Icons.FRSTLogoBig />
                                </Styles.ContainerLogoRecover>
                                <Styles.TypographyNewPassword>
                                    Solicitação enviada com sucesso para o seu e-mail.
                                </Styles.TypographyNewPassword>
                                <Styles.ContainerButtonSendConfirmation>
                                    <Button variant='primary' label='Retornar' handleClick={props.handleClickButtonSend} />
                                </Styles.ContainerButtonSendConfirmation>
                            </Styles.ContainerSendComfirmation>
                            : null
            }
        </ThemeProvider>
    );
}