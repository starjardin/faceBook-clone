import React, { useState, useContext, useEffect } from 'react'
import { PostContext } from '../reducer/reducer'
import styled from 'styled-components'
import { ACTIONS } from "../reducer/reducer"

const FormUserStyled = styled.form`
  label {
    margin : 1rem 0;
  }
  label, input {
    display : block;
    width : 100%;
  }
  input {
    border : 1px solid #ccc;
    padding : 1rem;
    border-radius : 4px;
  }
  button {
    padding : .5rem 1rem;
    margin : 1rem 0;
    border : .8px solid #ccc;
    border-radius : 3px;
    cursor : pointer;
    color : #333;
  }
`

export default function Options() {
  const { state, dispatch } = useContext(PostContext)
  const [ profilePictureUrl, setProfilePictureUrl ] = useState('')
  const [userName, setUserName] = useState('')

  const { users, currentUser } = state
  const { currentUserId } = currentUser
  
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
