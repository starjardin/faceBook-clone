import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PostContext } from "../reducer/reducer"

const HeaderStyle = styled.div`
  display : flex;
  flex-direction : row;
  gap : 2rem;
  a {
    text-decoration : none;
    color : #223422;
  }
  a:active,
  a:focus {
    color : #22ff22;
  }
`

const ProfileStyle = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  gap : 1rem;
  img {
    width : 2rem;
    height : 2rem;
    border-radius : 50%;
  }
`

export default function Header() {
  const { state } = useContext(PostContext)
  const { users, currentUser } = state
  const { currentUserId } = currentUser
  const currentUserObj = users.find(user => user.userId === currentUserId)
  
  return (
    <>
      <h1>OnjaBook</h1>
      <HeaderStyle>
        <Link to="/">
          <h2>Feed</h2>
        </Link>
        <Link to="/addPost">
          <h2>Add post</h2>
        </Link>
        <Link to="options">
          <ProfileStyle>
            <h2 >{currentUserObj.userName}</h2>
            <img src={currentUserObj.profilePictureUrl} />
          </ProfileStyle>
        </Link>
      </HeaderStyle>
    </>
  )
}
