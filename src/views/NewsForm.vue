<template>
  <v-main id="cart" class="mt-10" rounded-lg>
    <v-container>
      <v-stepper class="stepper mx-auto" v-model="e1" max-width="1200px">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1" editable>聯絡資訊</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2" editable>確認報名</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>

          <!-- 報名資訊填寫 -->
          <v-stepper-content step="1">
            <v-form>
              <v-row>
                <v-col cols="12">
                  <h1>報名資料</h1>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.applicant"
                    label="報名者"
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
                    label="報名者電話"
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
                    label="報名者E-mail"
                    :rules="emailRules"
                    hint="請輸入正確信箱格式"
                    prepend-icon="mdi-email"
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
              <v-btn text to="/news">上一步</v-btn>&emsp;
              <v-btn color="primary" @click="e1 = 2">下一步</v-btn>
            </div>
          </v-stepper-content>

          <!-- 訂單確認 -->
          <v-stepper-content step="2">
            <h1 class="text-center">訂單確認</h1>
            <v-simple-table class="checkTable text-center" :items="form">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">項目</th>
                    <th class="text-center">資訊</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>報名人</td>
                    <td>{{ form.applicant }}</td>
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
                    <td>備註事項</td>
                    <td>{{ form.memo }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            <div class="text-end">
              <v-btn color="primary" @click="e1 = 1">上一步</v-btn>&emsp;
              <v-btn text @click="applyForm">結帳</v-btn>
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
      form: {
        applicant: '',
        phone: '',
        email: '',
        memo: '',
        _id: ''
      },
      rules: [v => !!v || '必填欄位'],
      emailRules: [
        v => !!v || '信箱必填',
        v => /.+@.+\..+/.test(v) || '請輸入正確信箱格式'
      ]
    }
  },
  methods: {
    async applyForm () {
      console.log(this.form)
      try {
        await this.api.post('/lessons/apply', this.form, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$swal.fire({
          icon: 'success',
          title: '成功',
          text: '報名成功'
        })
        this.$router.push('/member/memberLessons')
      } catch (error) {
        // console.log(error)
        this.$swal.fire({
          icon: 'error',
          title: '失敗',
          text: '報名失敗'
        })
      }
    }
  },
  async created () {
    // console.log(111)
    // console.log(this.user.lessons)
    this.form.lessonName = this.user.lessons.lessonName
    this.form.price = this.user.lessons.price
    this.form.applicant = this.user.lessons.applicant
    this.form.phone = this.user.lessons.phone
    this.form.email = this.user.lessons.email
    this.form.memo = this.user.lessons.memo
    this.form._id = this.user.lessons._id
  }
}
</script>
