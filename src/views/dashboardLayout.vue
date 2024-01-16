<template>
  <sideBarVue/>
  <dashHeaderVue />
  <router-view />
</template>

<script>
import dashHeaderVue from '@/components/layout/dash-header.vue'
import sideBarVue from '@/components/layout/side-bar.vue'
export default {
  name: 'HomeView',
  components: {
    sideBarVue,
    dashHeaderVue
  }
}
</script>
