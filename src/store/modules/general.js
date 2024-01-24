import axios from "axios";
export default {
  namespaced: true,
  state: {
    countries: [],
    cities : []
  },
  getters: {},
  mutations: {
    SET_COUNTRIES(state, res) {
      state.countries = res;
    },
    SET_CITIES(state, res) {
      state.cities = res;
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
    
    // // get categories 
    //   asycn getCategories() {
        
    // }
  },
};

