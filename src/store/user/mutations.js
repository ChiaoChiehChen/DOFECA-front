// state = user module 的 state
export const login = (state, data) => {
  state.token = data.token
  state.account = data.account
  state.role = data.role
  state.email = data.email
  state.cart = data.cart
}

export const logout = (state, data) => {
  state.token = ''
  state.account = ''
  state.role = 0
  state.email = ''
  state.cart = 0
}

export const getInfo = (state, data) => {
  state.account = data.account
  state.role = data.role
  state.email = data.email
  state.cart = data.cart
  state.name = data.name
}

export const extend = (state, data) => {
  state.token = data
}

export const updateCart = (state, data) => {
  // 購物車數量更新
  state.cart = data
}

export const lessons = (state, data) => {
  state.lessons.lessonName = data.lessonName
  state.lessons.price = data.price
  state.lessons.date = data.date
  state.lessons.applicant = data.applicant
  state.lessons.phone = data.phone
  state.lessons.l = data.email
  state.lessons.email = data.email
  state.lessons.memo = data.memo
}
