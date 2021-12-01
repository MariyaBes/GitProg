<template> 
	<div>
	<v-container fluid>
		<v-layout row> 
			<v-flex xs12>
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
					height="250px"
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
				src: "https://wallpapershome.ru/images/pages/pic_h/23784.jpg",
				id:"2"
			},
			{
				title:"Third",
				desc:"Thitd Desc",
				promo: true,
				src: "https://wallpapershome.ru/images/pages/pic_h/23780.jpg",
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

<style scoped>
	.ad-link {
		position:absolute;
		bottom: 20px;
		left:10%;
		background: rgb(0,0,0,0.5);
		transform: translate(-25%,0);
		padding: 5px 15px;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
	}
</style>