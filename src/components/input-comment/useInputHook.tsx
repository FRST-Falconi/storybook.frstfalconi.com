import { User } from "@components/mentions";
import React, { useEffect, useState } from "react";


export const useInputHook = (user: User, placeholder: string, divRef: React.RefObject<HTMLDivElement>, onChange?: (value: string) => void, onKeyUp?: (e: React.KeyboardEvent) => void) => {
    const [userMentionIds, setUserMentionIds] = useState<Set<string>>(new Set<string>());
    const [focus, setFocus] = useState(false)


    useEffect(() => {
        if (user?.name && divRef.current) {
            const newSet = new Set<string>([...userMentionIds, user.uuid])
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

    }, [user])

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
        onChange(inputSearch)
        onKeyUp(event)
        divRef.current.style.height = 'auto';
        divRef.current.style.height = divRef.current.scrollHeight + 'px';
    }

    const clearDivContent = () => {

        if (divRef.current.childNodes.length === 0 && !focus) {
            // create a textnode with the placeholder
            divRef.current.innerText = placeholder;
        } else if (!focus && divRef.current.childNodes.length >= 1) {
            // loop over all child element and check if they are empty
            let isEmpty = true;
            divRef.current.childNodes.forEach((child) => {
                if (child.textContent !== '') {
                    isEmpty = false;
                }
            })

            // if they are empty show the placeholder
            if (isEmpty) {
                // create a textnode with the placeholder
                divRef.current.innerText = placeholder;
            }

        } else if (divRef.current.innerText === placeholder) {
            // create a paragraph node
            const p = document.createElement('p');
            const br = document.createElement('br');
            p.appendChild(br);
            divRef.current.innerHTML = '';
            divRef.current.appendChild(p);

        }

    }

    useEffect(() => {
        if (!divRef.current) return;

        clearDivContent()
    }, [focus])

    return {
        divRef,
        handleInput,
        clearDivContent,
        focus,
        setFocus,
        userMentionIds
    }
}
