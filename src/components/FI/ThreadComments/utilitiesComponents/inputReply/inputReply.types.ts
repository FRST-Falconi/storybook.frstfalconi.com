export interface IInputReply {
    placeHolderText: string,
    publishButtonText:string,
    onClickPublishButton: () => void,
    limitInput:number,
    styles:any,
    idInput:string,
    replyFor:string,
    imgProfile?:string
}
