import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  UserType,
} from '../../redux/users-reducer'
import { RootStateType } from '../../redux/redux-store'
import React from 'react'
import axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

type UsersContainerType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (page: number) => void
  setTotalUsersCount: (count: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersContainerType> {
  componentDidMount = () => {
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
        this.props.toggleIsFetching(false)
      })
  }

  onPageClick = (page: number) => {
    this.props.setCurrentPage(page)
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
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
  }
}

const UsersPageContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer)

export default UsersPageContainer
