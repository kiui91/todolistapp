import React, { useState, useEffect } from "react";

// TodoList.js
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // ローカルストレージからToDoリストを読み込む
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // ToDoリストの状態が更新されたらローカルストレージに保存
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(), // 一意のID
      text: input,
      isCompleted: false, // 完了状態の初期値はfalse
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // ToDo項目を削除する
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>ToDoList</h1>
      <input
        type="text"
        className="input-form"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bn30" onClick={addTodo}>Add Todo</button>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span
              className="todo-text"
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <div className="todo-actions">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleCompletion(todo.id)}
              />
              <button className="button-30" onClick={() => deleteTodo(todo.id)}>
                ✖
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

