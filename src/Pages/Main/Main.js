import React from 'react';
import MainPageNav from './Components/mainPageNav';
import MainPageFeed from './Components/mainPageFeed';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="todayPage">
        <MainPageNav />
        <MainPageFeed />
      </div>
    );
  }
}

export default Main;
