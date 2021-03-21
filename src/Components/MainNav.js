import React from 'react';
import './MainNav.scss';
import { FaSearch } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { FiGlobe } from 'react-icons/fi';

class MainPageNav extends React.Component {
  render() {
    return (
      <div className="wrapMain">
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
            <button className="width">오늘</button>
            <button className="width">신규</button>
            <button className="width">인기</button>
            <button className="width">마이</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPageNav;
