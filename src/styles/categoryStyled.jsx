import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

const List = styled.div`
    display: flex;
    // justify-content: center;
    // margin: 2rem .1rem;
    overflow-x: auto;
    padding: 1rem;
`;

const Slink = styled(NavLink)`
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    // margin: 0 1rem;
    border-radius: 50%;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6.4rem;
    height: 6.4rem;
    cursor: pointer;
    transform: scale(0.8);
    
    h4 {
        color: #fff;
        font-size: .8rem;
    }

    svg {
        color: #fff;
        font-size: 1.5rem;
    }

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
        
        svg {
            color: #fff;
        }

        h4 {
            color: #fff;
        }
    }
`;

export {List, Slink} 