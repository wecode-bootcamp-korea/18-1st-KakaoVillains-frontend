import React from "react";
import PublicFooter from "../Components/PublicFooter";
import "./SignUp.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      user: "",
      pwR: "",
    };
  }

  handleInputValue = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // signUpFinish = () => {
  //   fetch('http://10.58.1.220:8000/account/signup', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: this.state.id,
  //       username: this.state.user,
  //       password: this.state.pw,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       if (
  //         res.message === `email must contain the '@' symbol and the period'.'`
  //       ) {
  //         alert('이메일을 다시 확인해 주세요.');
  //       }

  //       if (res.message === 'password must be at least 8 characters') {
  //         alert('비밀번호는 8자리 이상이여야 합니다.');
  //       }

  //       if (res.message === 'That email is taken. Try another') {
  //         alert('이미 존재하는 이메일입니다.');
  //       }

  //       if (res.message === 'Please provide username') {
  //         alert('닉네임을 확인해 주세요');
  //       }

  //       if (res.message === 'SUCCESS') {
  //         this.props.history.push('/login');
  //         alert('회원가입이 완료되었습니다.');
  //       }
  //     });
  // };

  render() {
    const isValidInput =
      this.state.id.includes("@") &&
      this.state.pw.length >= 8 &&
      this.state.user.length >= 2;
    return (
      <div className="signUpWrap">
        <article>
          <p className="headName">kakao</p>
          <div className="inforBox">
            <p className="headText">회원정보를 입력해 주세요.</p>
            <div
              className={`idBox ${
                this.state.borderColor
                  ? "borderColorChange"
                  : "borderColorOrigin"
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
              />
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
              />
              <input
                className="pwR"
                name="pw"
                type="password"
                placeholder="비밀번호 재입력"
                onChange={this.handleInputValue}
              />
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
              />
            </div>
            <div className="phoneNumBox">
              <p>휴대폰</p>
              <input
                className="number"
                type="text"
                placeholder="전화번호 입력"
                maxLength="11"
              />
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
                <input type="checkbox" id="male" name="male" />
                <label for="male">남자</label>
                <input type="checkbox" id="female" name="female" />
                <label for="female">여자</label>
                <input type="checkbox" id="noSelect" name="noSelect" />
                <label for="noSelect">선택안함</label>
              </div>
              <button
                className={`finishBtn ${
                  isValidInput ? "changeBtnColor" : "originBtnColor"
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
