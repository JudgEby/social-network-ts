import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '63396f99-065e-4b59-8e77-6590fb2a71f0',
  },
})

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
}

export const followAPI = {
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
