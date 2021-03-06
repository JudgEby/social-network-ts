import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, withRouter } from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/app-reducer'
import { RootStateType } from './redux/redux-store'
import Preloader from './components/common/Preloader/Preloader'
import SuspenseLoading from './components/common/SuspenseLoading/SuspenseLoading'
// import DialogsContainer from './components/Dialogs/DialogsContainer'
// import ProfileContainer from './components/Profile/ProfileContainer'
const DialogsContainer = React.lazy(
	() => import('./components/Dialogs/DialogsContainer')
)
const ProfileContainer = React.lazy(
	() => import('./components/Profile/ProfileContainer')
)

class App extends React.Component<any, any> {
	componentDidMount() {
		this.props.initializeApp()
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className={'app-wrapper'}>
				<HeaderContainer />
				<Navbar />
				<div className={'app-wrapper-content'}>
					<Route
						path={'/profile/:userId?'}
						render={() => (
							<SuspenseLoading>
								<ProfileContainer />
							</SuspenseLoading>
						)}
					/>
					<Route
						path={'/dialogs'}
						render={() => (
							<SuspenseLoading>
								<DialogsContainer />
							</SuspenseLoading>
						)}
					/>
					<Route path={'/users'} render={() => <UsersContainer />} />
					<Route path={'/news'} component={News} />
					<Route path={'/music'} component={Music} />
					<Route path={'/settings'} component={Settings} />
					<Route path={'/login'} component={() => <Login />} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state: RootStateType) => {
	return {
		initialized: state.app.initialized,
	}
}

export default compose<React.ComponentType>(
	withRouter,
	connect(mapStateToProps, { initializeApp })
)(App)
