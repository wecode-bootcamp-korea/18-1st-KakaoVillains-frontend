import React from "react";
import MainNav from "../../Components/MainNav";
import MainPageFeed from "./mainPageFeed";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="feedPage">
          <MainNav />
          <div className="line"></div>
          <MainPageFeed />
        </div>
      </>
    );
  }
}

export default Main;
