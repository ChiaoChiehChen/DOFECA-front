<template>
  <div id="adminProducts">
    <v-container>
      <v-data-table :headers="headers" :items="products">
        <template>
          <v-img></v-img>
        </template>
      </v-data-table>
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
        category: { big: '', small: '' },
        _id: ''
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
      if (!this.nameRules || !this.priceRules || !this.categoryRules || !this.descriptionRules) {
        return
      }
      this.btnSubmitting = true
      // 建立FormData物件
      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }
      // console.log(this.form)
      try {
        const { data } = await this.api.post('/products', fd, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.products.push(data.result)
        console.log(this.products)
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
        _id: ''
      }
      this.$refs.observer.reset()
    },
    editProduct (index) {
      // 共用表格
      this.form = { ...this.products[index], image: null }
      this.dialog = true
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
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
