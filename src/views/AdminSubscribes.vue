<template>
  <v-main id="subscribes">
    <v-container>
      <v-row>
        <v-col>
          <v-data-table :headers="headers" :items="subscribes">
            <!-- {{ item }} -->
            <template v-slot:item.="{ item }">{{ item.email }}</template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      subscribes: [],
      headers: [
        { text: '訂閱者', value: 'email' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/subscribes/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.subscribes = data.result
      console.log(this.subscribes)
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
