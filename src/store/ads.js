export default{
    state:{
        ads:[
			{
				title:"Galaxy Tab A7",
				desc:"32GB LTE 10.4 2020 (dark gray), Android 10",
				promo: true,
				src: "https://wallpapershome.ru/images/pages/pic_h/22770.jpg",
				id:"1"
			},
			{
				title:"Lenovo - IdeaPad",
				desc:"Snapdragon SC7180 8GB Memory 128GB SSD Abyss Blue",
				promo: true,
				src: "https://wallpapershome.ru/images/pages/pic_h/13301.jpg",
				id:"2"
			},
			{
				title:"Microsoft Surface",
				desc:"Screen 14.4 IPS (2400x1600) 120 Hz, RAM 16GB SSD 512GB",
				promo: true,
				src: "https://wallpapershome.ru/images/pages/pic_h/23314.jpg",
				id:"3"
			},
			{
				title:"Samsung Galaxy Tab S7 WiFi",
				desc:"SM-T220, 3ГБ, 32GB, Android 11 dark gray",
				promo: true,
				src: "https://i1.wp.com/mynexttablet.com/wp-content/uploads/2021/09/samsung-galaxy-tab-s7-fe-tablet-comparison.jpg?fit=1920%2C1080&ssl=1",
				id:"4"
			},
			{
				title:"Xiaomi Pad 5",
				desc:"Qualcomm Snapdragon 860 octa-core processor 120 Hz screen 64GB",
				promo: true,
				src: "https://cdn.andro4all.com/files/2021/10/Diseno-de-la-Xiaomi-Pad-5.jpg",
				id:"5"
			},
			{
				title:"APPLE iPad mini",
				desc:"Apple A15 Bionic 8.3 (2266x1488), Full HD IPS",
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