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
		v-for="ad in myAds" 
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
	computed: {
		myAds() {
			return this.$store.getters.myAds
		}
	}
} 
</script>

