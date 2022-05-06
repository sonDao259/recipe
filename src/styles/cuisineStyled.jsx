import styled from 'styled-components';
import { motion } from 'framer-motion';

const Grid = styled(motion.div)`
    display: flex;  
    width: 100%;
    justify-content: center;

`;

const GridItem = styled(motion.div)`
    display: flex;  
    max-width: 800px;
    flex-wrap: wrap; 
    justify-content: center;
`

const Card = styled.div`
    width: 200px;
    padding: .2rem;
    display: flex;
    flex-direction: column;
    margin-auto;

    img {
        width: 100%;
        border-radius: 1rem;
        object-fit: cover;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;


export {Grid, GridItem, Card}