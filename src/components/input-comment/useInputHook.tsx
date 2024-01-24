import React, { useEffect, useRef, useState } from "react";
import { DesignTokens } from "../../theme/tokens";
import { User } from "./types";

interface IInputHook {
    limit: number
    placeholder: string
    onSendMentions: (mentions: string[]) => void
    onContentFormat: (content: string) => void
    onContentUnformat: (content: string) => void
    onChange?: (value: any) => void
    value?: string
    replyMentionedUser?: User
}

export const useInputHook = ({ limit, placeholder, onSendMentions, onContentFormat, onContentUnformat, onChange, value, replyMentionedUser }: IInputHook) => {

    const [focus, setFocus] = useState(false)
    const [showMention, setShowMention] = useState(false)
    const [inputSearch, setInputSearch] = useState('');
    const divInputRef = useRef<HTMLDivElement>(null);
    const mentionTopPosition = `${(divInputRef.current?.clientHeight ?? 15) + 20}px`
    const [textLength, setTextLength] = useState(0)
    const [isPlaceholder, setPlaceholder] = useState(false)
    const [styleLimitExceeded, setStyleLimitExceeded] = useState(false)

    const createNewRangeAndMoveCursorToTheEnd = (selection: Selection, spaceNode: Text) => {
        // Create a new range for setting the cursor position
        const newRange = document.createRange();

        // Move the cursor to the end of the spaceNode
        newRange.setStartAfter(spaceNode);
        newRange.collapse(true);

        // Update the selection
        selection.removeAllRanges();
        selection.addRange(newRange);
    }
    const addMentionToRangeAndSpaceNode = (range: Range, spaceNode: Text, mentionAnchorElement: HTMLAnchorElement) => {
        if (range.startOffset > 0 && range.startContainer.textContent.charAt(range.startOffset - 1) === '@') {
            range.setStart(range.startContainer, range.startOffset - 1);
            range.deleteContents();
        }
        // append the child to the current cursor position within the paragraph
        range.collapse(false); // set the cursor to the end of the paragraph
        range.insertNode(spaceNode);
        range.insertNode(mentionAnchorElement);
    }
    const createMentionedUser = (user: User) => {
        // Create a new anchor element
        const mentionAnchorElement = document.createElement('a');
        mentionAnchorElement.appendChild(document.createTextNode(`${user.name}`));
        mentionAnchorElement.style.fontWeight = 'bold';
        mentionAnchorElement.style.color = DesignTokens.colors.primary1;
        mentionAnchorElement.setAttribute('data-mention-id', user.user_uuid)
        mentionAnchorElement.setAttribute("contenteditable", "false")
        mentionAnchorElement.setAttribute("href", `/profile/${user.user_uuid}`)
        return mentionAnchorElement
    }
    const handleMentionUser = (user: User) => {
        if (user?.name && divInputRef.current) {
            // Set the cursor to the last saved position
            const selection = window.getSelection();

            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);

                if (range.startContainer.textContent === null) return;
                if (range.startOffset === 0) {
                    setShowMention(false)
                    return
                };
                let symbolFound = false;
                while (!symbolFound) {
                    if (range.startContainer.textContent.charAt(range.startOffset - 1) !== '@') {
                        range.setStart(range.startContainer, range.startOffset - 1);
                        range.deleteContents();
                    } else {
                        symbolFound = true;
                    }
                }


                const mentionAnchorElement = createMentionedUser(user)
                const spaceNode = document.createTextNode('\u00A0'); // Unicode for non-breaking space


                addMentionToRangeAndSpaceNode(range, spaceNode, mentionAnchorElement)

                createNewRangeAndMoveCursorToTheEnd(selection, spaceNode)

            }
            countChars()
            createFormatAndTextContentToSaveComment()
            resizeDiv()

        }

    }
    //create a method that increase the size of the div as the scroll height increases
    const resizeDiv = () => {
        if (divInputRef.current) {
            divInputRef.current.style.height = 'auto';
            divInputRef.current.style.height = divInputRef.current.scrollHeight + 'px';
        }

    }
    const addOrDeleteMentionedUser = () => {
        // get all mentioned users
        const mentionedUsers = divInputRef.current?.querySelectorAll('a[data-mention-id]') || [];
        // get all mentioned users id
        const mentionedUsersId: string[] = [];
        mentionedUsers.forEach((user) => {
            mentionedUsersId.push(user.getAttribute('data-mention-id') || '')
        })
        // send the mentioned users id to the parent component
        onSendMentions(mentionedUsersId)


    }

    const createFormatAndTextContentToSaveComment = () => {
        // get the content string of each node
        let plainContent = '';
        if (divInputRef.current) {
            divInputRef.current.childNodes.forEach((child) => {
                if (child.textContent) {
                    plainContent += child.textContent
                }
            })
        }

        // get the full html content of the div
        const htmlContent = divInputRef.current?.innerHTML || '';
        onContentFormat(htmlContent)
        onContentUnformat(plainContent)
        addOrDeleteMentionedUser()
    }
    const handleInput = (event: React.KeyboardEvent) => {
        const selection = window.getSelection();
        let inputSearch = '';
        let hasSpaceBeForeKey = false;
        let hasKeyPresent = false;    
        let textBeforeCursor = "";
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);

            if (range.startContainer.textContent === null) return;
            // Get the text before the cursor
            const completeText = range.startContainer.textContent;
            // Find the last index of "@" in the text before the cursor
            const atIndex = completeText.lastIndexOf('@');
            textBeforeCursor = range.startContainer.textContent.substring(atIndex, range.startOffset);
            hasSpaceBeForeKey = completeText.substring(atIndex - 1, atIndex).trim() === "";
            
            console.log(`teste - completeText =  ${completeText}`)
            console.log(`teste  textBeforeCursor ${textBeforeCursor}`)
            console.log(`teste - atIndex =  ${atIndex}`)
            console.log(`teste - spaceBefore =  ${completeText.substring(atIndex - 1, atIndex).trim() === ""}`)
            console.log(`teste  hasSpaceBeForeKey ${hasSpaceBeForeKey}`)
            console.log(`teste textBeforeCursor = @ ? ${textBeforeCursor === "@"}`)
            if (hasSpaceBeForeKey || textBeforeCursor === "@") {
                if (atIndex !== -1) {
                    
                    // Get the characters after the last "@"
                    const afterAt = completeText.substring(atIndex);
                    console.log(`teste afterAt = ${afterAt}`)
                    if(afterAt.length > 1 || event.key === "@" || textBeforeCursor === "@"){
                        console.log(`teste hasKeyPresent ${hasKeyPresent}`)
                        hasKeyPresent = true
                    }
                    inputSearch = afterAt.replace('@', '');
                } else {
                    console.log(`teste esconde mention atIndex = ${atIndex}`)
                    inputSearch = ''
                    setShowMention(false)
                }
            }else{
                console.log(`teste esconde mention`)
                setShowMention(false)
                
            }
           
        }
        if((hasSpaceBeForeKey && hasKeyPresent) ||  textBeforeCursor === "@" ){
            console.log(`teste, chamar backend com ${inputSearch}`)
            setShowMention(true)
            setInputSearch(inputSearch)
            !!onChange && onChange(inputSearch)
        }else{
            console.log(`teste resultado foi  ${hasSpaceBeForeKey && hasKeyPresent} e textBeforeCursor = @ ${textBeforeCursor === "@"}`)
            console.log(`teste, não chamou o backend ${inputSearch}`)
        }
        
        countChars()
        createFormatAndTextContentToSaveComment()



    }

    const countChars = () => {
        // create a function that loop through my divref and count each chars inside of it and it´s children
        let count = 0;
        if (divInputRef.current) {
            divInputRef.current.childNodes.forEach((child) => {
                if (child.textContent) {
                    count += child.textContent.length
                }
            })
        }

        setTextLength(count)
        return count;

    }

   
    const clearDivContent = () => {
        if (!divInputRef.current) return;

        console.log(`placeholder primeiro if divInputRef.current.childNodes.length === 0 && !focus resultado = ${divInputRef.current.childNodes.length === 0 && !focus}`)
        console.log(`placeholder segundo if divInputRef.current.childNodes.length >= 1 resultado = ${divInputRef.current.childNodes.length >= 1}`)
        
        if ((divInputRef.current.childNodes.length === 0 && !focus)) {
            console.log(`placeholder vou incluir o placeholder`)
            // create a textnode with the placeholder
            divInputRef.current.innerText = placeholder;
            setPlaceholder(true)
        } else if (!focus && divInputRef.current.childNodes.length >= 1) {
            console.log(`placeholder vou incluir o placeholder`)
            // loop over all child element and check if they are empty
            let isEmpty = true;
            divInputRef.current.childNodes.forEach((child) => {
                if (child.textContent !== '' && child.textContent != placeholder) {
                    isEmpty = false;
                    setPlaceholder(false)
                }else if(child.textContent === placeholder){
                    console.log(`placeholder child.textContent === placeholder resultado = ${child.textContent === placeholder}`)
                    divInputRef.current.blur()
                }
            })
            console.log('placeholder isEmpty = ', isEmpty)
        
            // if they are empty show the placeholder
            if (isEmpty) {
                // create a textnode with the placeholder
                divInputRef.current.innerText = placeholder;
                setPlaceholder(true)
            }

        } else if (divInputRef.current.innerText === placeholder) {
            console.log(`placeholder terceiro divInputRef.current.innerText === placeholder resultado = ${divInputRef.current.innerText === placeholder}`)
            // create a paragraph node
            divInputRef.current.innerHTML = '';
            // clear complete the div
            divInputRef.current.innerText = '';
            console.log(`placeholder clear`)
            const p = document.createElement('p');
            const br = document.createElement('br');
            p.appendChild(br);
            divInputRef.current.appendChild(p);
            console.log(`placeholder divInputRef.current.innerHtml= ${divInputRef.current.innerHTML}`)
            setPlaceholder(false)
            divInputRef.current.blur()

        }


    }

    useEffect(() => {

        divInputRef.current?.addEventListener('input', resizeDiv)

        return () => {
            divInputRef.current?.removeEventListener('input', resizeDiv)
        }

    }, [])

    useEffect(() => {
        if (!replyMentionedUser || !divInputRef?.current) return;

        divInputRef.current?.focus()
        const selection = window.getSelection();

        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            if (range.startContainer.textContent === null) return;
            const mentionedUser = createMentionedUser(replyMentionedUser);
            const spaceNode = document.createTextNode('\u00A0'); // Unicode for non-breaking space
            addMentionToRangeAndSpaceNode(range, spaceNode, mentionedUser)
            createNewRangeAndMoveCursorToTheEnd(selection, spaceNode)
        }

    }, [replyMentionedUser])


    useEffect(() => {
        setPlaceholder(false)
        if ((!value || value.length <= 0) && !focus && !replyMentionedUser) {
            divInputRef.current.innerText = placeholder;
            setPlaceholder(true)
            resizeDiv()
        }
    }, [value])
    useEffect(() => {
        if (!divInputRef.current) return;

        

        clearDivContent()
    }, [focus])

    useEffect(() => {
        setStyleLimitExceeded(textLength > limit)
    }, [textLength])

    useEffect(()=>{
        if(!divInputRef.current) return;

        divInputRef.current.addEventListener('mousedown',()=>{
            setFocus(true)
        })
        divInputRef.current.addEventListener('focus',()=>{
            setFocus(true)
        })
        divInputRef.current.addEventListener('blur',()=>{
            setFocus(false)
        })
        //capture the cursor position on arrow up and down or left and right and check if it´s close to the @ key
        divInputRef.current.addEventListener('keyup', (event) => {
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Enter') {
                setShowMention(false)
            }
        })

        return ()=>{
            divInputRef.current?.removeEventListener('mousedown',()=>{
                setFocus(true)
            })
            divInputRef.current?.removeEventListener('focus',()=>{
                setFocus(true)
            })
            divInputRef.current?.removeEventListener('blur',()=>{
                setFocus(false)
            })
            //capture the cursor position on arrow up and down or left and right and check if it´s close to the @ key
            divInputRef.current.removeEventListener('keyup', (event) => {
                if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Enter') {
                    setShowMention(false)
                }
            })
        }
    },[])

    return {
        handleInput,
        clearDivContent,
        focus,
        showMention,
        setShowMention,
        inputSearch,
        setInputSearch,
        divInputRef,
        mentionTopPosition,
        handleMentionUser,
        textLength,
        isPlaceholder,
        styleLimitExceeded
    }
}
