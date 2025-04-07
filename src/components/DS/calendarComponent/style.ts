import styled from 'styled-components'

export const CalendarWrapper = styled.div`
  .rbc-time-content,
  .rbc-month-view,
  .rbc-agenda-view {
    scrollbar-width: thin;
    scrollbar-color: #64748B transparent;
  }

  .rbc-header {
    background-color: #A9CECE;
    color: #333;
    padding: 10px;
    text-align: center;
  }
   .rbc-time-content {
    background-color: #ffffff; /* Fundo branco para os horários */
    border-top: 2px solid #ddd; /* Linha separadora */
  }


  .rbc-time-content::-webkit-scrollbar {
    width: 6px;
  }

  .rbc-time-content::-webkit-scrollbar-thumb {
    background-color: #64748B;
    border-radius: 8px;
  }

  .rbc-time-slot {
    min-height: 20px !important; /* Reduz a altura das linhas */
  }
  .rbc-events-container{
    margin: 0;
  }

  .rbc-day-bg{
    display: none;
  }
  .rbc-allday-cell{
    display: none;
  }

`
