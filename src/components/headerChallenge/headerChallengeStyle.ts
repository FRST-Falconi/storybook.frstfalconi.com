import styled from 'styled-components'

export const Div = styled.div<any>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    background-color: #fff;
    padding: 50px 50px 50px 124px;
    margin: 0;
    background-image: url('https://frst-imagens-cdn.dev.frstfalconi.cloud/headerChallenge_bg.png');
    background-position: bottom 0px right 0px; 
    background-repeat: no-repeat;
    h1 {
        font-size: 3.25rem;
        line-height: 67.6px;
        font-weight: 700;
        max-width: 706px;
        background-image: linear-gradient(to right, rgb(255, 98, 0), rgb(255, 176, 0));
        background: linear-gradient(-45deg, rgb(255, 98, 0), rgb(255, 176, 0), rgb(255, 98, 0), rgb(255, 176, 0));
	    background-size: 400% 400%;
	    animation: gradient 15s ease infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    }
    @media (max-width: 1850px) {
        background-position: bottom 0px right -220px; 
    }
    @media (max-width: 1650px) {
        padding: 50px 50px 50px 100px;
        h1 {
            font-size: 2.5rem;
            max-width: 541px;
            line-height: 52px;
        }
    }
    @media (max-width: 1400px) {
        padding: 50px 50px 50px 40px;
    }
    @media (max-width: 1350px) {
        height: 250px;
        background-size:contain;
        background-position: bottom 0px right -180px; 
    }
    @media (max-width: 1200px) {
        background-size:contain;
        background-position: bottom 0px right -200px; 
        h1 {
           max-width: 380px;
           font-size: 1.8rem;
           line-height: 36px;
        }
    }
    @media (max-width: 1050px) {
        height: 150px;
        background-size:contain;
        background-position: bottom 0px right -130px;
    }
    @media (max-width: 820px) {
        background-position: bottom 0px right -130px;
        h1 {
           font-size: 1.4rem;
           line-height: 30px;
           max-width: 320px;
        }
    }
    @media (max-width: 730px) {
        background-image:  url('https://frst-imagens-cdn.dev.frstfalconi.cloud/headerChallengeMobile_bg.png');
        background-position: bottom 0px right 0px;
        
        h1 {
           max-width: 345px;
           font-size: 1.5rem;
           line-height: 31.2px;
        }
    }
    @media (max-width: 480px) {
        padding: 10px;
        background-size:unset;
        height: 120px;
        h1 {
           max-width: 260px;
           font-size: 18px;
           line-height: 21.11px;
        }
    }
    @media (max-width: 390px) {
        background-position: bottom 0px right -20px;
    }
`;
