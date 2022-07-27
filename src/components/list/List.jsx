import React from 'react';
import './style.css';


function List(props){
    return(
        <div className="card">
            <div className="myItem">
                <span style={{width: "250px"}}>props.todoList</span>
                <span style={{width: "250px"}}>props.todoList</span>
            </div>
        </div>
    )
}

export default List;