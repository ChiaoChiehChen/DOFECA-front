<template>
<v-main>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <ProductCard></ProductCard>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  data () {
    return {
      products: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
}
</script>
