import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';

import {List, Slink} from '../styles/categoryStyled'

function Category() {
  return (
    <List>
        <Slink to={'/cuisine/vietnamese'}>
            <GiNoodles/>
            <h4>Vietnamese</h4>
        </Slink>
        <Slink to={'/cuisine/american'}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink to={'/cuisine/italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/cuisine/japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </Slink>
    </List>
  )
}

export default Category