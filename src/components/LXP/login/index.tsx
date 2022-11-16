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
  const [confirmEmail, setConfirmEmail] = useState('')
  const [emailRecover, setEmailRecover] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [codigoNewPassword, setCodigoNewPassword] = useState('')
  const [keepConnected, setKeepConnected] = useState(true)
  const [step, setStep] = useState(1)
  const [error, setError] = useState(props.isError)
  const [colorError, setColorError] = useState(props.isError)
  const [MsgInput1, setMsgInput1] = useState('')
  const [MsgInput2, setMsgInput2] = useState('')

  useEffect(() => {
    setError(props.isError)
  }, [props.isError])

  const onClikLogin = () => {
    setMsgInput1('')
    setMsgInput2('')
    setError(false)

    let isError = false

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
      setMsgInput2(
        props.textEmailErrorPropsIsError
          ? props.textEmailErrorPropsIsError
          : 'Erro ao enviar email de recuperação de senha.'
      )
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
    setColorError(false)

    if (confirmEmail.length === 0) {
      setMsgInput2(
        props.textNewPasswordErrorEmailNaoInformada
          ? props.textNewPasswordErrorEmailNaoInformada
          : 'Email não informado.'
      )
      setError(true)
      return
    }
    let regexEmail = /\S+@\S+.\S+/
    if (!regexEmail.test(confirmEmail)) {
      setMsgInput2(props.textEmailErrorInvalido ? props.textEmailErrorInvalido : 'E-mail inválido.')
      setError(true)
      return
    }
    if (newPassword.length === 0) {
      setMsgInput2(
        props.textNewPasswordErrorNaoInformada ? props.textNewPasswordErrorNaoInformada : 'Nova senha não informada.'
      )
      setError(true)
      return
    }
    if (confirmPassword.length === 0) {
      setMsgInput2(
        props.textNewPasswordErrorCorfirma ? props.textNewPasswordErrorCorfirma : 'Confirmação de senha não informada.'
      )
      setError(true)
      return
    }
    if (codigoNewPassword.length === 0) {
      setMsgInput2(props.textNewPasswordErrorCodigo ? props.textNewPasswordErrorCodigo : 'Código não informado.')
      setError(true)
      return
    }
    if (newPassword !== confirmPassword) {
      setMsgInput2(
        props.textNewPasswordErrorIguais ? props.textNewPasswordErrorIguais : 'As duas senhas devem ser iguais.'
      )
      setError(true)
      return
    }
    if (props.isError) {
      setMsgInput2(
        props.textNewPasswordErrorInforma ? props.textNewPasswordErrorInforma : 'Erro ao informar nova senha.'
      )
      setError(true)
      return
    }

    let emailPrefix = confirmEmail.split('@')[0].split('.')[0]
    let emailSufix = confirmEmail.split('@')[1].split('.')[0]

    const validateEmailPrefix = new RegExp(emailPrefix, 'g')
    const validateEmailSufix = new RegExp(emailSufix, 'g')
    const validateUpperCase = new RegExp(/[A-Z]/, 'g')

    if (
      newPassword &&
      (!newPassword.replace(/\D/g, '') ||
        !newPassword.replace(/\d/g, '') ||
        !newPassword.replace(/\w/g, '') ||
        newPassword.match(/frst|falconi|FRST|FALCONI|Frst|Falconi/g) ||
        newPassword.match(validateEmailPrefix) ||
        newPassword.match(validateEmailSufix) ||
        !newPassword.match(validateUpperCase) ||
        newPassword.length < 8)
    ) {
      setColorError(true)
      setError(true)
      return
    }

    props.handleClickChangePassword(newPassword, confirmPassword, codigoNewPassword, confirmEmail)
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
      {props.variant === 'login' && step === 1 ? (
        <Styles.Container>
          <Styles.ContainerLogo>
            <Icons.FRSTLogoBig />
          </Styles.ContainerLogo>
          <Styles.ContainerTypography>
            <Styles.TypographyWelcome>
              {props.textBoasVindas ? props.textBoasVindas : 'Bem-vindo'}
            </Styles.TypographyWelcome>
          </Styles.ContainerTypography>
          <Styles.TypographyFill>
            {props.textLoginInformacao ? props.textLoginInformacao : 'Para acessar, preencha os campos abaixo:'}
          </Styles.TypographyFill>
          <Styles.ContainerInputAndLink>
            <Styles.ContainerIpuntAndIsIcon>
              <Styles.ContainerEmail isError={error}>
                <TextField
                  error={error}
                  helperText={MsgInput1}
                  placeholder="Email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%' }}
                />
              </Styles.ContainerEmail>
              {error && (
                <Styles.IconAlert>
                  <Icons.AlertCicle />
                </Styles.IconAlert>
              )}
            </Styles.ContainerIpuntAndIsIcon>
            <Styles.ContainerButtonLink>
              <Button
                variant="link"
                label={props.textoLabelLoginButtonLink ? props.textoLabelLoginButtonLink : 'Esqueceu a senha?'}
                handleClick={onClickForgotPassword}
              />
            </Styles.ContainerButtonLink>
            <Styles.ContainerIpuntAndIsIcon>
              <Styles.ContainerPassword isError={error}>
                <TextField
                  helperText={MsgInput2}
                  error={error}
                  endIcon={<Icons.Viewer fill={error ? '#ff0000' : '#000000'} />}
                  placeholder={props.textInputLoginSenha ? props.textInputLoginSenha : 'Senha'}
                  label={props.textInputLoginSenha ? props.textInputLoginSenha : 'Senha'}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%' }}
                />
              </Styles.ContainerPassword>
              {error && (
                <Styles.IconAlert style={{ paddingTop: '78px' }}>
                  <Icons.AlertCicle />
                </Styles.IconAlert>
              )}
            </Styles.ContainerIpuntAndIsIcon>
          </Styles.ContainerInputAndLink>
          <Styles.ContainerConnect>
            <Styles.ContainerCheckbox onClick={handleClickCheckbox}>
              {keepConnected ? <Icons.CheckboxEmpty fill={'#ebeded'} /> : <Icons.CheckboxChecked />}
              <Styles.TypographyConnect>
                {props.textLoginConectado ? props.textLoginConectado : 'Manter-me conectado'}
              </Styles.TypographyConnect>
            </Styles.ContainerCheckbox>
            <Button
              variant="primary"
              label={props.textLoginButton ? props.textLoginButton : 'Entrar'}
              handleClick={onClikLogin}
            />
          </Styles.ContainerConnect>
        </Styles.Container>
      ) : props.variant === 'login' && step === 2 ? (
        <Styles.ContainerRecover>
          <Styles.ContainerLogoRecover>
            <Icons.FRSTLogoBig />
          </Styles.ContainerLogoRecover>
          <Styles.ContainerEmailAndTypeRecoverRecover>
            <Styles.ContainerTypographyRecover>
              <Styles.TypographyRecover>
                {props.textEmailCadastro
                  ? props.textEmailCadastro
                  : 'Digite seu e-mail de cadastro abaixo e clique em enviar.'}
              </Styles.TypographyRecover>
              <Styles.TypographyRecover>
                {props.textEmailCadastro2
                  ? props.textEmailCadastro2
                  : 'Nós lhe enviaremos um e-mail com o link para recastrar sua senha.'}
              </Styles.TypographyRecover>
            </Styles.ContainerTypographyRecover>
            <Styles.ContainerIpuntAndIsIcon>
              <Styles.ContainerEmailRecover isError={error}>
                <TextField
                  error={error}
                  helperText={MsgInput2}
                  placeholder="Email"
                  label="Email"
                  type="email"
                  value={emailRecover}
                  onChange={(e) => setEmailRecover(e.target.value)}
                  style={{ width: '100%' }}
                />
              </Styles.ContainerEmailRecover>
              {error && (
                <Styles.IconAlert isStep={step}>
                  <Icons.AlertCicle />
                </Styles.IconAlert>
              )}
            </Styles.ContainerIpuntAndIsIcon>
          </Styles.ContainerEmailAndTypeRecoverRecover>

          <Styles.ContainerButtonRecover>
            <Button
              variant="link"
              label={props.textEmailButtonLinkCancel ? props.textEmailButtonLinkCancel : 'Não, cancelar'}
              handleClick={onClickNotCancel}
            />
            <Button
              variant="primary"
              label={props.textEmailButtonEnviar ? props.textEmailButtonEnviar : 'Enviar'}
              handleClick={onClickForgotPasswordChange}
            />
          </Styles.ContainerButtonRecover>
        </Styles.ContainerRecover>
      ) : props.variant === 'newPassword' ? (
        <Styles.Container>
          <Styles.ContainerLogoRecover>
            <Icons.FRSTLogoBig />
          </Styles.ContainerLogoRecover>
          <Styles.TypographyNewPassword>
            {props.textNewPasswordInformacao
              ? props.textNewPasswordInformacao
              : 'Para criar uma nova senha, preencha os campos abaixo:'}
          </Styles.TypographyNewPassword>
          <Styles.ContainerPasswordNew isError={error}>
            <Styles.ContainerIpuntAndIsIcon>
              <TextField
                error={error}
                endIcon={<Icons.Viewer fill={error ? '#ff0000' : '#000000'} />}
                placeholder={
                  props.textNewPasswordInputEmailPlaceholder
                    ? props.textNewPasswordInputEmailPlaceholder
                    : 'Digite o email'
                }
                label={props.textNewPasswordInputEmail ? props.textNewPasswordInputEmail : 'Digite o email'}
                type={'text'}
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                style={{ width: '95%' }}
              />
              {error && (
                <Styles.IconAlert>
                  <Icons.AlertCicle />
                </Styles.IconAlert>
              )}
            </Styles.ContainerIpuntAndIsIcon>
            <Styles.ContainerIpuntAndIsIcon>
              <TextField
                error={error}
                endIcon={<Icons.Viewer fill={error ? '#ff0000' : '#000000'} />}
                placeholder={props.textNewPasswordInput ? props.textNewPasswordInput : 'Digite nova senha'}
                label={props.textNewPasswordInput ? props.textNewPasswordInput : 'Nova senha'}
                type={'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={{ width: '95%' }}
              />
              {error && (
                <Styles.IconAlert>
                  <Icons.AlertCicle />
                </Styles.IconAlert>
              )}
            </Styles.ContainerIpuntAndIsIcon>

            <Styles.ContainerIpuntAndIsIcon>
              <TextField
                error={error}
                endIcon={<Icons.Viewer fill={error ? '#ff0000' : '#000000'} />}
                placeholder={props.textNewPasswordInputConfirma ? props.textNewPasswordInputConfirma : 'Confirme senha'}
                label={props.textNewPasswordInputConfirma ? props.textNewPasswordInputConfirma : 'Confirme nova senha'}
                type={'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ width: '95%' }}
              />
              {error && (
                <Styles.IconAlert>
                  <Icons.AlertCicle />
                </Styles.IconAlert>
              )}
            </Styles.ContainerIpuntAndIsIcon>

            <Styles.ContainerIpuntAndIsIcon>
              <TextField
                helperText={MsgInput2}
                error={error}
                placeholder={
                  props.textNewPasswordInputPlaceholderCodigo ? props.textNewPasswordInputPlaceholderCodigo : 'Código'
                }
                label={props.textNewPasswordInputCodigo ? props.textNewPasswordInputCodigo : 'Digite o Código'}
                type={'text'}
                value={codigoNewPassword}
                onChange={(e) => setCodigoNewPassword(e.target.value)}
                style={{ width: '95%' }}
              />
              {error && (
                <Styles.IconAlert>
                  <Icons.AlertCicle />
                </Styles.IconAlert>
              )}
            </Styles.ContainerIpuntAndIsIcon>
          </Styles.ContainerPasswordNew>

          <Styles.ContainerTypographyNewPassword>
            <Styles.TypographyNewPassword isColorError={colorError} style={{ fontSize: '14px' }}>
              {props.textNewPasswordErrorSenhaForte
                ? props.textNewPasswordErrorSenhaForte
                : 'Use pelo menos 8 caracteres, 1 maiúscula, 1 minúscula, e um número ou caractere especial. Não use parte de seu e-mail (seunome@empresa.com) como senha.'}
            </Styles.TypographyNewPassword>
          </Styles.ContainerTypographyNewPassword>

          <Styles.ContainerButtonRecover>
            <Button
              variant="link"
              label={props.textNewPasswordButtonLink ? props.textNewPasswordButtonLink : 'Voltar Login'}
              handleClick={props.handleClickChangePasswordCancel}
            />
            <Button
              variant="primary"
              label={props.textNewPasswordButtonSalvar ? props.textNewPasswordButtonSalvar : 'Salvar'}
              handleClick={onClickSave}
            />
          </Styles.ContainerButtonRecover>
        </Styles.Container>
      ) : props.variant === 'login' && step === 3 ? (
        <Styles.ContainerSendComfirmation>
          <Styles.ContainerLogoRecover>
            <Icons.FRSTLogoBig />
          </Styles.ContainerLogoRecover>
          <Styles.TypographyNewPassword>
            {props.textConfirmacaoRespostaEmail
              ? props.textConfirmacaoRespostaEmail
              : 'Solicitação enviada com sucesso para o seu e-mail.'}
          </Styles.TypographyNewPassword>
          <Styles.ContainerButtonSendConfirmation>
            <Button
              variant="primary"
              label={props.textConfirmacaoButtonRetorna ? props.textConfirmacaoButtonRetorna : 'Retornar'}
              handleClick={props.onClickConfimationBackToLogin}
            />
          </Styles.ContainerButtonSendConfirmation>
        </Styles.ContainerSendComfirmation>
      ) : null}
    </ThemeProvider>
  )
}
