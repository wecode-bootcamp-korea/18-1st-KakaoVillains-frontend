import React from 'react';
import { FaSearch, FaChevronLeft, FaHome } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import './SubNav.scss';

class SubNav extends React.Component {
  render() {
    return (
      <div className="wrapMain">
        <div className="mainNav">
          <div className="navBarFirst">
            <button>
              <FaChevronLeft size="24" />
              <FaHome className="homeIcon" size="24" />
            </button>
            <h1 className="title"> {this.props.title} </h1>
            <div>
              <button className="navIcon">
                <FaSearch size="20" />
              </button>
              <button className="navIcon">
                <FiGlobe size="20" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubNav;