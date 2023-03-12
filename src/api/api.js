
import axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    "API-KEY": "22674609-1b30-45fd-8845-6a137eb97d1f"
});

export const usersAPI = {
    async requestUsers (currentPage, pageSize) {
        let response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return  response = response.data

},
    async unfollowAPI(id) {
        let response = await instance.delete(`follow/${id}`)
        return  response = response.data
    },
    async followAPI (id) {
        let response = await instance.post(`follow/${id}`)
        return  response = response.data
    }
}
export const profileAPI = {
    getUserProfile(userId){
        return instance.get(`profile/`+ userId)
            .then(response => response.data)
    },
    getProfileStatus(userId){
        return instance.get(`profile/status/`+ userId)

    },
    updateProfileStatus(status){
        return instance.put(`profile/status`,{status:status})

    }
}
export const authAPI = {
    getIsAuth(){
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email,password,rememberMe){
        return instance.post(`auth/login`,{email,password,rememberMe})
            .then(response => response.data)
    },
    logout(){
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }

}