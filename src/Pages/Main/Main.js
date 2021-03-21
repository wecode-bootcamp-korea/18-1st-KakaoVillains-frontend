import React, { useState } from 'react';
import Rating from './Rating/Rating';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <Rating value={4.5} />
      </>
    );
  }
}

export default Main;
