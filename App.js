import React from 'react'
import { Route, Switch } from 'react-router'
import AddPosts from './components/AddPosts'
import Feed from './components/Feed'
import Header from './components/Header'
import Options from './components/Options'

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route exact path="/addPost">
          <AddPosts />
        </Route>
        <Route path="/options">
          <Options />
        </Route>
     </Switch>
    </>
  )
}
