import React from "react";
import TodoList from "./TodoList"; // ToDoリストのロジックを含むコンポーネント
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoList /> // ToDoリストの管理と表示を担当
    </div>
  );
}

export default App;
