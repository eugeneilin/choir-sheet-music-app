import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';
import MainNav from '../layout/MainNav';
import Login from '../layout/Login';
import Register from '../layout/Register';

const Enter = () => {
  return (
    <Fragment>
      <MainNav />
      {/* Body */}
      <div className='container-fluid h-100 p-0'>
        <div className='hero'>
          <Register />
          <Login />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Enter;
