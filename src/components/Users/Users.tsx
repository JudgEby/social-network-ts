import React from 'react'
import { UserType } from '../../redux/users-reducer'
import styles from './Users.module.css'
import axios from 'axios'

import defaultAvatarSmall from '../../assets/images/default-avatar-small.png'

type UsersType = {
  users: UserType[]
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: UserType[]) => void
}

class Users extends React.Component<UsersType> {
  componentDidMount = () => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }

  render = () => {
    const { users, follow, unfollow } = this.props
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

    return <div>{allUsers}</div>
  }
}

export default Users
