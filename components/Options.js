import React, { useState, useContext, useEffect } from 'react'
import { PostContext } from '../reducer/reducer'
import styled from 'styled-components'
import { ACTIONS } from "../reducer/reducer"

const FormUserStyled = styled.form`
  label, input {
    display : block;
  }
`

export default function Options() {
  const { state, dispatch } = useContext(PostContext)
  const { users, currentUser } = state
  const { currentUserId } = currentUser
  const [ profilePictureUrl, setProfilePictureUrl ] = useState('')
  const [userName, setUserName] = useState('')

  const currentUserObj = users.find(user => user.userId === currentUserId)

  useEffect(() => {
    setUserName(currentUserObj.userName)
    setProfilePictureUrl(currentUserObj.profilePictureUrl)
  }, [])
  
  function handleChangeCurrentUser(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.UPDATE_CURRENT_USER, userName, profilePictureUrl })
  }

  return (
    <FormUserStyled onSubmit={handleChangeCurrentUser}>
      <label> User name
        <input
          type="text"
          placeholder="change username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label> User image url
        <input
          type="url"
          value={profilePictureUrl}
          placeholder="https://picsum.photos/200/300?grayscale"
          onChange={ (e) => setProfilePictureUrl(e.target.value) }
        />
      </label>
      <button>Save</button>
    </FormUserStyled>
  )
}
