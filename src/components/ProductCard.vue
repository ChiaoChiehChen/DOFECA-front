<template>
<router-link id="productcard" :to='"/product/" + product._id'>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="card-product ma-5" width="400">
        <v-img class="card-product-img" :src="product.image">
          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#036358">
              <v-img
              class="bean"
              v-if="product.category.big === '咖啡豆'"
              src="../assets/package.png"></v-img>
              <v-img
              class="powder"
              v-if="product.category.big === '咖啡粉'"
              src="../assets/powderpackage.png"></v-img>
              <v-img
              class="capsule"
              v-if="product.category.big === '膠囊咖啡'"
              src="../assets/capsulepackage.png"></v-img>
            </v-overlay>
          </v-fade-transition>
        </v-img>

        <v-card-subtitle class="pt-1 pb-0 px-3">
          {{ product.category.big}}-{{ product.category.small}}
        </v-card-subtitle>

          <v-card-title class="px-3 pt-1" >
            <h1>{{ product.name }}</h1>
          </v-card-title>

        <v-card-text>
          <h3>{{ 'NT$' + '&emsp;' + product.price }}</h3>
        </v-card-text>
      </v-card>
    </template>
  </v-hover>
  </router-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      overlay: false
    }
  }
}
</script>
