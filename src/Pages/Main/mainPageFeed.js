/* eslint-disable prettier/prettier */
import React from 'react';
import FeedList from './FeedList'
import './mainPageFeed.scss';

class MainPageFeed extends React.Component {

  constructor(){
    super();
    this.state = {
      feedList: [],
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/data/data.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => this.setState({
      feedList: data,
    }))
  }

  render() {
    return (
      <div className="feedPage">
        {this.state.feedList.map(list => {
          return (
            <FeedList
              key={list.id}
              profile_picture={list.profile_picture}
              username={list.username}
              like_count={list.like_count}
              title={list.title}
              content={list.content}
              reply_count={list.reply_count}
              reply_username={list.reply_username}
              reply={list.reply}
              img_url={list.img_url}
            />
          )
        })}
      </div>
    );
  }
}

export default MainPageFeed;
