import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';
import MainNav from '../layout/MainNav';

const Home = () => {
  return (
    <Fragment>
      <MainNav value='Enter' Link='/enter' />
      {/* Main Page Body */}
      <div className='container-fluid h-100 p-0'>
        <div className='hero'>
          <div className='d-flex justify-content-center'>
            <div className='text-white text-center'>
              <h1 className='mt-5'>Choir Member Portal</h1>
              <p className='mt-3'>
                A better way to manage your choir membership.
              </p>
              <Link to='/enter'>
                <input
                  type='button'
                  value='Enter'
                  className='btn mt-5 px-5 py-2 btn-light'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
