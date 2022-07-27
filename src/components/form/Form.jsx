import './style.css';
import React, {useState} from 'react';
import List from '../list/List';

function Form(){
    const [inText, setInText] = useState({
        inTitle: '',
        inContents: '',
    });

    const {inTitle, inContents} = inText;

    const onChange = (e) =>{
        const {value, name} = e.target;
        setInText({
            ...inText,
            [name]: value
        });
    };
    const [todoList, setTodoList]=useState([])
    const addItem =() =>{
        setTodoList([...todoList,setTodoList])
        console.log(setTodoList)
    }

    return(
        <div>
            <div className='form'>
                <span>제목</span>
                <input name="inTitle" value ={inTitle} type="text" onChange={onChange}/>
                <span>내용</span>
                <input name="inContents" value ={inContents} type="text" onChange={onChange}/>
                <button onClick={addItem}>추가</button>
            </div>
            <h1>Working..🔥</h1>
                <List todoList={todoList}/>
            <h1>Done...!🎉</h1>
        </div>
    );
}

export default Form;