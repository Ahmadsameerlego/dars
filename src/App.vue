<template>
  <router-view/>
</template>

<script>
// import sidebar from '@/components/layout/side-bar.vue';
// import dashHeader from '@/components/layout/dash-header.vue'
import {onMounted , getCurrentInstance , ref , watch} from 'vue' ;
import { useRoute } from 'vue-router';

export default ({
  setup() {
    // ==================== data ====================
    const isAuthPage = ref(true)
    const route = useRoute();

    // ==================== watch ====================

    // current route 
    watch(() => route, () => {
     // is Auth page handle 
     if( route.fullPath.includes('login') ){
        isAuthPage.value = false ;
      }else{
        isAuthPage.value = true ;
      }
    });
    // ====================  mounted ====================
    const instance = getCurrentInstance();
    onMounted(() => {
      // i18n setup 
      localStorage.setItem('locale', instance.proxy.$i18n.locale)
      if (localStorage.getItem("locale") == "en") {
        document.querySelector("body").classList.add("ltr");
      } else {
        document.querySelector("body").classList.remove("ltr");
      }


      

    })


    return{
      isAuthPage
    }
  },
  components:{
    // sidebar,
    // dashHeader
  },
})
</script>


<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
