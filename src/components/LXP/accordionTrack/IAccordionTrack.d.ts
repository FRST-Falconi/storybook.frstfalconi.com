import React from "react"
//import * as Icons from '../../shared/icons'
export interface IAccordionTrack {
    /**
	 * @prop {any} trailData: Informações referente as trilhas
	 */
    trailsData?: any
    /**
     * @prop {any} courseData: Informações referente aos cursos 
     */
    courseData?: any    
    /**
     * @prop {() => {})} onNewTrail: Callback para adicionar novo conteúdo
     */
    isLoading?: boolean
    TrailName?: string
    key?: number
    index?: number
    data?: any
    updateScrollSize?: number
    src?: string
    onNewTrail?: () => void
    handleChange?: (trails: any) => void
    handleClickSelect?: () => void,
    handleClickContent?: () => void     
    onSetNameTrail?: (name, id) => void
    handleClickNew?: () => void,
    handleEditCourse?: (id: string) => void
    handlePopOverMove?: (id: string) => void
    handlePopOverEdit?: (id: string) => void    
    /**
	 * @prop {(idCourse: string) => {}} handleDeleteCourse: Callback para deletar o curso 
	 */
    handleDeleteCourse?: (idCourse: string) => void
	/**
	 * @prop {(idCourse: string, idTrail: string) => {}} handleDeleteCourseTrail: Callback para deletar o vinculo do curso com a trilha
	 */
    handleDeleteCourseTrail?: (idTrailCourse: string) => void
	/**
	 * @prop {(idCourse: string, idTrail: string) => {}} handleDeleteCourseTrail: Callback para deletar o vinculo do curso com a trilha
	 */    
    handleSwitchAtivarIndividual? (idCourse: string, checked: boolean)
    /**
     * @prop {(errorCode: number) => {}} handleMessageError: Callback para mensagem de erro
     */    
    handleMessageError? (errorCode: string) 
    /**
     * @prop {(errorCode: number) => {}} handleMessageError: Callback para mensagem de erro
     */           
    handleSwitchActiveTrail?: (idTrail, active) => void     
    /**
     * @prop {(errorCode: number) => {}} handleUpdateTrail: Callback atualizar ordenação, exclusão e inserção de cursos nas trilahs
     */           
    handleUpdateTrail?: (deletedItem, insertItem, trailCoursesList) => void   
    handlePopOverDuplicate?: (id: string) => void
    handlePopOverTrailEdit?: (id: string) => void
    handlePopOverTrailDelete?: (id: string) => void
    handlePopOverRemoveIndividual?: (id: string) => void
}

export interface IAccordionTranslate extends IAccordionTrack {
    textMeusConteudos?: string
    textTotalDe?: string
    textRegistros?: string
    textMinhasTrihas?: string
    txtAtivarCurso?: string
    txtAtivarTrilha?: string
    txtButtonLabel?: string
    txtCriarNovoCurso?: string
    txtCriarNovoCurso2?: string
    txtPopOverEditContent?: string
    txtPopOverMoveToTrails?: string
    txtPopOverDeleteContent?: string
    txtTrailsPopOverEdit?: string
    txtTrailsPopOverDuplicar?: string
    txtTrailsPopOverDelete?: string
    txtPlacerolderInputNameTrail?: string
    txtCursoIndividual?: string
}

