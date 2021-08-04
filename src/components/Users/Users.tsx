import React, { ReactElement } from 'react'
import { UserType } from '../../redux/users-reducer'
import styles from './Users.module.css'
import axios from 'axios'

import defaultAvatarSmall from '../../assets/images/default-avatar-small.png'

type UsersType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (page: number) => void
  setTotalUsersCount: (count: number) => void
}

class Users extends React.Component<UsersType> {
  componentDidMount = () => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageClick = (page: number) => {
    this.props.setCurrentPage(page)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }

  render = () => {
    const { users, follow, unfollow, pageSize, totalUsersCount, currentPage } =
      this.props

    const pages = ((pageSize: number) => {
      let pagesCount = Math.ceil(totalUsersCount / pageSize)
      const result: Array<ReactElement<any, any>> = []
      for (let i = 1; i <= pagesCount; i++) {
        result.push(
          <span
            key={i}
            className={`${styles.pageNumber} ${
              currentPage === i && styles.selectedPage
            }`}
            onClick={() => this.onPageClick(i)}
          >
            {i}
          </span>
        )
      }
      return result
    })(pageSize)

    const allUsers = users.map((u) => (
      <div key={u.id}>
        <img
          className={styles.avatar}
          src={u.photos && defaultAvatarSmall}
          alt='user'
        />
        {u.followed ? (
          <button onClick={() => unfollow(u.id)}>Unfollow</button>
        ) : (
          <button onClick={() => follow(u.id)}>Follow</button>
        )}
        <div>Status: {u.followed ? 'Подписан' : 'Не подписан'}</div>
        <div>
          Имя: {u.name} Подпись: {u.status ? u.status : 'нет подписи'} Город:{' '}
          {'u.location.city'} Страна: {'u.location.country'}
        </div>
      </div>
    ))

    return (
      <div>
        <div>{pages}</div>
        <div>{allUsers}</div>
      </div>
    )
  }
}

export default Users
