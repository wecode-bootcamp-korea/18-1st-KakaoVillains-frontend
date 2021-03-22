import React from "react";
import { withRouter } from "react-router-dom";
import "./MainNav.scss";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";

class MainPageNav extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
  }

  handlerBtn = num => {
    this.setState({ id: num });
    console.log(this.state.id);
  };
  render() {
    const MenuList = ["오늘", "신규", "인기", "마이"];
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
            {MenuList.map((list, index) => {
              return (
                <div
                  onClick={() => this.handlerBtn(index + 1)}
                  className="width"
                >
                  {list}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainPageNav);
