import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { FiGlobe } from 'react-icons/fi';
import './MainNav.scss';

class MainPageNav extends React.Component {
  constructor() {
    super();
    this.state = {
      btnChange: '',
      toggleOn: false,
    };
  }

  changeHandleBtn = () => {
    return this.state.btnChangeValue ? 'trueColor' : 'falseColor';
  };

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
        <div className="mainNav">
          <div className="navBarFirst">
            <Link to="/login">
              <FiMenu size="24" />
            </Link>
            <h1 className="name"> Kakao Villains </h1>
            <div>
              <button className="navIcon" onClick={this.toggleOn}>
                {this.state.toggleOn && <div>ddd</div>}
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
                <li className="width" onClick={this.changeHandleBtn}>
                  {menu}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MainPageNav;

const menuList = ['오늘', '신규', '인기', '마이'];
