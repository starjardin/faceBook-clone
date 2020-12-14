import React, { useContext, createContext, Children } from 'react'
import styled from 'styled-components'

import { PostContext } from '../reducer/reducer'
import Comments from './Comments'
import LikeButton from './LikeButton'
import PostImages from './PostImages'
import PostDescription from './PostDescription'
import PostUserName from './PostUserName'

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
    return(
      <Post key={index} post={post}>
        <PostUserName />
        <PostDescription />
        <PostImages />
        <LikeButton />
        <Comments />
        <HrElem />
      </Post>
    )
  })
  return (
    <>
      {postElement}
    </>
  )
}
export { PostContext }
export { PostContextComponent }