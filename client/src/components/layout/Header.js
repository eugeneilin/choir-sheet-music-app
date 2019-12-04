import React from 'react';

const Header = props => {
  return (
    <div className='main-header header'>
      <i class={props.icon ? props.icon : ['far fa-surprise']}></i>
      <div>{props.header ? props.header : ['How did you end up here?!']}</div>
    </div>
  );
};

export default Header;
