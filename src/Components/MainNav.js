import React from "react";
import MainPageFeed from "../Pages/Main/mainPageFeed";
import "./MainNav.scss";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";

class MainPageNav extends React.Component {
  constructor() {
    super();
    this.state = {
      menuId: 0,
    };
  }

  handlerBtn = id => {
    this.setState({ menuId: id });
  };
  render() {
    console.log(this.state.menuId);
    const Menu = {
      1: <MainPageFeed />,
    };

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
            {MenuList.map(list => {
              return (
                <div onClick={() => this.handlerBtn(1)} className="today">
                  {list}
                </div>
              );
            })}
            ;
          </div>
        </div>
        <>{this.state.menuId === 1 && <MainPageFeed />}</>
      </div>
    );
  }
}

export default MainPageNav;
