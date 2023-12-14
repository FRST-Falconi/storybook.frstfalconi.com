import React, { useEffect, useRef, useState } from "react";
import { User } from "./types";


export const useInputHook = (placeholder: string, onChange?: (value: string) => void) => {
    const [userMentionIds, setUserMentionIds] = useState<Set<string>>(new Set<string>());
    const [focus, setFocus] = useState(false)
    const [showMention, setShowMention] = useState(false)
    const [inputSearch, setInputSearch] = useState('');
    const divInputRef = useRef<HTMLDivElement>(null);
    const mentionTopPosition = `${(divInputRef.current?.clientHeight ?? 15) + 30}px`

    const handleMentionUser = (user: User) => {
        if (user?.name && divInputRef.current) {
            const newSet = new Set<string>([...userMentionIds, user["user-uuid"]])
            setUserMentionIds(newSet)
            // Set the cursor to the last saved position
            const selection = window.getSelection();

            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);

                let symbolFound = false;
                while (!symbolFound) {
                    if (range.startContainer.textContent.charAt(range.startOffset - 1) !== '@') {
                        range.setStart(range.startContainer, range.startOffset - 1);
                        range.deleteContents();
                    } else {
                        symbolFound = true;
                    }
                }


                // Create a new anchor element
                const mentionAnchorElement = document.createElement('a');
                mentionAnchorElement.appendChild(document.createTextNode(`${user.name}`));
                mentionAnchorElement.style.fontWeight = 'bold';
                mentionAnchorElement.style.color = '#F26818';
                mentionAnchorElement.setAttribute('data-mention-id', user["user-uuid"])
                mentionAnchorElement.setAttribute("contenteditable", "false")
                const spaceNode = document.createTextNode('\u00A0'); // Unicode for non-breaking space
                if (range.startOffset > 0 && range.startContainer.textContent.charAt(range.startOffset - 1) === '@') {
                    range.setStart(range.startContainer, range.startOffset - 1);
                    range.deleteContents();
                }
                // append the child to the current cursor position within the paragraph
                range.collapse(false); // set the cursor to the end of the paragraph
                range.insertNode(spaceNode);
                range.insertNode(mentionAnchorElement);

                // If the previous character is "@", delete it

                // Create a new range for setting the cursor position
                const newRange = document.createRange();

                // Move the cursor to the end of the spaceNode
                newRange.setStartAfter(spaceNode);
                newRange.collapse(true);

                // Update the selection
                selection.removeAllRanges();
                selection.addRange(newRange);

            }
        }

    }
    //create a method that increase the size of the div as the scroll height increases
    const resizeDiv = () => {
        if (divInputRef.current) {
            divInputRef.current.style.height = 'auto';
            divInputRef.current.style.height = divInputRef.current.scrollHeight + 'px';
        }
    }

    useEffect(() => {

        divInputRef.current?.addEventListener('input', resizeDiv)

        return () => {
            divInputRef.current?.removeEventListener('input', resizeDiv)
        }

    }, [])

    const handleInput = (event: React.KeyboardEvent) => {
        const selection = window.getSelection();
        let inputSearch = '@';
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);

            // Get the text before the cursor
            const textBeforeCursor = range.startContainer.textContent.substring(0, range.startOffset);

            // Find the last index of "@" in the text before the cursor
            const atIndex = textBeforeCursor.lastIndexOf('@');

            if (atIndex !== -1) {
                // Get the characters after the last "@"
                const afterAt = textBeforeCursor.substring(atIndex + 1);
                inputSearch = afterAt
            }
        }
        if (event.key === '@') {
            setShowMention(true)
        }
        setInputSearch(inputSearch)
        onChange(inputSearch)


    }

    const clearDivContent = () => {

        if (divInputRef.current.childNodes.length === 0 && !focus) {
            // create a textnode with the placeholder
            divInputRef.current.innerText = placeholder;
        } else if (!focus && divInputRef.current.childNodes.length >= 1) {
            // loop over all child element and check if they are empty
            let isEmpty = true;
            divInputRef.current.childNodes.forEach((child) => {
                if (child.textContent !== '') {
                    isEmpty = false;
                }
            })

            // if they are empty show the placeholder
            if (isEmpty) {
                // create a textnode with the placeholder
                divInputRef.current.innerText = placeholder;
            }

        } else if (divInputRef.current.innerText === placeholder) {
            // create a paragraph node
            const p = document.createElement('p');
            const br = document.createElement('br');
            p.appendChild(br);
            divInputRef.current.innerHTML = '';
            divInputRef.current.appendChild(p);

        }


    }

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

    return {
        handleInput,
        clearDivContent,
        focus,
        setFocus,
        userMentionIds,
        showMention,
        setShowMention,
        inputSearch,
        setInputSearch,
        divInputRef,
        mentionTopPosition,
        handleMentionUser
    }
}
