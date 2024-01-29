export interface IInputEdit {
    placeHolderText: string,
    editButtonText: string,
    onClickEditButton: (props: OnClickEditButtonParams) => void,
    limitInput: number,
    getSearchUsers?: (value: string) => any,
    limitMessageExceeded: string;
    commentId: number;
    commentTextWithMention?: string;
    commentText: string;
    setIsModeEdit: (isModeEdit: boolean) => void;
    cancelButtonText: string;
    orText: string;
    group_uuid: string;
}

export interface OnClickEditButtonParams {
    commentId: number,
    content: string,
    contentMention: string,
    mentions: Array<string>,
}
