import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="Footer">
          <span className="info1">제휴문의 </span>
          <span className="line">|</span>
          <span className="info2">고객문의 </span>
          <span className="line">|</span>
          <span className="info3">이용약관 </span>
          <span className="line">|</span>
          <span className="info4">개인정보처리방침</span>
        </div>
        <div className="Footer2">
          <div className="FooterSuper">
            <div className="Kakao">kakao</div>
            <div className="commerce">commerce</div>
            <FaAngleDown className="downIcon" />
          </div>
          <img
            src="https://t1.kakaocdn.net/friends/new_store/3.0/common/logo-footer-best-family.png"
            alt="가족친화기업 로고"
          />
        </div>
      </div>
    );
  }
}

export default Footer;
