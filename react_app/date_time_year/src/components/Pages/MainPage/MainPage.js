import React from 'react';

// импортируем компоненты
import Title from '../../Title';
import Nav from '../../Nav'

// общие стили
// import './App.css';

const MainPage = () => {
  return (
    <section className="main-page">
      <Title text={'Make your choice'} />
      <p className="main-page__subtitle subtitle">...if you want to know something interesting</p>
      <Nav />
    </section>
  );
};

export default MainPage;