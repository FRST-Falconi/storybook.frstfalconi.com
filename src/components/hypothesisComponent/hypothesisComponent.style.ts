import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width:100%;
`
export const Container = styled.div<{ type: string }>`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
font-family: PT Sans;
font-size:14px;
border-radius:8px;
padding: 0 0 0 16px; 
height: 100%;
min-height: 52px;

${({ type }) => type === 'prioritize' && css`
    background: #FDAE15;
`}
${({ type }) => type === 'raised' && css`
    background: #F8D784;

`}
${({ type }) => type === 'suggested' && css`
    background: #CDDAEF;
`}
`;

export const Title = styled.span`
font-weight:700;
white-space: nowrap;
`;

export const Index = styled.span`
font-weight:700;
`;

export const Separator = styled.div`
font-weight:bold;
margin: 0 8px;
`;

export const Description = styled.span`
font-weight:400;
padding: 8px 0 8px;

`;
export const SplitContainer = styled.div<{ height?: number }>`
display:flex;
justify-content: flex-start;
align-items:center;
height: ${({ height }) => height ? `${height}px` : '100%'};
`
export const VoteMainContainer = styled.div<{ height?: number }>`
display: flex;
align-items: center;
justify-content: flex-start;
cursor: pointer;
height: ${({ height }) => height ? `${height}px` : '100%'};
width: 100%;
`
export const VoteAvatarsContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
position: relative;
`

export const VoteAvatar = styled.div`
    position: absolute;
`

export const VoteButtonContainer = styled.span<{ type?: string }>`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    background: #F9CD5E;

    ${({ type }) => type === 'prioritize' && css`
    background: #DC9100;
    `}
    ${({ type }) => type === 'raised' && css`
        background: #F9CD5E;

    `}
    ${({ type }) => type === 'suggested' && css`
        background: #A5C3F2;
    `}
    border-radius:0 8px 8px 0;
    padding: 0 16px 0 16px;
    height: 100%;
    min-height: 52px;
    margin-left: 4px;

`
export const VoteCount = styled.span`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 4px;
    white-space: nowrap;
    width: auto;
`
export const VoteButton = styled.p`
    display: flex;
    align-items: center;
    cursor: pointer;
    height:100%;
    width: 100%;
    font-family: PT Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 18.12px;
    text-align: left;
    color: #444444;
    white-space: nowrap;
    width: auto;
`
export const VoteContent = styled.div`
    display: flex;
    div{
        flex-direction: row-reverse;
        display: flex;
        :nth-child(1n){
        margin-left: -8px;
    }
    }
`
export const ImageContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    border: solid  2.5px #fff;
    color: #FFFFFF;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const VoteListContainer = styled.div<{ showVotes?: boolean }>`
position: absolute;
top: calc(100% + 1px);
right: 0;
width: 225px; 
max-height: 300px; 
overflow-y: auto;
padding: 5px 0px;
background-color: #fff;
border: 1px solid #ccc;
border-radius: 8px;
z-index: 1999;
display: ${({ showVotes }) => showVotes ? 'block' : 'none'};
    &::-webkit-scrollbar {
      display: none;
    }
box-shadow: 0px 15px 20px 0px #22222226;
`

export const VoteListItem = styled.div<{ lastVote?: boolean }>`
height: 36px;
display: flex;
align-items: center;
gap: 10px;
${({ lastVote }) => lastVote === false && "border-bottom: solid 1px #ccc;"}
`