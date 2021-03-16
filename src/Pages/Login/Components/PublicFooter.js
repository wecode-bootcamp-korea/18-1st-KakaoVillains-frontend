import React from 'react';

class PublicFooter extends React.Component {
  render() {
    return (
      <footer>
        <div className="footContents">
          <p>이용약관</p>
          <p>개인정보 처리방침</p>
          <p>운영정책</p>
          <p>고객센터</p>
          <p>공지사항</p>
          <select>
            <option value="korean">한국어</option>
            <option value="japanese">日本語</option>
            <option value="english">English</option>
          </select>
        </div>
        <address>
          Copyright © <a href="/">Kakao Corp.</a>All rights reserved.
        </address>
      </footer>
    );
  }
}
export default PublicFooter;
