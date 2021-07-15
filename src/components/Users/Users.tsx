import React from 'react'
import { UserType } from '../../redux/users-reducer'
import styles from './Users.module.css'
import { v1 } from 'uuid'
import { useEffect } from 'react'

type UsersType = {
  users: UserType[]
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsers: (users: UserType[]) => void
}

const Users = ({ users, follow, unfollow, setUsers }: UsersType) => {
  useEffect(
    () =>
      setUsers([
        {
          id: v1(),
          photoUrl:
            'https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg',
          fullName: 'Dmitry',
          status: 'Sensey',
          location: { city: 'Minsk', country: 'Belarus' },
          followed: true,
        },
        {
          id: v1(),
          photoUrl:
            'https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg',
          fullName: 'Yan',
          status: 'Loh',
          location: { city: 'Bobruisk', country: 'Belarus' },
          followed: false,
        },
        {
          id: v1(),
          photoUrl:
            'https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg',
          fullName: 'Zhenya',
          status: 'Brat',
          location: { city: 'Minsk', country: 'Belarus' },
          followed: true,
        },
        {
          id: v1(),
          photoUrl:
            'https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg',
          fullName: 'Stas',
          status: 'Hohol',
          location: { city: 'Mena', country: 'Ukraine' },
          followed: true,
        },
        {
          id: v1(),
          photoUrl:
            'https://img.favpng.com/21/4/9/portable-network-graphics-avatar-computer-icons-image-social-media-png-favpng-r3ez8qWcYdM8jGVn2b5TGhvS8.jpg',
          fullName: 'Katya',
          status: 'NS2 player',
          location: { city: 'Moscow', country: 'Russia' },
          followed: false,
        },
      ]),
    [setUsers]
  )

  const allUsers = users.map((u) => (
    <div key={u.id}>
      {u.followed ? (
        <button onClick={() => unfollow(u.id)}>Unfollow</button>
      ) : (
        <button onClick={() => follow(u.id)}>Follow</button>
      )}
      <div>Status: {u.followed ? 'Подписан' : 'Не подписан'}</div>
      <div>
        Имя: {u.fullName} Подпись: {u.status} Город: {u.location.city} Страна:{' '}
        {u.location.country}
      </div>
    </div>
  ))

  return <div>{allUsers}</div>
}

export default Users
