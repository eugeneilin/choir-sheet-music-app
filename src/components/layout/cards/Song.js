import React from 'react';
import '../../../App.css';

const Song = props => {
  return (
    <div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.composer ? props.composer : ['Неизвестный']}</p>
      </div>
    </div>
  );
};

export default Song;
