export default{
    state: {
        ads:[
			{
				title:"First",
				desc:"First Desc",
				promo: true,
				src: "https://wallpapershome.ru/images/pages/pic_h/22770.jpg",
				id:"1"
			},
			{
				title:"Second",
				desc:"Second Desc",
				promo: true,
				src: "https://wallpapershome.ru/images/pages/pic_h/13301.jpg",
				id:"2"
			},
			{
				title:"Third",
				desc:"Thitd Desc",
				promo: true,
				src: "https://wallpapershome.ru/images/pages/pic_h/23314.jpg",
				id:"3"
			},
			{
				title:"Fouth",
				desc:"Fouth Desc",
				promo: true,
				src: "https://i1.wp.com/mynexttablet.com/wp-content/uploads/2021/09/samsung-galaxy-tab-s7-fe-tablet-comparison.jpg?fit=1920%2C1080&ssl=1",
				id:"4"
			},
			{
				title:"Fifth",
				desc:"Fifth Desc",
				promo: true,
				src: "https://cdn.andro4all.com/files/2021/10/Diseno-de-la-Xiaomi-Pad-5.jpg",
				id:"5"
			},
			{
				title:"Sixth",
				desc:"Sixth Desc",
				promo: true,
				src: "https://www.iphones.ru/wp-content/uploads/2021/10/ipad-mini-6-review-iphonesru-10.jpg",
				id:"6"
			}
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds(state) {
            return state.ads
        },
        adById(state) {
            return id => {
                return state.ads.find (ad => ad.id == id)
            }
        }
    }
}