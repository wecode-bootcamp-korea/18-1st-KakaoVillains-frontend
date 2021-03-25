import React from "react";
import { BsX } from "react-icons/bs";
import { BsFillChatFill } from "react-icons/bs";
import "./LoginModal.scss";

class LoginModal extends React.Component {
  render() {
    return (
      <section className="modal">
        <div className="modalBox">
          <div className="xMark">
            <button onClick={this.props.loginHandleModal}>
              <BsX size="32" color="gray" />
            </button>
          </div>
          <img
            className="img"
            src="https://t1.kakaocdn.net/friends/new_store/3.0/common/character-3-d-neo-128.png"
            alt="이미지"
          />
          <span className="title">앗! 로그인</span>
          <p className="content">
            여러분의 좋아요 그리고 댓글은 <br /> 저에게 큰 힘이 될거에요.
          </p>
          <div className="loginBtnBox">
            <BsFillChatFill className="chatIcon" size="24" color="#3C1E1E" />
            <button className="loginBtn">로그인하기</button>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginModal;
