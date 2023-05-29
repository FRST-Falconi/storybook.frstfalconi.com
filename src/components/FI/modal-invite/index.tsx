import React,{ useEffect,  useState }  from 'react'
import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { 
    WrapperContent,
    TitleModal,
    DesriptionModal,
    WrapperInputs,
    WrapperInputPerson,
    CustomTextField,
    ButtonAddNewPerson,
    LabelButtonAddPerson,
    ButtonRemove } from './modalInviteStyles'
import Modal from './../../DS/modal'
import { IModalInvite } from './modalInvite'
import Button from '@components/buttons'
import { TrashIconNew } from '@shared/icons'
import MessageBox from '@components/cardLT/MessageBox'

export default function ModalInvite({
    isInviteMultiple, 
    statusSend, 
    onClickInvite, 
    isOpenModal, 
    labels }: IModalInvite) {

    return (
        <ThemeProvider theme={FRSTTheme}>
            {isInviteMultiple ? <Modal   
                open={isOpenModal}
                // onClose={() => console.log('closed')}
                // onOpen={() => console.log('opened')}
                children={ 
                    <ContentModalInviteMultiple
                        labels={labels}
                        onClickInvite={onClickInvite}
                        statusSend={statusSend}
                    />
                }
                animation={'BlowUp'}
                // handleCloseOnIcon={ () => {
                //     console.log('custom close with handleCloseOnIcon')
                // }}
                showCloseButton={true}
                style={{width: '756px', maxWidth:'90%'}}
            /> : null}
        </ThemeProvider>
    )
}


