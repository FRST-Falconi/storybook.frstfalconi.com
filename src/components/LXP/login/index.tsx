import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './loginStyle'
import { ILogin, ILoginTranslate } from './login'
import * as Icons from '../../../shared/icons'
import Button from '@components/buttons'
import React, { useState, useEffect } from 'react'
import TextField from '@components/form-elements/textfield'

export default function Login(props: ILoginTranslate) {

    const [email, setEmail] = useState('')
    const [emailRecover, setEmailRecover] = useState('');
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [keepConnected, setKeepConnected] = useState(true)
    const [step, setStep] = useState(1)
    const [error, setError] = useState(props.isError)
    const [MsgInput1, setMsgInput1] = useState('');
    const [MsgInput2, setMsgInput2] = useState('');


    const onClikLogin = () => {
        setMsgInput1('')
        setMsgInput2('')
        setError(false)

        if (email.length === 0) {
            setMsgInput2(props.textErrorEmailNaoInformado ? props.textErrorEmailNaoInformado : 'E-mail não informado.')
            setError(true)
            return
        }
        if (password.length === 0) {
            setMsgInput2(props.textErrorSenhaNaoInformado ? props.textErrorSenhaNaoInformado : 'Senha não Informada.')
            setError(true)
            return
        }
        if (props.isError) {
            setMsgInput2(props.textErrorLoginPropsIsError ? props.textErrorLoginPropsIsError : 'E-mail ou senhas incorretos.')
            setError(true)
            return
        }

        props.handleClickLogin(email, password, keepConnected)

    }

    const onClickForgotPasswordChange = () => {
        //const emailRegex = ('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        setMsgInput1('')
        setMsgInput2('')
        setError(false)

        if (emailRecover.length === 0) {
            setMsgInput2(props.textEmailErrorNaoPrenchido ? props.textEmailErrorNaoPrenchido : 'E-mail não preenchido.')
            setError(true)
            return
        }
        let regexEmail = /\S+@\S+.\S+/
        if (!regexEmail.test(emailRecover)) {
            setMsgInput2(props.textEmailErrorInvalido ? props.textEmailErrorInvalido : 'E-mail inválido.')
            setError(true)
            return
        }
        if (props.isError) {
            setMsgInput2(props.textEmailErrorPropsIsError ? props.textEmailErrorPropsIsError : 'Erro ao enviar email de recuperação de senha.')
            setError(true)
            return
        }
        props.handleClickForgotPassword(emailRecover)
        setStep(3)
    }

    const onClickSave = () => {
        setMsgInput1('')
        setMsgInput2('')
        setError(false)
        
        if (newPassword.length === 0) {
            setMsgInput2(props.textNewPasswordErrorNaoInformada ? props.textNewPasswordErrorNaoInformada : 'Nova senha não informada.')
            setError(true)
            return
        }
        if (newPassword && (!newPassword.replace(/\D/g, '') || !newPassword.replace(/\d/g, '') || !newPassword.replace(/\w/g, '') || newPassword.length < 8)) {
            setMsgInput2( props.textNewPasswordErrorSenhaForte ? props.textNewPasswordErrorSenhaForte : 'Sua senha deve ser composta por no mínimo 8 caracteres e incluir ao menos uma letra, um número e um caractere especial.')            
            setError(true)
            return
        }
        if (confirmPassword.length === 0) {
            setMsgInput2(props.textNewPasswordErrorCorfirma ? props.textNewPasswordErrorCorfirma : 'Confirmação de senha não informada.')
            setError(true)
            return
        }
        if (newPassword !== confirmPassword) {
            setMsgInput2(props.textNewPasswordErrorIguais ? props.textNewPasswordErrorIguais : 'As duas senhas devem ser iguais.')
            setError(true)
            return
        }
        if (props.isError) {
            setMsgInput2(props.textNewPasswordErrorInforma ? props.textNewPasswordErrorInforma : 'Erro ao informar nova senha.')
            setError(true)
            return
        }
        props.handleClickChangePassword(newPassword, confirmPassword)
    }

    const handleClickCheckbox = () => {
        setKeepConnected(!keepConnected)
    }

    const onClickForgotPassword = () => {
        setError(false)
        setEmailRecover('')
        setStep(2)
        setMsgInput2('')
    }

    const onClickNotCancel = () => {
        setError(false)
        setStep(1)
        setMsgInput2('')
    }

    useEffect(() => {
        setError(props.isError)
        setMsgInput2(props.isError ? 'E-mail ou senhas incorretos.' : '')
    }, [props.isError])

    return (
        <ThemeProvider theme={FRSTTheme}>
            {props.variant === 'login' && step === 1 ?
                <Styles.Container >
                    <Styles.ContainerLogo>
                        <Icons.FRSTLogoBig />
                    </Styles.ContainerLogo>
                    <Styles.ContainerTypography>
                        <Styles.TypographyWelcome>{props.textBoasVindas ? props.textBoasVindas : 'Bem-vindo' }</Styles.TypographyWelcome>
                    </Styles.ContainerTypography>
                    <Styles.TypographyFill>{props.textLoginInformacao ? props.textLoginInformacao : 'Para acessar, preencha os campos abaixo:'}</Styles.TypographyFill>
                    <Styles.ContainerEmail>
                        <TextField
                            error={error}
                            helperText={MsgInput1}
                            placeholder='Email'
                            label='Email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </Styles.ContainerEmail>
                    <Styles.ContainerButtonLink>
                        <Button
                            variant='link'
                            label={props.textoLabelLoginButtonLink ? props.textoLabelLoginButtonLink : 'Esqueceu a senha?'}
                            handleClick={onClickForgotPassword} />
                    </Styles.ContainerButtonLink>
                    <Styles.ContainerPassword>
                        <TextField
                            helperText={MsgInput2}
                            error={error}
                            endIcon={<Icons.Viewer fill={error ? '#ff0000' : '#000000'} />}
                            placeholder={props.textInputLoginSenha ? props.textInputLoginSenha : 'Senha'}
                            label={props.textInputLoginSenha ? props.textInputLoginSenha : 'Senha'}
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </Styles.ContainerPassword>
                    {error &&
                        <Styles.IconAlert>
                            <Icons.AlertCicle />
                        </Styles.IconAlert>
                    }
                    <Styles.ContainerConnect>
                        <Styles.ContainerCheckbox onClick={handleClickCheckbox}>
                            <Icons.CheckboxEmpty fill={'#ebeded'} />
                            <Styles.TypographyConnect>{props.textLoginConectado ? props.textLoginConectado : 'Manter-me conectado'}</Styles.TypographyConnect>
                        </Styles.ContainerCheckbox>
                        <Button variant='primary' label={props.textLoginButton ? props.textLoginButton : 'Entrar'} handleClick={onClikLogin} />
                    </Styles.ContainerConnect>
                </Styles.Container>
                : props.variant === 'login' && step === 2 ?
                    <Styles.ContainerRecover>
                        <Styles.ContainerLogoRecover>
                            <Icons.FRSTLogoBig />
                        </Styles.ContainerLogoRecover>
                        <Styles.ContainerTypographyRecover>
                            <Styles.TypographyRecover>{props.textEmailCadastro ? props.textEmailCadastro : 'Digite seu e-mail de cadastro abaixo e clique em enviar.'}</Styles.TypographyRecover>
                            <Styles.TypographyRecover>{props.textEmailCadastro2 ? props.textEmailCadastro2 : 'Nós lhe enviaremos um e-mail com o link para recastrar sua senha.'}</Styles.TypographyRecover>
                        </Styles.ContainerTypographyRecover>
                        <Styles.ContainerEmailRecover>
                            <TextField
                                error={error}
                                helperText={MsgInput2}
                                placeholder='Email'
                                label='Email'
                                type='email'
                                value={emailRecover}
                                onChange={(e) => setEmailRecover(e.target.value)} />
                        </Styles.ContainerEmailRecover>
                        <Styles.ContainerButtonRecover>
                            <Button variant='link' label={props.textEmailButtonLinkCancel ? props.textEmailButtonLinkCancel : 'Não, cancelar'} handleClick={onClickNotCancel} />
                            <Button variant='primary' label={props.textEmailButtonEnviar ? props.textEmailButtonEnviar : 'Enviar'} handleClick={onClickForgotPasswordChange} />
                        </Styles.ContainerButtonRecover>
                    </Styles.ContainerRecover>
                    : props.variant === 'newPassword' ?
                        <Styles.Container >
                            <Styles.ContainerLogoRecover>
                                <Icons.FRSTLogoBig />
                            </Styles.ContainerLogoRecover>
                            <Styles.TypographyNewPassword>
                                {props.textNewPasswordInformacao ? props.textNewPasswordInformacao : 'Para criar uma nova senha, preencha os campos abaixo:'}
                            </Styles.TypographyNewPassword>
                            <Styles.ContainerPasswordNew>
                                <TextField
                                    error={error}
                                    endIcon={<Icons.Viewer fill={error ? '#ff0000' : '#000000'} />}
                                    placeholder={props.textNewPasswordInput ? props.textNewPasswordInput : 'Nova senha'}
                                    label={props.textNewPasswordInput ? props.textNewPasswordInput : 'Nova senha'}
                                    type={'password'}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)} />
                                <TextField
                                    helperText={MsgInput2}
                                    error={error}
                                    endIcon={<Icons.Viewer fill={error ? '#ff0000' : '#000000'} />}
                                    placeholder={props.textNewPasswordInputConfirma ? props.textNewPasswordInputConfirma : 'Confirma senha'}
                                    label={props.textNewPasswordInputConfirma ? props.textNewPasswordInputConfirma : 'Confirma senha'}
                                    type={'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} />
                            </Styles.ContainerPasswordNew>
                            <Styles.ContainerButtonRecover>
                                <Button variant='link' label={props.textNewPasswordButtonLink ? props.textNewPasswordButtonLink : 'Voltar Login'} handleClick={props.handleClickChangePasswordCancel} />
                                <Button variant='primary' label={props.textNewPasswordButtonSalvar ? props.textNewPasswordButtonSalvar : 'Salvar'} handleClick={onClickSave} />
                            </Styles.ContainerButtonRecover>
                        </Styles.Container>
                        : props.variant === 'login' && step === 3 ?
                            <Styles.ContainerSendComfirmation>
                                <Styles.ContainerLogoRecover>
                                    <Icons.FRSTLogoBig />
                                </Styles.ContainerLogoRecover>
                                <Styles.TypographyNewPassword>
                                   {props.textConfirmacaoRespostaEmail ? props.textConfirmacaoRespostaEmail : 'Solicitação enviada com sucesso para o seu e-mail.'}
                                </Styles.TypographyNewPassword>
                                <Styles.ContainerButtonSendConfirmation>
                                    <Button variant='primary' label={props.textConfirmacaoButtonRetorna ? props.textConfirmacaoButtonRetorna : 'Retornar'} handleClick={props.onClickConfimationBackToLogin} />
                                </Styles.ContainerButtonSendConfirmation>
                            </Styles.ContainerSendComfirmation>
                            : null
            }
        </ThemeProvider>
    );
}