import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'e548241b-fc91-4ee9-bf6f-69b58f4ac1b7',
	},
})

export const usersAPI = {
	getUsers(currentPage: number = 1, pageSize: number = 10) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data)
	},
	follow(userId: string) {
		return instance
			.post(`follow/${userId}`)
			.then((response) => response.data.resultCode)
	},
	unfollow(userId: string) {
		return instance
			.delete(`follow/${userId}`)
			.then((response) => response.data.resultCode)
	},
}

export const profileAPI = {
	getProfile(userId: string) {
		return instance.get(`profile/${userId}`).then((response) => response.data)
	},
	getStatus(userId: string) {
		return instance
			.get(`profile/status/${userId}`)
			.then((response) => response.data)
	},
	updateStatus(status: string) {
		return instance.put(`profile/status/`, { status })
	},
}

export const authAPI = {
	getMe() {
		return instance.get('auth/me')
	},
	login(
		email: string,
		password: string,
		rememberMe: boolean = false,
		captcha: boolean = true
	) {
		return instance.post('auth/login', {
			email,
			password,
			rememberMe,
			captcha,
		})
	},
	logout() {
		return instance.delete('auth/login')
	},
}
