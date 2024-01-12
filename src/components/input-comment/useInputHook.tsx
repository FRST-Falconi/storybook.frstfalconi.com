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
    const mentionTopPosition = `${(divInputRef.current?.clientHeight ?? 15) + 30}px`
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
        let inputSearch = '@';
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);

            if (range.startContainer.textContent === null) return;
            // Get the text before the cursor
            const textBeforeCursor = range.startContainer.textContent.substring(0, range.startOffset);

            // Find the last index of "@" in the text before the cursor
            const atIndex = textBeforeCursor.lastIndexOf('@');

            if (atIndex !== -1) {
                // Get the characters after the last "@"
                const afterAt = textBeforeCursor.substring(atIndex + 1);
                inputSearch = afterAt
            } else {
                setShowMention(false)
            }
        }
        if (event.key === '@') {
            setShowMention(true)
        }
        if (inputSearch.trim() === '@') {
            inputSearch = ''
        }
        setInputSearch(inputSearch)
        !!onChange && onChange(inputSearch)
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
        if ((divInputRef.current.childNodes.length === 0 && !focus)) {
            // create a textnode with the placeholder
            divInputRef.current.innerText = placeholder;
            setPlaceholder(true)
        } else if (!focus && divInputRef.current.childNodes.length >= 1) {
            // loop over all child element and check if they are empty
            let isEmpty = true;
            divInputRef.current.childNodes.forEach((child) => {
                if (child.textContent !== '' && child.textContent != placeholder) {
                    isEmpty = false;
                    setPlaceholder(false)
                }
            })

            // if they are empty show the placeholder
            if (isEmpty) {
                // create a textnode with the placeholder
                divInputRef.current.innerText = placeholder;
                setPlaceholder(true)
            }

        } else if (divInputRef.current.innerText === placeholder) {
            // create a paragraph node
            const p = document.createElement('p');
            const br = document.createElement('br');
            p.appendChild(br);
            divInputRef.current.innerHTML = '';
            divInputRef.current.appendChild(p);
            setPlaceholder(false)

        }


    }

    useEffect(() => {

        divInputRef.current?.addEventListener('input', resizeDiv)

        return () => {
            divInputRef.current?.removeEventListener('input', resizeDiv)
        }

    }, [])

    useEffect(() => {
        if (!replyMentionedUser) return;

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

        //capture the cursor position on arrow up and down or left and right and check if it´s close to the @ key
        divInputRef.current.addEventListener('keyup', (event) => {
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Enter') {
                setShowMention(false)
            }
        })

        clearDivContent()
    }, [focus])

    useEffect(() => {
        setStyleLimitExceeded(textLength > limit)
    }, [textLength])



    return {
        handleInput,
        clearDivContent,
        focus,
        setFocus,
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
