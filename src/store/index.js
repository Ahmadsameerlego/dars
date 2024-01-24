import { createStore } from 'vuex'
import general from './modules/general';
import auth from './modules/auth'
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    general,
    auth,
  },
});
