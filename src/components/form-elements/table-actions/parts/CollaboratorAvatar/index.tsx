import Tooltip from '@components/DS/tooltip'
import { ICollaboratorAvatar } from './collaborator-Avatar'
import { WrapperCollaboratorAvatar } from './collaboratorAvatarStyle'
import Avatar from '@components/avatar'

export default function CollaboratorAvatar({ src, onPressAvatar, labelTextVisitProfile, uuid }: ICollaboratorAvatar) {
  return (
    <WrapperCollaboratorAvatar>
      {onPressAvatar && uuid ? (
        <Tooltip
          direction="bottom"
          content={labelTextVisitProfile ? labelTextVisitProfile : 'Visitar perfil'}
          trigger="hover"
          width="fit-content"
          height="32px"
          style={{ top: '10px', textAlign: 'center', whiteSpace: 'nowrap' }}
        >
          <Avatar
            size="32px"
            src={src ? src : 'https://cdn-images.frstfalconi.cloud/path582.svg'}
            onClick={onPressAvatar && uuid ? () => onPressAvatar(uuid) : null}
            isActiveClick={!!(onPressAvatar && uuid)}
          />
        </Tooltip>
      ) : (
        <Avatar
          size="32px"
          src={src ? src : 'https://cdn-images.frstfalconi.cloud/path582.svg'}
          onClick={null}
          isActiveClick={!!(onPressAvatar && uuid)}
        />
      )}
    </WrapperCollaboratorAvatar>
  )
}
