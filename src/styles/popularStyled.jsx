import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 4rem 1rem;
`;
export const Card = styled.div`
    overflow: hidden;
    position: relative;
    min-height: 15rem;
    width: 100%;
    border-radius: .5rem;

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0%);
        color: #fff;
        width: 100%;
        text-align: center;
        font-weight: 500;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-item: center;
    }   

    img {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Gradients = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5));
    border-radius: 1rem;
`;