import React from "react";

const TodoItems = (props) => {
  const { index, value, deleteList } = props;

  return (
    <div key={index} className="list-box">
      <span className="todo-box">{value}</span>
      <button className="list-btn">Edit</button>
      <button onClick={() => deleteList(index)} className="list-btn">
        Delete
      </button>
    </div>
  );
};

export default TodoItems;
