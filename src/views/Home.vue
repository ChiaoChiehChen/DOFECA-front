<template>
  <div id="home">
    <div>
    <swiper class="swiper chiao_swiper" :options="swiperOption">
      <swiper-slide>
        <v-parallax
          class="swiper_img"
          height="1400"
          src="../assets/swiper2.jpg"
        ></v-parallax>
        <v-img></v-img>
      </swiper-slide>
      <swiper-slide>
        <v-parallax
        class="swiper_img"
        height="1400"
        src="../assets/swiper1.jpg"></v-parallax>
      </swiper-slide>
      <swiper-slide>
        <v-parallax
        class="swiper_img"
        height="1400"
        src="../assets/swiper4.jpg"></v-parallax>
      </swiper-slide>
      <swiper-slide>
        <v-parallax
        class="swiper_img"
        height="1400"
        src="../assets/swiper3.jpg"></v-parallax>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    </div>

    <v-container id="second" class="home_coffee ma-0 pa-0" fluid>
      <v-row justify="center" align-content="center">
        <v-col class="home_col text-center" cols="6" md="3">
            <router-link to="/">
                <img class="beans" src="../assets/cafebean.png" alt="">
                <p class="text-center" color="secondary">coffee powder</p>
            </router-link>
        </v-col>
        <v-col class="home_col text-center" cols="6" md="3" align-self="center">
            <router-link to="/">
                <img class="powder" src="../assets/coffeepowder.png" alt="">
                <p class="text-center" color="secondary">coffee powder</p>
            </router-link>
        </v-col>
        <v-col class="home_col text-center" cols="6" md="3" align-self="end">
            <router-link to="/">
                <img class="cupsule" src="../assets/cupsulecoffee.png" alt="">
                <p class="text-center" color="secondary">coffee powder</p>
            </router-link>
        </v-col>
        <v-col class=" home_coltext-center" cols="6" md="3" align-self="center">
            <router-link to="/">
                <img class="powder" src="../assets/coffeepowder.png" alt="">
                <p class="text-center" color="secondary">coffee powder</p>
            </router-link>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="third">
      <v-row>
        <v-col class="text-center" cols="12" md="6" order-md="2">
          <img src="https://picsum.photos/450/600/?random=10">
        </v-col>
        <v-col class="home_intro" cols="12" md="6" order-md="1">
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ad aliquid saepe expedita, magnam voluptas debitis sed, inventore odit illum aperiam tempora. Eius, blanditiis quam. Quae quod harum deserunt iure debitis eligendi saepe, tempore explicabo minus eaque dolorem vero aut pariatur rerum perferendis hic, consequatur labore mollitia numquam libero. Odio id molestias pariatur accusamus eos alias possimus architecto quibusdam. Laboriosam amet dolor ut libero culpa impedit modi, voluptate pariatur facere. Error eligendi perspiciatis laudantium rerum aliquid repellat, animi voluptatibus hic quasi voluptatem quam molestiae ad dolores, illo delectus impedit enim deserunt praesentium optio perferendis aperiam! Corporis alias veniam voluptatem excepturi?</p>
            <v-btn color="#9d8460" text plain>Full Story</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-autoplay',
  title: 'Autoplay',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        spaceBetween: 0,
        effect: 'fade',
        centeredSlides: true,
        parallax: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>
