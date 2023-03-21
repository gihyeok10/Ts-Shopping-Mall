import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Detail from './Pages/Detail';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
