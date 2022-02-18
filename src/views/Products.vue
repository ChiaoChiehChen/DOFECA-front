<template>
<v-main id="products">
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="3" v-for="product in products" :key="product._id">
        <ProductCard :product="product"></ProductCard>
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
  // 後端資料放進來
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
