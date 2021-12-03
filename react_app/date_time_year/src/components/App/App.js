import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import MainPage from '../Pages/MainPage';
import DatePage from '../Pages/DatePage';
import NumberPage from '../Pages/NumberPage';
import YearPage from '../Pages/YearPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path='/date' element = {<DatePage name={'date'}/>}></Route> 
          <Route exact path='/number' element = {<NumberPage name={'number'}/>}></Route> 
          <Route exact path='/year' element = {<YearPage name={'year'}/>}></Route> 
          <Route path='/' element = {<MainPage />}></Route> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;