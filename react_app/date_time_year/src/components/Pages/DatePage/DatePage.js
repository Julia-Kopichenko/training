import React from 'react';

import Title from '../../Title';
import Form from '../../Form';

const DatePage = ({name}) => {

  return (
    <section className="second-page">
        <Title text={'Please enter the'}/>

        <p className="title second-word">{name}</p>

        <Form name={name}/>
        
    </section>
  );
};

export default DatePage;

