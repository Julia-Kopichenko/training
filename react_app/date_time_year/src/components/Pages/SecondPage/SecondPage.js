import React from 'react';

// импортируем компоненты
import Title from '../../Title';

// общие стили
import './SecondPage.css';

const SecondPage = ({name}) => {
  return (
    <section className="second-page">
        <Title text={'Please enter the'}/>
        <p className="title second-word">{name}</p>

        <div className="form">
          <input type="text" className="input" placeholder="month/day" />
          <button className="button button-submit">surprise me</button>
        </div>
        <div className="output"></div>
    </section>
  );
};

export default SecondPage;

