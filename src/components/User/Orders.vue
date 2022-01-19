<template> 
	<v-container>
		<v-layout row> 
		<v-flex xs12 sm6 offset-sm3>
					<h1 class="text--secondary mb-3 mt-3">Orders</h1>
	<v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list subheader
    two-line
    flat>
        <v-list-item v-for="order in orders" :key="order.id">
          
          <v-list-item-content>
            <v-list-item-title>{{order.name}}</v-list-item-title>
			<v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
          </v-list-item-content>

	<v-list-item-action>
		<v-checkbox
		:input-value="order.done"
		
		color="#B85252"
    @click="markDone(order)">
		</v-checkbox>
    </v-list-item-action>

	<v-list-item-action>
		<v-btn class="#F58840" :to="'/ad/' + order.adId">Open</v-btn>
    </v-list-item-action>

        </v-list-item>
    </v-list>
  </v-card>
		</v-flex>
		</v-layout> 
	</v-container>
</template>

<script>
  export default {
    data() {
      return{
        orders:[
          {
            id:"123",
            name:"Lida",
            phone:"+79787314451",
            adId:"1",
            done:true
          },
          {
            id:"124",
            name:"Mark",
            phone:"+79789544164",
            adId:"2",
            done:true
          },
          {
            id:"125",
            name:"Froy",
            phone:"+79780714777",
            adId:"3",
            done:true
          },
          {
            id:"126",
            name:"Emili",
            phone:"+79780475101",
            adId:"4",
            done:true
          },
          {
            id:"127",
            name:"Sam",
            phone:"+79771894620",
            adId:"5",
            done:true
          },
          {
            id:"128",
            name:"Mark",
            phone:"+79780179662",
            adId:"6",
            done:true
          }
        ]
      }
    },
    mathods:{
      markDone(order){
        order.done=!order.done
        console.log(order.done)
      }
    } 
  }
</script>