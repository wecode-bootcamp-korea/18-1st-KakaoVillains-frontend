import React from 'react';
import Search from '../Pages/Search/Search';
import { Link } from 'react-router-dom';
import { FaSearch, FaChevronLeft, FaHome } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import './SubNav.scss';

class SubNav extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleOn: false,
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
              <Link to="/">
                <FaChevronLeft size="22" />
                <FaHome className="homeIcon" size="22" />
              </Link>
              <h1 className="title"> {this.props.title} </h1>
              <div>
                <button className="navIcon" onClick={this.toggleOn}>
                  <FaSearch size="22" />
                </button>
                <button className="navIcon">
                  <FiGlobe size="22" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SubNav;
