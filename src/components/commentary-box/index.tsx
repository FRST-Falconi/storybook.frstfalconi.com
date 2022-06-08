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
    name, className, styles, position, value, date, like, answer, isMe, isAuthor,
    isPrivate, deleteComment, editComment, makePrivate, updateValue,
    detectLinks, idTextComment, wasEdited, hasAnswer, hasDropdown, isLiked, totalLikes,
    textYou, textPrivateComment, textEdited, textLiked, textUnliked, textAnswer, textMakePrivate, 
    textMakePublic, textEditComment, textDeleteComment, isPrivateMe, isPrivateAuthor }: ICommentaryBox) {
    
    const [ isOpenDrop, setIsOpenDrop ] = useState(false)
    const [ onEditing, setOnEditing ] = useState(false)
    const [ enableSaveEdit, setEnableSaveEdit ] = useState(false)
    const [ actionArea, setActionArea] = useState(false)
    
    const [ iDCommentPosted , setIDCommentPosted ] = 
            useState(idTextComment ? idTextComment : `IDCommentPosted-${randID()}`);
    const [ iDCommentInEditing , setIDCommentInEditing ] = 
            useState(idTextComment ? `idBoxCommentEditing-${idTextComment}` : `idBoxCommentEditing-${randID()}`);
    const [ iDButtonMore , setIDButtonMore ] = 
            useState(idTextComment ? `iDButtonMore-${idTextComment}` : `iDButtonMore-${randID()}`);

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

    const verifyClick = () => {
        if(!actionArea) {
            setIsOpenDrop(false);
        }
    }

    const getColorIconMore = () => {
        let finalColor = '#757575'; // Default
        (actionArea) && (finalColor = "#222222"); // Hover
        (isOpenDrop) && (finalColor = '#ff4d0d'); // Selected
        return finalColor;
    }

    return (
        <div style={{width: 'auto', ...styles}} onClick={() => verifyClick()}>
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
                                <Styles.IsMe> {textYou} </Styles.IsMe>  
                            </>
                        }
                        { (isPrivate || isPrivateAuthor || isPrivateMe) &&
                            <>
                                <Styles.DividerDot>
                                    <Dot fill={ '#757575' }/>
                                </Styles.DividerDot>   
                                <Styles.EyeOffIcon>                                     
                                    <EyeOff fill={  '#757575' }/>
                                </Styles.EyeOffIcon>
                                <Styles.CommentPrivate> 
                                    {textPrivateComment} 
                                </Styles.CommentPrivate>
                            </>
                        } 
                    </Styles.NameWrapper>
                    <Styles.Position> { position } </Styles.Position>
                </Styles.IdentificationWrapper>
                
                <Styles.OptionsWrapper>
                    <Styles.Date> { date } {wasEdited && `(${textEdited})`} </Styles.Date>
                    { hasDropdown && (isAuthor || isMe) &&
                    <Styles.Dropdown>
                        <Styles.ButtonMore 
                            onClick={ () => setIsOpenDrop(!isOpenDrop) } 
                            id="actionDrop" 
                            onMouseOver={() => setActionArea(true)}
                            onMouseOut={() => setActionArea(false)}
                        >
                            <MoreDotsHorizontal fill={ getColorIconMore() } />
                        </Styles.ButtonMore>
                        <Styles.DropdownWrapper isVisible={isOpenDrop} isMe={isMe}>
                            {isMe && 
                                <>
                                    { !isPrivateAuthor &&
                                        <Styles.ItemDrop onClick={ makePrivate }> {!isPrivate ? textMakePrivate : textMakePublic}  </Styles.ItemDrop> }
                                    <Styles.ItemDrop onClick={ () => editingComment() } > {textEditComment} </Styles.ItemDrop>
                                    <Styles.ItemDrop isLastItem={true} onClick={ deleteComment }> {textDeleteComment} </Styles.ItemDrop>
                                </> 
                            } 
                            {isAuthor && !isMe  &&
                                <>
                                    <Styles.ItemDrop onClick={ makePrivate } > {!isPrivate ? textMakePrivate : textMakePublic} </Styles.ItemDrop>
                                    <Styles.ItemDrop isLastItem={true} onClick={ deleteComment }> {textDeleteComment} </Styles.ItemDrop>
                                </>
                            }
                         </Styles.DropdownWrapper>
                    </Styles.Dropdown>}
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
                    <Styles.CommentaryContent id={iDCommentPosted}>{ value }</Styles.CommentaryContent>
                    <Styles.IterationsWrapper>
                        <Styles.LikesStatistics>
                            <Styles.Rocket isLiked={isLiked}/>
                            <Styles.TextTotalLikes>{ totalLikes }</Styles.TextTotalLikes>
                        </Styles.LikesStatistics>
                        <Styles.IterationsButtonsWrapper>
                            { isLiked ? 
                            <Styles.LinkButton onClick={ like }> {textUnliked} </Styles.LinkButton>:
                            <Styles.LinkButton onClick={ like }> {textLiked} </Styles.LinkButton>}    
                            { hasAnswer &&
                            <Styles.LinkButton onClick={ answer }>  {textAnswer}  </Styles.LinkButton> }
                        </Styles.IterationsButtonsWrapper>
                    </Styles.IterationsWrapper>
                </> 
            }
            
        </SpeechBubble>
        </div>
    )
}