import styled from 'styled-components'
import Avatar from '@components/avatar'



export const Card = styled.div`
    display: flex;
    width: 290px;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    background-color: #585858;
    border-radius: 12px;
    position: relative;
`

export const CardInf = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
`

export const UserPerfil = styled.div`
    
    display: flex;
    flex-direction: row;
    cursor: pointer;

`

export const ButtonRemove = styled.div`
  display: flex;
  justify-content: center; 
  padding: 6px;
  align-items: center;
  gap: 10px;
  position: absolute; 
  right: 14px; 
  top: 0;
  margin:11px;
  border-radius: 100px;
  background: #404040;
  cursor: pointer;
  margin-right: 0; 
  width: 22px;
  height: 22px;
`;



export const TextChallege = styled.p`
    
    align-self: stretch;
    color: var(--primary_2, #F18624);
    font-family: "Work Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 6px;
`


export const TextDescription = styled.p`
    
    color: var(--neutrals-neutral_6, #E0E0E0);
    font-family: "PT Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-self: stretch;
    margin-top: 0px;
`


export const Colaboracao = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-top: solid 1.5px #444;
    margin-top: 4px;
    
`


export const Button = styled.div`
    
    border-radius: 0px 0px 12px 12px;
    background: #2F2F2F;
    display: flex;
    height: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    cursor: pointer;
    
`

export const ButtonText = styled.div`
    
    color: var(--primary_2, #F18624);
    text-align: center;
    font-family: "Work Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    align-self: stretch;
    
`


export const ColaboracaoText = styled.p`
    
    color: var(--neutrals-neutral_6, #E0E0E0);
    font-family: "PT Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 12px;
`


export const UserName = styled.p`
    color: #E0E0E0;
    font-family: "PT Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 4px 8px;
`

