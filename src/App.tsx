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
import state from './redux/state'

type AppPT = {
  state: AppStatePT
}

type AppStatePT = {
  profilePage: PostsPagePT
  messagesPage: MessagesPagePT
}

type PostsPagePT = {
  posts: Array<PostsPT>
}

type MessagesPagePT = {
  dialogs: Array<DialogsFromPropsPT>
  messages: Array<MessagesPT>
}

type PostsPT = {
  id: number
  message: string
  likesCount: number
}

type DialogsFromPropsPT = {
  id: number
  name: string
}

type MessagesPT = {
  id: number
  message: string
}

function App({ state: { profilePage, messagesPage } }: AppPT) {
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header />
        <Navbar />
        <div className={'app-wrapper-content'}>
          <Route
            path={'/profile'}
            render={() => <Profile state={profilePage} />}
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
