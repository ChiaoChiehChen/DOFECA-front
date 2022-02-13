<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, adds }">
        <v-btn v-bind="adds" v-on="on">新增</v-btn>
      </template>
      <v-card>
        <v-card-title v-if="form._id.length > 0">編輯商品</v-card-title>
        <v-card-title v-else>新增商品</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.name"
                    label="商品名稱"
                    type="text"
                    :rules="nameRules"
                    hint="必填欄位"
                    required
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
                <v-col cols="12">
                  <v-select
                    :items="items"
                    label="商品分類"
                    dense
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-action>
          <v-btn @click="dialog = true">送出</v-btn>
          <v-btn>取消</v-btn>
        </v-action>
      </v-card>
    </v-dialog>
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
        category: '',
        _id: ''
      },
      nameRules: [
        v => !!v || '必填',
        v => (v && v.length > 1) || '商品名稱須1個字以上'
      ],
      priceRules: [
        v => !!v || '必填',
        v => (v && v.length > 0 && v.length !== 0) || '價格必須0元以上'
      ]

    }
  }
}
</script>
