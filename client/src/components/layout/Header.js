import React from 'react';

const Header = ({ icon, children }) => (
  <div className='main-header header'>
    <i class={icon ? icon : 'far fa-surprise'}></i>
    <div>{children ? children : 'How did you end up here?!'}</div>
  </div>
);

export default Header;
