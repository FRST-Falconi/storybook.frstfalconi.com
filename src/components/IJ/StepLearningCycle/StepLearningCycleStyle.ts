import styled from 'styled-components'

export const ContainerStepLearningCycle = styled.div`
  background: #f7f9fc;
  border-bottom: 1px solid #bdbdbd;
  justify-content: space-between;

  &&.row {
    width: 100%;
    padding: 25px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  &&.column {
    width: 18.5rem;
    gap: 30px;
    display: flex;
    flex-direction: column;
    padding: 24px;
  }
`
export const StepCycle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;

  > p {
    max-width: 250px;
    margin-left: 15%;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    color: #444444;
  }

  &&.finished {
    color: #444444;
  }

  &&.inProgress {
    color: #000000;
  }
  &&.waiting {
    color: #9c9c9c;
  }
`
export const StepCycleArticle = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  color: inherit;
  > h2 {
    margin: 0;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: inherit;
  }
`

export const IconStatus = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 500;
  cursor: pointer;

  &&.finished {
    border: 2px solid #2ca92a;
    background: #d1f6d1;
  }

  &&.inProgress {
    border: 2px solid #0645ad;

    color: #0645ad;
  }
  &&.waiting {
    border: 2px solid rgba(138, 153, 168, 0.5);

    color: rgba(0, 0, 0, 0.65);
  }
`
