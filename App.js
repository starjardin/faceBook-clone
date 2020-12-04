import React from 'react'
import { Route, Switch } from 'react-router'
import AddPosts from './components/AddPosts'
import Feed from './components/Feed'
import Header from './components/Header'
import Options from './components/Options'
import styled from 'styled-components'
import ProfileOptions from './components/ProfileOptions'

const AppStyle = styled.div`
  max-width : 600px;
  margin-inline : auto;
`

export default function App() {
  return (
    <AppStyle>
      <Header />
      <Switch>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route exact path="/addPost">
          <AddPosts />
        </Route>
        <Route path="/options">
          {/* <Options /> */}
          <ProfileOptions />
        </Route>
     </Switch>
    </AppStyle>
  )
}
