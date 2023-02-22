import styled from 'styled-components'

interface AvatarI {
  color?: string
}

interface AvatarImage {
  image: any
}

export const ContainerGeral = styled.div`
  width: 7rem;
  display: flex;
  align-content: flex-start;
  top: 0;
  flex-direction: column;
  &:hover .cardInformation {
    display: block;
  }
  &:hover .cardInformation {
    display: block;
  }
`
export const AvatarChannel = styled.div<AvatarI>`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: ${(props) => props.color || '#6a3f86'};
  position: relative;
  cursor: pointer;
  margin: 1rem;

  img {
    border-radius: 50%;
  }
`

export const Channel = styled.span`
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.01em;
  font-size: 24px;
  color: #ffffff;
  font-family: 'Work Sans';
  font-weight: 700;
`

export const CardInformation = styled.div`
  width: 20rem;
  background: #ffff;
  font-size: 16px;
  display: none;
  margin-top: 0.5rem;
  font-family: 'PT Sans';
  font-weight: 400;
  word-break: break-word;
  box-shadow: 0px 25px 18px -20px rgba(34, 34, 34, 0.2);
  border-radius: 4px;
  list-style: none;
  padding: 8px 0px;
  h2 {
    margin: 1rem 0.5rem 0.5rem 1rem;
  }
  h3 {
    margin: 1rem;
  }
  @media (max-width: 320px) {
    width: 18rem;
  }
`

export const AvatarChannelImage = styled.div<AvatarImage>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: 80px;
  position: relative;
  cursor: pointer;
  margin: 1rem;

  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
`
