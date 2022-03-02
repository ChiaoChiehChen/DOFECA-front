<template>
  <nav id="header">
    <v-app-bar
      class="appBar px-md-10"
      app
      color="white"
      height="80"
      prominent
      elevate-on-scroll
    >
          <!-- elevate-on-scroll -->
                <!-- elevation="6" -->
      <v-app-bar-nav-icon class="hidden-md-and-up mt-3" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <router-link to="/">
        <v-toolbar-title class="logo mt-md-0">
          <img class="logo_img" src="../assets/dofecalogo.png" alt="DOFECA" />
        </v-toolbar-title>
      </router-link>

      <v-toolbar-items class="hidden-md-and-down">
      <v-row align="center" justify="space-around">
        <v-col>
          <!-- <v-btn class="subtitle-1" text to="/about">About Us</v-btn> -->
          <!-- <v-btn class="subtitle-1" retain-focus-on-click text to="/news">News</v-btn> -->
          <!-- <v-btn class="nav-btn subtitle-1" color="#9d8460" plain text to="/products">Products</v-btn> -->
          <span class="headertitle">
            <v-hover v-slot="{ hover }">
              <v-btn text @click.native.stop.prevent="">
                About Us
                <v-expand-transition>
                  <v-btn
                    text
                    to="/about"
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out btn_reveal"
                  >關於我們</v-btn>
                </v-expand-transition>
              </v-btn>
            </v-hover>
          </span>
          <span class="headertitle">
            <v-hover v-slot="{ hover }">
              <v-btn class="" text to="/news">
                News
                <v-expand-transition>
                  <v-btn
                    text
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out btn_reveal"
                  >最新消息</v-btn>
                </v-expand-transition>
              </v-btn>
            </v-hover>
          </span>
          <span class="headertitle">
            <v-hover v-slot="{ hover }">
              <v-btn class="" text to="/products">
                Products
                <v-expand-transition>
                  <v-btn
                    text
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out btn_reveal"
                  >線上購物</v-btn>
                </v-expand-transition>
              </v-btn>
            </v-hover>
          </span>
        </v-col>
      </v-row>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <!-- 登入前 -->
      <v-menu  bottom offset-y v-if="!user.isLogin">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="header_icon mt-3 hidden-md-and-down" icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
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

      <v-btn class="mt-3 header_icon hidden-md-and-down" icon v-if="user.isLogin" to="/member">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn class="mt-3 header_icon" icon to="/cart">
        <v-icon>mdi-cart-variant</v-icon>
        <v-badge color="red" v-if="user.cart > 0" :content="user.cart"></v-badge>
      </v-btn>
      <v-btn class="mt-3 header_icon" icon v-if="user.isLogin && user.isAdmin" to="/admin">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
      <v-btn class="mt-3 header_icon hidden-md-and-down" icon v-if="user.isLogin" @click="logout">
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- 側邊欄 -->
    <v-navigation-drawer v-model="drawer" absolute class="nav_burger hidden-md-and-up">
      <div class="drawer mt-3">
        <img class="drawer_logo" src="../assets/dofecalogo.png" alt />
      </div>
      <v-list nav dense>
        <!-- 登入前 -->
        <v-list-group class="nav_list" :value="false" v-if="!user.isLogin" active-class="brown--text text--lighten2">
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
        <!-- 登入後member -->
        <v-list-group class="nav_list" :value="false" v-if="user.isLogin" active-class="brown--text text--lighten2">
          <template v-slot:activator>
            <v-list-item-title>Member</v-list-item-title>
          </template>
          <v-list-item to="/member/memberOrders" v-if="user.isLogin">
            <v-list-item-title>MemberOrders</v-list-item-title>
          </v-list-item>
          <v-list-item to="/member/memberLessons" v-if="user.isLogin">
            <v-list-item-title>MemberLessons</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item-group class="nav_list" v-model="group" active-class="brown--text text--lighten2">
          <!-- <v-divider></v-divider> -->
          <v-list-item to="/about">
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item>

          <v-list-item to="/news">
            <v-list-item-title>News</v-list-item-title>
          </v-list-item>

          <v-list-item to="/products">
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="user.isLogin" @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
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
