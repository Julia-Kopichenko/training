import React from 'react';

// импортируем компоненты
import Title from '../Title';
import Nav from '../Nav'

// общие стили
import './App.css';

const App = () => {
  return (
    <div className="container">
        <section className="main-page">
            <Title />
            <p className="main-page__subtitle subtitle">...if you want to know something interesting ;)</p>
            <Nav />
        </section>
    </div>
  );
};

export default App;