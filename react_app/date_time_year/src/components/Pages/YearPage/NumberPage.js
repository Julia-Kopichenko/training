import React from 'react';

import Title from '../../Title';
import Form from '../../Form';

const YearPage = () => {
  const date = 'year';

  return (
    <section className="second-page">
        <Title text={'Please enter the'}/>

        <p className="title second-word">{date}</p>

        <Form name={date}/>
        
    </section>
  );
};

export default YearPage;

