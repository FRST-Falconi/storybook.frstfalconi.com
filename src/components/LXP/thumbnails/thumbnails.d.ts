//import * as Icons from '../../shared/icons'
//mport { content } from '../../shared/icons'

type enumVariant = 'default' | 'add'

export interface IThumbnails {
  src?: string
  isDisabled: boolean
  isActive?: boolean
  isLoading?: boolean
  showSwitch?: boolean
  publishContentStatus?: string
  handleClickCourse?: () => void
  handleSwitchAtivar?: (checkedValue: boolean) => void
  handleClickNew?: () => void
  handleClickContent?: () => void
  handleClickPopOverEdit?: () => void
  handleClickPopOverMove?: () => void
  handleClickPopOverDelete?: () => void
  handleClickPopOverDeleteTrail?: () => void
  handleClickPopOverEditActivity?: () => void
  handleClickPopOverMoveToTrail?: () => void
  handlePublicarCourse?: any
  handlePublicarContentCheck?: any
  variant?: enumVariant
  title?: string
  id?: string
  isTrail?: boolean
  index?: string
  provided?: any
  activeMenuModule?: boolean
  activePublishButton?: boolean
}

export interface IThumbnailsTranslate extends IThumbnails {
  txtButtonLabel?: string
  txtAtivarCurso?: string
  txtCriarNovoCurso?: string
  txtCriarNovoCurso2?: string
  txtPopOverEditContent?: string
  txtPopOverMoveToTrails?: string
  txtPopOverDeleteContent?: string
  txtPopOverDeleteTrail?: string
  txtPopOverEditContentActivity?: string
  txtHideContent?: string
  txtShowContent?: string
}
