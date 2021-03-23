import React from "react";
import MainNav from "../../Components/MainNav";
import { withRouter } from "react-router-dom";
import "./Cart.scss";

class Cart extends React.Component {
  render() {
    return (
      <>
        <MainNav />
        <div className="cartBox">
          <div className="navList">
            <div className="width">최근 본</div>
            <div className="width">내 활동</div>
            <div className="width">장바구니</div>
            <div className="width">주문내역</div>
          </div>
        </div>

        <div className="ShoppingBasketBox">
          <div className="box">
            <div className="imgBox">
              <img
                src="https://t1.kakaocdn.net/friends/new_store/3.0/common/ryan-shy-184.png"
                alt="이미지"
              />
              <div className="content">
                아직 관심 상품이 없네요! <br /> 귀여운 프렌즈 상품을
                추천드릴게요
              </div>
              <button className="hotBtn">인기 상품 보기</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Cart);
