export interface IInputEdit {
    placeHolderText: string,
    editButtonText: string,
    onClickEditButton: (props: onClickEditButtonParams) => void,
    limitInput: number,
    getSearchUsers?: (value: string) => any,
    limitMessageExceeded: string;
    commentUUID: string;
    commentTextWithMention?: string;
    commentText: string;
    setIsModeEdit: (isModeEdit: boolean) => void;
    cancelButtonText: string;
    orText: string;
    group_uuid: string;
}

export interface onClickEditButtonParams {
    commentUuid: string,
    content: string,
    contentMention: string,
    mentions: Array<string>,
}
