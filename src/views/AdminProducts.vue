<template>
  <div id="adminProducts">
    <v-container>
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="700px">
          <template v-slot:activator="{ on, adds }">
            <v-btn v-bind="adds" v-on="on">新增</v-btn>
          </template>
          <v-card>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon x-large @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-title v-if="form._id.length > 0">
              <span>編輯商品</span>
            </v-card-title>
            <v-card-title v-else>
              <span>新增商品</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-form ref="observer">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.name"
                      label="商品名稱"
                      type="text"
                      :rules="nameRules"
                      hint="必填欄位"
                      required
                      clear-icon="mdi-close-circle"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.price"
                      label="價錢"
                      type="number"
                      min="0"
                      :rules="priceRules"
                      hint="必填欄位"
                      required
                      append-icon="mdi-currency-twd"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-autocomplete
                      v-model="form.category.big"
                      label="商品種類"
                      :items="Object.keys(categories)"
                      :rules="categoryRules"
                      hint="選項必填"
                      outlined
                      dense
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-autocomplete
                      v-model="form.category.small"
                      label="商品項目"
                      :items="categories[form.category.big]"
                      :rules="categoryRules"
                      hint="選項必填"
                      required
                      outlined
                      dense
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      name="input-7-1"
                      v-model="form.description"
                      label="商品說明"
                      hint="需填寫描述"
                      :rules="descriptionRules"
                      required
                      clear-icon="mdi-close-circle"
                      clearable
                      outlined
                      auto-grow
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <img-inputer
                      class="img_file"
                      accept="image/*"
                      v-model="form.image"
                      theme="light"
                      size="large"
                      :max-size="1024"
                      exceed-size-text="文件大小不能超過"
                      placeholder="點擊或拖拽選擇圖片"
                      bottom-text="點擊或拖拽圖片以修改"
                      hover-text="點擊或拖拽圖片以修改"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-radio-group v-model="form.sell" row>
                      <v-radio label="上架" :value="true"></v-radio>
                      <v-radio label="下架" :value="false"></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="resetForm" :disabled="btnSubmitting">重置</v-btn>
              <v-btn @click="submitModal" :disabled="btnSubmitting">送出</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-data-table class="mt-10" :headers="headers" :items="products">
        <template v-slot:item.image="{ item }">
          <v-img v-if="item.image" :src="item.image" max-width="100" max-height="100px"></v-img>
        </template>
        <template v-slot:item.sell="{ item }">{{ item.sell ? 'V' : '' }}</template>
        <template v-slot:item.category="{ item }">
          <span v-if="item.category">{{ item.category.big }} - {{ item.category.small }}</span>
        </template>
        <template v-slot:item.action="{ item }">
          <v-btn @click="editProduct(item._id)">編輯</v-btn>
          <v-btn @click="delProduct(item._id)">刪除</v-btn>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: '產品圖片', value: 'image' },
        { text: '產品名稱', value: 'name' },
        { text: '產品價錢', value: 'price' },
        { text: '產品分類', value: 'category' },
        { text: '產品描述', value: 'description' },
        { text: '產品狀態', value: 'sell' },
        { text: '產品操作', value: 'action' }
      ],
      form: {
        name: '',
        price: null,
        description: '',
        image: null,
        sell: false,
        category: {},
        _id: '',
        index: -1
      },
      categories: {
        深焙: ['咖啡豆', '咖啡粉', '膠囊咖啡'],
        中焙: ['咖啡豆', '咖啡粉', '膠囊咖啡'],
        淺焙: ['咖啡豆', '咖啡粉', '膠囊咖啡'],
        設備: ['咖啡機', '濾紙', '咖啡壺', '濾杯']
      },
      products: [],
      nameRules: [
        v => !!v || '商品名稱必填',
        v => (v && v.length > 0) || '商品名稱必填欄位'
      ],
      priceRules: [
        v => !!v || '價格必填',
        v => (v && v >= 0) || '價格不得低於0元'
      ],
      categoryRules: [
        v => !!v || '種類必選',
        v => (v && v.length > 0) || '種類欄位不得為空'
      ],
      descriptionRules: [
        v => !!v || '商品描述必填',
        v => (v && v.length > 0) || '商品描述欄位不得為空'
      ],
      btnSubmitting: false,
      dialog: false
    }
  },
  methods: {
    // 送出
    async submitModal (event) {
      event.preventDefault()
      // 檢查如果必填欄位未填寫
      if (!this.form.name || !this.form.price || !this.form.category || !this.form.description) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '缺少必填欄位'
        })
        return
      }
      this.btnSubmitting = true
      // 建立FormData物件
      const fd = new FormData()
      for (const key in this.form) {
        // 如果key 為 產品分類
        console.log(key.big)
        if (key === 'category') {
          // 換為 JSON 字符串
          fd.append(key, JSON.stringify(this.form[key]))
          // 新增時不能傳id進去
        } else if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }
      try {
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.products.push(data.result)
          // console.log(this.products)
        } else {
          const { data } = await this.api.patch('/products/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          // console.log(data.result.category)
          this.products[this.form.index] = { ...this.form, image: data.result.image }
        }
        this.dialog = false
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
      this.btnSubmitting = false
    },
    // 取消
    resetForm (event) {
      if (this.btnSubmitting) {
        event.preventDefault()
        return
      }
      this.form = {
        name: '',
        price: 0,
        description: '',
        image: null,
        sell: false,
        category: { big: '', small: '' },
        _id: '',
        index: -1
      }
      this.$refs.observer.reset()
    },
    editProduct (a) {
      // console.log(id)
      const index = this.products.findIndex(product => product._id === a)
      // 共用表格
      // console.log(index)
      // console.log(this.form.category)
      this.form = {
        name: this.products[index].name,
        price: this.products[index].price,
        description: this.products[index].description,
        image: null,
        sell: this.products[index].sell,
        category: {},
        _id: this.products[index]._id,
        index
      }
      // 其餘運算
      // this.form = { ...this.products[index], image: null, index: -1 }
      this.dialog = true
    },
    // 刪除
    async delProduct (id) {
      // console.log(123)
      try {
        await this.api.delete('/products/' + id, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '刪除成功'
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '刪除失敗'
        })
      }
    }
  },
  async created () {
    // 元件建立時，抓目前商品
    try {
      const { data } = await this.api.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
      // console.log(data.result)
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  },
  async updated () {
    // 元件建立時，抓目前商品
    try {
      const { data } = await this.api.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
      // console.log(data.result)
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
}
</script>
