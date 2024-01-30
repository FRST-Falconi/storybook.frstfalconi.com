import React, { useEffect, useRef, useState } from 'react'
import { DesignTokens } from '../../theme/tokens'
import { User } from './types'

interface IInputHook {
  limit: number
  placeholder: string
  onSendMentions: (mentions: string[]) => void
  onContentFormat: (content: string) => void
  onContentUnformat: (content: string) => void
  onChange?: (value: any) => void
  value?: string
  replyMentionedUser?: User
  initialText?: string
}

export const useInputHook = ({
  limit,
  placeholder,
  onSendMentions,
  onContentFormat,
  onContentUnformat,
  onChange,
  value,
  replyMentionedUser,
  initialText
}: IInputHook) => {
  const [showMention, setShowMention] = useState(false)
  const [inputSearch, setInputSearch] = useState('')
  const divInputRef = useRef<HTMLDivElement>(null)
  const divPlaceholder = useRef<HTMLDivElement>(null)
  const mentionTopPosition = `${(divInputRef.current?.clientHeight ?? 15) + 20}px`
  const [textLength, setTextLength] = useState(0)
  const [isPlaceholder, setPlaceholder] = useState(false)
  const [styleLimitExceeded, setStyleLimitExceeded] = useState(false)
  const [newMentionedUsers, setNewMentionedUsers] = useState<string[]>([])

  const createNewRangeAndMoveCursorToTheEnd = (selection: Selection, spaceNode: Text) => {
    // Create a new range for setting the cursor position
    const newRange = document.createRange()

    // Move the cursor to the end of the spaceNode
    newRange.setStartAfter(spaceNode)
    newRange.collapse(true)

    // Update the selection
    selection.removeAllRanges()
    selection.addRange(newRange)
  }
  const addMentionToRangeAndSpaceNode = (range: Range, spaceNode: Text, mentionAnchorElement: HTMLAnchorElement) => {
    if (range.startOffset > 0 && range.startContainer.textContent.charAt(range.startOffset - 1) === '@') {
      range.setStart(range.startContainer, range.startOffset - 1)
      range.deleteContents()
    }
    // append the child to the current cursor position within the paragraph
    range.collapse(false) // set the cursor to the end of the paragraph
    range.insertNode(spaceNode)
    range.insertNode(mentionAnchorElement)
  }
  const createMentionedUser = (user: User) => {
    setNewMentionedUsers([...newMentionedUsers, user.user_uuid])
    // Create a new anchor element
    const mentionAnchorElement = document.createElement('a')
    mentionAnchorElement.appendChild(document.createTextNode(`${user.name}`))
    mentionAnchorElement.style.fontWeight = 'bold'
    mentionAnchorElement.style.color = DesignTokens.colors.primary1
    mentionAnchorElement.setAttribute('data-mention-id', user.user_uuid)
    mentionAnchorElement.setAttribute('contenteditable', 'false')
    mentionAnchorElement.setAttribute('href', `/profile/${user.user_uuid}`)
    ;(mentionAnchorElement as any).suppressContentEditableWarning = true

    return mentionAnchorElement
  }
  const handleMentionUser = (user: User) => {
    if (user?.name && divInputRef.current) {
      // Set the cursor to the last saved position
      const selection = window.getSelection()

      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)

        if (range.startContainer.textContent === null) return
        if (range.startOffset === 0) {
          setShowMention(false)
          return
        }
        let symbolFound = false
        while (!symbolFound) {
          if (range.startContainer.textContent.charAt(range.startOffset - 1) !== '@') {
            range.setStart(range.startContainer, range.startOffset - 1)
            range.deleteContents()
          } else {
            symbolFound = true
          }
        }

        const mentionAnchorElement = createMentionedUser(user)
        const spaceNode = document.createTextNode('\u00A0') // Unicode for non-breaking space

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
      divInputRef.current.style.height = 'auto'
      divInputRef.current.style.height = divInputRef.current.scrollHeight + 'px'
    }
  }
  const addOrDeleteMentionedUser = () => {
    // get all mentioned users
    const mentionedUsers = divInputRef.current?.querySelectorAll('a[data-mention-id]') || []
    const mentionedUsersIdList: string[] = []
    mentionedUsers.forEach((user) => {
      const mentionId = user.getAttribute('data-mention-id')
      if (mentionId) {
        mentionedUsersIdList.push(mentionId as string)
      }
    })

    // update the list of new mentions in case it has been excluded from the input
    const updateNewsMentionsList = newMentionedUsers.filter((newMentionedUser) =>
      mentionedUsersIdList.includes(newMentionedUser)
    )
    setNewMentionedUsers(updateNewsMentionsList)

    // get all mentioned users id
    const mentionedUsersId: string[] = []
    mentionedUsersIdList.forEach((id) => {
      const isNewMention = updateNewsMentionsList.includes(id)

      // Check if mentionId is not null or undefined before adding to the list
      if (id && isNewMention) {
        mentionedUsersId.push(id)
      }
    })
    // send the mentioned users id to the parent component
    onSendMentions(mentionedUsersId)
  }

  const createFormatAndTextContentToSaveComment = () => {
    // get the content string of each node
    let plainContent = ''
    if (divInputRef.current) {
      divInputRef.current.childNodes.forEach((child) => {
        if (child.textContent) {
          plainContent += child.textContent
        }
      })
    }
    // get the full html content of the div
    const htmlContent = divInputRef.current?.innerHTML || ''
    onContentFormat(htmlContent)
    onContentUnformat(plainContent)
    addOrDeleteMentionedUser()
  }
  const handleInput = (event: React.KeyboardEvent) => {
    const selection = window.getSelection()
    let inputSearch = ''
    let hasSpaceBeForeKey = false
    let hasKeyPresent = false
    let textBeforeCursor = ''
    let textBeforeKey = ''
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)

      if (range.startContainer.textContent === null) return
      // Get the text before the cursor
      const completeText = range.startContainer.textContent
      // Find the last index of "@" in the text before the cursor
      const atIndex = completeText.lastIndexOf('@')
      textBeforeCursor = range.startContainer.textContent.substring(atIndex, range.startOffset)
      hasSpaceBeForeKey = completeText.substring(atIndex - 1, atIndex).trim() === ''
      textBeforeKey = completeText.substring(atIndex - 1, atIndex).trim()

      if (hasSpaceBeForeKey || (textBeforeCursor === '@' && textBeforeKey.length === 0)) {
        if (atIndex !== -1) {
          // Get the characters after the last "@"
          const afterAt = completeText.substring(atIndex)
          if (afterAt.length > 1 || event.key === '@' || textBeforeCursor === '@') {
            hasKeyPresent = true
          }
          inputSearch = afterAt.replace('@', '')
        } else {
          inputSearch = ''
          setShowMention(false)
        }
      } else {
        setShowMention(false)
      }
    }
    if ((hasSpaceBeForeKey && hasKeyPresent) || (textBeforeCursor === '@' && textBeforeKey.length === 0)) {
      setShowMention(true)
      setInputSearch(inputSearch)
      !!onChange && onChange(inputSearch)
    }

    countChars()
    createFormatAndTextContentToSaveComment()
  }

  const countChars = () => {
    // create a function that loop through my divref and count each chars inside of it and it´s children
    let count = 0
    if (divInputRef.current) {
      divInputRef.current.childNodes.forEach((child) => {
        if (child.textContent) {
          count += child.textContent.length
        }
      })
    }

    setTextLength(count)
    return count
  }

  const areChildrenEmpty = () => {
    // return if divInputRef has child empty
    //if divInputRef is not focused
    const isFocused = divInputRef.current === document.activeElement
    if (divInputRef.current && !isFocused) {
      if (divInputRef.current.childNodes.length <= 0) return true
      divInputRef.current.childNodes.forEach((child) => {
        if (child.textContent.length <= 0) {
          return true
        } else {
          return false
        }
      })
    }
    return false
  }
  const handlePlaceholderInputText = (isPlaceHolderFocus: boolean = false) => {
    if (document.activeElement?.id === 'input-comment-component') return
    // if divInputRef has any element hide the placeholder
    if (isPlaceHolderFocus) {
      divPlaceholder.current?.style.setProperty('display', 'none')
      divInputRef.current?.style.setProperty('display', 'block')
      divInputRef.current?.focus()
      setPlaceholder(false)
    } else {
      if (areChildrenEmpty()) {
        divPlaceholder.current?.style.setProperty('display', 'block')
        divInputRef.current?.style.setProperty('display', 'none')
        setPlaceholder(true)
      } else {
        divPlaceholder.current?.style.setProperty('display', 'none')
        divInputRef.current?.style.setProperty('display', 'block')
        setPlaceholder(false)
      }
    }
  }

  useEffect(() => {
    if (divInputRef.current && initialText) {
      divInputRef.current.innerHTML = initialText
      countChars()
      handlePlaceholderInputText()
      resizeDiv()
    }
    divInputRef.current?.addEventListener('input', resizeDiv)

    return () => {
      divInputRef.current?.removeEventListener('input', resizeDiv)
    }
  }, [])

  useEffect(() => {
    if (!replyMentionedUser || !divInputRef?.current) {
      handlePlaceholderInputText()
      return
    }

    divInputRef.current?.focus()

    const selection = window.getSelection()

    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)
      if (range.startContainer.textContent === null) return
      const mentionedUser = createMentionedUser(replyMentionedUser)
      const spaceNode = document.createTextNode('\u00A0') // Unicode for non-breaking space
      addMentionToRangeAndSpaceNode(range, spaceNode, mentionedUser)
      createNewRangeAndMoveCursorToTheEnd(selection, spaceNode)
      handlePlaceholderInputText()
    }
  }, [replyMentionedUser])

  useEffect(() => {
    setStyleLimitExceeded(textLength > limit)
  }, [textLength])

  useEffect(() => {
    if (!divInputRef.current || !divPlaceholder.current) return

    document.addEventListener('mousedown', () => {
      handlePlaceholderInputText()
    })
    document.addEventListener('focus', () => {
      handlePlaceholderInputText()
    })
    document.addEventListener('blur', () => {
      handlePlaceholderInputText()
    })
    divPlaceholder.current?.addEventListener('mousedown', () => {
      handlePlaceholderInputText(true)
    })
    divPlaceholder.current?.addEventListener('focus', () => {
      handlePlaceholderInputText(true)
    })
    divPlaceholder.current?.addEventListener('blur', () => {
      handlePlaceholderInputText(true)
    })
    divInputRef.current?.addEventListener('mousedown', () => {
      handlePlaceholderInputText()
    })
    divInputRef.current?.addEventListener('focus', () => {
      handlePlaceholderInputText()
    })
    divInputRef.current?.addEventListener('blur', () => {
      handlePlaceholderInputText()
    })

    //capture the cursor position on arrow up and down or left and right and check if it´s close to the @ key
    divInputRef.current?.addEventListener('keyup', (event) => {
      if (
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight' ||
        event.key === 'Enter'
      ) {
        setShowMention(false)
      }
    })

    return () => {
      document.removeEventListener('mousedown', () => {
        handlePlaceholderInputText()
      })
      document.removeEventListener('focus', () => {
        handlePlaceholderInputText()
      })
      document.removeEventListener('blur', () => {
        handlePlaceholderInputText()
      })

      divPlaceholder.current?.removeEventListener('mousedown', () => {
        handlePlaceholderInputText(true)
      })
      divPlaceholder.current?.removeEventListener('focus', () => {
        handlePlaceholderInputText(true)
      })
      divPlaceholder.current?.removeEventListener('blur', () => {
        handlePlaceholderInputText(true)
      })
      divInputRef.current?.removeEventListener('mousedown', () => {
        handlePlaceholderInputText()
      })
      divInputRef.current?.removeEventListener('focus', () => {
        handlePlaceholderInputText()
      })
      divInputRef.current?.removeEventListener('blur', () => {
        handlePlaceholderInputText()
      })

      //capture the cursor position on arrow up and down or left and right and check if it´s close to the @ key
      divInputRef.current?.removeEventListener('keyup', (event) => {
        if (
          event.key === 'ArrowUp' ||
          event.key === 'ArrowDown' ||
          event.key === 'ArrowLeft' ||
          event.key === 'ArrowRight' ||
          event.key === 'Enter'
        ) {
          setShowMention(false)
        }
      })
    }
  }, [])

  useEffect(() => {
    if (replyMentionedUser) return

    // check if the cursor is inside the divInputRef
    const isFocused = divInputRef.current === document.activeElement
    // if the cursor is not inside the divInputRef show the placeholder

    if (value.length <= 0 && document.activeElement?.id !== 'input-comment-component' && !isFocused) {
      divPlaceholder.current?.style.setProperty('display', 'block')
      divInputRef.current.style.setProperty('display', 'none')
      divInputRef.current.innerHTML = '<p><br /></p>'
      setPlaceholder(true)
      countChars()
    }
  }, [value])

  return {
    handleInput,
    handlePlaceholderInputText,
    showMention,
    setShowMention,
    inputSearch,
    setInputSearch,
    divInputRef,
    mentionTopPosition,
    handleMentionUser,
    textLength,
    isPlaceholder,
    styleLimitExceeded,
    divPlaceholder
  }
}
