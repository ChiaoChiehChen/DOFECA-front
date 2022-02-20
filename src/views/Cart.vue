<template>
  <v-main id="cart">
    <v-container>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1" editable>購物車</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2" editable>聯絡資訊</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3" editable>確認結帳</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <!-- 購物車 -->
          <v-stepper-content step="1">
            <v-data-table :headers="headers" :items="products">
              <template v-slot:item.image="{ item }">
                <!-- {{ item }} -->
                <v-img
                  v-if="item.product.image"
                  :src="item.product.image"
                  max-width="100"
                  max-height="100px"
                ></v-img>
              </template>
              <template v-slot:item.name="{ item }">{{ item.product.name }}</template>
              <template v-slot:item.price="{ item }">NT${{ item.product.price }}</template>
              <!-- <template v-slot:item.action="{ item }">
                <v-text-field v-model="item.quantity" style="width:150px">
                  <template v-slot:prepend>
                    <v-icon @click="decrement">mdi-minus</v-icon>
                  </template>
                  <template v-slot:append>
                    <v-icon @click="decrement">mdi-plus</v-icon>
                  </template>
                </v-text-field>
              </template> -->
            </v-data-table>

            <v-btn color="primary" right to="/products">回商品頁</v-btn>
            <v-btn text right @click="e1 = 2">下一步</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

            <v-btn text @click="e1 = 2">Cancel</v-btn>
            <v-btn color="primary" @click="e1 = 3">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

            <v-btn color="primary" @click="e1 = 2">Continue</v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      e1: 1,
      products: [],
      headers: [
        { text: '產品圖片', value: 'image' },
        { text: '產品名稱', value: 'name' },
        { text: '產品價錢', value: 'price' },
        { text: '產品數量', value: 'quantity' },
        { text: '產品操作', value: 'action' }
      ]
    }
  },
  methods: {
    decrement () {
      this.item.quantity--
    },
    increment () {
      this.item.quantity++
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me/cart', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
    } catch (error) {
      console.log(error)
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得購物車失敗'
      })
    }
  }
}
</script>
