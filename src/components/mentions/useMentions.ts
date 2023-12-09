import { useEffect, useState } from "react";
import { MentionProps, User } from "./types";


export const useMentions = (mention: MentionProps) => {
  const { onSelect, users, inputSearch } = mention;
  const [selectedUser, setSelectedUser] = useState<User | null>()
  const mentionRegexKey = /@(\w+)/;
  const match = mentionRegexKey.exec(inputSearch || '');
  const userName = match ? match[1] : null;
  
  let filteredUsers = userName ? users.filter((user) => user.name.toLowerCase().includes(userName?.toLowerCase())) : users

  useEffect(() => {
    if (!selectedUser) return;

    onSelect(selectedUser)
  }, [selectedUser])

  return {
    filteredUsers,
    selectedUser,
    setSelectedUser,
  }
}
