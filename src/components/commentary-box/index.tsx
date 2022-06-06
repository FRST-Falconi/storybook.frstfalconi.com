import React,{useEffect, useState, useLayoutEffect} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './commentaryBoxStyles'
import { ICommentaryBox } from './commentaryBox'
import { MoreDotsHorizontal, Dot, EyeOff } from '@shared/icons'

import SpeechBubble from '@components/speech-bubble'
import Button from '@components/buttons'

import { buildStringWithLinkHTML, randID } from './commentaryBox.utils'

export default function CommentaryBox({
    name, className, styles, position, value, date, like, answer, isMe, 
    isPrivate, deleteComment, editComment, makePrivate, updateValue,
    detectLinks, idTextComment, wasEdited }: ICommentaryBox) {
    
    const [ isOpenDrop, setIsOpenDrop ] = useState(false)
    const [ onEditing, setOnEditing ] = useState(false)
    const [ enableSaveEdit, setEnableSaveEdit ] = useState(false)
    
    const [ iDCommentPosted , setIDCommentPosted ] = 
            useState(idTextComment ? idTextComment : `IDCommentPosted-${randID()}`);
    const [ iDCommentInEditing , setIDCommentInEditing ] = 
            useState(idTextComment ? `idBoxCommentEditing-${idTextComment}` : `idBoxCommentEditing-${randID()}`);

    useEffect(() =>  {
        (!onEditing) &&
        (document.getElementById(iDCommentPosted)) &&
        (detectLinks ? 
            document.getElementById(iDCommentPosted).innerHTML = buildStringWithLinkHTML({ value }) : 
            document.getElementById(iDCommentPosted).innerHTML = value)
    }, [detectLinks, onEditing])

    useEffect(() =>  {
        (onEditing) &&
        (document.getElementById(iDCommentInEditing)) && 
        (document.getElementById(iDCommentInEditing).addEventListener("keyup",  changedInputComment, false));

        (!onEditing) &&
        (document.getElementById(iDCommentInEditing)) && 
        (document.getElementById(iDCommentInEditing).removeEventListener("keyup",  changedInputComment, false));

        function changedInputComment() {
            let textInEditing = document.getElementById(iDCommentInEditing).innerText;
            setEnableSaveEdit(textInEditing != value);
        }
    }, [onEditing])

    
    function editingComment() {
        setOnEditing(true)
        editComment()
    }

    function cancelEditComment() {
        setOnEditing(false)
        setEnableSaveEdit(false)
    }
    
    function saveEditComment() {
        let finalText = '';
        (document.getElementById(iDCommentInEditing)) &&
        (finalText = document.getElementById(iDCommentInEditing).innerText);

        setOnEditing(false)
        setEnableSaveEdit(false)
        updateValue(finalText)
    }

    return (
        <div style={{...styles}}>
        <SpeechBubble className={className} highlight={onEditing} >

            <Styles.HeaderWrapper>
                <Styles.IdentificationWrapper>
                    <Styles.NameWrapper>
                        <Styles.Name> { name } </Styles.Name>
                        { isMe && 
                            <>  
                                <Styles.DividerDot>
                                    <Dot fill={ '#757575' }/>
                                </Styles.DividerDot>
                                <Styles.IsMe> Você </Styles.IsMe>  
                            </>
                        }
                        { isPrivate &&
                            <>
                                <Styles.DividerDot>
                                    <Dot fill={ '#757575' }/>
                                </Styles.DividerDot>   
                                <Styles.EyeOffIcon>                                     
                                    <EyeOff fill={  '#757575' }/>
                                </Styles.EyeOffIcon>
                                <Styles.CommentPrivate> 
                                    Comentário privado 
                                </Styles.CommentPrivate>
                            </>
                        } 
                    </Styles.NameWrapper>
                    <Styles.Position> { position } </Styles.Position>
                </Styles.IdentificationWrapper>
                
                <Styles.OptionsWrapper>
                    <Styles.Date> { date } {wasEdited && "(editado)"} </Styles.Date>
                    <Styles.ButtonMore onClick={ () => setIsOpenDrop(!isOpenDrop) }>
                        <MoreDotsHorizontal fill={ isOpenDrop ? '#ff4d0d' : '#757575' } />
                        <Styles.DropdownWrapper isVisible={isOpenDrop} isMe={isMe}>
                            {isMe ? 
                                <>
                                    <Styles.ItemDrop onClick={ makePrivate }> Tornar Privado </Styles.ItemDrop>
                                    <Styles.ItemDrop onClick={ () => editingComment() } > Editar Comentário </Styles.ItemDrop>
                                    <Styles.ItemDrop isLastItem={true} onClick={ deleteComment }> Excluir Comentário </Styles.ItemDrop>
                                </> :
                                <>
                                    <Styles.ItemDrop onClick={ makePrivate } > Tornar Privado </Styles.ItemDrop>
                                    <Styles.ItemDrop isLastItem={true} onClick={ deleteComment }> Excluir Comentário </Styles.ItemDrop>
                                </>
                            }
                        </Styles.DropdownWrapper>
                    </Styles.ButtonMore>
                </Styles.OptionsWrapper>
            </Styles.HeaderWrapper>

            {onEditing ?
                <>
                    <Styles.CommentaryEditingContent
                        id={iDCommentInEditing}
                        data-gramm="false" 
                        contentEditable="true" 
                        role="textbox" 
                        aria-multiline="true"
                        suppressContentEditableWarning={true}
                    >
                        { value }
                    </Styles.CommentaryEditingContent>
                    <Styles.FooterEditingWrapper>
                        <Button handleClick={() => { saveEditComment() }} label="Salvar Alterações" disabled={!enableSaveEdit} variant="primary" />
                        <Button handleClick={() => { cancelEditComment() }} label="Cancelar"  variant="secondary" />
                    </Styles.FooterEditingWrapper>
                </>
                :  
                <>
                    <Styles.CommentaryContent id={iDCommentPosted}></Styles.CommentaryContent>
                    <Styles.IterationsWrapper>
                        <Styles.LinkButton onClick={ like }> Curtir </Styles.LinkButton>
                        <Styles.LinkButton onClick={ answer }>  Responder  </Styles.LinkButton>
                    </Styles.IterationsWrapper>
                </> 
            }
            
        </SpeechBubble>
        </div>
    )
}