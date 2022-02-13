<template>
  <div id="home">
    <div>
      <swiper class="swiper chiao_swiper" :options="swiperOption">
        <swiper-slide>
          <v-parallax class="swiper_img" height="1400" src="../assets/swiper2.jpg"></v-parallax>
          <v-img></v-img>
        </swiper-slide>
        <swiper-slide>
          <v-parallax class="swiper_img" height="1400" src="../assets/swiper1.jpg"></v-parallax>
        </swiper-slide>
        <swiper-slide>
          <v-parallax class="swiper_img" height="1400" src="../assets/swiper4.jpg"></v-parallax>
        </swiper-slide>
        <swiper-slide>
          <v-parallax class="swiper_img" height="1400" src="../assets/swiper3.jpg"></v-parallax>
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
            <img class="beans" src="../assets/cafebean.png" alt />
            <p class="text-center" color="secondary">coffee powder</p>
          </router-link>
        </v-col>
        <v-col class="home_col text-center" cols="6" md="3" align-self="center">
          <router-link to="/">
            <img class="powder" src="../assets/coffeepowder.png" alt />
            <p class="text-center" color="secondary">coffee powder</p>
          </router-link>
        </v-col>
        <v-col class="home_col text-center" cols="6" md="3" align-self="end">
          <router-link to="/">
            <img class="cupsule" src="../assets/cupsulecoffee.png" alt />
            <p class="text-center" color="secondary">coffee powder</p>
          </router-link>
        </v-col>
        <v-col class="home_coltext-center" cols="6" md="3" align-self="center">
          <router-link to="/">
            <img class="powder" src="../assets/coffeepowder.png" alt />
            <p class="text-center" color="secondary">coffee powder</p>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
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
                        <td><v-btn to="/news">{{ list.calories }}</v-btn></td>
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
      <div class="describe">
        <p class="text-h6 text-center">
        Every day, with love and attention, we roast specialty coffees for you. We carefully select each lot, develop a roasting profile for each type of grain, carefully check the quality. Only after that we are ready to offer this coffee to you.
      </p>
      </div>
    </v-container>
    <v-container>
      <h1 class="text-center">New Products</h1>
      <v-item-group
      v-model="selected"
      multiple
      >
        <v-row class="pt-16">
          <v-col
            v-for="card in cards"
            :key="card.title">
            <v-card
            class="mx-auto"
            width="300">
            <v-item v-slot="{ active, toggle }">
              <v-img
              class="text-right"
              :src="card.src"
              width="300"
              @click="toggle"
              >
                <v-btn
                    icon
                    dark
                  >
                    <v-icon>
                      {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                    </v-icon>
                  </v-btn>
              </v-img>
            </v-item>
              <v-card-title
              v-text="card.title"></v-card-title>
              <v-card-text
              v-text="card.text"
              ></v-card-text>
              <v-card-actions>
                <v-btn>
                  加入購物車
                  <v-icon>mdi-cart-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-item-group>
      <div>
        <v-btn class="pt-16" text plain>VIEW ALL PRODUCTS</v-btn>
      </div>
    </v-container>
    <v-container id="fifth">
      <v-row>
        <v-col class="text-center" cols="12" md="6" order-md="2">
          <img src="https://picsum.photos/450/600/?random=10" />
        </v-col>
        <v-col class="home_intro" cols="12" md="6" order-md="1">
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ad aliquid saepe expedita, magnam voluptas debitis sed, inventore odit illum aperiam tempora. Eius, blanditiis quam. Quae quod harum deserunt iure debitis eligendi saepe, tempore explicabo minus eaque dolorem vero aut pariatur rerum perferendis hic, consequatur labore mollitia numquam libero. Odio id molestias pariatur accusamus eos alias possimus architecto quibusdam. Laboriosam amet dolor ut libero culpa impedit modi, voluptate pariatur facere. Error eligendi perspiciatis laudantium rerum aliquid repellat, animi voluptatibus hic quasi voluptatem quam molestiae ad dolores, illo delectus impedit enim deserunt praesentium optio perferendis aperiam! Corporis alias veniam voluptatem excepturi?</p>
            <v-btn color="#9d8460" text plain>Full Story</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container></v-container>
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
      ],
      cards: [
        { title: 'coffee beans', src: 'https://picsum.photos/300/200/?random=10', text: '500元' },
        { title: 'coffee powder', src: 'https://picsum.photos/300/200/?random=1', text: '890元' },
        { title: 'coffee machine', src: 'https://picsum.photos/300/200/?random=8', text: '650元' }
      ],
      selected: []
    }
  }
}
</script>
