import store from './redux/redux-store'

import App from './App'

import { RootStateType } from './redux/redux-store'
import ReactDOM from 'react-dom'
import React from 'react'
import StoreContext, { Provider } from './StoreContext'

const rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
  rerenderEntireTree(store.getState())
})
