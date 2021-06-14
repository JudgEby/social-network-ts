import state, { subscribe } from './redux/state'

import App from './App'

import { addPost, updateNewPostText, RootStateType } from './redux/state'
import ReactDOM from 'react-dom'
import React from 'react'

const rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)
