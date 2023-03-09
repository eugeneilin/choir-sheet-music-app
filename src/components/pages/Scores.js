import React, { Fragment } from 'react';
import Songs from '../layout/cards/Songs';
import SongView from '../layout/SongView';
import '../../App.css';

const Scores = () => {
  return (
    <Fragment>
      <div>
        <h3>Хоровые партитуры</h3>
      </div>
      <div>
        <div>
          <Songs />
        </div>
        <div>
          <SongView />
        </div>
      </div>
    </Fragment>
  );
};

export default Scores;
