import { User } from "@components/mentions/types";
import React, { useEffect, useState } from "react";


export const useInputHook = (user: User, placeholder: string, divRef: React.RefObject<HTMLDivElement>, onChange?: (value: string) => void) => {
    const [userMentionIds, setUserMentionIds] = useState<Set<string>>(new Set<string>());
    const [focus, setFocus] = useState(false)

    const getTextAfterKey = (content: string) => {
        const regex = /(?:[^@]+@[^@]+\s)?([^@]+)@([^@]+)\s/;
        const match = content.match(regex);
        const textAfter = match ? match[2] : '';
        return textAfter
    }

    useEffect(() => {
        if (user?.name && divRef.current) {
            const newSet = new Set<string>([...userMentionIds, user.uuid])
            setUserMentionIds(newSet)
            // Set the cursor to the last saved position
            const selection = window.getSelection();

            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);


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
        if (event.key === '@') {
            const searchText = getTextAfterKey(divRef.current.innerText)
            onChange(searchText)
        }
        divRef.current.style.height = 'auto';
        divRef.current.style.height = divRef.current.scrollHeight + 'px';
    }

    const clearDivContent = () => {

        if (divRef.current.childNodes.length === 0 && !focus) {
            // create a textnode with the placeholder
            divRef.current.innerText = placeholder;
        } else if (!focus && divRef.current.childNodes.length === 1 && divRef.current.childNodes[0]?.nodeName === 'P' && !divRef.current.hasChildNodes() || divRef.current.childNodes[0].childNodes[0]?.nodeName === "BR") {
            // create a textnode with the placeholder
            divRef.current.innerText = placeholder;
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
