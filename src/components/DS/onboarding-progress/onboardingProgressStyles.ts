import styled from "styled-components";

export const CardContainer = styled.div`
    box-sizing: border-box;
    max-width: 288px;
    height: 560px;
    background:${({ theme }) => theme.colors.shadeWhite};
    box-shadow: 0px 25px 18px -20px rgba(34, 34, 34, 0.2);
    border-radius: 8px;
    padding: 22px 27px 27px;
`