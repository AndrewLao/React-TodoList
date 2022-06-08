import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form'
import Todolist from './components/Todolist';

function getDate() {
  let date = new Date();
  return date.toLocaleDateString(date.getTime());
}

function getTime() {
  let date = new Date();
  return date.toLocaleTimeString(date.getTime());
}

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [today, setDate] = useState(new Date());
  const [id, setID] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <div className="App">
      <header>  
        <h1>{getDate()} <br/>{getTime()}</h1>
      </header>
      <Form inputText={ inputText } setInputText={setInputText} setTodo={setTodo} todo={todo} id={id} setId={ setID }/>
      <Todolist todo={ todo } setTodo={setTodo}/>
    </div>
  );
}

export default App;
