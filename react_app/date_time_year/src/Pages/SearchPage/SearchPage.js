import React from 'react';

import Title from '../../components/Title';
import Form from '../../components/Form';

const SearchPage = (props) => {
  
  const {label} = props;
  return (
    <section className="second-page">
        <Title text={'Please enter the'}/>

        <p className="title second-word">{label}</p>

        <Form label={label}/>
        
    </section>
  );
};

export default SearchPage;

