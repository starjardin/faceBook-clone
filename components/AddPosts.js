import React, { useContext, useState } from 'react'
import { PostContext } from '../reducer/reducer'
import styled from 'styled-components'
import { ACTIONS } from '../reducer/reducer'

const FormStyle = styled.form`
  textarea {
    height : 5rem;
    max-height : 7rem;
    width : 50vw;
    max-width : 80vw;
  }
  input {
    display : block;
    width : 100%;
  }
  button {
    padding : 0.5rem 2rem;
    border : none;
    box-shadow : 1px 1px 3px #ccc;
  }
  textarea, input {
    display : block;
    width : 100%;
    margin-block : 1rem;
    font-size: 16px;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 4px;
  }
`

export default function AddPosts() {
  const { state, dispatch } = useContext(PostContext)
  const [postContent, setPostContent] = useState('')
  const [postImage, setPostImage] = useState('')
  const { posts } = state
  const { currentUserId } = state.currentUser
  
  const handleSubmitPost = (e) => {
    e.preventDefault()
    const newPost = {
        userName : "Romeo",
        imgUrl : "https://picsum.photos/seed/picsum/200/300",
        likes : [],
        comments : [],
        postTextContent : e.target.description.value,
        date : Date.now(),
      id : currentUserId
      }
    dispatch({ type: ACTIONS.ADD_NEW_POST, posts: [...posts, newPost]})
    e.target.reset()
  }

  return (
    <>
      <FormStyle onSubmit={handleSubmitPost}>
        <textarea
          name="description"
          placeholder="Write here your posts description"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <input type="url"
          name="imgUrl"
          placeholder="https://picsum.photos/seed/picsum/200/300"
          value={postImage}
          onChange={(e) => setPostImage(e.target.value)}
        />
        <button>Post</button>
      </FormStyle>
    </>
  )
}