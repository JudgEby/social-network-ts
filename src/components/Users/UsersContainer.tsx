import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Users from './Users'
import {
  followAC,
  setCurrentPagesAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  UserType,
} from '../../redux/users-reducer'
import { RootStateType } from '../../redux/redux-store'

type MapDispatchToPropsType = {
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (page: number) => void
  setTotalUsersCount: (count: number) => void
}

const mapStateToProps = (state: RootStateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPagesAC(currentPage))
    },
    setTotalUsersCount: (count: number) => {
      dispatch(setTotalUsersCountAC(count))
    },
  }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersPageContainer
