import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  render() {
    return (
      <div className='container-fluid d-flex justify-content-center'>
        <div className='row'>
          <div className='col-md-4'>
            <Card title='Господь есть мой свет' composer='Иосиф Никита' />
          </div>
          <div className='col-md-4'>
            <Card title='Послушаю, что скажет Бог' />
          </div>
          <div className='col-md-4'>
            <Card title='О, неужели, Царь Вселенной' />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
