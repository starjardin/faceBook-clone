import React, { useContext, createContext, useEffect } from 'react'
import styled from 'styled-components'
import reducer from '../reducer/reducer'
import Comments from './Comments'

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
  const [state, dispatch] = reducer()
  useEffect(() => {
    // console.log(state);
  }, [state])
  const postElem = (posts) => {
    return (
      posts.map(post => (
        <PostContainer
          key={post.postId}
          post={post}
          dispatch={dispatch}
          state={state}
          likes={post.likes}
        >
          <UserNamePost />
          <ImagePost />
          <PostDescription />
          <LikeButton />
          <Comments comments={ post.comments }/>
        </PostContainer>
      ))
    )
  }
  return (
    <>
      {postElem(state.posts)}
    </>
  )
}

const PostContext = createContext()
function PostContainer({ children, post, likes, dispatch, state }) {
  return (
    <PostContext.Provider value={{post, likes, dispatch, state}}>
      {children}
    </PostContext.Provider>
  )
}

function ImagePost() {
  const { post } = useContext(PostContext)
  return <div><img src={post.imgUrl} alt="Cool post" /></div>
}

function LikeButton() {
  const { likes, dispatch, post } = useContext(PostContext)
  const { postId } = post
  return (
    <div>
        <button
          onClick={() => {
          dispatch({
            type: "LIKE_POST",
            id: postId,
            like: {
              likeId: Date.now(),
              userId : Date.now()
            }
            })
          }}
        >like</button>
      <span>{ likes.length }</span>
    </div>
  )
}

function PostDescription() {
  const { post } = useContext(PostContext)
  return <div>{ post.postTextContent }</div>
}

function UserNamePost() {
  const { post, state } = useContext(PostContext)
  const userData = state.users
  const { userName } = userData.find(user => user.userId === post.postId)
  const date = post.date
  const postDate = new Date(date).toDateString()
  
  return (
    <ProfileImg>
      <img src={post.imgUrl} className="profile" />
      <p>{ userName }</p>
      <p className="date">{postDate}</p>
    </ProfileImg>
  )
}

export { PostContext }