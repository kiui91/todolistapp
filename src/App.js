import React, { useState, useEffect }  from "react";
import TodoList from "./TodoList";
import "./App.css";

function ToDoApp() {
    const [toDoList, setToDoList] = useState([]);

    // 読み込み
    useEffect(() => {
        const savedToDoList = loadToDoList();
        if (savedToDoList) {
            setToDoList(savedToDoList);
        }
    }, []);

    // 保存
    useEffect(() => {
        saveToDoList(toDoList);
    }, [toDoList]);

    // ToDoリストをローカルストレージに保存
    function saveToDoList(toDoList) {
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
    }

    // ローカルストレージからToDoリストを読み込む
    function loadToDoList() {
        const savedToDoList = localStorage.getItem('toDoList');
        return savedToDoList ? JSON.parse(savedToDoList) : [];
    }

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
