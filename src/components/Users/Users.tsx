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
  follow: (id: string) => void
  unfollow: (id: string) => void
  onPageClick: (page: number) => void
}

const Users = React.memo((props: UsersType) => {
  const {
    users,
    follow,
    unfollow,
    pageSize,
    totalUsersCount,
    currentPage,
    onPageClick,
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
})

export default Users
