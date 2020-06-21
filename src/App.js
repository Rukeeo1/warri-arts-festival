import React from 'react'
import './index.css'
import { Home } from "./components/Container"

export default function App() {
  return (
    <main>
    <Switch>
      <Route path="/" component= { Home } exact />
    </Switch>
  </main>
  )
}