import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profile-reducer'
import { RootStateType } from '../../redux/redux-store'
import { Redirect, withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component<any, any> {
  componentDidMount() {
    const userIdFromRouter = this.props.match.params.userId || '2'
    this.props.getUserProfile(userIdFromRouter)
    // axios
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/profile/${userIdFromRouter}`
    //   )
    //   .then((response) => {
    //     this.props.setUserProfile(response.data)
    //   })
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to={'/login'} />
    }
    return <Profile profile={this.props.profile} />
  }
}

const mapStateToProps = (state: RootStateType) => {
  return {
    profile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth,
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
)
