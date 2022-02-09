import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

export default {
  // 命名空間
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
