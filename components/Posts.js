import React, { useContext, createContext } from 'react'
import styled from 'styled-components'
import reducer from '../reducer/reducer'

const ProfileImg = styled.div`
  display : flex;
  align-items : center;
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

export default function Posts() {
  const [postData, dispatch] = reducer()
  const postElem = (data) => {
    return (
      data.map(post => (
        <PostContainer key={post.id} post={post} like={post.like} dispatch={dispatch}>
          <UserNamePost />
          <ImagePost />
          <PostDescription />
          <LikeButton />
        </PostContainer>
      ))
    )
  }
  return (
    <>
      {postElem(postData)}
    </>
  )
}

const PostContext = createContext()
function PostContainer({ children, post, like, dispatch }) {
  return (
    <PostContext.Provider value={{post, like, dispatch}}>
      {children}
    </PostContext.Provider>
  )
}

function ImagePost() {
  const { post } = useContext(PostContext)
  return <div><img src={post.imgUrl} alt="Cool post" /></div>
}

function LikeButton() {
  const { like, dispatch, post } = useContext(PostContext)
  const postId = post.id
  return (
    <div>
        <button
          onClick={() => {
            dispatch({ type: "LIKE_POST", id : postId})
          }}
        >like</button>
      <span>{ like }</span>
    </div>
  )
}

function PostDescription() {
  const { post }  = useContext(PostContext)
  return <div>{ post.description }</div>
}

function UserNamePost() {
  const { post } = useContext(PostContext)
  return (
    <ProfileImg>
      <img src={post.imgUrl} className="profile" />
      <p>{post.userName}</p>
      <p className="date">{post.date}</p>
    </ProfileImg>
  )
}