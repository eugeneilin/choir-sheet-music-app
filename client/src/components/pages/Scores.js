import React, { Fragment } from 'react';
import Cards from '../layout/cards/Cards';

const Scores = () => {
  return (
    <Fragment className='container'>
      <div className='mt-5 d-flex justify-content-left'>
        <h3>Хоровые партитуры</h3>
      </div>
      <Cards />
    </Fragment>
  );
};

export default Scores;
