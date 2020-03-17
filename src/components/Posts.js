import React from 'react';
import Spinner from 'react-spinner-material'

const sp = {
  color: 'green',
  fontSize: '20px',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'

}

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <div>
      <Spinner style={sp} size={100} spinnerColor={"#233"} spinnerWidth={2} visible={true} />
    </div>
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.title}
          <tr>

          </tr>


        </li>
      ))}
    </ul>
  );
};

export default Posts;