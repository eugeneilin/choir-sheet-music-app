import React, { Component } from 'react';
import Song from './Song';

class Songs extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Song title='Господь есть мой свет' composer='Иосиф Никита' />
          </div>
          <div>
            <Song title='Послушаю, что скажет Бог' />
          </div>
          <div>
            <Song title='О, неужели, Царь Вселенной' />
          </div>
        </div>
      </div>
    );
  }
}

export default Songs;
