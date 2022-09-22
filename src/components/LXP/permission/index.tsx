import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './permissionStyle'
import { IPermission } from './permission'
import Switch from 'react-switch';
import { useState } from 'react'

export default function Permission({ variant, disabled, style, handleChangeAdmin, handleChangeEditor, handleChangeInstructor, handleChangeMentor, handleChangeViewer }: IPermission) {
    const [checked, setChecked] = useState(true)
    const [checkedAdmin, setCheckedAdmin] = useState(false)
    const [checkedEditor, setCheckedEditor] = useState(false)
    const [checkedInstructor, setCheckedInstructor] = useState(false)
    const [checkedViewer, setCheckedViewer] = useState(false)
    const [checkedMentor, setCheckedMentor] = useState(false)
    const [ disableAdmin, setDisableAdmin] =  useState(false)
    const [ disableEditor, setDisableEditor] =  useState(false)
    const [ disableInstructor, setDisableInstructor] =  useState(false)
    const [ disableViewer, setDisableViewer] =  useState(false)
    const [ disableMentor, setDisableMentor] =  useState(false) 
    
    const onChangeAdmin = (checkedValue) => {
        setCheckedAdmin(checkedValue)
        handleChangeAdmin(checkedValue)
    };

    const onChangeEditor = (checkedValue) => {
        setCheckedEditor(checkedValue)
        handleChangeEditor(checkedValue)
        
        if(checkedValue){
            setDisableAdmin(true)
            setDisableInstructor(true)
            setDisableMentor(true)
            setDisableViewer(true)
        } else {
            setDisableAdmin(false)
            setDisableInstructor(false)
            setDisableMentor(false)
            setDisableViewer(false)
        }
    };

    const onChangeInstructor = (checkedValue) => {
        setCheckedInstructor(checkedValue)
        handleChangeInstructor(checkedValue)

        if(checkedValue){
            setDisableAdmin(true)
            setDisableEditor(true)
            setDisableMentor(true)
            setDisableViewer(true)
        } else {
            setDisableAdmin(false)
            setDisableEditor(false)
            setDisableMentor(false)
            setDisableViewer(false)
        }
    };

    const onChangeViewer = (checkedValue) => {
        setCheckedViewer(checkedValue)
        handleChangeViewer(checkedValue)

        if(checkedValue){
            setDisableAdmin(true)
            setDisableEditor(true)
            setDisableMentor(true)
            setDisableInstructor(true)
        } else {
            setDisableAdmin(false)
            setDisableEditor(false)
            setDisableMentor(false)
            setDisableInstructor(false)
        }        
    };

    const onChangeMentor = (checkedValue) => {
        setCheckedMentor(checkedValue)
        handleChangeMentor(checkedValue)

        if(checkedValue){
            setDisableAdmin(true)
            setDisableEditor(true)
            setDisableInstructor(true)
            setDisableViewer(true)
        } else {
            setDisableAdmin(false)
            setDisableEditor(false)
            setDisableInstructor(false)
            setDisableViewer(false)
        }
    };
   
    return (
        <ThemeProvider theme={FRSTTheme}>
    
            <Styles.Container className={variant = 'Administrador'}>
                <Styles.Typography>Membros podem ter diferentes niveis de acesso baseados em seus papéis</Styles.Typography>
                <Styles.ContainerPermission>
                    <Styles.ContainerTypography>
                        <Styles.TypographyTitle>Administrador</Styles.TypographyTitle>
                        <Styles.TypographyPermission>Tem acesso total</Styles.TypographyPermission>
                    </Styles.ContainerTypography>
                    <Styles.ContainerSwitch >
                        <Switch                        
                            disabled={disableAdmin}
                            onChange={onChangeAdmin}
                            checked={checkedAdmin}
                            height={16}
                            width={40}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            handleDiameter={24}
                            onHandleColor='#ffffff'
                           offHandleColor='#ffffff'
                            onColor='#FF4D0D'
                           offColor='#ebebeb'
                           activeBoxShadow={checkedAdmin ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                           boxShadow={checkedAdmin ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                        />
                    </Styles.ContainerSwitch>
                </Styles.ContainerPermission>
                <Styles.ContainerPermission>
                    <Styles.ContainerTypography>
                        <Styles.TypographyTitle>Editor</Styles.TypographyTitle>
                        <Styles.TypographyPermission>Pode visualizar a evolução dos alunos de gráficos e editar os conteúdos dos cursos</Styles.TypographyPermission>
                    </Styles.ContainerTypography>
                    <Styles.ContainerSwitch >
                        <Switch                       
                            disabled={disableEditor}
                            onChange={onChangeEditor}
                            checked={checkedAdmin ? true : checkedEditor}
                            height={16}
                            width={40}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            handleDiameter={24}
                            onHandleColor='#ffffff'
                            offHandleColor='#ffffff'
                            onColor='#FF4D0D'
                            offColor='#ebebeb'
                            activeBoxShadow={checkedAdmin ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                            boxShadow={checkedAdmin ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                        />
                    </Styles.ContainerSwitch>
                </Styles.ContainerPermission>
                <Styles.ContainerPermission>
                    <Styles.ContainerTypography>
                        <Styles.TypographyTitle>Instrutor</Styles.TypographyTitle>
                        <Styles.TypographyPermission>Só pode visualizar e editar o conteúdo dos cursos</Styles.TypographyPermission>
                    </Styles.ContainerTypography>
                    <Styles.ContainerSwitch >
                        <Switch
                            disabled={disableInstructor}                    
                            onChange={onChangeInstructor}
                            checked={checkedAdmin ? true : checkedInstructor}
                            height={16}
                            width={40}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            handleDiameter={24}
                            onHandleColor='#ffffff'
                            offHandleColor='#ffffff'
                            onColor='#FF4D0D'
                            offColor='#ebebeb'
                            activeBoxShadow={checkedAdmin ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                            boxShadow={checkedAdmin ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                        />
                    </Styles.ContainerSwitch>
                </Styles.ContainerPermission>
                <Styles.ContainerPermission>
                    <Styles.ContainerTypography>
                        <Styles.TypographyTitle>Visualizador</Styles.TypographyTitle>
                        <Styles.TypographyPermission>Só pode visualizar através dos gráficos a evolução dos alunos e cursos</Styles.TypographyPermission>
                    </Styles.ContainerTypography>
                    <Styles.ContainerSwitch >
                        <Switch
                            disabled={disableViewer}
                            onChange={onChangeViewer}
                            checked={checkedAdmin ? true : checkedViewer}
                            height={16}
                            width={40}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            handleDiameter={24}
                            onHandleColor='#ffffff'
                            offHandleColor='#ffffff'
                            onColor='#FF4D0D'
                            offColor='#ebebeb'
                            activeBoxShadow={checkedAdmin ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                            boxShadow={checkedAdmin ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                        />
                    </Styles.ContainerSwitch>
                </Styles.ContainerPermission>
                <Styles.ContainerPermission>
                    <Styles.ContainerTypography>
                        <Styles.TypographyTitle>Mentor</Styles.TypographyTitle>
                        <Styles.TypographyPermission>Convidado para dar mentorias para os alunos quando houver necessidade</Styles.TypographyPermission>
                    </Styles.ContainerTypography>
                    <Styles.ContainerSwitch >
                        <Switch
                            disabled={disableMentor}
                            onChange={onChangeMentor}
                            checked={checkedAdmin ? true : checkedMentor}
                            height={16}
                            width={40}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            handleDiameter={24}
                            onHandleColor='#ffffff'
                            offHandleColor='#ffffff'
                            onColor='#FF4D0D'
                            offColor='#ebebeb'
                            activeBoxShadow={checkedAdmin ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                            boxShadow={checkedAdmin ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                        />
                    </Styles.ContainerSwitch>
                </Styles.ContainerPermission>
            </Styles.Container>
        </ThemeProvider>
    );
}