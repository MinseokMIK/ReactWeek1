import React from "react";
import { useState } from "react";
import "./style.css";

import Todo from "../todo/Todo";

function List({ todoBoxes, setTodoBoxes }) {
  // console.log(todoBoxes)

  // for(let i= 0; 0 < todoBoxes.length; i++){
  //     if (!todoBoxes.at(i).isDone) {
  //         <Todo/>
  //     }

  // }

  console.log(todoBoxes)
  return (
    <div className="list_container">
      <h1>Working..🔥</h1>
      <div>
        {todoBoxes.map((e) => {
          if (!e.isDone) {
            return <Todo key={e.id} todoBoxes={todoBoxes} setTodoBoxes={setTodoBoxes} />;
          } else {
            return null
          }
        })}
      </div>
      <h1>Done..!🎉</h1>
      <div>
        {todoBoxes.map((e) => {
          if (e.isDone) {
            return <Todo key={e.id} todoBoxes={todoBoxes} setTodoBoxes={setTodoBoxes} />;
          } else {
            return null
          }
        })}
      </div>
    </div>
  );
}

export default List;
