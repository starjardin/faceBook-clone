import React, { useContext, useState } from 'react'

import { ACTIONS, PostContext } from '../reducer/reducer'
 

export default function AddProfile() {
  const { dispatch } = useContext(PostContext)
  const [usserName, setUserName] = useState('')
  const [profilePicture, setProfilePicture] = useState('')
  const [birthdate, setBirthdate] = useState('')

  function createNewUser() {
    e.preventDefault();
    const newUser = {
    userId: usserName,
    userName: profilePicture,
    birthDate: birthdate,
    profilePictureUrl: "https://picsum.photos/100",
    }
    dispatch({type: ACTIONS.ADD_NEW_USER, newUser : newUser})
  }

  return (
    <form onSubmit={createNewUser}>
      <label>UserName
        <input required
         onChange={(e) => setUserName(e.target.value)} name="userName"/>
      </label>
      <label> Profile Picture
        <input required
         onChange={(e) => setProfilePicture(e.target.value)} />
      </label>
      <label> Birthdate : 
        <input required
         onChange={(e) => setBirthdate(e.target.value)} />
      </label>
      <button>Create</button>
    </form>
  )
}
