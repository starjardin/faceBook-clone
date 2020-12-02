import React, { useContext } from 'react'
import styled from 'styled-components'
import { PostContext } from '../reducer/reducer'
import userData from '../userData.json'
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
const HrElem = styled.hr`
  display : block;
  margin-bottom : 2rem;
  margin-top : 2rem;
`
export default function Posts () {
  const { state } = useContext(PostContext)
  const { posts } = state

  const element = posts.map((post, index) => {
    return <div key={index}>
      <UserNamePost post={post} />
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
  return (
    <div>
        <button
          onClick={() => {
          dispatch({
            type: "LIKE_POST",
            id: post.postId,
            like: {
              likeId: Date.now(),
              userId : Date.now()
            }
            })
          }}
        >like</button>
      <span>{  }</span>
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
  const {userName} = userData.find(user => user.userId === post.postId)
  const date = new Date(post.date)
  const ImagePostElem = <ProfileImg>
    <img src={post.imgUrl} alt='post image' />
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