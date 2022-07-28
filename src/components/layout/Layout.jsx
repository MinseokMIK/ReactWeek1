import React, {useState} from "react";

import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";

import "./style.css";


function Layout() {

    const [todoBoxes, setTodoBoxes] = useState([
        {id: 0, title: '리액트 공부하기', body: '리액트 기초를 공부해봅시다.', isDone: false},
        {id: 1, title: '알고리즘 문제 풀기', body: '프로그래머스 문제.', isDone: true}
    ]);

    // console.log(todoBoxes)

    return (
        <div className="layout">
            <Header/>
            <Form todoBoxes = {todoBoxes} setTodoBoxes = {setTodoBoxes}/>
            <List todoBoxes = {todoBoxes} setTodoBoxes = {setTodoBoxes}/>          
        </div>
    );
}

export default Layout;
