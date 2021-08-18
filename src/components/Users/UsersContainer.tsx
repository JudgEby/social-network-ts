import { connect } from 'react-redux'
import {
  followUser,
  getUsers,
  setCurrentPage,
  unfollowUser,
  UserType,
} from '../../redux/users-reducer'
import { RootStateType } from '../../redux/redux-store'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

type UsersContainerType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: string[]
  setCurrentPage: (page: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
  followUser: (userId: string) => void
  unfollowUser: (userId: string) => void
}

class UsersContainer extends React.Component<UsersContainerType> {
  componentDidMount = () => {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  componentWillUnmount() {
    this.props.setCurrentPage(1)
  }

  onPageClick = (page: number) => {
    this.props.getUsers(page, this.props.pageSize)
  }

  render = () => {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageClick={this.onPageClick}
            followingInProgress={this.props.followingInProgress}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
          />
        )}
      </>
    )
  }
}

const mapStateToProps = (state: RootStateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

const UsersPageContainer = connect(mapStateToProps, {
  setCurrentPage,
  getUsers,
  followUser,
  unfollowUser,
})(UsersContainer)

export default UsersPageContainer
