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

  const [today, setDate] = useState(new Date());

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
      <Form />
      <Todolist/>
    </div>
  );
}

export default App;
