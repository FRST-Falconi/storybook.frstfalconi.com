import styled from 'styled-components'
import img from './header_img.png';

export const Div = styled.div<any>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    background-color: #fff;
    padding: 50px 50px 50px 150px;
    margin: 0;
    background-image:  url(${img});
    background-position: right;
    background-repeat: no-repeat;
    
    h1 {
      
        max-width: 700px;
        background-image: linear-gradient(to right, rgb(255, 98, 0), rgb(255, 176, 0));
        font-size: 3.25rem;
        line-height: 67.6px;
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

    @media (max-width: 1700px) {
        padding: 50px;
    }

    @media (max-width: 1500px) {

        background-position: bottom 0px right -100px;

        h1 {
            font-size: 2.5rem;
            max-width: 550px;
            line-height: 50px;
        }
    }

    @media (max-width: 1270px) {
        height: 250px;
        background-position: bottom 0px right -450px;
    }

    @media (max-width: 911px) {
        height: 200px;
        padding: 30px;

        h1 {
            font-size: 2rem;
            max-width: 450px;
            line-height: 40px;
        }
        /*
        h1 {
        max-width: 20rem;
        font-size: 1.5rem;
        }
        */
    }

    @media (max-width: 740px) {
       
        height: 200px;
        padding: 30px;
        
        
        h1 {
            max-width: 300px;
            font-size: 1.3rem;
            line-height: 30px;
        }
    }

    @media (max-width: 600px) {
        background-image:  url(${img});
        background-size: 250px;
        background-position: bottom 0px right 0px;
       // background-image:unset;
        height: auto;
        padding: 10px;
        
        h1 {
            padding: 0px 10px;
            font-size: 1rem;
            line-height: 20px;
            max-width: 250px;
        }
    }

    @media (max-width: 480px) {
        background-image:  url(${img});
        background-size: 250px;
        background-position: bottom 0px right -100px;
       // background-image:unset;
        height: auto;
        padding: 10px;
        
        h1 {
            padding: 0px 10px;
            font-size: 1rem;
            line-height: 20px;
            max-width: 250px;
        }
    }


    @media (max-width: 373px) {
        background-image:unset;
        height: auto;
        padding: 10px;
        
    }
  
`;
