import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Main from './Pages/Main';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
