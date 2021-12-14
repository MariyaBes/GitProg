<template> 
	<v-container>
		<v-layout row> 
			<v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-6 mt-4">My ads</h1> 
                </v-flex>
		</v-layout> 

		<v-card>
			<v-layout row>
				<v-flex xs4>
				</v-flex>
				<v-flex xs8>
				</v-flex>
			</v-layout>
		</v-card>

		<v-card 
		class="elevation-10 mb-5" 
		v-for="ad in ads" 
		:key="ad.id"
		>
			<v-layout row>
				<v-flex xs4 class="pl-3">
					<v-img 
					:src="ad.src" 
					height="200px"></v-img>
				</v-flex>
				<v-flex xs8 class="pr-3">
					<v-card-text>
						<h2 class="text-primary">{{ad.title}}</h2>
						<p>{{ad.desc}}</p>
					</v-card-text>
					<v-card-actions>
						<v-space>
						</v-space>
						<v-btn dark color="#B85252" :to="'/ad/' + ad.id">Open</v-btn>
					</v-card-actions>
				</v-flex>
			</v-layout>
		</v-card>

		<v-flex xs12>
			<v-card class="mt-5">
				<v-img
				height="300px"
				src="https://wallpapershome.ru/images/pages/pic_h/22770.jpg"
				></v-img>
				<v-card-text>
					<h1 class="text-primary mb-3">Galaxy Tab A7</h1>
					<p>Elegant design, amazing entertainment system and high performance turn the Galaxy Tab A7 tablet into an indispensable assistant. Enjoy your favorite activities to the fullest and share the best moments of your life. Learn, explore and be inspired.</p>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn text class="warning">Edit</v-btn>
					<v-btn text class="success">Buy</v-btn>
				</v-card-actions>
			</v-card>
		</v-flex>

	</v-container>
</template>

<script>
export default {
	data () { 
		return {
			ads:[
				{
					title:"First",
					desc:"Elegant design, amazing entertainment system and high performance turn the Galaxy Tab A7 tablet into an indispensable assistant. Enjoy your favorite activities to the fullest and share the best moments of your life. Learn, explore and be inspired.",
					promo:true,
					src:"https://wallpapershome.ru/images/pages/pic_h/22770.jpg",
					id:"1"
				},
				{
					title:"Second",
					desc:"If you were looking for a reinvention of the laptop, the Surface Laptop 4 isn't it. To put it concisely, the new model is the Surface Laptop 3 with updated processors available in both Intel and AMD variants. Yes, there is more to it, but the TL;DR version is faster performance and longer battery life in the same laptop.",
					promo: true,
					src: "https://wallpapershome.ru/images/pages/pic_h/13301.jpg",
					id:"2"
				},
				{
					title:"Third",
					desc:"Microsoft Surface Laptop 4 - 13.5” Touch-Screen – Core i5 - 8GB RAM - 512 GB SSD (5BT-00001) Matte Black2.40 ГГц с ускорением Turbo Boost до 4.2 ГГц13,5 дюймаGenuine Microsoft Windows 10 Home 64-bitIEEE 802.11 axBluetooth® версии 5.0Intel® Iris® Xe Graphics",
					promo: true,
					src: "https://wallpapershome.ru/images/pages/pic_h/23314.jpg",
					id:"3"
				},
				{
					title:"Fouth",
					desc:"Rumors about the Galaxy tab S8 Ultra started doing rounds this summer but we got a good look at the tablet and its specs only recently. A series of renders suggested that the device will come with a notch that's quite similar to this year's MacBooks from Apple.",
					promo: true,
					src: "https://i1.wp.com/mynexttablet.com/wp-content/uploads/2021/09/samsung-galaxy-tab-s7-fe-tablet-comparison.jpg?fit=1920%2C1080&ssl=1",
					id:"4"
				},
				{
					title:"Fifth",
					desc:"Xiaomi has brought its latest tablet series to Europe, having announced them last month in China. While Xiaomi's home market received the Mi Pad 5 4G, Mi Pad 5 Pro and the Mi Pad 5 Pro 5G, the rest of the world will only see one model. As far as we can tell, Xiaomi has rebranded the Mi Pad 5 4G as the Pad 5, without making any hardware adjustments.",
					promo: true,
					src: "https://cdn.andro4all.com/files/2021/10/Diseno-de-la-Xiaomi-Pad-5.jpg",
					id:"5"
				},
				{
					title:"Sixth",
					desc:"A magnificent 8.3-inch Liquid Retina display on the entire front panel, True Tone technology and a brightness of 500 cd/m2. Ultra-wide-angle 12 MP front camera with 'In the spotlight' function for more convenient video communication.",
					promo: true,
					src: "https://www.iphones.ru/wp-content/uploads/2021/10/ipad-mini-6-review-iphonesru-10.jpg",
					id:"6"
				}
			]
		} 	
	}
} 
</script>

