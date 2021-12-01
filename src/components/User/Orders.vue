<template> 
	<v-container>
		<v-layout row> 
		<v-flex xs12 sm6 offset-sm3>
					<h1 class="text--secondary mb-3 mt-3">Orders</h1>
	<v-card
    class="mx-auto"
    max-width="400"
    tile
  >
    <v-list rounded>

      <v-list-item-group
        v-model="selectedItem"
        color="#FC997C"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
			<v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
          </v-list-item-content>

	<v-list-item-action>
		<v-checkbox
		:input-value="active"
		color="#B85252">
		</v-checkbox>
    </v-list-item-action>

	<v-list-item-action>
		<v-btn class="#F58840">Open</v-btn>
    </v-list-item-action>


        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
		</v-flex>
		</v-layout> 
	</v-container>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 1,
      items: [
        { text: 'Notifications', icon: 'mdi-bell-ring' },
      ],
    }),
  }
</script>