import React,{useEffect, useState, useLayoutEffect} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './commentaryBoxStyles'
import { ICommentaryBox } from './commentaryBox'
import { MoreDotsHorizontal, Dot, EyeOff, RocketIconCommentaryBox } from '@shared/icons'

import SpeechBubble from '@components/speech-bubble'
import Button from '@components/buttons'

import { buildStringWithLinkHTML, randID, buildShortName } from './commentaryBox.utils'


const WIDTH_MOBILE = 550;


export default function CommentaryBox({
    name, className, styles, position, value, date, actionLike, actionAnswer, isMe, isAuthor,
    actionDeleteComment, actionEditComment, actionMakePrivate, actionUpdateValue,
    detectLinks, idTextComment, wasEdited, hasAnswer, hasDropdown, isLiked, totalLikes, textSaveButton, textSaveButtonMobile,
    textCancelButton, textYou, textPrivateComment, textEdited, textLiked, textUnliked, textAnswer, textMakePrivate, 
    textMakePublic, textEditComment, textDeleteComment, isPrivateMe, isPrivateAuthor }: ICommentaryBox) {
    

    // Identify Screen Resizing
    const [size, setSize] = useState([0, 0])
    useLayoutEffect(() => {
        function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

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

    useEffect(() => {
        if(isOpenDrop) {
            (document.body.addEventListener("click",  checksAnyClickOnScreen, false));
        }
    }, [isOpenDrop]);

    function editingComment() {
        setOnEditing(true)
        actionEditComment()
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
        actionUpdateValue(finalText)
    }

    const checksAnyClickOnScreen = () => {
        if(isOpenDrop) {
            document.body.removeEventListener("click",  checksAnyClickOnScreen, false);
            setIsOpenDrop(false);
        }
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
        <div style={{width: 'auto', ...styles}} >
        <SpeechBubble className={ className } highlight={ onEditing } >

            <Styles.HeaderWrapper>
                <Styles.IdentificationWrapper>
                    <Styles.NameWrapper>
                        <Styles.Name> { size[0] > WIDTH_MOBILE ? name : buildShortName(name)} </Styles.Name>
                        { isMe && 
                            <>  
                                <Styles.DividerDot>
                                    <Dot fill={ '#757575' }/>
                                </Styles.DividerDot>
                                <Styles.IsMe> { textYou } </Styles.IsMe>  
                            </>
                        }
                        {size[0] > WIDTH_MOBILE ? 
                        (
                            ( isPrivateAuthor || isPrivateMe) &&
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
                        ): null
                        }
                    </Styles.NameWrapper>
                    <Styles.Position> { position } </Styles.Position>
                </Styles.IdentificationWrapper>
                
                <Styles.OptionsWrapper>
                    {size[0] > WIDTH_MOBILE &&
                    <Styles.Date> { date } {wasEdited && `(${textEdited})`} </Styles.Date>}
                    { hasDropdown && (isAuthor || isMe) &&
                    <Styles.Dropdown>
                        <Styles.ButtonMore 
                            onClick={ () => setIsOpenDrop(!isOpenDrop) } 
                            onMouseOver={() => setActionArea(true)}
                            onMouseOut={() => setActionArea(false)}
                        >
                            <MoreDotsHorizontal fill={ getColorIconMore() } />
                        </Styles.ButtonMore>
                        <Styles.DropdownWrapper isVisible={isOpenDrop} isMe={isMe}>
                            {isMe && isAuthor && 
                                <>
                                    <Styles.ItemDrop onClick={ actionMakePrivate }> { (!isPrivateAuthor && !isPrivateMe)  ? textMakePrivate : textMakePublic }  </Styles.ItemDrop>
                                    <Styles.ItemDrop onClick={ () => editingComment() } > { textEditComment } </Styles.ItemDrop>
                                    <Styles.ItemDrop isLastItem={true} onClick={ actionDeleteComment }> { textDeleteComment } </Styles.ItemDrop>
                                </> 
                            } 
                            {isMe && !isAuthor &&
                                <>
                                    { (!isPrivateAuthor) &&
                                        <Styles.ItemDrop onClick={ actionMakePrivate }> {!isPrivateMe ? textMakePrivate : textMakePublic}  </Styles.ItemDrop> }
                                    <Styles.ItemDrop onClick={ () => editingComment() } > {textEditComment} </Styles.ItemDrop>
                                    <Styles.ItemDrop isLastItem={true} onClick={ actionDeleteComment }> {textDeleteComment} </Styles.ItemDrop>
                                </> 
                            } 
                            {isAuthor && !isMe  &&
                                <>
                                    <Styles.ItemDrop onClick={ actionMakePrivate } > {(!isPrivateAuthor && !isPrivateMe) ? textMakePrivate : textMakePublic} </Styles.ItemDrop>
                                    <Styles.ItemDrop isLastItem={true} onClick={ actionDeleteComment }> {textDeleteComment} </Styles.ItemDrop>
                                </>
                            }
                         </Styles.DropdownWrapper>
                    </Styles.Dropdown>}
                </Styles.OptionsWrapper>
            </Styles.HeaderWrapper>

            {size[0] <= WIDTH_MOBILE &&
            <div style={{display:'flex', marginLeft:'14px', marginTop: '5px', alignItems: 'center'}}>
                { (isPrivateAuthor || isPrivateMe) &&
                    <div style={{marginRight: '10px'}}>
                        <Styles.EyeOffIcon>                                     
                            <EyeOff fill={  '#757575' }/>
                        </Styles.EyeOffIcon>
                    </div>
                }
                <Styles.Date> { date } {wasEdited && `(${textEdited})`} </Styles.Date>
            </div>}

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
                    <Styles.FooterEditingWrapper width={size[0]}>
                        <Button 
                            handleClick={() => { saveEditComment() }} 
                            label={size[0] > WIDTH_MOBILE ? textSaveButton : textSaveButtonMobile } 
                            disabled={!enableSaveEdit} 
                            variant="primary" 
                        />
                        <Button 
                            handleClick={() => { cancelEditComment() }} 
                            label={textCancelButton}  
                            variant="secondary"
                        />
                    </Styles.FooterEditingWrapper>
                </>
                :  
                <>
                    <Styles.CommentaryContent id={iDCommentPosted}>{ value }</Styles.CommentaryContent>
                    <Styles.IterationsWrapper>
                        <Styles.LikesStatistics>
                            {isLiked ? 
                                <RocketIconCommentaryBox width='16px' height='16px'/> 
                                : 
                                <RocketIconCommentaryBox width='16px' height='16px' fill="#CCCCCC"/>
                            }
                            <Styles.TextTotalLikes>{ totalLikes }</Styles.TextTotalLikes>
                        </Styles.LikesStatistics>
                        <Styles.IterationsButtonsWrapper>
                            { isLiked ? 
                            <Styles.LinkButton onClick={ actionLike }> { textUnliked } </Styles.LinkButton>:
                            <Styles.LinkButton onClick={ actionLike }> { textLiked } </Styles.LinkButton>}    
                            { hasAnswer &&
                            <Styles.LinkButton onClick={ actionAnswer }>  { textAnswer }  </Styles.LinkButton> }
                        </Styles.IterationsButtonsWrapper>
                    </Styles.IterationsWrapper>
                </> 
            }
            
        </SpeechBubble>
        </div>
    )
}