import './style.css';
import React, {useState} from 'react';

function Form(){
    const [text, setText] = useState('');
    const onChange = (e) =>{
        setText(e.target.value)
    }

    return(
        <div className='form'>
            <span>제목</span>
            <input onChange={onChange}/>
            <span>내용</span>
            <input onChange={onChange}/>
            <button>추가하기</button>
        </div>
    );
}

export default Form;