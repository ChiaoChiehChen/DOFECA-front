<template>
  <v-main id="admin" class="mt-10">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-sheet>
            <v-tabs
            class="tab_list"
            background-color="brown"
            dark
            fixed-tabs
            >
              <v-tabs-slider color="white"></v-tabs-slider>
              <v-tab class="tab_name" to="/admin">後台首頁</v-tab>
              <v-tab class="tab_name" to="/admin/adminproducts">產品管理</v-tab>
              <v-tab class="tab_name" to="/admin/adminorders">訂單管理</v-tab>
              <v-tab class="tab_name" to="/admin/adminlessons">文章管理</v-tab>
              <v-tab class="tab_name">報名訂單管理</v-tab>
            </v-tabs>
          </v-sheet>
        </v-col>
        <v-col col="12">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
