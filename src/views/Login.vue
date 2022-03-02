<template>
  <v-main id="login">
    <v-container>
      <h1 class="text-center">Welcome back</h1>
      <div class="login_con">
        <v-row class="mt-md-5">
          <v-col cols="12" md="0" lg="2"></v-col>
          <v-col class="d-flex justify-center align-center" cols="12" md="6" lg="4">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="rounded-lg" width="400" height="420" :elevation="hover ? 10 : 2">
                  <v-card-title>
                    <h1 class="mx-auto mt-5">Login</h1>
                  </v-card-title>
                  <v-divider class="ma-4"></v-divider>
                  <v-card-text>
                    <v-form class="mt-5" v-model="valid" @submit.prevent="login" ref="form">
                      <v-text-field
                        v-model="form.account"
                        label="My account"
                        :rules="inputRules"
                        :state="state.account"
                        hint="帳號長度為 4 到 20 個字"
                        prepend-icon="mdi-account-circle"
                        required
                      ></v-text-field>

                      <v-text-field
                        v-model="form.password"
                        label="My Password"
                        :rules="inputRules"
                        :state="state.password"
                        hint="密碼長度為 4 到 20 個字"
                        prepend-icon="mdi-lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        required
                      ></v-text-field>
                      <v-card-actions class="d-flex justify-center align-center">
                        <v-btn class="login_btn mt-10 mt-md-5" type="submit" plain>
                          <span></span>
                          <span></span>
                          Login
                        </v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card-text>
                </v-card>
              </template>
            </v-hover>
          </v-col>

          <v-col class="d-flex justify-center align-center" cols="12" md="4">
            <v-card class="reg_box" flat>
              <v-card-title>
                <h1>New to DOFECA ?</h1>
              </v-card-title>
              <v-card-text>
                <p class="text-h6">Create an account to enjoy the benefits!</p>
                <div class="text-center mt-n6">
                  <v-btn class="reg_btn mt-12" color="#8D6E63" plain text to="/register">Register</v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="0" lg="2"></v-col>
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      form: {
        account: '',
        password: ''
      },
      showPassword: false,
      inputRules: [
        v => !!v || '必填',
        v => (v && v.length >= 4 && v.length <= 20) || '長度為 4 到 20 個字'
      ]
    }
  },
  computed: {
    state () {
      return {
        account: this.form.account.length === 0 ? null : this.form.account.length >= 4 && this.form.account.length <= 20,
        password: this.form.password.length === 0 ? null : this.form.password.length >= 4 && this.form.password.length <= 20
      }
    }
  },
  methods: {
    login () {
      const valid = this.$refs.form.validate()
      if (!valid) return
      this.$store.dispatch('user/login', this.form)
    }
  }
}
</script>
