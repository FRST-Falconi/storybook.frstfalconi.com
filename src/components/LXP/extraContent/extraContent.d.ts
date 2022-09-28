import React from 'react'

interface IExtraContent {
    /**
   * @prop {number} typeExhibition: Types of exhibition in extra content: 1 - admin, 2 - student
   */ 
    typeExhibition : number
    /**
   * @prop {array} bookList: An array of books: {id, img, title and autor}
   */ 
    bookList ?: [{
        id : string
        img : any
        title : string
        autor : string
    }]
    /**
   * @prop {string} transcription: a string for the transcription content
   */ 
    transcription ?: string
    /**
   * @prop {string} userAvatar: the user avatar
   */ 
    userAvatar ?: string
    /**
   * @prop {array} commentList: An array of comments
   */ 
    commentList ?: any[]
    /**
   * @prop {array} suportMaterial: An array of suportMaterials: {id, img, description}
   */ 
    suportMaterial ?: [{
        id : string
        img : any
        description : string
    }]

    onClickBook ?: (id) => void
    onClickSuportMaterial ?: (id) => void

    onSaveTranscription ?: (text) => void
}