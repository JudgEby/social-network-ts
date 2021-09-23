import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Users.module.css'
import defaultAvatarSmall from '../../assets/images/default-avatar-small.png'
import { UserType } from '../../redux/users-reducer'

type UsersType = {
	user: UserType
	followingInProgress: string[]
	followUser: (userId: string) => void
	unfollowUser: (userId: string) => void
}

const User = (props: UsersType) => {
	const { user, followingInProgress, unfollowUser, followUser } = props

	return (
		<div>
			<NavLink to={`/profile/${user.id}`}>
				<img
					className={styles.avatar}
					src={user.photos.small || defaultAvatarSmall}
					alt='user'
				/>
			</NavLink>
			{user.followed ? (
				<button
					disabled={followingInProgress.some(id => id === user.id)}
					onClick={() => {
						unfollowUser(user.id)
					}}
				>
					Unfollow
				</button>
			) : (
				<button
					disabled={followingInProgress.some(id => id === user.id)}
					onClick={() => {
						followUser(user.id)
					}}
				>
					Follow
				</button>
			)}
			<div>Status: {user.followed ? 'Подписан' : 'Не подписан'}</div>
			<div>
				Имя: {user.name} Подпись:{' '}
				{user.status ? user.status : 'нет подписи'} Город:{' '}
				{'u.location.city'} Страна: {'u.location.country'}
			</div>
		</div>
	)
}

export default User
