import React, { useContext } from 'react'
import { PostContext } from '../reducer/reducer'

export default function SwitchProfile() {
  const { state, dispatch } = useContext(PostContext)
  const { users, currentUser } = state

  function generateUserFinc() {
    return users.map(user => <option key={user.userId} value={user.userName}>{ user.userName }</option>)
  }
  return (
    <select>
      {generateUserFinc()}
      <option></option>
    </select>
  )
}
