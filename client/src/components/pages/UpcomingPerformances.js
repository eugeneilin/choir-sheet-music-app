import React, { Fragment } from 'react';
import Header from '../layout/Header';

const UpcomingPerformances = () => {
  return (
    <Fragment>
      <Header icon='fas fa-music' header='Upcoming Performances' />
      <div className='icons grid-3'>
        <div className='icon text-center p-1'>
          <i className='fas fa-bell'></i>
        </div>
        <div className='icon text-center p-1'>
          <i className='fas fa-user'></i>
        </div>
        <div className='icon text-center p-1'>
          <i className='fas fa-sign-out-alt'></i>
        </div>
      </div>
      <div className='grid-4'>
        <div className='text-center bg-primary p-1'>1</div>
        <div className='text-center bg-hover p-1'>2</div>
        <div className='text-center bg-light p-1'>3</div>
        <div className='text-center bg-success p-1'>4</div>
      </div>

      <div className='pdf-wrapper'>
        <div className='pdf-view'>PDF document goes here</div>
      </div>

      <div className='menu-btn'>
        <i className='fas fa-bars'></i>
      </div>
      <div className='menu'>
        <p>Title</p>
        <p>Composed by composer</p>
      </div>
    </Fragment>
  );
};

export default UpcomingPerformances;
