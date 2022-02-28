<template>
  <v-main id="home">
    <v-container fluid class="ma-0 pa-0">
      <swiper class="swiper chiao_swiper" :options="chiaoSwiper">
        <swiper-slide>
          <v-parallax class="swiper_img" height="700" src="../assets/coffee3.jpg">
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <div class="slogan">
                  <h1 class="slogan_text font-weight-bold">
                    03/04/2022
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
          <v-img></v-img>
        </swiper-slide>
        <swiper-slide>
          <v-parallax class="swiper_img" height="700" src="../assets/coffee6.jpg">
            <v-row>
              <v-col cols="12"></v-col>
            </v-row>
          </v-parallax>
        </swiper-slide>
        <swiper-slide>
          <v-parallax class="swiper_img" height="700" src="../assets/coffee11.jpg"></v-parallax>
        </swiper-slide>
        <swiper-slide>
          <v-parallax class="swiper_img" height="700" src="../assets/coffee12.jpg"></v-parallax>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </v-container>

    <v-container id="second" class="mx-0 pa-0" fluid>
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
    </v-container>
    <!-- 最新消息 -->
    <v-container id="third">
      <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold text-h2">NEWS</h1>
        </v-card-title>

        <v-tabs v-model="tab" background-color="transparent" grow>
          <v-tab v-for="activity in activities" :key="activity">{{ activity }}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="activity in activities" :key="activity">
            <v-card flat>
              <v-card-text>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Name</th>
                        <th class="text-left">Calories</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="list in lists" :key="list.name">
                        <td>{{ list.name }}</td>
                        <td>
                          <v-btn to="/news">{{ list.calories }}</v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
    <v-container id="fourth">
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-parallax class="map" height="400" src="../assets/coffeemap.jpg"></v-parallax>
        </v-col>
        <v-col cols="12" md="6" order-md="2">
          <div class="describe">
            <h1 class="text-center">
              All you need to feel better is coffee!<br>
            </h1>
            <h1 class="text-center">
              Life is short. Stay awake for it.<br>
            </h1>
            <h1 class="text-center">
              Caffeine isn't a drug, it's a vitamin!
            </h1>
          </div>
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <video
            src="../assets/production ID_4795016.mp4"
            width="100%"
            controls
            autoplay="autoplay"
          ></video>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="fifth">
      <v-row class="mt-10" justify="center" align="center">
        <v-col cols="12" class="swiper_col">
          <h1 class="newProducts text-center">New Products</h1>
          <swiper class="products_swiper swiper mt-10" :options="productsSwiper">
            <swiper-slide>
              <router-link to="/product/621a04b1b83e847d9f51605c">
                <v-card width="400"  class="mx-auto">
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
              <router-link to="/product/621a04b1b83e847d9f51605c">
                <v-card width="400"  class="mx-auto">
                  <v-img src="../assets/bean_medium.png"></v-img>
                  <h1 class="products_name text-center mt-5">
                    哥倫比亞咖啡豆
                    <br />NT$650
                  </h1>
                </v-card>
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to="/product/621a04b1b83e847d9f51605c">
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
              <router-link to="/product/621a04b1b83e847d9f51605c">
                <v-card width="400"  class="mx-auto">
                  <v-img src="../assets/bean_lightlb.png"></v-img>
                  <h1 class="products_name text-center mt-5">
                    衣索比亞 草莓波波
                    <br />NT$650
                  </h1>
                </v-card>
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to="/product/621a04b1b83e847d9f51605c">
                <v-card width="400"  class="mx-auto">
                  <v-img class="capsule_img" src="../assets/capsule_m.jpg"></v-img>
                  <h1 class="products_name text-center mt-5">
                    維也納黎尼茲歐
                    <br />NT$240
                  </h1>
                </v-card>
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to="/product/621a04b1b83e847d9f51605c">
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
          <div class="text-center">
            <v-btn class="products_btn mt-5" color="brown" dark x-large to="/products">VIEW ALL PRODUCTS</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container id="seventh">
      <v-row>
        <v-col class="text-center" cols="12" md="6" order-md="2">
          <v-row>
            <v-col cols="4">
              <v-img src="../assets/coffeeshop4.jpeg"></v-img>
            </v-col>
            <v-col cols="8">
              <v-img src="../assets/coffeeshop6.jpeg"></v-img>
            </v-col>
            <v-col cols="8">
              <v-img src="../assets/coffee9.jpg"></v-img>
            </v-col>
            <v-col cols="4">
              <v-img src="../assets/coffeeshop5.jpeg"></v-img>
            </v-col>
            <v-col cols="6">
              <v-img src="../assets/coffeeshop2.jpeg"></v-img>
            </v-col>
            <v-col cols="6">
              <v-img src="../assets/coffeeshop7.jpg"></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="home_intro" cols="12" md="6" order-md="1">
          <div class="describe text-center">
            <h1 class="text-center">
              Every day, with love and attention, we roast specialty coffees for you. We carefully select each lot, develop a roasting profile for each type of grain, carefully check the quality. Only after that we are ready to offer this coffee to you.
            </h1>
            <v-btn class="mt-16" color="#9d8460" outlined x-large to="/about">Full Story</v-btn>
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
      tab: null,
      activities: [
        '課程活動', 'Entrees', 'Deserts', 'Cocktails'
      ],
      lists: [
        {
          name: 'Frozen Yogurt',
          calories: 159
        },
        {
          name: 'Ice cream sandwich',
          calories: 237
        },
        {
          name: 'Eclair',
          calories: 262
        },
        {
          name: 'Cupcake',
          calories: 305
        },
        {
          name: 'Gingerbread',
          calories: 356
        }
      ]
    }
  }
}
</script>
