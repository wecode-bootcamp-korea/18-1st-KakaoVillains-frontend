import React from 'react';
import { Link } from 'react-router-dom';

class Category extends React.Component {
  render() {
    return (
      <div style={{ fontSize: '300px' }}>
        <button>
          <Link to="/category/character">Character Page</Link>
        </button>
        <button>
          <Link to="/category/subject">Subject Page</Link>
        </button>
      </div>
    );
  }
}

export default Category;
