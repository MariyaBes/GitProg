export default {
	state: {
        loading:false,
        error:null
    },
	mutations: {
        setLoading(state, payload){
            state.loading = payload
        },
        setError(state, payload){
            state.error = payload
        },
        clearError(state){
            state.error = null
        }
    },
	actions: {
        setLoading({commit}, payload){
            commit('setLoading', payload)
        },
        setError({commit}, payload){
            commit('setLoading', payload)
        },
        clearError({commit}){
            commit('cleareError')
        }
    },
	getters: {
        loading (state){
            return state.loading
        },
        error (state){
            return state.error
        }
    }
}
