import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Users from './Users'
import {
  followAC,
  setUsersAC,
  unfollowAC,
  UserType,
} from '../../redux/users-reducer'
import { RootStateType } from '../../redux/redux-store'

type MapDispatchToPropsType = {
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: RootStateType) => {
  return {
    users: state.usersPage.users,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (id: string) => {
      dispatch(followAC(id))
    },
    unfollow: (id: string) => {
      dispatch(unfollowAC(id))
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users))
    },
  }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersPageContainer
