import styled from 'styled-components'

export const ModalNewFeaturesContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000075;
  top: 0;
  left: 0;
`

export const ModalNewFeaturesContent = styled.div`
  border-radius: 8px;
  background: #f8fafc;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  height: 560px;
  width: 963px;
  display: flex;
`

export const AssideNewFeatures = styled.aside`
  box-sizing: border-box;
  width: 192px;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 60px;
  }
`

export const Text = styled.p`
  font-family: PT Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  color: #222;

  /* max-width: 83ch; */
  max-height: 69px;
  overflow: hidden;
  text-overflow: ellipsis;

  &.title {
    font-size: 24px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: 0.24px;
  }

  &.subtitle {
    max-height: 24px;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &.topic {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
  }
`

export const ListTopics = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  gap: 16px;
`
export const Topic = styled.li`
  list-style: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  border-left: 1px solid transparent;
  padding-left: 8px;
  cursor: pointer;

  &.active {
    font-weight: 700;
    border-left: 1px solid #000;
  }
`
export const MidiaContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px !important;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  background: #fff;
  border-radius: 8px;
`

export const Midia = styled.div`
  width: 100%;
  height: 380px;
  background: rgba(191, 186, 186, 0.2);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row-reverse;

  > .close {
    width: 30px;
    padding: 8px;
    cursor: pointer;
    position: absolute;
  }

  > .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px !important;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`

export const ContentDescription = styled.div`
  display: flex;
  height: 139px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`
