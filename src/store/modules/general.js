import axios from "axios";
export default {
  namespaced: true,
  state: {
    countries: [],
    cities: [],
    main_categories: [],
    category_id : 0,
    sub_categories : []
  },
  getters: {},
  mutations: {
    SET_COUNTRIES(state, res) {
      state.countries = res;
    },
    SET_CITIES(state, res) {
      state.cities = res;
    },
    SET_MAIN_CATEGORY(state, res) {
      state.main_categories = res;
    },
    SET_CAT_ID(state, res) {
      state.category_id = res;
      // console.log(state.category_id);
    },
    SET_SUB_CATEGORIES(state, res) {
      state.sub_categories = res;
    },
  },
  actions: {
    // get countries
    async getCountries({ commit }) {
      return axios.get("general/countries").then((res) => {
        const response = res.data.data;
        commit("SET_COUNTRIES", response);
      });
    },
    // get cities
    async getCities({ commit }) {
      return axios.get("general/cities").then((res) => {
        const response = res.data.data;
        commit("SET_CITIES", response);
      });
    },

    // get categories
    async getCategories({ commit }) {
      return axios.get("user/entity/main-category").then((res) => {
        const response = res.data.data;
        commit("SET_MAIN_CATEGORY", response);
      });
    },

    // set category id
    storeCategoryId({ commit }, payload) {
      commit("SET_CAT_ID", payload);
      // console.log(payload)
    },

    async getSubCategories({ state, commit }) {
      return axios
        .get(`user/entity/categories/${state.category_id}/sub-category`)
        .then((res) => {
          console.log(res)
          const response = res.data.data;
          commit("SET_SUB_CATEGORIES", response);
        });
    },
  },
};

