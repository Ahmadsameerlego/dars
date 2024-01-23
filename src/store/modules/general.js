import axios from "axios";
export default{
    namespaced : true,
    state : {
        countries : []
    },
    getters : {},
    mutations : {
        SET_COUNTRIES(state, res){
            state.countries = res  ;
        }
    },
    actions : {
        // get countries 
        async getCountries( {commit} ){
            return axios.get('general/countries')
            .then( (res)=>{
                const response = res.data.data ;
                commit('SET_COUNTRIES', response);
            } )
        }
    }
}

