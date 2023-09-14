import React from "react";
import { useState } from "react";
import TodoItems from "./TodoItems";

const TodolistForm = () => {
  const [state, setState] = useState({
    todo: "",
    todolist: [],
  });
  const { todo, todolist } = state;

  /* Creat new list */
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const createList = () => {
    const list = todolist;
    list.push(todo);

    setState({ todo: "", todolist: list });
  };
  /* Delete */
  const deleteList = (index) => {
    const list = todolist;
    list.splice(index, 1);

    setState({ todo: "", todolist: list });
  };

  return (
    <div className="Todolist">
      <div action="" className="title">
        <h1>Todo List</h1>
      </div>
      <div className="create-list-sec">
        <input
          type="text"
          placeholder="Create todolist"
          name="todo"
          value={todo}
          onChange={handleOnchange}
        />
        <button onClick={createList} className="todo-btn">
          ADD
        </button>
      </div>
      <div className="list">
        {todolist.length ? (
          todolist.map((value, index) => (
            <TodoItems
              key={index}
              index={index}
              value={value}
              deleteList={deleteList}
            />
          ))
        ) : (
          <span>nothing to do today</span>
        )}
      </div>
    </div>
  );
};

export default TodolistForm;
