<template>
  <v-main id="news">
    <v-container>
      <v-row>
        <v-col>
          <u-animate-container>
            <u-animate
              name="fadeIn"
              delay="1s"
              duration="5s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false"
            >
              <v-img src="../assets/lessons.png"></v-img>
            </u-animate>
          </u-animate-container>
        </v-col>
        <v-col cols="12" class="mt-5">
          <u-animate-container>
            <u-animate
              name="fadeIn"
              delay="1s"
              duration="5s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false"
            >
              <div class="activity">
                <p class="text-center">想更了解一杯咖啡，如何從產區生豆變成香氣四溢的熟豆嗎?</p>
                <p class="text-center">淺顯易懂的基礎烘豆課程，讓您快速了解烘豆原理</p>
              </div>
            </u-animate>
          </u-animate-container>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-data-table class="lesson_table mt-5" :headers="headers" :items="lessons">
            <template v-slot:item.lessonName="{ item }">
              <!-- {{item}} -->
              <div>{{ item.lessonName }}</div>
            </template>
            <template v-slot:item.price="{ item }">
              <div>NT${{ item.price }}</div>
            </template>
            <template v-slot:item.action="{ item }">
              <v-btn color="#f7b267" @click="signUp(item)">報名</v-btn>
            </template>
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
        { text: '課程報名', value: 'action' }
      ],
      form: {
        lessonName: '',
        price: ''
      }
    }
  },
  methods: {
    signUp (item) {
      // console.log(item)
      console.log(this.lessons)
      if (this.user.token.length === 0) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請先登入'
        })
        this.$route.push('/')
      } else {
        this.$store.commit('user/lessons', item)
        this.$router.push('/newsForm')
      }
    }

  },
  async created () {
    try {
      const { data } = await this.api.get('/lessons')
      this.lessons = data.result
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
