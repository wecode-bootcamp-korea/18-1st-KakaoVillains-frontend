import React from 'react';
import MainPageFeed from './mainPageFeed';
// import LoginModal from './Modal/LoginModal';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="feedPage">
          {/* <LoginModal /> */}
          <MainPageFeed />
        </div>
      </>
    );
  }
}

export default Main;
