<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-data-table class="lesson_table mt-10" :headers="headers" :items="lessons">
            <template v-slot:item.lessonName="{ item }">
              <!-- {{item}} -->
              <div>{{ item.lessonName }}</div>
            </template>
            <template v-slot:item.price="{ item }">
              <div>NT${{ item.price }}</div>
            </template>
            <template v-slot:item.action="{ item }">
              <v-btn color="#f7b267" @click="applyLessons(item)">報名</v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-btn to="/newsForm"></v-btn>
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
        { text: '課程報名', value: 'action' }
      ],
      form: {
        lessonName: '',
        price: ''
      }
    }
  },
  methods: {
    async applyLessons () {
      try {

      } catch (error) {

      }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/lessons')
      this.lessons = data.result
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
