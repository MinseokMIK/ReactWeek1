import React from "react";
import { useState } from "react";
import "./style.css";

function Form({todoBoxes, setTodoBoxes}) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const writeTodo = () => {
        if(title !== "" && body !== "") {
            setTodoBoxes([...todoBoxes, 
                {
                    id: todoBoxes.length+1, 
                    title: title, 
                    body: body, 
                    isDone: false
                }
            ]);
            setTitle("")
            setBody("")
        } else {
            alert("제목과 내용을 입력하세요!")
        }
    }
    
    // console.log(todoBoxes)



    return (
        <div className="add_form">
            <div className="input_group">
                <label className="form_label">제목</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange = {(e) => setTitle(e.target.value)}
                    name="title" className="add_input input_body">
                </input>
                
                <label className="form_label">내용</label>
                <input 
                    type="text"
                    required
                    value={body}
                    onChange = {(e) => setBody(e.target.value)}
                    name="body" className="add_input" >
                </input>
            </div>
            <button className="add_btn" onClick={writeTodo}>추가하기</button>
        </div>
    );
}

export default Form;
