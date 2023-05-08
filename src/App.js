import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [add, setAdd] = useState([])

  return (
    <div className="App">
      <header className="app-header">
        <input type placeholder='enter your todo task here...'  className='input'/>
        <button className='btn add' >Add</button>
        <button className='btn del'>Delete</button>
        <button className='btn edit'>Edit</button>
      </header>
    </div>
  );
}

export default App;
