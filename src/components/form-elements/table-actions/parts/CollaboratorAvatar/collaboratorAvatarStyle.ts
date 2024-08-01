import styled from 'styled-components'

export const WrapperCollaboratorAvatar = styled.div<{align}>`
  width: 100%;
  display: flex;
  justify-content: ${({align}) => 
    align && align != 'center' ? 
  (align == 'left' ? 'flex-start' : 'flex-end') : 
  'center'
};
  align-items: center;
`;