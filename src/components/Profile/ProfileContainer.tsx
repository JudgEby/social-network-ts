import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {
	getUserProfile,
	getUserStatus,
	updateUserStatus,
} from '../../redux/profile-reducer'
import { RootStateType } from '../../redux/redux-store'
import { withRouter } from 'react-router-dom'
import withAuthRedirect from '../../hocs/AuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component<any, any> {
	componentDidMount() {
		const userIdFromRouter =
			this.props.match.params.userId ||
			(this.props.isAuth &&
				this.props.authorizedId &&
				this.props.authorizedId)
		this.props.getUserProfile(userIdFromRouter)
		this.props.getUserStatus(userIdFromRouter)
	}

	render() {
		return (
			<Profile
				profile={this.props.profile}
				status={this.props.status}
				updateUserStatus={this.props.updateUserStatus}
			/>
		)
	}
}

const mapStateToProps = (state: RootStateType) => {
	return {
		profile: state.profilePage.userProfile,
		status: state.profilePage.status,
		authorizedId: state.auth.id,
		isAuth: state.auth.isAuth,
	}
}

export default compose<React.ComponentType>(
	withAuthRedirect,
	connect(mapStateToProps, {
		getUserProfile,
		getUserStatus,
		updateUserStatus,
	}),
	withRouter
)(ProfileContainer)

// connect(mapStateToProps, { getUserProfile })(
//   withRouter(withAuthRedirect(ProfileContainer))
// )
