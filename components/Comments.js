import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import { PostContext } from './Posts'
import { ACTIONS } from '../reducer/reducer'
import { PostContextComponent } from './Posts'

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

export default function Comments() {
  const { post } = useContext(PostContextComponent)
  const { state, dispatch } = useContext(PostContext)
  const [newCommentText, setNewCommentText] = useState('')

  const { users, currentUser } = state
  const { comments } = post
  const currentUserObj = users.find(user => user.userId === currentUser.currentUserId)
    
  function addCommenstFunction(e) {
    e.preventDefault();
    const newComment = {
        userName : currentUserObj.userName,
        img : currentUserObj.profilePictureUrl,
        date: Date.now(),
        commentId : Date.now(),
        textComment : newCommentText
      }
    dispatch({
      comments: comments,
      type: ACTIONS.ADD_COMMENTS,
      id: post.postId,
      newComment : newComment
      
    })
    setNewCommentText('')
  }

  return (
    <>
      {comments.map((comment, index) => (
        <div key={index}>
          <CommentStyle>
            < Commenter comment={comment} />
          </CommentStyle>
          <p>{comment.textComment}</p>
        </div>
      ))}
      <form onSubmit={addCommenstFunction}>
        <input
          name="comment"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Be the first commenter"
        />
        <button>Post</button>
      </form>
    </>
  )
}

const Commenter = ({ comment }) => {
  const { state } = useContext(PostContext)
  const { users, currentUser } = state

  const currentUserObj = users.find(user => user.userId === currentUser.currentUserId)

  return (
    <>
      <img src={currentUserObj.profilePictureUrl} />
        <p>{currentUserObj.userName}</p>
      <p className='date'>{new Date(comment.date).toLocaleDateString()}</p>
    </>
  )
}