export default{
    state:{
        ads:[
			{
				title:"Galaxy Tab A7",
				desc:"Elegant design, amazing entertainment system and high performance turn the Galaxy Tab A7 tablet into an indispensable assistant. Enjoy your favorite activities to the fullest and share the best moments of your life. Learn, explore and be inspired.",
				promo: true,
				src: "https://wallpapershome.ru/images/pages/pic_h/22770.jpg",
				id:"1"
			},
			{
				title:"Lenovo - IdeaPad",
				desc:"IdeaPad Duet 5 13.3 OLED Chromebook - Snapdragon SC7180 - Qualcomm Adreno Graphics - 8GB Memory - 128GB SSD - Abyss Blue",
				promo: true,
				src: "https://wallpapershome.ru/images/pages/pic_h/13301.jpg",
				id:"2"
			},
			{
				title:"Microsoft Surface",
				desc:"Screen 14.4 IPS (2400x1600) 120 Hz, Multitouch, Glossy / Intel Core i7-11370H (3.3 - 4.8GHz) / RAM 16 GB / SSD 512 GB / nVidia GeForce RTX 3050 Ti, 4 GB / without OD / Wi-Fi / Bluetooth / Webcam / Windows 11 Home / 1.73 kg / Platinum",
				promo: true,
				src: "https://wallpapershome.ru/images/pages/pic_h/23314.jpg",
				id:"3"
			},
			{
				title:"Samsung Galaxy Tab S7 WiFi",
				desc:"SM-T220, 3ГБ, 32GB, Android 11 темно-серый [sm-t220nzaaser]. Dolby Atmos technology for surround sound. ini-windows for simultaneous launch of different applications.",
				promo: true,
				src: "https://i1.wp.com/mynexttablet.com/wp-content/uploads/2021/09/samsung-galaxy-tab-s7-fe-tablet-comparison.jpg?fit=1920%2C1080&ssl=1",
				id:"4"
			},
			{
				title:"Xiaomi Pad 5",
				desc:"Qualcomm Snapdragon 860 octa-core processor – high performance and multitasking.Long battery life - up to 5 days.120 Hz screen refresh rate for easy and smooth operation.",
				promo: true,
				src: "https://cdn.andro4all.com/files/2021/10/Diseno-de-la-Xiaomi-Pad-5.jpg",
				id:"5"
			},
			{
				title:"APPLE iPad mini",
				desc:"Display Liquid Retina XDR4 12,9 Liquid Retina 11 display with technology ProMotion and True Tone",
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