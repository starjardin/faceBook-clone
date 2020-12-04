import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Options from './Options'

export default function ProfileOptions() {
  return (
    <>
      <Option />
      <Switch>
        <Route exact path="/options"></Route>
        <Route exact path="/options/switchProfile">Switch</Route>
        <Route exact path="/options/addProfile"></Route>
      </Switch>

    </>
  )
}
