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

              <template v-slot:item.quantity="{ item, index }">
                <!-- {{ index}} -->

                <v-text-field
                  v-model="item.quantity"
                  label="數量"
                  type="number"
                  min="1"
                  style="max-width:50px"
                  @input="updateCart(index, item.quantity)"
                ></v-text-field>
              </template>
              <template v-slot:item.action="{ item, index }">
                <v-btn text @click="updateCart(index, 0)">
                  <v-icon color="brown">mdi-trash-can-outline</v-icon>
                </v-btn>
              </template>
            </v-data-table>
            <h2>
              總金額: &emsp; {{ total }} &emsp;
              <v-icon>mdi-currency-twd</v-icon>
            </h2>
            <v-divider></v-divider>
            <div class="text-end">
              <v-btn class="mt-5" color="primary" right to="/products">回商品頁</v-btn>&emsp;
              <v-btn class="mt-5" @click="e1 = 2">下一步</v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-form>
              <v-row>
                <v-col cols="12">
                  <h1>訂購人資訊</h1>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="姓名"
                    type="text"
                    hint="必填欄位"
                    prepend-icon="mdi-account"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="電話"
                    type="text"
                    hint="必填欄位"
                    prepend-icon="mdi-phone"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="E-mail"
                    :rules="emailRules"
                    hint="請輸入正確信箱格式"
                    prepend-icon="mdi-email"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" >
                  <v-text-field
                    label="地址"
                    :rules="addressRules"
                    hint="請輸入正確地址"
                    prepend-icon="mdi-map-marker"
                    required
                    ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <h1>收件人資訊</h1>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="姓名"
                    type="text"
                    hint="必填欄位"
                    prepend-icon="mdi-account"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="電話"
                    type="text"
                    hint="必填欄位"
                    prepend-icon="mdi-phone"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="E-mail"
                    :rules="emailRules"
                    hint="請輸入正確信箱格式"
                    prepend-icon="mdi-email"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" >
                  <v-text-field
                    label="地址"
                    :rules="addressRules"
                    hint="請輸入正確地址"
                    prepend-icon="mdi-map-marker"
                    required
                    ></v-text-field>
                </v-col>
              </v-row>
            </v-form>

            <div class="text-end">
              <v-btn text @click="e1 = 1">上一步</v-btn>&emsp;
              <v-btn color="primary" @click="e1 = 3">下一步</v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

            <div class="text-end">
              <v-btn color="primary" @click="e1 = 2">上一步</v-btn>&emsp;
              <v-btn text @click="checkout">提交訂單</v-btn>
            </div>
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
      quantities: [],
      headers: [
        { text: '產品圖片', value: 'image' },
        { text: '產品名稱', value: 'name' },
        { text: '產品價錢', value: 'price' },
        { text: '產品數量', value: 'quantity' },
        { text: '產品操作', value: 'action' }
      ]
    }
  },
  computed: {
    total () {
      return this.products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.product.price
      }, 0)
    }
  },
  methods: {
    async updateCart (index, quantity) {
      try {
        await this.api.patch('/users/me/cart',
          { product: this.products[index].product._id, quantity },
          {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
        if (quantity === 0) {
          // 購物車產品刪掉
          this.products.splice(index, 1)
          // 購物車數字
          this.$store.commit('user/updateCart', this.user.cart - 1)
        }
      } catch (error) {
        // console.log(error)
        this.$swal.fire({
          icon: 'error',
          title: '失敗',
          text: '修改購物車失敗'
        })
      }
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
