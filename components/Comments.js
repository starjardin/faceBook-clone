import React, { useContext } from 'react'
import { PostContext } from './Posts'
import styled from 'styled-components'
import { ACTIONS } from '../reducer/reducer'
const CommentStyle = styled.div`
  display : flex;
  align-items : center;
  padding-top : 1rem;
  position : relative;
  gap : 1rem;
  max-width : 350px;
  img {
    display : block;
    width : 2rem;
    height : 2rem;
    border-radius : 50%;
  }
  .date {
    position : absolute;
    right : 0;
  }
`

export default function Comments({ post }) {
  const { state, dispatch } = useContext(PostContext)
  const { posts, users } = state
  const { comments } = posts
    
  function addCommenstFunction(e) {
    e.preventDefault();
    dispatch({
      comments: comments,
      type: ACTIONS.ADD_COMMENTS,
      id : post.postId,
      newComment : {
        user : "New user",
        img : "https://picsum.photos/id/237/200/300",
        date: Date.now(),
        id : Date.now(),
        textComment : e.target.comment.value
      }
    })
    e.target.reset();
  }

  return (
    <>
      {post.comments.map((comment, index) => (
        <CommentStyle key={index}>
          <img src={post.imgUrl} />
          <p>{comment.textComment}</p>
          <p className='date'>{ new Date(comment.date).toLocaleDateString() }</p>
        </CommentStyle>
      ))}
      <form onSubmit={addCommenstFunction}>
        <input
          name="comment"
          placeholder="Be the first commenter"
        />
        <button>Post</button>
      </form>
    </>
  )
}
