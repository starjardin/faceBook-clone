import React, { useContext } from 'react'
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
export default function Posts () {
  const { state } = useContext(PostContext)
  const { posts, users } = state

  const element = posts.map((post, index) => {
    return <div key={index}>
      <UserNamePost post={post}/>
      <PostDescription post={post} />
      <ImagePost post={post} />
      <LikeButton post={post} />
      <Comments post={post} />
      <HrElem post={post} />
    </div>
  })
  return (
    <>
      {element}
    </>
  )
}

function ImagePost({post}) {
  const postImgElem = <div><img src={post.imgUrl} alt="Cool post" /></div>
  return (
  <>
    {postImgElem}
  </>
  )
}

function LikeButton({ post }) {
  const { dispatch, state } = useContext(PostContext)
  const { currentUserId } = state.currentUser
  return (
    <div>
        <button
          onClick={() => {
          dispatch({
            type: ACTIONS.LIKE_POST,
            id: currentUserId,
            like: {
              likeId: 939834123,
              userId : currentUserId
            }
          })
          }}
        >like</button>
      <span>{ post.likes.length }</span>
    </div>
  )
}

function PostDescription({ post }) {
  const postDescription = <div >{ post.postTextContent }</div>
  return (
  <>
    { postDescription}
  </>
  )
}

function UserNamePost({ post }) {
  const { state } = useContext(PostContext)
  const { users } = state
  const { currentUserId } = state.currentUser
  const { userName } = users.find(user => user.userId === currentUserId)
  const date = new Date(post.date)
  const ImagePostElem = <ProfileImg>
    <img src={ post.imgUrl } alt='post image' />
    <span>{ userName }</span>
    <p className="date">{date.toLocaleDateString()}</p>
  </ProfileImg>
  return (
    <>
        {ImagePostElem}
    </>
  )
}

export { PostContext }