<template> 
	<div>
	<v-container fluid>
		<v-layout row> 
			<v-flex xs14>
				<v-carousel>
					<v-carousel-item
						v-for="ad in ads"
						:key="ad.id"
						:src="ad.src"
					>
					<div class="ad-link">
						<v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
					</div>
					</v-carousel-item>
				</v-carousel>
			</v-flex>
		</v-layout> 
	</v-container>
	<v-container grid-list-lg>
		<v-layout row wrap> 
			<v-flex xs12 sm6 md4
			v-for="ad in ads"
			:key="ad.id">
				<v-card>
					<v-img
					:src="ad.src"
					height="280px"
					></v-img>
					<v-card-title primary-title>
					<div>
						<h3 class="headline mb0">
						{{ad.title}}</h3>
						<div>{{ad.desc}}</div>
					</div>
					</v-card-title>
					<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn text :to="'/ad/' + ad.id">Open</v-btn>
					<v-btn dark raised color="#B85252">
						Buy
					</v-btn>
					</v-card-actions>				
				</v-card>
			</v-flex>
		</v-layout> 
	</v-container>
	</div>
</template>

<script>
export default {
	data () { 
		return {
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
		} 	
	}
} 
</script>

<style scoped>
	.ad-link {
		position:absolute;
		bottom: 50px;
		left:10%;
		background: rgb(0,0,0,0.5);
		transform: translate(-25%,0);
		padding: 10px 30px;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
	}
</style>