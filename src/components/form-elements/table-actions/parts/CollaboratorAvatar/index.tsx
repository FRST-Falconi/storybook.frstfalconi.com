import { ICollaboratorAvatar } from './collaborator-Avatar'
import { WrapperCollaboratorAvatar } from './collaboratorAvatarStyle'
import Avatar from '@components/avatar'

export default function CollaboratorAvatar({ src, onPressAvatar, uuid }: ICollaboratorAvatar) {
  return (
    <WrapperCollaboratorAvatar>
      <Avatar
        size="32px"
        src={src ? src : 'https://cdn-images.frstfalconi.cloud/path582.svg'}
        onClick={onPressAvatar && uuid ? () => onPressAvatar(uuid) : null}
        isActiveClick={!!(onPressAvatar && uuid)}
      />
    </WrapperCollaboratorAvatar>
  )
}
