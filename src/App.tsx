import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import { RootStateType } from './redux/state'

type AppType = {
  state: RootStateType
  addPost: (postMessage: string) => void
}

function App({ state: { profilePage, messagesPage }, addPost }: AppType) {
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header />
        <Navbar />
        <div className={'app-wrapper-content'}>
          <Route
            path={'/profile'}
            render={() => <Profile state={profilePage} addPost={addPost} />}
          />
          <Route
            path={'/dialogs'}
            render={() => <Dialogs state={messagesPage} />}
          />
          <Route path={'/news'} component={News} />
          <Route path={'/music'} component={Music} />
          <Route path={'/settings'} component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
