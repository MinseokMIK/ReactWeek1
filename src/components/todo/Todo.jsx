import React, { useState, useRef } from "react";
import "./style.css";

function Todo({ todoBoxes, setTodoBoxes }) {
  // console.log(todoBoxes, setTodoBoxes)

  function delTodo(id) {
    console.log(id);
    console.log("deltodo!");
    setTodoBoxes(todoBoxes.filter((e) => e.id !== id));
  }

  function checkDone(id) {
    console.log(id);
    const todo_list = todoBoxes.map((el) => {
      if (el.id === id) {
        el.isDone = !el.isDone;
        // return {...el, isDone: !el.isDone }
        return el;
      } else {
        // return {...el}
        return el;
      }
    });
    // console.log(todo_list)
    setTodoBoxes(todo_list);
    // const index = todoBoxes.findIndex((el) => el.id === id)
    // console.log(index)
    // const copy = todoBoxes
    // copy[index].isDone = true

    // console.log(copy)
    // setTodoBoxes(copy)
  }
  console.log(todoBoxes);

  const content = [
    todoBoxes.map((e) => {
      return (
        <div key={e.id} className="todo_box">
          <h2>{e.title}</h2>
          <p>{e.body}</p>
          <div className="btn_set">
            <button
              className="btn todo_del_btn"
              onClick={() => {
                delTodo(e.id);
              }}
            >
              삭제하기
            </button>

            {!e.isDone ? (
              <button
                className="btn todo_done_btn"
                onClick={() => {
                  checkDone(e.id);
                }}
              >
                완료
              </button>
            ) : (
              <button
                className="btn todo_done_btn cancel"
                onClick={() => {
                  checkDone(e.id);
                }}
              >
                취소
              </button>
            )}
          </div>
        </div>
      );
    }),
  ];

  return <div className="todo_container">{content}</div>;
}

export default Todo;
