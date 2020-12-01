import React, { useContext, useEffect, useState } from 'react'
import reducer from "../reducer/reducer"
import { PostContext } from './Posts'

export default function Comments(props) {
  const [ state, dispatch ] = reducer()
  const { post } = useContext(PostContext)
  const { comments } = post
  console.log(comments);
  
  function addCommenstFunction(e) {
    e.preventDefault();
    dispatch({
      comments: comments,
      id: post.id,
      type: "ADD_COMMENT",
      newComment: {
        user : "New user",
        img : "https://picsum.photos/id/237/200/300",
        date: Date.now(),
        id : Date.now(),
        textComment : e.target.comment.value
      }
   })
  }

  return (
    <>
      <div>
        {comments.map((comment, index) => (
          <p key={index}
          >
            {comment.commentTextContent}
          </p>))
        }
      </div>
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
