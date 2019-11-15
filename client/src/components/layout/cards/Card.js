import React from 'react';
import './card-style.css';

const Card = props => {
  return (
    <div className='card text-center'>
      <div className='card-body text-dark'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text text-secondary'>
          {props.composer ? props.composer : ['Неизвестный']}
        </p>
        <a href='#' className='btn btn-outline-success'>
          Открыть
        </a>
      </div>
    </div>
  );
};

export default Card;
