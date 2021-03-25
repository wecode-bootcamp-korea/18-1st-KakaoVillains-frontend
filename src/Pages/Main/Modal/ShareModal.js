import React from "react";
import "./ShareModal.scss";

class ShareModal extends React.Component {
  render() {
    return (
      <section className="modal">
        <div className="modalBox">
          <div className="modalBoxContent">공유하기</div>
          <div className="modalBoxImg">
            <img
              className="img1"
              src="https://t1.kakaocdn.net/friends/new_store/3.0/common/sns-kakao-talk-60.png"
              alt="이미지"
            />
            <img
              className="img2"
              src="https://t1.kakaocdn.net/friends/new_store/3.0/common/sns-facebook-60.png"
              alt="이미지"
            />
            <img
              className="img3"
              src="https://t1.kakaocdn.net/friends/new_store/3.0/common/sns-url-60.png"
              alt="이미지"
            />
          </div>
          <button onClick={this.props.shareHandleModal} className="close">
            닫기
          </button>
        </div>
      </section>
    );
  }
}

export default ShareModal;
