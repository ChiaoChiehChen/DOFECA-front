<template>
  <v-main id="register">
    <v-container class="reg_con">
      <h1 class="text-center">Join us!</h1>
      <v-row width="400" class="mt-md-5  ">
        <v-col class="d-flex justify-center align-center" cols="12">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card class="reg_box mx-auto" width="420" height="500" :elevation="hover ? 10 : 2">
                <v-card-title>
                  <h1 class="mx-auto mt-5">Register</h1>
                </v-card-title>
                <v-divider class="ma-4"></v-divider>
                <v-card-text>
                  <v-form v-model="valid" @submit.prevent="register" ref="form">
                  <v-text-field
                      v-model="form.email"
                      label="E-mail"
                      :rules="emailRules"
                      hint="請輸入正確信箱格式"
                      prepend-icon="mdi-email"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="form.name"
                      label="Your Name"
                      :rules="nameRules"
                      hint="名字必填"
                      prepend-icon="mdi-account"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="form.account"
                      label="Create New Account"
                      :rules="inputRules"
                      hint="帳號長度為 4 到 20 個字"
                      prepend-icon="mdi-account-circle"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="form.password"
                      :type="showPassword ? 'text' : 'password'"
                      label="Create Password"
                      :rules="inputRules"
                      hint="密碼長度為 4 到 20 個字"
                      prepend-icon="mdi-lock"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"
                      required
                    ></v-text-field>
                    <v-card-actions class="d-flex justify-center align-center">
                      <v-btn class="mt-5 mt-md-2" color="brown darken-1"
                      type="submit" plain>Sign Up</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card-text>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
// import validator from 'validator'

export default {
  data () {
    return {
      valid: true,
      form: {
        account: '',
        password: '',
        email: '',
        name: ''
      },
      showPassword: false,
      inputRules: [
        v => !!v || '必填',
        v => (v && v.length >= 4 && v.length <= 20) || '長度為 4 到 20 個字'
      ],
      emailRules: [
        v => !!v || '必填',
        v => /.+@.+\..+/.test(v) || '請輸入正確信箱格式'
      ],
      nameRules: [
        v => !!v || '必填'
      ]
    }
  },
  // computed: {
  //   state () {
  //     return {
  //       account: this.form.account.length === 0 ? null : this.form.account.length >= 4 && this.form.account.length <= 20,
  //       password: this.form.password.length === 0 ? null : this.form.password.length >= 4 && this.form.password.length <= 20,
  //       email: this.form.email.length === 0 ? null : validator.isEmail(this.form.email)
  //     }
  //   }
  // },
  methods: {
    async register () {
      const valid = this.$refs.form.validate()
      if (!valid) return
      try {
        await this.api.post('/users', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: error.response.data.message
        })
      }
    }
  }
}
</script>
