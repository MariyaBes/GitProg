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
                commite('setUser', new User(response.user.uid))
                commite('setLoading', false)
            }).catch(error => {
                commite('setLoading', false)
                commite('setError', error.message)
                throw error
            })
        },
        async loginUser({commite}, {email, password}){
            commite('clearError')
            commite('setLoading', true)
            try {
                const response = await
                fb.auth().signInWithEmailAndPassword(email, password)
                    commite('setUser', new User(response.user.uid))
                    commite('setLoading', false)
            } catch(error) {
                commite('setLoading', false)
                commite('setError', error.message)
                throw error
            }
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
