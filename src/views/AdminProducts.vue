<template>
  <div id="adminProducts">
    <v-container>
      <v-row justify="center">
        <v-dialog v-model="dialog" @save="submitSave" max-width="700px">
          <template v-slot:activator="{ on, adds }">
            <v-btn v-bind="adds" v-on="on">新增</v-btn>
          </template>
          <v-card>
            <v-card-title v-if="form._id.length > 0">
              <span>編輯商品</span>
            </v-card-title>
            <v-card-title v-else>
              <span>新增商品</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
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
                    outlined
                    dense
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    v-model="form.category.small"
                    label="商品項目"
                    :items="categories[form.category.big]"
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
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="dialog = true">送出</v-btn>
              <v-btn @click="dialog = false">取消</v-btn>
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
      form: {
        name: '',
        price: 0,
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
      nameRules: [
        v => !!v || '必填',
        v => (v && v.length > 1) || '商品名稱須1個字以上'
      ],
      priceRules: [
        v => !!v || '必填',
        v => (v && v.length >= 0) || '價格必須0元及以上'
      ],
      dialog: false
    }
  }
}
</script>
