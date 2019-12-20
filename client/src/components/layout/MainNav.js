import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = props => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <Link to='/' className='navbar-brand'>
          House of Prayer Choir
        </Link>

        <div className='collapse navbar-collapse'></div>

        <form className='form-inline my-2'>
          <Link to={props.Link}>
            <input
              type='button'
              value={props.value ? props.value : 'need to hide this'}
              className='btn border'
            />
          </Link>
        </form>
      </nav>
    </div>
  );
};
export default MainNav;
