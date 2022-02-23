<template>
  <v-main id="member">
    <v-container >
      <v-row>
        <v-col cols="2">
          <v-list flat>
            <v-list-item-group color="#9d8460">
              <v-list-item>
                  <v-list-item-title >
                    <v-btn text to="/member/memberOrders">商品訂單</v-btn>
                  </v-list-item-title>
              </v-list-item>
              <v-list-item  >
                  <v-list-item-title>
                    <v-btn text to="/member/memberLessons">課程訂單</v-btn>
                  </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col cols="8">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
