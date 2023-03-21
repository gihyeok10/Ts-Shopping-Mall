import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Detail from './Pages/Detail';
import CartPage from './Pages/CartPage';
import JoinPage from './Pages/JoinPage';
import LoginPage from './Pages/LoginPage';
import Mypage from './Pages/Mypage';
import PayPage from './Pages/PayPage';
import QnaPage from './Pages/QnaPage';
import SearchPage from './Pages/SearchPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/join' element={<JoinPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/myInfo' element={<Mypage/>}/>
        <Route path='/pay' element={<PayPage/>}/>
        <Route path='/qna' element={<QnaPage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
