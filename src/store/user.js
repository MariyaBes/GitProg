import fb from 'firebase'

export default {
	state: {
        user:null
    },
	mutations: {
        setUser(state, payload){
            state.user = payload
        }
    },
	actions: {
        registerUser({commite}, {email, password}){
            commite('clearError')
            commite('setLoading', true)
            fb.auth().createUserWithEmailAndPassword(email, password).than(response => {
                console.log(response.user.uid)
                commite('setUser', new User(response.user.uid))
            })
        }
    },
	getters: {
        user(state){
            return state.user
        }
    }
}

class User {
    constructor(id){
        this.id = id
    }
}
