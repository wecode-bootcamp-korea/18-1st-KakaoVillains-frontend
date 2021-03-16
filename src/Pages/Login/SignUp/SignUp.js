import React from 'react';
import './Sign.scss';
import '../../../Styles/reset.scss';
import '../../../Styles/common.scss';
import PublicFooter from '../Components/PublicFooter';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      user: '',
      pwR: '',
      btnColor: false,
      borderColor: false,
    };
  }

  signUpFinish = () => {
    this.props.history.push('/login');
    alert('회원가입이 완료되었습니다.');
  };

  handleInputValue = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        if (
          this.state.id.includes('@') &&
          this.state.pw.length >= 6 &&
          this.state.user.length >= 2
        ) {
          this.setState({ btnColor: true });
        } else {
          this.setState({ btnColor: false });
        }
      }
    );
  };

  // borderColorChange = () => {
  //   this.setState({ borderColor: !this.state.borderColor });
  // };

  // borderColorChange = e => {
  //   if (this.state.id.onClick) {
  //     this.setState({ btnColor: true });
  //   } else if (!this.state.id.onClick) {
  //     this.setState({ btnColor: false });
  //   }
  //   console.log(e);
  // };

  render() {
    console.log(this.state.borderColor);
    return (
      <div className="signUpWrap">
        <article>
          <p className="headName">kakao</p>
          <div className="inforBox">
            <p className="headText">회원정보를 입력해 주세요.</p>
            <div
              className={`idBox ${
                this.state.borderColor
                  ? 'borderColorChange'
                  : 'borderColorOrigin'
              }`}
            >
              <p>
                이메일<span className="necessary">*</span>
              </p>
              <input
                className="id"
                name="id"
                type="email"
                placeholder="이메일 주소 입력"
                onChange={this.handleInputValue}
                onClick={this.borderColorChange}
              ></input>
            </div>
            <div className="pwBox">
              <p>
                비밀번호<span className="necessary">*</span>
              </p>
              <input
                className="pw"
                name="pw"
                type="password"
                placeholder="비밀번호(8~32자리)"
                onChange={this.handleInputValue}
              ></input>
              <input
                className="pwR"
                name="pw"
                type="password"
                placeholder="비밀번호 재입력"
                onChange={this.handleInputValue}
              ></input>
            </div>
            <div className="userNameBox">
              <p>
                닉네임<span className="necessary">*</span>
              </p>
              <input
                className="user"
                name="user"
                type="text"
                placeholder="닉네임을 입력해 주세요."
                onChange={this.handleInputValue}
              ></input>
            </div>
            <div className="phoneNumBox">
              <p>휴대폰</p>
              <input
                className="number"
                type="text"
                placeholder="전화번호 입력"
                maxLength="11"
              ></input>
            </div>
            <div className="birthAndSexBox">
              <p>생일/성별</p>
              <div className="birthDay">
                <select className="year">
                  <option value="year">연도</option>
                </select>
                <select className="month">
                  <option value="month">월</option>
                </select>
                <select className="date">
                  <option value="date">일</option>
                </select>
              </div>
              <div className="sex">
                <input type="checkbox" id="male" name="male"></input>
                <label for="male">남자</label>
                <input type="checkbox" id="female" name="female"></input>
                <label for="female">여자</label>
                <input type="checkbox" id="noSelect" name="noSelect"></input>
                <label for="noSelect">선택안함</label>
              </div>
              <button
                className={`finishBtn ${
                  this.state.btnColor ? 'changeBtnColor' : 'originBtnColor'
                }`}
                onClick={this.signUpFinish}
              >
                완료
              </button>
            </div>
          </div>
        </article>
        <PublicFooter />
      </div>
    );
  }
}
export default SignUp;
