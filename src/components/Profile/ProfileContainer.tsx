import React from 'react'
import Profile from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'
import { RootStateType } from '../../redux/redux-store'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component<any, any> {
  componentDidMount() {
    const userIdFromRouter = this.props.match.params.userId || 2
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${userIdFromRouter}`
      )
      .then((response) => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return <Profile profile={this.props.profile} />
  }
}

const mapStateToProps = (state: RootStateType) => {
  return {
    profile: state.profilePage.userProfile,
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
)
