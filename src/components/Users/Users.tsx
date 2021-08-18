import React, { ReactElement } from 'react'
import styles from './Users.module.css'
import defaultAvatarSmall from '../../assets/images/default-avatar-small.png'
import { UserType } from '../../redux/users-reducer'
import { NavLink } from 'react-router-dom'

type UsersType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageClick: (page: number) => void
  followingInProgress: string[]
  followUser: (userId: string) => void
  unfollowUser: (userId: string) => void
}

const Users = React.memo((props: UsersType) => {
  const {
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    onPageClick,
    followingInProgress,
    followUser,
    unfollowUser,
  } = props

  const pages = ((pageSize: number) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    const result: Array<ReactElement<any, any>> = []
    for (let i = 1; i <= pagesCount; i++) {
      result.push(
        <span
          key={i}
          className={`${styles.pageNumber} ${
            currentPage === i && styles.selectedPage
          } ${(i - currentPage < -5 || i - currentPage > 5) && styles.hidden}`}
          onClick={() => onPageClick(i)}
        >
          {i}
        </span>
      )
    }
    return result
  })(pageSize)

  const allUsers = users.map((u) => (
    <div key={u.id}>
      <NavLink to={`/profile/${u.id}`}>
        <img
          className={styles.avatar}
          src={u.photos.small || defaultAvatarSmall}
          alt='user'
        />
      </NavLink>
      {u.followed ? (
        <button
          disabled={followingInProgress.some((id) => id === u.id)}
          onClick={() => {
            unfollowUser(u.id)
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          disabled={followingInProgress.some((id) => id === u.id)}
          onClick={() => {
            followUser(u.id)
          }}
        >
          Follow
        </button>
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
})

export default Users
