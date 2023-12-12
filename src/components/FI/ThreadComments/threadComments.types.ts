export interface Icomment {
    id: string,
    username: string,
    office:string,
    text:string,
    howlongAgo: string,
    imgProfile?:string,
    className?:string,
    listReplyComments:Icomment[]
}

export interface IThreadComments {
    mainComment:Icomment,
    listReplyComments:Icomment[],
    textPlaceHolder: string,
    onClickPublishButton: () => void,
    onClickShowReplys?: ()  => void,
    textShowReplys:string,
    textPublish:string
}
