import { User } from "@components/mentions/types";
import React, { useEffect, useState } from "react";


export const useInputHook = (user: User, placeholder: string, divRef: React.RefObject<HTMLDivElement>, onChange?: (value: string) => void) => {
    const [cursorPosition, setCursorPosition] = useState<number | undefined>()
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
            const textContent = divRef.current.textContent;
            const childElements = divRef.current.childNodes;
            if (cursorPosition && cursorPosition >= 0 && textContent && cursorPosition <= textContent.length) {
                const selection = window.getSelection();
                const range = document.createRange();

                // Create a new anchor element
                const mentionAnchorElement = document.createElement('a');
                mentionAnchorElement.appendChild(document.createTextNode(`${user.name}`));
                mentionAnchorElement.style.fontWeight = 'bold';
                mentionAnchorElement.style.color = '#F26818';



                const spaceNode = document.createTextNode('\u00A0'); // Unicode for non-breaking space
                if (childElements.length > 0 && childElements[0].nodeName === 'P') {
                    // get the existing paragraph element
                    const paragraphElement = childElements[0];
                    const newParagraphElement = document.createElement('p');
                    paragraphElement.childNodes.forEach((node: any) => {
                        // if is last node will add the space after

                        if (node.nodeType === 3) { // Text node
                            // Check if the text content of the node contains "@"
                            if (node.textContent.includes('@')) {
                                const textContent = node.textContent
                                // Split the text content at the specified position
                                const elementBeforeMention = textContent.substring(0, textContent.indexOf('@'));
                                const textAfterMention = getTextAfterKey(textContent);
                                newParagraphElement.appendChild(document.createTextNode(elementBeforeMention));
                                newParagraphElement.appendChild(mentionAnchorElement);
                                const elementAfterMention = document.createTextNode(textAfterMention);
                                newParagraphElement.appendChild(elementAfterMention);
                                if (textAfterMention === '') {
                                    newParagraphElement.appendChild(spaceNode);
                                    range.setStartAfter(spaceNode);
                                } else {
                                    // set the range after this element
                                    range.setStartBefore(elementAfterMention);
                                }



                            } else {
                                // If no "@" is found, simply copy the node
                                newParagraphElement.appendChild(node.cloneNode(true));
                            }
                        } else if (node.nodeName === "A") {
                            if (node.innerText.includes('@')) {
                                const textContent = node.innerText
                                // Split the text content at the specified position
                                const elementBeforeMention = textContent.substring(0, textContent.indexOf('@'));
                                const textAfterMention = textContent.substring(textContent.indexOf('@') + 2);
                                newParagraphElement.appendChild(document.createTextNode(elementBeforeMention));
                                newParagraphElement.appendChild(mentionAnchorElement);
                                const elementAfterMention = document.createTextNode(textAfterMention);
                                newParagraphElement.appendChild(elementAfterMention);
                                if (textAfterMention === '') {
                                    newParagraphElement.appendChild(spaceNode);
                                    range.setStartAfter(spaceNode);
                                } else {
                                    // set the range after this element
                                    range.setStartBefore(elementAfterMention);
                                }

                                // set the range after this element
                                range.setStartBefore(elementAfterMention);
                            } else {
                                newParagraphElement.appendChild(node.cloneNode(true));
                            }

                        }
                        else {
                            // For non-text nodes, directly copy them
                            newParagraphElement.appendChild(node.cloneNode(true));
                        }
                    })



                    divRef.current.innerHTML = '';
                    divRef.current.appendChild(newParagraphElement);




                } else {

                    // Split the text content at the specified position
                    const paragraphNode = document.createElement('p');
                    const textBeforeAnchor = textContent.substring(0, textContent.indexOf('@'));
                    let textAfterAnchor = getTextAfterKey(textContent)

                    const textNodeBeforeAnchor = document.createTextNode(textBeforeAnchor);
                    const textNodeAfterAnchor = document.createTextNode(textAfterAnchor);


                    // Insert the text nodes, the anchor element, and the text node after the anchor
                    divRef.current.innerHTML = '';
                    paragraphNode.appendChild(textNodeBeforeAnchor);
                    paragraphNode.appendChild(mentionAnchorElement);
                    paragraphNode.appendChild(textNodeAfterAnchor);
                    paragraphNode.appendChild(spaceNode);
                    divRef.current.appendChild(paragraphNode);
                    range.setStartAfter(spaceNode);
                }

                range.collapse(true);
                if (selection) {
                    // Set the range and focus
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }

        }



    }, [user])

    const handleInput = () => {
        // get the cursor position when typing inside the div
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const { startOffset } = range;
            setCursorPosition(startOffset);
        }

        onChange(divRef.current.innerText)
        divRef.current.style.height = 'auto';
        divRef.current.style.height = divRef.current.scrollHeight + 'px';

    }

    const clearDivContent = () => {

        const fontElement = divRef.current.querySelector('font')
        if (fontElement) {
            // get the text content of the font element
            const textContent = fontElement.textContent;

            // Create a new p element
            const pElement = document.createElement('p');

            // Copy the content of the font element to the new p element
            pElement.innerHTML = textContent;

            // Replace the font element with the new p element
            fontElement.parentNode.replaceChild(pElement, fontElement);

            // execute the jump of the cursor to the end of this element
            const range = document.createRange();
            const selection = window.getSelection();
            range.selectNodeContents(pElement);
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
        }

        if (divRef.current.innerText === '' && !focus) {
            divRef.current.innerText = placeholder;
        } else if ((divRef.current.innerText === placeholder || divRef.current.innerText.trim() === '') && focus) {
            divRef.current.innerText = '';
        } else if (divRef.current.innerText.trim() === '') {

            divRef.current.innerText = '';
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
