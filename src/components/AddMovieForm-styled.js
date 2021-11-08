import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 20px;
`;

export const Form = styled.div`
        border: 5px solid var(--green);
        height: 60vh;
        width: 40vw;
        margin: 0 auto;
        border-radius: 15px;
        padding: 10px;


        input {
            padding: 3px;
            display: block;
            margin: 25px;
            text-transform: uppercase;
            margin-left: auto;
            margin-right: auto;
            width: 20vw;
        }
`;


export const Button = styled.button`
    input { 
        background-color: var(--orange);
        padding: 10px;
        text-transform: uppercase;
        border: none;
        margin: 0;
    }
`;