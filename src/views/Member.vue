<template>
  <v-main id="member">
    <v-container>
      <v-row justify="center" align="cemter">
        <v-col cols="12" md="2">
          <ul class="list">
            <li>
              <v-btn color="brown" text to="/member/memberOrders">商品訂單</v-btn>
            </li>
            <li>
              <v-btn color="brown" text to="/member/memberLessons">課程訂單</v-btn>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="8">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
