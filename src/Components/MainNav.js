import React from 'react';
import Search from '../Pages/Search/Search';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { FiGlobe } from 'react-icons/fi';
import './MainNav.scss';

class MainPageNav extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleOn: false,
      menuToggle: true,
    };
  }

  toggleOn = () => {
    this.setState({
      toggleOn: true,
    });
  };
  toggleOff = () => {
    this.setState({
      toggleOn: false,
    });
  };

  render() {
    return (
      <div className="wrapMain">
        {this.state.toggleOn ? (
          <Search toggleOff={this.toggleOff} />
        ) : (
          <div className="mainNav">
            <div className="navBarFirst">
              <Link to="/login">
                <FiMenu size="24" />
              </Link>
              <h1 className="name"> Kakao Villains </h1>
              <div>
                <button className="navIcon" onClick={this.toggleOn}>
                  <FaSearch size="20" />
                </button>
                <button className="navIcon">
                  <FiGlobe size="20" />
                </button>
              </div>
            </div>
            <ul className="navBarSecond">
              {menuList.map(menu => (
                <Link to="/">
                  <li className="width">{menu}</li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default MainPageNav;

const menuList = ['오늘', '신규', '인기', '마이'];
