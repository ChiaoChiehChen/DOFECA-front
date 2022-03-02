<template>
  <v-main id="adminLessons">
    <v-container>
      <v-row>
        <v-col>
          <v-data-table :headers="headers" :items="lessons">
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
      lessons: [],
      headers: [
        { text: '課程名稱', value: 'lessonName' },
        { text: '課程價錢', value: 'price' },
        { text: '報名者', value: 'applicant', align: 'start' },
        { text: '電話', value: 'phone' },
        { text: '電子郵件', value: 'email' },
        { text: '留言板', value: 'memo' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/lessons/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.lessons = data.result
    } catch (error) {
      console.log(error)
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得課程訂單失敗'
      })
    }
  }
}
</script>
