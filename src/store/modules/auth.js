import axios from "axios";
export default {
  namespaced: true,
  state: {
    countries: [],
    user : {}
  },
  getters: {},
  mutations: {
    SET_COUNTRIES(state, res) {
      state.countries = res;
    },
    USER_DATA(state, user) {
      state.user = user;
    },
  },
  actions: {
    // register 
    async register({ commit }, fd) {
      return axios.post("entity/store-responsible-data", fd).then((res) => {
            if (res.data.key == "success") {
                const response = res.data.data;
                commit("USER_DATA", response);
                return { success : true , message : res.data.msg , entity_id : res.data.data.id }
            } else {
              return {
                success: false,
                message: res.data.msg,
              };
            }
        
      });
    },

    // send code 
    async sendCode({ commit }, fd) {
      return axios.post("entity/responsible-data-verify-otp", fd)
        .then((res) => {
          if (res.data.key === "success") {
            const response = res.data.data;
            commit("USER_DATA", response);
            return {
              success: true,
              message: res.data.msg,
              entity_id: res.data.data.id,
            };
          } else {
            return {
              success: false,
              message: res.data.msg,
            };
          }
      } )
    },

    // resend code 
    async resendCode( {commit} , fd ) {
      return axios.post("entity/responsible-data-resend-otp", fd)
        .then((res) => {
          if (res.data.key === "success") {
            const response = res.data.data;
            commit("USER_DATA", response);
            return {
              success: true,
              message: res.data.msg,
              entity_id: res.data.data.id,
            };
          } else {
            return {
              success: false,
              message: res.data.msg,
            };
          }
      } )
    }
  },


};
