import React from 'react';

// импортируем компоненты
import MainPage from '../Pages/MainPage';
import SecondPage from '../Pages/SecondPage';

// общие стили
import './App.css';

const App = () => {
  return (
    <div className="container">
      {/* <MainPage /> */}
      <SecondPage 
      name={'date'}/>
    </div>
  );
};

export default App;