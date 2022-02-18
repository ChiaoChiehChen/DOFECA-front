<template>
  <v-hover >
    <template v-slot:default="{ hover }">
      <v-card
        class="card-product mx-auto"
        max-width="344"
      >
        <v-img :src="product.image"></v-img>

        <v-card-title>
          <h2>{{ product.name }}</h2>
        </v-card-title>
        <v-card-text>
          <h3>{{ 'NT$-' + product.price }}</h3>
        </v-card-text>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
            <v-btn>See more info</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
