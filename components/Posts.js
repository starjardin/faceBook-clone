import React, { useContext, createContext, Children } from 'react'
import styled from 'styled-components'
import { PostContext } from '../reducer/reducer'
import Comments from './Comments'
import { ACTIONS } from '../reducer/reducer'

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
const HrElem = styled.hr`
  display : block;
  margin-bottom : 2rem;
  margin-top : 2rem;
`

const PostContextComponent = createContext()

function Post({ children, post }) {
  const { state } = useContext(PostContext)
  const { posts, users } = state
  return <PostContextComponent.Provider value={{state, users, posts, post}}>
    {children}
  </PostContextComponent.Provider>
}


export default function Posts () {
  const { state } = useContext(PostContext)
  const { posts } = state

  const postElement = posts.map((post, index) => {
    return <Post key={index} post={post}>
      <UserNamePost />
      <PostDescription />
      <ImagePost />
      <LikeButton />
      <Comments />
      <HrElem />
    </Post>
  })
  return (
    <>
      {postElement}
    </>
  )
}

function ImagePost() {
  const { post } = useContext(PostContextComponent)
  const postImgElem = <div><img src={post.imgUrl} alt="Cool post" /></div>
  return (
  <>
    {postImgElem}
  </>
  )
}

function LikeButton() {
  const { dispatch, state } = useContext(PostContext)
  const { post } = useContext(PostContextComponent)
  const { currentUserId } = state.currentUser

  function hasAlreadyLiked () {
    return post.likes.some(like => like.userId === currentUserId)
  }

  function likePost() {
    const newLike = { likeId: 939834123, userId : currentUserId }
    dispatch({
      type: ACTIONS.LIKE_POST,
      postId : post.postId,
      like: newLike
    })
  }

  function unlikePost() {
    dispatch({ type: ACTIONS.UNLIKE_POST, postId : post.postId })
  }

  return (
    <div>
      {
        hasAlreadyLiked() ? 
          <button
            onClick={unlikePost}
          >unlike</button> :
          <button
            onClick={likePost}
          >like</button>
      }
      <span>{ post.likes.length }</span>
    </div>
  )
}

function PostDescription() {
  const { post } = useContext(PostContextComponent)
  const postDescription = <div >{ post.postTextContent }</div>
  return (
  <>
    { postDescription}
  </>
  )
}

function UserNamePost() {
  const { post } = useContext(PostContextComponent)
  const { state } = useContext(PostContext)
  const { users } = state
  const { currentUserId } = state.currentUser
  const currentUserName = users.find(user => user.userId === currentUserId)
  const date = new Date(post.date)
  const ImagePostElem = <ProfileImg>
    <img src={ currentUserName.profilePictureUrl } alt='post image' />
    <span>{ currentUserName.userName }</span>
    <p className="date">{date.toLocaleDateString()}</p>
  </ProfileImg>
  return (
    <>
        {ImagePostElem}
    </>
  )
}

export { PostContext }
export { PostContextComponent }