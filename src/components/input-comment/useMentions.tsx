import { useEffect, useRef, useState } from "react";
import { MentionProps, User } from "./types";

export const useMentions = (mention: MentionProps) => {
  const mentionListRef = useRef<HTMLDivElement>(null);
  const { onSelect } = mention;
  const [selectedUser, setSelectedUser] = useState<User | null>()

  useEffect(() => {
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
    selectedUser,
    setSelectedUser,
    mentionListRef

  }
}
