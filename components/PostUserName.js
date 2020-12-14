import React, { useContext } from 'react'
import styled from 'styled-components'

import { PostContext } from '../reducer/reducer'
import { PostContextComponent } from './Posts'

const ProfileImgStyles = styled.div`
  display : flex;
  align-items : center;
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


export default function PostUserName() {
  const { post } = useContext(PostContextComponent)
  const { state } = useContext(PostContext)

  const { users } = state
  const { currentUserId } = state.currentUser

  const currentUserName = users.find(user => user.userId === currentUserId)
  const date = new Date(post.date)

  const imagePostElem = <ProfileImgStyles>
    <img src={ currentUserName.profilePictureUrl } alt='post image' />
    <span>{ currentUserName.userName }</span>
    <p className="date">{date.toLocaleDateString()}</p>
  </ProfileImgStyles>
  
  return (
    <>
        {imagePostElem}
    </>
  )
}

