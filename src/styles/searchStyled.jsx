import styled from "styled-components";

const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    padding: 0 1rem;
    
    div {
        width: 30rem;
        position: relative;
    }

    input {
        width: 100%;
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.2rem;
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 100px;
        outline: none;
    }

    svg {
        position: absolute;
        left: 0%;
        top: 50%;
        transform: translate(100%, -50%);
        color: #fff;
    }
`;

export {FormStyle}