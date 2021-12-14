<template> 
	<v-container>
		<v-layout row> 
			<v-flex xs12>
				<v-card class="mt-5">
							<v-img 
							height="400px"
							src="https://wallpapershome.ru/images/pages/pic_h/22770.jpg">
							</v-img>
							<v-card-text>
								<h1 class="text--primary mb-3">Galaxy Tab A7</h1>
								<p>Elegant design, amazing entertainment system and high performance turn the Galaxy Tab A7 tablet into an indispensable assistant. Enjoy your favorite activities to the fullest and share the best moments of your life. Learn, explore and be inspired.</p>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn text class="warning">Edit</v-btn>
								<v-btn text class="success">Buy</v-btn>
							</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data () { 
		return {
			valid:false,
			title:"",
			description:"",
			promo: false
		} 	
	}
}
</script>
