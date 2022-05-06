import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';

import {useNavigate} from 'react-router-dom';

import {FormStyle} from '../styles/searchStyled'


function Search() {

    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input 
                    type="text" 
                    value = {input}
                    onChange = {e => setInput(e.target.value)}
                />
            </div>
        </FormStyle>
    )
}

export default Search