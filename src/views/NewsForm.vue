<template>
  <v-main id="cart" class="mt-10" rounded-lg>
    <v-container>
      <v-stepper class="stepper mx-auto" v-model="e1" max-width="1200px">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1" editable>聯絡資訊</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2" editable>確認結帳</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <!-- 購物車 -->

          <!-- 訂購資訊 -->
          <v-stepper-content step="1">
            <v-form>
              <v-row>
                <v-col cols="12">
                  <h1>訂購資訊</h1>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.applicant"
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
              <v-btn color="primary" @click="e1 = 2">提交訂單</v-btn>
            </div>
          </v-stepper-content>

          <!-- 訂單確認 -->
          <v-stepper-content step="3">
            <h1 class="text-center">訂單確認</h1>
            <!-- <v-simple-table class="checkTable text-center" :items="form">
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
            </v-simple-table>-->

            <div class="text-end">
              <v-btn color="primary" @click="e1 = 2">上一步</v-btn>&emsp;
              <v-btn text :disabled="lessons.length === 0">結帳</v-btn>
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
      lessons: [],
      form: {
        applicant: '',
        phone: '',
        email: '',
        memo: ''
      },
      rules: [v => !!v || '必填欄位'],
      emailRules: [
        v => !!v || '信箱必填',
        v => /.+@.+\..+/.test(v) || '請輸入正確信箱格式'
      ]
    }
  },
  async applyLesson () {
    try {

    } catch (error) {

    }
  }
}
</script>
