import React from 'react';
import './mainPageNav.scss';
import { FaSearch } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { FiGlobe } from 'react-icons/fi';

class MainPageNav extends React.Component {
  render() {
    return (
      <div class="mainNavBox">
        <div className="mainNav">
          <div className="navBarFirst">
            <button>
              <FiMenu size="24" />
            </button>
            <h1 className="title"> Kakao Villains </h1>
            <div>
              <button className="navIcon">
                <FaSearch size="20" />
              </button>
              <button className="navIcon">
                <FiGlobe size="20" />
              </button>
            </div>
          </div>
          <div className="navBarSecond">
            <div className="width outLine">
              <span>오늘</span>
            </div>
            <div className="width">
              <span>신규</span>
            </div>
            <div className="width">
              <span>인기</span>
            </div>
            <div className="width">
              <span>마이</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPageNav;
