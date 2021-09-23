import React, { ReactElement } from 'react'
import styles from './Paginator.module.css'

type UsersType = {
	pageSize: number
	totalUsersCount: number
	currentPage: number
	onPageClick: (page: number) => void
}

const Paginator = React.memo((props: UsersType) => {
	const { pageSize, totalUsersCount, currentPage, onPageClick } = props

	const pages = (pageSize: number) => {
		let pagesCount = Math.ceil(totalUsersCount / pageSize)
		const result: Array<ReactElement<any, any>> = []
		for (let i = 1; i <= pagesCount; i++) {
			result.push(
				<span
					key={i}
					className={`${styles.pageNumber} ${
						currentPage === i && styles.selectedPage
					} ${
						(i - currentPage < -5 || i - currentPage > 5) && styles.hidden
					}`}
					onClick={() => onPageClick(i)}
				>
					{i}
				</span>
			)
		}
		return result
	}

	return (
		<div>
			<div>{pages(pageSize)}</div>
		</div>
	)
})

export default Paginator
