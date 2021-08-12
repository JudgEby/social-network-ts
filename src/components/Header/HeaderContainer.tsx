import axios from 'axios'
import React from 'react'
import Header from './Header'
import { AuthType, setAuthUserData, setIsAuth } from '../../redux/auth-reducer'
import { RootStateType } from '../../redux/redux-store'
import { connect } from 'react-redux'

type HeaderContainerType = {
  auth: AuthType
  setUserData: (data: AuthType) => void
}

class HeaderContainer extends React.Component<any, any> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.setAuthUserData(response.data.data)
          this.props.setIsAuth(true)
        }
      })
  }

  render() {
    return <Header {...this.props.auth} />
  }
}

const MapStateToProps = (state: RootStateType) => {
  return {
    auth: state.auth,
  }
}

export default connect(MapStateToProps, { setAuthUserData, setIsAuth })(
  HeaderContainer
)
