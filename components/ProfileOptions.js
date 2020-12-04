import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Options from './Options'
import SwitchProfile from './SwitchProfile'
import AddProfile from './AddProfie'


const LinkStyle = styled.div`
  display : flex;
  flex-directionn : row;
  justify-content : space-between;
  a:focus {
    color : #ccc;
  }
`
  
export default function ProfileOptions() {
  return (
    <>
      <LinkStyle>
        <Link to="/options">Options</Link>
        <Link to="/options/switchProfile">Switch</Link>
        <Link to="/options/addProfile">Add new user</Link>
      </LinkStyle>
      <Switch>
        <Route exact path="/options">
          <Options />
        </Route>
        <Route exact path="/options/switchProfile">
          <SwitchProfile />
        </Route>
        <Route exact path="/options/addProfile">
          <AddProfile />
        </Route>
      </Switch>

    </>
  )
}
