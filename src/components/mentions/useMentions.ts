import { useEffect, useRef, useState } from "react";
import { MentionProps, User } from "./types";


export const useMentions = (mention: MentionProps) => {
  const mentionListRef = useRef<HTMLDivElement>(null);
  const { onSelect, users, inputSearch } = mention;
  const [selectedUser, setSelectedUser] = useState<User | null>()
  const mentionRegexKey = /@(\w+)/;
  const match = mentionRegexKey.exec(inputSearch || '');
  const userName = match ? match[1] : null;
  
  let filteredUsers = userName ? users.filter((user) => user.name.toLowerCase().includes(userName?.toLowerCase())) : users

  useEffect(() => {
    if (!mentionListRef.current) return;
    mentionListRef.current.scrollTop = 0;
    mentionListRef.current.focus();

    //set focus first child of the list
    const firstChild = mentionListRef.current.firstChild as HTMLElement;
    firstChild.focus();

    //keydown should change item focus
    mentionListRef.current.addEventListener('keydown', (e) => {
      const activeElement = document.activeElement as HTMLElement;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (activeElement.nextSibling) {
          (activeElement.nextSibling as HTMLElement).focus();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (activeElement.previousSibling) {
          (activeElement.previousSibling as HTMLElement).focus();
        }
      } 
    });


  }, [])
  
  useEffect(() => {
    if (!selectedUser) return;

    onSelect(selectedUser)
  }, [selectedUser])

  return {
    filteredUsers,
    selectedUser,
    setSelectedUser,
    mentionListRef
  }
}
