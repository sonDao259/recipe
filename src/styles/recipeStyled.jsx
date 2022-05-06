import styled from 'styled-components';

const DetailsWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    margin-right: 1rem;
    margin-left: 1rem;
    display: flex;
    // width: 100vw;
    // max-width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: #fff;
    }

    img {
        width: 100%;
    }

    h2 {
        margin-bottom: 2rem;
    }

    ol, ul {
        margin-top: 2rem;
        padding-left: 1rem;
    }

    li {
        // font-size: 1.2rem;
        line-height: 2.5rem;
        // list-style: none;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: #fff;
    border: 2px solid #000;
    margin-right: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    cursor: pointer;

    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`

const Info = styled.div`
    width: 70%;
    margin-left: 4rem;
    @media (max-width: 768px) {
        margin-left: 0;
        max-width: 100%;
        width: 100%;
    }
    div {
        width: 100%;
    }

    p {
        text-align: justify;
        margin-bottom: 1rem;
    }
`

const Intro = styled.div`
    width: 30%;
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 2rem;
    }

`;

export {DetailsWrapper, Button, Info, Intro}