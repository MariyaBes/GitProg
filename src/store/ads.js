import fb from 'firebase'

export default{
    state:{
        ads:[
			{
				title:"Galaxy Tab A7",
				desc:"Android 11 Qualcomm SM6115 Snapdragon 64GB 3GB",
				promo: true,
				src: "https://wallpapershome.ru/images/pages/pic_h/22770.jpg",
				id:"1"
			},
			{
				title:"Lenovo - IdeaPad",
				desc:"IdeaPad Duet 5 Snapdragon SC7180 8GB RAM 128GB SSD",
				promo: true,
				src: "https://wallpapershome.ru/images/pages/pic_h/13301.jpg",
				id:"2"
			},
			{
				title:"Microsoft Surface",
				desc:"Screen 14.4 IPS 120Hz, Multitouch, RAM 16GB SSD 512GB",
				promo: true,
				src: "https://wallpapershome.ru/images/pages/pic_h/23314.jpg",
				id:"3"
			},
			{
				title:"Samsung Galaxy Tab S7 WiFi",
				desc:"SM-T220, 3GB, 32GB, Android 11",
				promo: true,
				src: "https://i1.wp.com/mynexttablet.com/wp-content/uploads/2021/09/samsung-galaxy-tab-s7-fe-tablet-comparison.jpg?fit=1920%2C1080&ssl=1",
				id:"4"
			},
			{
				title:"Xiaomi Pad 5",
				desc:"Qualcomm Snapdragon 860 120 Hz",
				promo: true,
				src: "https://cdn.andro4all.com/files/2021/10/Diseno-de-la-Xiaomi-Pad-5.jpg",
				id:"5"
			},
			{
				title:"APPLE iPad mini",
				desc:"Display Liquid Retina XDR4 12,9 Liquid Retina 11",
				promo: true,
				src: "https://www.iphones.ru/wp-content/uploads/2021/10/ipad-mini-6-review-iphonesru-10.jpg",
				id:"6"
			}
        ]
    },
    mutations: {
		createAd(state, payload){
			state.ads.push(payload)
		}
	},
    actions: {
		createAd({commit},payload){
            payload.id = Math.random()
            commit('createAd', payload)
        },
		async createAds ({commit, getters}, payload){
			commit('clearError')
			commit('setLoading', true)
			try {
				const newAd = newAd(
					payload.title, 
					payload.desc, 
					getters.user.id, 
					payload.scr, 
					payload.promo, 
					payload.id
					)
				const fbValue = await fb.database().ref('ads').push(newAd)
				commit('setLoading', false)
				commit('createAd', {
					...newAd,
					id: fbValue.key
				})
			} catch (error) {
				commit ('setError', error.message)
				commit ('setLoading', false)
				throw error
			}
		}
	},
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => {return ad.promo})
        },
        myAds(state) {
            return state.ads
        },
		adById(state){
			return id => {
				return state.ads.find(ad=> ad.id == id)
			}
		}
    }
}