<template>
  <v-main>
    <v-container id="product">
      <v-overlay v-if="!sell">
        <template>
          <h1>商品已下架</h1>
        </template>
      </v-overlay>
      <v-row>
        <v-col cols="12" md="6">
          <v-img :src="image"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h1>{{ name }}</h1>
          <h3>NT$ {{ price }}</h3>
          <v-text-field
            v-model.number="quantity"
            label="數量"
            type="number"
            min="0"
            :rules="quantityRules"
            hint="必填欄位"
            required
          ></v-text-field>
          <v-btn @click="addCart">
            加入購物車
            <v-icon>mdi-cart-variant</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12">
          <br>
          <!-- 換行 white-space:pre-->
          <p style="white-space:pre">{{ description }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      price: 0,
      description: '',
      image: '',
      sell: false,
      category: '',
      quantity: 0,
      quantityRules: [
        v => !!v || '數量必填',
        v => (v && v > 0) || '數量不能小於1個'
      ]
    }
  },
  methods: {
    addCart () {
      this.$store.dispatch('user/addCart', { product: this.$route.params.id, quantity: this.quantity })
    }
  },
  async created () {
    try {
      // 路由參數抓id
      const { data } = await this.api.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.price = data.result.price
      this.description = data.result.description
      this.image = data.result.image
      this.sell = data.result.sell
      this.category = data.result.category
      document.title = `${this.name} | DOFECA`
    } catch (error) {
      this.$route.push('/')
    }
  }
}
</script>
