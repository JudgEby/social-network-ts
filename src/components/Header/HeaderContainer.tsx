import React from 'react'
import Header from './Header'
import { getAuthUserData, logout } from '../../redux/auth-reducer'
import { RootStateType } from '../../redux/redux-store'
import { connect } from 'react-redux'

// type HeaderContainerType = {
//   auth: AuthType
//   setUserData: (data: AuthType) => void
// }

class HeaderContainer extends React.Component<any, any> {
	componentDidMount() {
		this.props.getAuthUserData()
	}

	render() {
		return <Header {...this.props.auth} logout={this.props.logout} />
	}
}

const MapStateToProps = (state: RootStateType) => {
	return {
		auth: state.auth,
	}
}

export default connect(MapStateToProps, { getAuthUserData, logout })(
	HeaderContainer
)