function ContentModalInviteMultiple({labels, onClickInvite, statusSend}) {
    const [ statusSendLocal, setStatusSendLocal ] = useState(statusSend)

    useEffect(() => {
        setStatusSendLocal(statusSend)
    }, [statusSend])

    const [ inputMultiplePerson, setInputMultiplePerson ] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setInputMultiplePerson([{
                id: 1,
                name: '',
                errorName: false,
                lastName: '',
                errorLastName: false,
                email: '',
                errorEmail: false
            }])
        }, 200)
    }, [])
    const [ isDisabledSendInvite, setIsDisabledSendInvite ] = useState(false)

    const onChangeInput = ({e, type, id}) => {
        setInputMultiplePerson((inputMultiplePerson) => {
            let cpy  = [ ...inputMultiplePerson ];
            cpy[id-1][type] = e?.target?.value;

            cpy[id-1]['errorEmail'] = type == 'email' && !validateEmail(e?.target?.value)

            return cpy;
        })
        
    }

    const handleAddNewInput = () => {
        setInputMultiplePerson((inputMultiplePerson) => {
            let cpy  = [
                ...inputMultiplePerson,
                {
                    id: inputMultiplePerson.length + 1,
                    name: '',
                    errorName: false,
                    lastName: '',
                    errorLastName: false,
                    email: '',
                    errorEmail: false
                }
            ];
            return cpy;
        })
    }

    const handleRemoveInput = () => {
        if(inputMultiplePerson.length > 1) {
            setInputMultiplePerson((inputMultiplePerson) => {
                let cpy  = [
                    ...inputMultiplePerson
                ];
                cpy.pop()
                return cpy;
            })
        }
    }

    const resetStates = () => {
        setInputMultiplePerson([{
            id: 1,
            name: '',
            errorName: false,
            lastName: '',
            errorLastName: false,
            email: '',
            errorEmail: false
        }])
    }

    const sendListInput = () => {
        let hasSameError = false
        let filterInfo = inputMultiplePerson.map((item) => {
            if( item.errorEmail || 
                item.errorLastName || 
                item.errorName ||
                item.email.length < 5 ||
                item.name.length < 3
            ) {
                hasSameError = true;
            }
            return { name: item?.name, lastName: item?.lastName, email: item?.email }
        })
        onClickInvite(filterInfo)
        resetStates()
    }

    useEffect(() => {
        for(let item of inputMultiplePerson) {
            if( item.errorEmail || 
                item.errorLastName || 
                item.errorName ||
                item.email.length < 5 ||
                item.name.length < 3
            ) {
                setIsDisabledSendInvite(true)
                break;
            } else {
                setIsDisabledSendInvite(false)
            }
        }
    }, [inputMultiplePerson])


    return(
        <WrapperContent>
            <div>
                <TitleModal>{labels?.title}</TitleModal>
                <DesriptionModal>{labels?.description}</DesriptionModal>
                <WrapperInputs>
                    { inputMultiplePerson?.map((inputPerson, index) => {
                        return (
                            <WrapperInputPerson key={index}>
                                <CustomTextField
                                    label={labels?.name}
                                    placeholder={labels?.placeholderName}
                                    onChange={(e) => onChangeInput( {e, type:'name', id:inputPerson.id} )}
                                    type='text'
                                    value={inputPerson?.name}
                                    required
                                    error={inputPerson?.errorName}
                                />
                                <CustomTextField
                                    label={labels?.lastName}
                                    placeholder={labels.placeholderLastName}
                                    onChange={(e) => onChangeInput({e, type: 'lastName', id:inputPerson?.id})}
                                    type='text'
                                    value={inputPerson?.lastName}
                                    required
                                    error={inputPerson?.errorLastName}
                                />
                                <CustomTextField
                                    label={labels?.email}
                                    placeholder={labels.placeholderEmail}
                                    onChange={(e) => onChangeInput({e, type: 'email', id:inputPerson?.id})}
                                    type='text'
                                    value={inputPerson?.email}
                                    required
                                    error={inputPerson?.errorEmail}
                                />
                            </WrapperInputPerson>
                        )
                    })}
                </WrapperInputs>
                {inputMultiplePerson?.length > 1 && 
                    <ButtonRemove onClick={() => handleRemoveInput()}>
                        <TrashIconNew fill='#444'/>
                        {labels?.delete}
                    </ButtonRemove>
                }
                <ButtonAddNewPerson onClick={() => handleAddNewInput()}>
                    <div style={{width:'24px', display: 'flex', alignItems: 'center'}}><IconPlusCicle/></div>
                    <LabelButtonAddPerson>{labels?.buttonAddMore}</LabelButtonAddPerson>
                </ButtonAddNewPerson>
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection:'row', justifyContent: 'space-between', marginTop:'14px'}}>
                <StatusSendInvite 
                    statusSendLocal={statusSendLocal}
                    labels={labels}
                    setStatusSendLocal={setStatusSendLocal}
                />
                <Button
                    variant='primary'
                    label={labels?.invite}
                    handleClick={() => sendListInput()}
                    disabled={isDisabledSendInvite}
                />
            </div>
        </WrapperContent>
    )

}

function IconPlusCicle() {
    return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F26818" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V16" stroke="#F26818" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12H16" stroke="#F26818" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    )
}

function StatusSendInvite({statusSendLocal, labels, setStatusSendLocal}) {
    return (
        <div style={{
            whiteSpace: 'nowrap',
             width: '100%', 
             marginRight:'20px', 
             opacity: (statusSendLocal == 'success' || statusSendLocal == 'fail' || statusSendLocal == 'info') ? 1 : 0,
             transition: 'all 0.5s ease-in-out' }}
        >
            <MessageBox
                texto={
                    statusSendLocal == 'success' ? (labels?.messageStatusSuccess) :
                    (
                        statusSendLocal == 'fail' ? (labels?.messageStatusFail) : 
                        (
                            statusSendLocal == 'info' ? labels?.messageStatusInfo : ''
                        )
                    )
                }
                tipoVisualizacao={ 
                    statusSendLocal == 'success' ? (1) :
                    (
                        statusSendLocal == 'fail' ? (3) : 
                        (
                            statusSendLocal == 'info' ? 4 : 0
                        )
                    )
                }
                hasClickExit={true}
                onClickExit={() => setStatusSendLocal('none')}
            />
        </div>
    )
}

function validateEmail(email) {
    // Expressão regular para validar o e-mail
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  
    if (email.startsWith("+")) {
      return false;
    }
  
    return regex.test(email);
  }