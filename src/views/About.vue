<template>
  <v-main id="about">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <u-animate-container>
            <u-animate
              name="fadeIn"
              delay="0s"
              duration="5s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false"
            >
              <v-img src="../assets/ilovecafe.jpg"></v-img>
            </u-animate>
          </u-animate-container>
        </v-col>
        <v-col align-center cols="12" md="6">
          <div class="aaa d-flex justify-center align-center">
            <u-animate-container>
              <u-animate
                name="fadeIn"
                delay="1s"
                duration="5s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false"
              >
                <h1 class="text-center">
                  DOFECA，有品味的好咖啡!
                  <br />我們是一群熱愛咖啡的好夥伴
                  <br />因為咖啡,我們相遇了
                  <br />為未來目標共同努力
                  <br />
                  <br />咖啡為您我相伴相隨美好情感的生活享樂。
                </h1>
              </u-animate>
            </u-animate-container>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col></v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
