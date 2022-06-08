import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form'
import Todolist from './components/Todolist';

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) ?? []);
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

  useEffect(() => {
    window.localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="App">
      <header>  
        <h1>{today.toLocaleDateString(today.getTime())} <br/>{today.toLocaleTimeString(today.getTime())}</h1>
      </header>
      <Form inputText={ inputText } setInputText={setInputText} setTodo={setTodo} todo={todo} id={id} setId={ setID }/>
      <Todolist todo={ todo } setTodo={setTodo}/>
    </div>
  );
}

export default App;
