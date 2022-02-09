<template>
  <div id="home">
    <swiper class="swiper chiao_swiper" :options="swiperOption">
      <swiper-slide>
        <v-parallax class="swiper_img"  height="2500"
        src="https://picsum.photos/1920/1080?random=10"
        ></v-parallax>
        <v-img></v-img>
      </swiper-slide>
      <swiper-slide>
        <v-parallax class="swiper_img" height="2500"
        src="https://picsum.photos/1920/1080?random=9"
        ></v-parallax>
      </swiper-slide>
      <swiper-slide>
        <v-parallax class="swiper_img" height="2500"
        src="https://picsum.photos/1920/1080?random=8"
        ></v-parallax>
      </swiper-slide>
      <swiper-slide>
        <v-parallax class="swiper_img" height="2500"
        src="https://picsum.photos/1920/1080?random=7"
        ></v-parallax>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <v-container>
      <div>
        <span>
          <img src="../assets/cafebean.png" alt="">
        </span>
      </div>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Footer from '../components/Footer.vue'

export default {
  name: 'swiper-example-autoplay',
  title: 'Autoplay',
  components: {
    Swiper,
    SwiperSlide,
    Footer
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
