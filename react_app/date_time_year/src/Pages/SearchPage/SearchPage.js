import React from 'react';
import { Title, Form } from '../../components';

const SearchPage = ({ label }) => {

  const titleText = {
    date: 'date',
    math: 'number',
    year: 'year'
  }
  
  return (
    <section className="second-page">
        <Title text={'Please enter the'}/>

        <p className="title second-word">{titleText[label]}</p>

        <Form label={label}/>
        
    </section>
  );
};

export default SearchPage;

