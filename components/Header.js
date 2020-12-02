import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import reducer from '../reducer/reducer'

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

export default function Header() {
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
          <h2 >UserName</h2>
        </Link>
      </HeaderStyle>
    </>
  )
}
