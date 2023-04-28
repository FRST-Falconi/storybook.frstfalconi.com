import styled from 'styled-components'

interface IProgressProps {
  progress: number
}

export const Container = styled.div`
  width: auto;
  height: 218px;
  min-width: 720px;
  padding: 25px 26px 20px 26px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 14px;
  cursor: pointer;
  &.selected {
    background: #fce4cc;
    border: 1px solid #ff8a15;
  }
  :hover {
    background: #fcf3eb;
    border: 1px solid #ff8a15;
  }
`

export const Thumbnail = styled.section`
  height: 100%;
  width: 88px;
  border-radius: 8px;

  > img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 8px;
  }
`
export const Content = styled.section`
  width: calc(100% - 88px - 14px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const Article = styled.article`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`
export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #6a3f86;
`

export const Description = styled.p`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: #757575;
  width: 60%;
`
export const SkillsList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0;
  gap: 8px;

  > .title {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #757575;
  }
`
export const Skill = styled.li`
  text-decoration: none;
  list-style: none;
  text-transform: capitalize;
  padding: 2px 4px;
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: #ffffff;
  background: #6a3f86;
  border-radius: 4px;
`
export const ContentBarProgess = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > p {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #222222;
  }
`
export const BarProgress = styled.div`
  width: 160px;
  height: 20px;
  padding: 2px;
  border: 1px solid #9c9c9c;
  border-radius: 100px;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const Progress = styled.span<IProgressProps>`
  height: 100%;
  background-color: #ff4d0d;
  width: ${(p) => p.progress}%;
  z-index: 2;
  border-radius: 100px;
`
