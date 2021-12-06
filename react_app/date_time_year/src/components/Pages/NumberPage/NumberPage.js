import React from 'react';

import Title from '../../Title';
import Form from '../../Form';

const NumberPage = () => {
  const date = 'number';

  return (
    <section className="second-page">
        <Title text={'Please enter the'}/>

        <p className="title second-word">{date}</p>

        <Form name={date}/>
        
    </section>
  );
};

export default NumberPage;

