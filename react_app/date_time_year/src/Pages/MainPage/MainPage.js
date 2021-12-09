import React from 'react';

import Title from '../../components/Title';
import Nav from '../../components/Nav'

const MainPage = () => {
  return (
    <section className="main-page">
      <Title text={'Make your choice'} />
      <p className="subtitle">...if you want to know something interesting</p>
      <Nav />
    </section>
  );
};

export default MainPage;