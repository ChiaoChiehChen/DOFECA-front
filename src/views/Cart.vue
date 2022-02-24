<template>
  <v-main id="cart" class="mt-10" rounded-lg>
    <v-container>
      <v-stepper class="stepper mx-auto" v-model="e1" max-width="1200px" >
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

          <!-- 訂購資訊 -->
          <v-stepper-content step="2">
            <v-form>
              <v-row>
                <v-col cols="12">
                  <h1>訂購資訊</h1>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.recipient"
                    label="收件人"
                    type="text"
                    hint="必填欄位"
                    :rules="rules"
                    prepend-icon="mdi-account"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.phone"
                    label="收件人電話"
                    type="text"
                    :rules="rules"
                    hint="必填欄位"
                    prepend-icon="mdi-phone"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.email"
                    label="收件人E-mail"
                    :rules="emailRules"
                    hint="請輸入正確信箱格式"
                    prepend-icon="mdi-email"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <h3>送貨方式</h3>
                  <v-radio-group v-model="form.delivery" row>
                    <v-radio label="工作室自取" value="工作室自取"></v-radio>
                    <v-radio label="宅配" value="宅配"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="6">
                  <h3>付款方式</h3>
                  <v-radio-group v-model="form.payment" row>
                    <v-radio label="ATM轉帳" value="ATM轉帳"></v-radio>
                    <v-radio label="貨到付款" value="貨到付款"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="form.address"
                    label="收件地址"
                    :rules="rules"
                    hint="請輸入正確地址"
                    prepend-icon="mdi-map-marker"
                    type="text"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    name="input-7-1"
                    v-model="form.memo"
                    label="留言區"
                    hint="有什麼話想對賣家說嗎?"
                    clear-icon="mdi-close-circle"
                    clearable
                    outlined
                    auto-grow
                    type="text"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-form>

            <div class="text-end">
              <v-btn text @click="e1 = 1">上一步</v-btn>&emsp;
              <v-btn color="primary" @click="e1 = 3">提交訂單</v-btn>
            </div>
          </v-stepper-content>

          <!-- 訂單確認 -->
          <v-stepper-content step="3">
            <h1 class="text-center">訂單確認</h1>
            <v-simple-table class="checkTable text-center" :items="form">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">項目</th>
                    <th class="text-center">內容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>收件人</td>
                    <td>{{ form.recipient }}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>電話</td>
                    <td>{{ form.phone }}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>E-mail</td>
                    <td>{{ form.email }}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>付款方式</td>
                    <td>{{ form.payment }}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>總金額</td>
                    <td>NT${{ total }}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>送貨方式</td>
                    <td>{{ form.delivery }}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>送貨地址</td>
                    <td>{{ form.address }}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>備註事項</td>
                    <td>{{ form.memo }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            <div class="text-end">
              <v-btn color="primary" @click="e1 = 2">上一步</v-btn>&emsp;
              <v-btn text @click="checkout" :disabled="products.length === 0">結帳</v-btn>
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
      ],
      form: {
        recipient: '',
        phone: '',
        email: '',
        delivery: '',
        payment: '',
        address: '',
        memo: ''
      },
      rules: [v => !!v || '必填欄位'],
      emailRules: [
        v => !!v || '信箱必填',
        v => /.+@.+\..+/.test(v) || '請輸入正確信箱格式'
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
    },
    async checkout () {
      try {
        await this.api.post('/orders', this.form, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        // console.log(this.form)
        // 導向訂單頁
        this.$router.push('/member')
        // 購物車歸0
        this.$store.commit('user/updateCart', 0)
      } catch (error) {
        console.log(error)
        this.$swal.fire({
          icon: 'error',
          title: '失敗',
          text: '結帳失敗'
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
