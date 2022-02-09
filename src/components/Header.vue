<template>
  <nav>
    <v-app-bar id="header" class="px-md-10" app color="white" height="80" prominent elevate-on-scroll>
      <v-app-bar-nav-icon class="hidden-md-and-up mt-3" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <router-link to="/" class="a">
        <v-toolbar-title class="logo">
          <img class="my-2 logo_img" src="../assets/dofecalogo.png" alt="DOFECA" />
        </v-toolbar-title>
      </router-link>

      <v-toolbar-items class="hidden-md-and-down">
        <v-row align="center" justify="space-around">
          <v-col >
            <v-btn class="nav-btn subtitle-1" plain text to="/product">All products</v-btn>
            <v-btn class="subtitle-1" retain-focus-on-click text >News</v-btn>
            <v-btn class="subtitle-1" text to="/about">About Us</v-btn>
          </v-col>
        </v-row>
        <!-- <template v-slot:extension></template> -->
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-menu open-on-hover bottom offset-y v-if="!user.isLogin">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class=" mt-5 hidden-md-and-down" text v-bind="attrs" v-on="on">Member</v-btn>
        </template>

        <v-list>
          <v-list-item class="d-flex">
            <v-list-item-title>
              <v-btn text v-if="!user.isLogin" to="/login">Login</v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item class="d-flex">
            <v-list-item-title>
              <v-btn text v-if="!user.isLogin" to="/register">Register</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text v-if="user.isLogin">Order</v-btn>
      <v-btn text v-if="user.isLogin" @click="logout">Logout</v-btn>
      <v-btn class="mt-3" icon to="/cart">
        <v-icon>mdi-cart-variant</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- 側邊欄 -->
    <v-navigation-drawer v-model="drawer" absolute class="drawer hidden-md-and-up">
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="brown--text text--lighten2">
          <v-list-item to="/">
            <v-list-item-title>
              <img class="drawer_logo" src="../assets/dofecalogo.png" alt="">
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="mt-5" to="/product">
            <v-list-item-title>All Products</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>News</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-title>
              About Us
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-list-group :value="false" v-if="!user.isLogin">
          <template v-slot:activator>
            <v-list-item-title>Member</v-list-item-title>
          </template>
          <v-list-item to="/login" v-if="!user.isLogin">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item to="/register" v-if="!user.isLogin">
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      group: null
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    }
  },
  async created () {
    this.$store.dispatch('user/getInfo')
  }
}
</script>
