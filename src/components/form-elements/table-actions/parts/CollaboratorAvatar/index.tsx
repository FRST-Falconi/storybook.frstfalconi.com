import Tooltip from '@components/DS/tooltip'
import { ICollaboratorAvatar } from './collaborator-Avatar'
import { WrapperCollaboratorAvatar } from './collaboratorAvatarStyle'
import Avatar from '@components/avatar'

export default function CollaboratorAvatar({ src, onPressAvatar, labelTextVisitProfile, uuid, align, isResponsible, userName }: ICollaboratorAvatar) {
  return (
    <WrapperCollaboratorAvatar align={align} >
      {onPressAvatar && uuid ? (
        <Tooltip
          direction="bottom"
          content={userName ? userName : (labelTextVisitProfile ? labelTextVisitProfile : 'Visitar perfil')}
          trigger="hover"
          width="fit-content"
          height="32px"
          style={{ top: '10px', textAlign: 'center', whiteSpace: 'nowrap' }}
        >
          <div onClick={(event) => {
            event.stopPropagation()
            onPressAvatar?.(uuid) 
          }}>
          <Avatar
            size="32px"
            src={src ? src : 'https://cdn-images.frstfalconi.cloud/path582.svg'}
            isActiveClick={!!(onPressAvatar && uuid)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              borderRadius: "50%", 
              border: isResponsible ? "2px solid #31AAAA" : "2px solid transparent",
            }}
          />
          </div>
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
