import React from 'react';
import '../../Styles/reset.scss';
import '../../Styles/common.scss';
import './Login.scss';
import { FaQrcode } from 'react-icons/fa';
import PublicFooter from './Components/PublicFooter';
import './Components/PublicFooter.scss';

class Login extends React.Component {
  goToSignUp = () => {
    this.props.history.push('/signup');
  };

  render() {
    return (
      <div className="loginWrap">
        <article>
          <div className="loginBox">
            <p className="headName">kakao</p>
            <input
              type="text"
              className="idBox"
              placeholder="카카오메일 아이디, 이메일, 전화번호"
            ></input>
            <input
              type="password"
              className="pwBox"
              placeholder="비밀번호"
            ></input>
            <div className="keepLogin">
              <input type="checkbox"></input>
              <p>로그인 상태 유지</p>
            </div>
            <button className="loginBtn">로그인</button>
            <div className="orBar">
              <div className="leftBar"></div>
              <p className="orBox">또는</p>
              <div className="rightBar"></div>
            </div>
            <div className="qrBox">
              <button className="qrBtn">QR코드 로그인</button>
              <FaQrcode className="qrCode" />
            </div>
            <div className="loginOption">
              <p className="signUp" onClick={this.goToSignUp}>
                회원가입
              </p>
              <div className="loginOptionRight">
                <p>카카오계정</p>
                <div className="findBar"></div>
                <p>비밀번호 찾기</p>
              </div>
            </div>
          </div>
        </article>

        <PublicFooter />
      </div>
    );
  }
}
export default Login;
