<template>
  <v-main id="products" class="mt-10">
    <v-container>
      <v-row>
        <v-col cols="12" md="2">
        <v-list flat >
            <v-list-item-group class="products_menu" color="#9d8460">
              <v-list-item @click="filter=''">
                  <v-list-item-title >ALL</v-list-item-title>
              </v-list-item>
              <v-list-item  @click="filter='咖啡豆'">
                  <v-list-item-title>咖啡豆</v-list-item-title>
              </v-list-item>
              <v-list-item @click="filter='咖啡粉'">
                  <v-list-item-title >咖啡粉</v-list-item-title>
              </v-list-item>
              <v-list-item @click="filter='膠囊咖啡'">
                  <v-list-item-title >膠囊咖啡</v-list-item-title>
              </v-list-item>
              <v-list-item @click="filter='設備'">
                  <v-list-item-title>設備</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col cols="12" md="10">
          <v-row>
            <v-col cols="12" sm="6" lg="3" v-for="product in filterItems" :key="product._id">
              <ProductCard :product="product"></ProductCard>
            </v-col>
          </v-row>
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
      products: [],
      filter: ''
    }
  },
  computed: {
    filterItems () {
      // console.log(123)
      return this.products.filter(item => {
        if (this.filter === '') return true
        return item.category.big === this.filter
      })
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
      // console.log(this.products[0].category.big)
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
