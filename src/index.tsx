import store from './redux/state'

import App from './App'

import { RootStateType } from './redux/state'
import ReactDOM from 'react-dom'
import React from 'react'

const rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
