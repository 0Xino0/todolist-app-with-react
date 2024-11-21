import React,{useState} from 'react';
import {v4 as uuid} from 'uuid';

const Form = ({todos,setTodos}) => {
    const [input, setInput] = useState('');

    const onChange = (e) => {
        setInput(e.target.value);
    };
    
    const onsubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                id: uuid(),
                name: input,
                completed: false
            }   
        ])
        setInput('');
    }
    return(
        <form onSubmit={onsubmit}>
            <input className='form-input'
                type='text'
                placeholder='Enter a new item'
                autoComplete='off'
                value={input}
                onChange={onChange}
            />
            <button className='form-button' type='onSubmit'>add</button>
        </form>
    )
}

export default Form;