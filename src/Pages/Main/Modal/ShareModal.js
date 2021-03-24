import React from "react";
import "./ShareModal.scss";

class ShareModal extends React.Component {
  render() {
    return (
      <section className="modal">
        <div className="modalBox">
          <div className="modalBoxContent">공유하기</div>
          <div className="modalBoxImg">
            <div>1</div>
            <div>2</div>
            <div>3</div>
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
