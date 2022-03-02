<template>
  <v-main id="home">
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
        <swiper class="swiper chiao_swiper" :options="chiaoSwiper">
          <swiper-slide>
            <v-parallax class="swiper_img" height="700" src="../assets/coffee3.jpg">
              <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                  <div class="slogan">
                    <h1 class="slogan_text font-weight-bold">
                      03/03/2022
                      <br />Free Shipping Day&emsp;...
                      <v-icon class="slogan_text" color="#e29578">mdi-truck</v-icon>
                    </h1>
                    <v-btn
                      class="btn mt-10"
                      elevation="3"
                      rounded
                      dark
                      color="brown"
                      to="/products"
                    >Go shopping</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-parallax>
          </swiper-slide>
          <swiper-slide>
            <v-parallax class="swiper_img" height="700" src="../assets/coffee6.jpg">
              <v-row class="slogan2 mt-3">
                <v-col class="slogan_text2 mx-10">
                  <h1>Give Me Coffee</h1>
                  <h1 class="and">AND</h1>
                  <h1>No One Get Hurt</h1>
                </v-col>
              </v-row>
            </v-parallax>
          </swiper-slide>
          <swiper-slide>
            <v-parallax class="swiper_img" height="700" src="../assets/coffee15.jpg">
              <v-row class="slogan2 ml-3" justify="center" align="center">
                <v-col cols="1" md="6"></v-col>
                <v-col cols="11" md="6" class="slogan_text2 text-center">
                  <h1>Always Start</h1>
                  <h1>Your Day</h1>
                  <h1 class="and">with</h1>
                  <h1>Coffee</h1>
                </v-col>
              </v-row>
            </v-parallax>
          </swiper-slide>
          <swiper-slide>
            <v-parallax class="swiper_img" height="700" src="../assets/coffee11.jpg"></v-parallax>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </u-animate>
    </u-animate-container>

    <v-container id="second" class="mx-0 pa-0" fluid>
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
          <v-row justify="center" align-content="center">
            <v-col class="home_col text-center" cols="6" md="3">
              <router-link to="/products">
                <img class="bean" src="../assets/bean.png" alt />
                <h3 class="bean_name text-center" color="secondary">Coffee Beans</h3>
              </router-link>
            </v-col>
            <v-col class="home_col text-center" cols="6" md="3" align-self="center">
              <router-link to="/products">
                <img class="powder" src="../assets/coffeepowder.png" alt />
                <h3 class="powder_name text-center" color="secondary">Coffee Powder</h3>
              </router-link>
            </v-col>
            <v-col class="home_col text-center" cols="6" md="3" align-self="end">
              <router-link to="/products">
                <img class="capsule" src="../assets/cupsulecoffee.png" alt />
                <h3 class="capsule_name text-center" color="secondary">Coffee Capsule</h3>
              </router-link>
            </v-col>
            <v-col class="home_col text-center" cols="6" md="3" align-self="center">
              <router-link to="/products">
                <img class="machine" src="../assets/coffeemachine.png" alt />
                <h3 class="machine_name text-center" color="secondary">Coffee Equipment</h3>
              </router-link>
            </v-col>
          </v-row>
        </u-animate>
      </u-animate-container>
    </v-container>

    <v-container id="fourth">
      <v-row justify="center" align="center">
        <v-col cols="12" md="6" order-md="2">
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
              <div class="describe">
                <h1 class="text-center">
                  All you need to feel better is
                  <span class="coffee">coffee!</span>
                </h1>
                <h1 class="text-center">Life is short. Stay awake for it.</h1>
                <h1 class="text-center">
                  <span class="coffee">Caffeine</span> isn't a drug, it's a vitamin!
                </h1>
              </div>
            </u-animate>
          </u-animate-container>
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <div class="video">
            <video
              src="../assets/production ID_4795016.mp4"
              width="100%"
              controls
              loop
              autoplay="autoplay"
            ></video>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container id="fifth">
      <v-row>
        <v-col cols="12">
          <v-parallax class="map" height="400" src="../assets/coffeemap.jpg">
            <v-form>
              <v-container>
                <v-row justify="center">
                  <v-col cols="9" md="6" class="pr-0">
                    <v-text-field
                      v-model="form.email"
                      class="mail"
                      label="訂閱我們"
                      :rules="emailRules"
                      hint="請輸入正確信箱格式"
                      filled
                    ></v-text-field>
                  </v-col>
                  <v-col class="subscribe pl-0" cols="2" md="2">
                    <v-btn type="submit" @click="subscribe">訂閱</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-parallax>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="sixth">
      <v-row class="mt-10" justify="center" align="center">
        <v-col cols="12" class="swiper_col">
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
              <h1 class="newProducts text-center">New Products</h1>
            </u-animate>
          </u-animate-container>
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
              <swiper class="products_swiper swiper mt-10" :options="productsSwiper">
                <swiper-slide>
                  <router-link to="/product/621a04b1b83e847d9f51605c">
                    <v-card width="400" class="mx-auto">
                      <div>
                        <v-img class="bean_img" src="../assets/bean_dark.png"></v-img>
                      </div>
                      <h1 class="products_name text-center mt-5">
                        蘇門答臘咖啡豆
                        <br />NT$390
                      </h1>
                    </v-card>
                  </router-link>
                </swiper-slide>
                <swiper-slide>
                  <router-link to="/product/621a038cb83e847d9f516054">
                    <v-card width="400" class="mx-auto">
                      <v-img src="../assets/bean_medium.png"></v-img>
                      <h1 class="products_name text-center mt-5">
                        哥倫比亞咖啡豆
                        <br />NT$650
                      </h1>
                    </v-card>
                  </router-link>
                </swiper-slide>
                <swiper-slide>
                  <router-link to="/product/621a211bb83e847d9f51609e">
                    <v-card width="400" class="mx-auto">
                      <v-img class="powder_img" src="../assets/powder_medium.png"></v-img>
                      <h1 class="products_name text-center mt-5">
                        日安吾愛
                        <br />NT$330
                      </h1>
                    </v-card>
                  </router-link>
                </swiper-slide>
                <swiper-slide>
                  <router-link to="/product/621a05ffb83e847d9f516063">
                    <v-card width="400" class="mx-auto">
                      <v-img src="../assets/bean_lightlb.png"></v-img>
                      <h1 class="products_name text-center mt-5">
                        衣索比亞 草莓波波
                        <br />NT$650
                      </h1>
                    </v-card>
                  </router-link>
                </swiper-slide>
                <swiper-slide>
                  <router-link to="/product/621c8c37799cb8b996e33420">
                    <v-card width="400" class="mx-auto">
                      <v-img class="capsule_img" src="../assets/capsule_m.jpg"></v-img>
                      <h1 class="products_name text-center mt-5">
                        維也納黎尼茲歐
                        <br />NT$240
                      </h1>
                    </v-card>
                  </router-link>
                </swiper-slide>
                <swiper-slide>
                  <router-link to="/product/621c8573799cb8b996e333f4">
                    <v-card width="400" class="mx-auto">
                      <v-img class="powder_img" src="../assets/powder_light.png"></v-img>
                      <h1 class="products_name text-center mt-5">
                        衣索比亞 耶加雪菲 春樹
                        <br />NT$290
                      </h1>
                    </v-card>
                  </router-link>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </u-animate>
          </u-animate-container>
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
              <div class="text-center">
                <v-btn
                  class="products_btn mt-5"
                  color="brown"
                  dark
                  x-large
                  to="/products"
                >VIEW ALL PRODUCTS</v-btn>
              </div>
            </u-animate>
          </u-animate-container>
        </v-col>
      </v-row>
      <div class="cafeBg">
        <img src="../assets/beanbg1.png" alt="">
      </div>
    </v-container>

    <v-container id="seventh">
      <v-row>
        <v-col class="text-center" cols="12" md="6" order-md="2">
          <v-row>
            <v-col cols="4">
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
                  <v-img src="../assets/coffeeshop4.jpeg"></v-img>
                </u-animate>
              </u-animate-container>
            </v-col>
            <v-col cols="8">
              <u-animate-container>
                <u-animate
                  name="fadeIn"
                  delay="2s"
                  duration="5s"
                  :iteration="1"
                  :offset="0"
                  animateClass="animated"
                  :begin="false"
                >
                  <v-img src="../assets/coffeeshop6.jpeg"></v-img>
                </u-animate>
              </u-animate-container>
            </v-col>
            <v-col cols="8">
              <u-animate-container>
                <u-animate
                  name="fadeIn"
                  delay="3s"
                  duration="5s"
                  :iteration="1"
                  :offset="0"
                  animateClass="animated"
                  :begin="false"
                >
                  <v-img src="../assets/coffee9.jpg"></v-img>
                </u-animate>
              </u-animate-container>
            </v-col>
            <v-col cols="4">
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
                  <v-img src="../assets/coffeeshop5.jpeg"></v-img>
                </u-animate>
              </u-animate-container>
            </v-col>
            <v-col cols="6">
              <u-animate-container>
                <u-animate
                  name="fadeIn"
                  delay="3s"
                  duration="5s"
                  :iteration="1"
                  :offset="0"
                  animateClass="animated"
                  :begin="false"
                >
                  <v-img src="../assets/coffeeshop2.jpeg"></v-img>
                </u-animate>
              </u-animate-container>
            </v-col>
            <v-col cols="6">
              <u-animate-container>
                <u-animate
                  name="fadeIn"
                  delay="2s"
                  duration="5s"
                  :iteration="1"
                  :offset="0"
                  animateClass="animated"
                  :begin="false"
                >
              <v-img src="../assets/coffeeshop7.jpg"></v-img>
              </u-animate>
              </u-animate-container>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="home_intro" cols="12" md="6" order-md="1">
          <div class="describe text-center">
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
                <h1
                  class="text-center"
                >Every day, with love and attention, we roast specialty coffees for you. We carefully select each lot, develop a roasting profile for each type of grain, carefully check the quality. Only after that we are ready to offer this coffee to you.</h1>
              </u-animate>
            </u-animate-container>
            <u-animate-container>
              <u-animate
                name="fadeInLeft"
                delay="2s"
                duration="2s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false"
              >
                <v-btn class="mt-16" color="#9d8460" outlined x-large to="/about">Full Story</v-btn>
              </u-animate>
            </u-animate-container>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container></v-container>
  </v-main>
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
      form: {
        email: ''
      },
      chiaoSwiper: {
        spaceBetween: 0,
        effect: 'fade',
        centeredSlides: true,
        parallax: true,
        loop: true,
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
      },
      // 下面
      productsSwiper: {
        slidesPerView: 4,
        spaceBetween: 40,
        freeMode: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          600: {
            slidesPerView: 2
          },
          960: {
            slidesPerView: 3
          },
          1264: {
            slidesPerView: 4
          },
          1904: {
            slidesPerView: 5
          }
        }
      },
      emailRules: [
        v => !!v || '信箱必填',
        v => /.+@.+\..+/.test(v) || '請輸入正確信箱格式'
      ]
    }
  },
  methods: {
    async subscribe () {
      try {
        await this.api.post('/subscribes', this.form, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$swal.fire({
          icon: 'success',
          title: '成功',
          text: '訂閱成功'
        })
      } catch (error) {
        this.$swal.fire({
          icon: 'error',
          title: '失敗',
          text: '訂閱失敗'
        })
      }
    }
  }
}
</script>
