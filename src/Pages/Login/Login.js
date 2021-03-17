import React from 'react';
import '../../Styles/reset.scss';
import '../../Styles/common.scss';
import './Login.scss';
import { FaQrcode } from 'react-icons/fa';
import PublicFooter from './Components/PublicFooter';
import './Components/PublicFooter.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      btnColor: false,
    };
  }

  handleInputValue = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        if (this.state.id.includes('@') && this.state.pw.length >= 8) {
          this.setState({ btnColor: true });
        } else {
          this.setState({ btnColor: false });
        }
      }
    );
  };

  goToSignUp = () => {
    this.props.history.push('/signup');
  };

  goToMain = () => {
    fetch('http://10.58.59.83:8000/account/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.message === 'SUCCESS') {
          localStorage.setItem('키값', res.access_token);
          // 메인 페이지로 이동
          //this.props.history.push('/');
        }
      });
  };

  render() {
    console.log(this.state.btnColor);
    return (
      <div className="loginWrap">
        <article>
          <div className="loginBox">
            <p className="headName">kakao</p>
            <input
              className="id"
              name="id"
              type="email"
              placeholder="카카오메일 아이디, 이메일, 전화번호"
              onChange={this.handleInputValue}
            ></input>
            <input
              className="pw"
              name="pw"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInputValue}
            ></input>
            <div className="keepLogin">
              <input type="checkbox"></input>
              <p>로그인 상태 유지</p>
            </div>
            <button
              className={`loginBtn ${
                this.state.btnColor ? 'changeBtnColor' : 'originBtnColor'
              }`}
              onClick={this.goToMain}
            >
              로그인
            </button>
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
