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
					height="175px"></v-img>
				</v-flex>
				<v-flex xs8 class="pr-3">
					<v-card-text>
						<h2 class="text-primary">{{ad.title}}</h2>
						<p>{{ad.desc}}</p>
					</v-card-text>
					<v-card-actions>
						<v-space>
						</v-space>
						<v-btn color="primary" :to="'/ad/' + ad.id">Open</v-btn>
					</v-card-actions>
				</v-flex>
			</v-layout>
		</v-card>


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
					desc:"Second Desc",
					promo:true,
					src:"https://wallpapershome.ru/images/pages/pic_h/23784.jpg",
					id:"2"
				},
				{
					title:"Second",
					desc:"Second Desc",
					promo:true,
					src:"https://wallpapershome.ru/images/pages/pic_h/23780.jpg",
					id:"3"
				},
				{
					title:"Fouth",
					desc:"Fouth Desc",
					promo: true,
					src: "https://wallpapershome.ru/images/pages/pic_h/23314.jpg",
					id:"4"
				}
			]
		} 	
	}
} 
</script>

