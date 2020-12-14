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

const FormInputStyle = styled.form`
  background-color : #ccc;
  display : flex;
  justify-content : space-between;
  padding : 1rem;
  border-radius : 3px;
  input {
    border : none;
    padding : .5rem;
    border-radius : 3px;
  }
  button {
    border : none;
    padding-inline : .9rem;
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
    if (newCommentText.trim() === '') {
      alert("Please write your comments")
      return
    }
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
      <FormInputStyle onSubmit={addCommenstFunction}>
        <input
          name="comment"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Be the first commenter"
        />
        <button>Post</button>
      </FormInputStyle>
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