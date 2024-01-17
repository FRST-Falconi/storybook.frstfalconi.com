import styled from 'styled-components'

interface content {
  showText?: boolean
  tagVisualized?: string
  isSelected?: boolean
}

export const containerThumbContent = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  position: relative;
  min-width: 250px;
  height: auto;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.shadeWhite};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2) !important;

`

export const loadingImageThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(123, 129, 136, 0) 6.43%, rgba(123, 129, 136, 0.2) 22.38%), #d9d9d9;
  -webkit-animation-duration: 4s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;
`

export const iconsThumbAndProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #ee8736;
  flex-direction: column;
`

export const iconsThumb = styled.div`
  display: flex;
  height: 100%;
  min-height: 144px;
  background-color: #ee8736;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const imageThumbContent = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-size:cover !important;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 6.733px;
  align-items: center;
  margin-left: -1px;
  background: rgba(0, 0, 0, 0.30);

`

export const loadingThumbContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 16px 16px 16px 16px;
  gap: 4px;
`

export const loadingContent = styled.div`
  background: linear-gradient(90deg, rgba(123, 129, 136, 0) 6.43%, rgba(123, 129, 136, 0.2) 22.38%), #d9d9d9;
  color: transparent;
  border-radius: 16px;
  width: 100%;
  height: 0.45em;

  -webkit-animation-duration: 4s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;

  &:first-child {
    width: 50%;
    margin-bottom: 8px;
  }
  &:last-child {
    width: 30%;
  }

`


export const IconPlayVideo = styled.div`
width: 133px;
height: 119px;
border-radius: 8px;
flex-shrink: 0;
background-color: rgba(0, 0, 0, 0.30);
/* background-color: red; */
position: relative;
left: 0px;
display: flex;
align-items: center;
justify-content: center;


`


export const infoThumbContent = styled.div<content>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-size: 16px;
  padding: 0px 0px 32px 0px;
  gap: 4px;
  font-family: 'PT Sans';
  word-wrap: break-word;
  background: ${(props) => props?.isSelected && '#F26818'};
  span {
    color: ${(props) => (props?.isSelected ? '#F8FAFC' : '#F26818')};
    font-size: 16px;
    font-weight: 700;
    padding-top: ${(props) => (props.tagVisualized === 'notVisualized' ? '16px' : '0px')};
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
  }
`

export const tagThumbContentContainer = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: end;
`
export const tagThumbContent = styled.div<content>`
  height: 24px;
  background: ${(props) => (props.tagVisualized === 'vizualized' ? '#2ca92a' : '#851F41')};
  width: 91px;
  border-radius: 0px 0px 0px 8px;
  color: #ffff;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => props?.isSelected && 'none'};
`

export const descriptionThumbContent = styled.div<content>`
  font-size: 13px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  font-family: PT Sans;
  color: ${(props) => (props?.isSelected ? '#F9FAFB' : '#222222')};
  padding: 10px 0px 0px 0px;
  width: 135px;
  overflow: hidden;
  text-overflow: ${(props) => (props.showText ? 'none' : 'ellipsis')};
  display: ${(props) => (props.showText ? 'flex' : '-webkit-box')};
  -webkit-line-clamp: ${(props) => (props.showText ? 'none' : 3)};
  -webkit-box-orient: ${(props) => (props.showText ? 'none' : 'vertical')};
  position: relative;
  left: 8.83px;
`

export const viewMoreContent = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0px 16px 12px 0px;
  user-select: none;
`
export const NameCanal = styled.p`

color: var(--neutrals-neutral_2, #444);
font-family: PT Sans;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
position: relative;
right: 10px;
`

export const ImgCanal = styled.img`

width: 24px;
height: 24px;
flex-shrink: 0;
border-radius: 40px;
background-size:cover !important;


`

export const InfCanal = styled.div`

width: 130px;
height: 30px;
position: absolute;
display: inline-flex;
align-items: center;
gap: 16px;
right: 10px;
margin-bottom: 7px;
border-top: 0.5px solid #E2E8F0;

`


export const shadedThumb = styled.div`
  position: relative;
  height: 100%;
  :after {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    background: linear-gradient(360deg, #2d2c2c 7.86%, rgba(117, 117, 117, 0) 61.43%);
    z-index: 1;
  }
`

export const ProgressAndImg = styled.div`
  padding: 0.3rem 0.5rem;
  z-index: 99;
  position: absolute;
  width: 100%;
`

export const ProgressIcon = styled.div`
  position: absolute;
  bottom: 2px;
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: 10;
  padding-bottom: 0.3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

export const IconAndProgress = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
`
