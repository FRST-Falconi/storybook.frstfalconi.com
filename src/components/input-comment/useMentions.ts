import { useCallback, useEffect, useRef, useState } from "react";
import { User } from ".";
import { MentionProps } from "./types";

export const useMentions = (mention: MentionProps) => {
  const mentionListRef = useRef<HTMLDivElement>(null);
  const { onSelect, inputSearch } = mention;
  const [selectedUser, setSelectedUser] = useState<User | null>()
  const [users, setUsers] = useState<User[]>([])
  let filteredUsers = !!inputSearch?.length ? users.filter((user) => user.name.toLowerCase().includes(inputSearch?.toLowerCase())) : users
  if (filteredUsers.length === 0) {
    filteredUsers = users;
  }

  const handleGetUsers = useCallback(async() =>{
    const fakeUsers = [
      {
        "user-uuid": "1",
        "name": "John Doe",
        "avatar": "https://i.pravatar.cc/150?img=1",
        "subTitle": "CEO"
      },
      {
        "user-uuid": "2",
        "name": "Edi Doe",
        "avatar": "https://i.pravatar.cc/150?img=1",
        "subTitle": "CEO"
      }
      ,
      {
        "user-uuid": "2",
        "name": "Edi Doe",
        "avatar": "https://i.pravatar.cc/150?img=1",
        "subTitle": "CEO"
      },

    ]
     
    
    setUsers(fakeUsers)
  },[])
  useEffect(() => {
    handleGetUsers()
    if (!mentionListRef.current) return;
  
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
