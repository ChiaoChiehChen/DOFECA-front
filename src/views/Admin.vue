<template>
  <v-main id="admin">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-sheet>
            <v-tabs
            background-color="brown"
            dark
            fixed-tabs
            >
              <v-tabs-slider color="white"></v-tabs-slider>
              <v-tab to="/admin/products">商品管理</v-tab>
              <v-tab to="/admin/orders">訂單管理</v-tab>
              <v-tab>文章管理</v-tab>
              <v-tab>報名訂單管理</v-tab>
            </v-tabs>
          </v-sheet>
        </v-col>
        <v-col>
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
