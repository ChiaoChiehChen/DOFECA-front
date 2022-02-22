<template>
  <v-main id="orders">
    <v-container>
      <v-data-table :headers="headers" :items="orders">
      <!-- {{ item }} -->
        <template v-slot:item._id="{ item }">
          {{item._id}}
        </template>
      </v-data-table>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      orders: [],
      headers: [
        { text: '訂單編號', value: '_id' },
        { text: '訂單日期', value: 'date' },
        { text: '購買商品', value: 'products' }
        // { text: '取貨方式', value: 'delivery' },
        // { text: '付款方式', value: 'payment' },
        // { text: '總金額', value: 'total' }

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
      this.orders = data.result
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
