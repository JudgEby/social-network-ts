import { connect } from 'react-redux'
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFollowingInProgress,
  toggleIsFetching,
  unfollow,
  UserType,
} from '../../redux/users-reducer'
import { RootStateType } from '../../redux/redux-store'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../api/api'

type UsersContainerType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: string[]
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (page: number) => void
  setTotalUsersCount: (count: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  toggleFollowingInProgress: (payload: {
    userId: string
    isFollowing: boolean
  }) => void
}

class UsersContainer extends React.Component<UsersContainerType> {
  componentDidMount = () => {
    this.props.toggleIsFetching(true)

    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
        this.props.toggleIsFetching(false)
      })
  }

  onPageClick = (page: number) => {
    this.props.setCurrentPage(page)
    this.props.toggleIsFetching(true)

    usersAPI.getUsers(page, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items)
      this.props.toggleIsFetching(false)
    })
  }

  render = () => {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageClick={this.onPageClick}
            followingInProgress={this.props.followingInProgress}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          />
        )}
      </>
    )
  }
}

type MapDispatchToPropsType = {
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (page: number) => void
  setTotalUsersCount: (count: number) => void
  toggleIsFetching: (isFetching: boolean) => void
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
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress,
})(UsersContainer)

export default UsersPageContainer
