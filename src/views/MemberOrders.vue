<template>
  <v-container id="memberOrders">
    <v-row>
      <v-col>
        <v-data-table :headers="headers" :items="orders">
          <!-- {{ item }} -->
          <template v-slot:item._id="{ item }">{{ item._id }}</template>
          <template v-slot:item.date="{ item }">{{ new Date(item.date).toLocaleString('zh-tw') }}</template>
          <template v-slot:item.products="{ item }">
            <ul class="px-0">
              <li
                class="list"
                v-for="product in item.products"
                :key="product._id"
              >{{ product.product.name }} x {{ product.quantity }} 個</li>
            </ul>
          </template>
          <template v-slot:item.sum="{ item }">
            <p>NT$&emsp;{{ item.total }}</p>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [],
      headers: [
        { text: '訂單日期', value: 'date' },
        { text: '訂單編號', value: '_id' },
        { text: '購買商品', value: 'products', align: 'start' },
        { text: '取貨方式', value: 'delivery' },
        { text: '付款方式', value: 'payment' },
        { text: '總金額', value: 'sum' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/orders/me', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      // this.orders = data.result
      // console.log(data.result)
      this.orders = data.result.map((order) => {
        order.total = order.products.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.quantity * currentValue.product.price
        }, 0)
        return order
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得訂單失敗'
      })
    }
  }
}
</script>
