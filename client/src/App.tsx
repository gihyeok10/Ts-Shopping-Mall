import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { ProductInfo } from './Redux/action-creators';
import DetailPage from './Pages/DetailPage';
import CartPage from './Pages/CartPage';
import JoinPage from './Pages/JoinPage';
import LoginPage from './Pages/LoginPage';
import Mypage from './Pages/Mypage';
import PayPage from './Pages/PayPage';
import QnaPage from './Pages/QnaPage';
import SearchPage from './Pages/SearchPage';
import MainPage from './Pages/MainPage';
import { RootState } from './Redux';
import { useEffect } from 'react';
function App() {

  const dispatch :Dispatch = useDispatch();

  const data2 = useSelector((state :RootState) => state.allReducers)
  console.log("js의 데이타 입니다..!",data2)

 

  interface PadoType {
    name:string,
    price:number
  }
  const pado:PadoType = {
    name:"최무식",
    price:59000
  }
  class Person{
    name:string
    price:number
    constructor(name:string,price:number){
      this.name = name;
      this.price = price
    }
  }

  const person1:PadoType = {
    name:"김무식",
    price:59000
  }

  const person2:PadoType = {
    name:"죠스바",
    price:59000
  }

  const person3:PadoType = {
    name:"스크류바",
    price:59000
  }

  

 
  return (
    <div className="App">
      
      <button onClick={()=>{dispatch(ProductInfo.product(pado,true))}}>최무식</button>
      <button onClick={()=>{dispatch(ProductInfo.product(person1,true))}}>김무식</button>
      <button onClick={()=>{dispatch(ProductInfo.product(person2,true))}}>죠스바</button>
      <button onClick={()=>{dispatch(ProductInfo.product(person3,true))}}>스크류바</button>

      <button onClick={()=>{dispatch(ProductInfo.product(pado,false))}}>최무식지우기</button>
      <button onClick={()=>{dispatch(ProductInfo.product(person1,false))}}>김무식지우기</button>
      <button onClick={()=>{dispatch(ProductInfo.product(person2,false))}}>죠스바지우기</button>
      <button onClick={()=>{dispatch(ProductInfo.product(person3,false))}}>스크류바지우기</button>
      {
        data2&& data2.cart.map((item)=>{
          return <li>
            {item.name} 
          </li>
        })
      }
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/detail' element={<DetailPage/>}/>
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

