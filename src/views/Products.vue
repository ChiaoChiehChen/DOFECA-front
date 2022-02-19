<template>
  <v-main id="products" class="mt-10">
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-list flat>
            <v-list-item-group color="#9d8460">
              <v-list-item>
                  <v-list-item-title>ALL</v-list-item-title>
              </v-list-item>
              <v-list-item>
                  <v-list-item-title>深焙</v-list-item-title>
              </v-list-item>
              <v-list-item>
                  <v-list-item-title>中焙</v-list-item-title>
              </v-list-item>
              <v-list-item>
                  <v-list-item-title>淺焙</v-list-item-title>
              </v-list-item>
              <v-list-item>
                  <v-list-item-title>相關設備</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <!-- <v-tabs vertical left>
            <v-tab>
              all
            </v-tab>
            <v-tab>
              Option 2
            </v-tab>
            <v-tab>
              Option 3
            </v-tab>
          </v-tabs>-->
        </v-col>
        <v-col cols="9">
          <v-row>
            <v-col cols="12" md="6" lg="3" v-for="product in products" :key="product._id">
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
