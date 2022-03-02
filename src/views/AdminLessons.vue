<template>
  <div id="adminlessons">
    <v-container>
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="700px">
          <template v-slot:activator="{ on, adds }">
            <v-btn
              class="mt-2"
              color="#8e412e"
              v-bind="adds"
              v-on="on"
              elevation="3"
              outlined
              >
              新增
            </v-btn>
          </template>
          <v-card>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon x-large @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-title>
              新增課程
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-form ref="observer">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.lessonName"
                      label="課程名稱"
                      type="text"
                      :rules="nameRules"
                      hint="必填欄位"
                      required
                      clear-icon="mdi-close-circle"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model.number="form.price"
                      label="價錢"
                      type="number"
                      min="0"
                      :rules="priceRules"
                      hint="必填欄位"
                      required
                      append-icon="mdi-currency-twd"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-radio-group v-model="form.sell" row>
                      <v-radio label="上架" :value="true"></v-radio>
                      <v-radio label="下架" :value="false"></v-radio>
                    </v-radio-group>
                  </v-col>

                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                @click="resetForm"
                :disabled="btnSubmitting"
                color="#c1121f"
                dark
                raised
              >
                重置
              </v-btn>
              <v-btn
                @click="submitModal"
                :disabled="btnSubmitting"
                raised
                color="#25a244"
                dark
              >
                送出
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      產品列表
      <v-data-table class="lesson_table mt-10" :headers="headers" :items="lessons">
        <template v-slot:item.lessonName="{ item }">
        {{item}}
          <div>{{item.lessonName}}</div>
        </template>
        <template v-slot:item.price="{ item }">
          <div>NT${{item.price}}</div>
        </template>
        <template v-slot:item.sell="{ item }">
          <div class=text-center>{{ item.sell ? 'V' : '' }}</div>
        </template>
        <template v-slot:item.action="{ item }">
          <v-btn color="#f7b267"  @click="delLesson(item._id)">刪除</v-btn>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: '課程名稱', value: 'lessonName' },
        { text: '課程價錢', value: 'price' },
        { text: '課程操作', value: 'sell' },
        { text: '產品操作', value: 'action' }
      ],
      form: {
        lessonName: '',
        price: null,
        sell: false,
        _id: '',
        index: -1
      },
      lessons: [],
      nameRules: [
        v => !!v || '商品名稱必填',
        v => (v && v.length > 0) || '商品名稱必填欄位'
      ],
      priceRules: [
        v => !!v || '價格必填',
        v => (v && v >= 0) || '價格不得低於0元'
      ],
      btnSubmitting: false,
      dialog: false
    }
  },
  methods: {
    // 送出
    async submitModal (event) {
      event.preventDefault()
      // 檢查如果必填欄位未填寫
      if (!this.form.lessonName || !this.form.price) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '缺少必填欄位'
        })
        return
      }
      this.btnSubmitting = true
      try {
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/lessons', this.form, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.lessons.push(data.result)
          // console.log(this.products)
        }
        this.dialog = false

        this.resetForm()
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '錯誤',
          // text: error.response.data.message
          text: 'error.response.data.message'
        })
      }
      this.btnSubmitting = false
    },
    // 取消
    resetForm () {
      // 按送出按鈕，重置按鈕不能按
      if (this.btnSubmitting) {
        return
      }
      this.form = {
        name: '',
        price: 0,
        _id: '',
        index: -1
      }
      this.$refs.observer.reset()
    },
    // 刪除
    async delLesson (id) {
      // console.log(123)
      try {
        await this.api.delete('/lessons/' + id, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '刪除成功'
        })
        this.lessons.splice(this.form.index, 1)
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '刪除失敗'
        })
      }
    }
  },
  // 每次按新增按鈕都會是空的
  watch: {
    dialog (val) {
      if (val === false) {
        this.resetForm()
      }
    }
  },
  async created () {
    // 元件建立時，抓目前商品
    try {
      const { data } = await this.api.get('/lessons/allLessons', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.lessons = data.result
      // console.log(data.result)
    } catch (error) {
      console.log(error)
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得文章失敗'
      })
    }
  }
}
</script>
