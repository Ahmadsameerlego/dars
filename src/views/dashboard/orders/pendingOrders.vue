<template>
    <div id="content" class="px-4 pt-3">
        <pendingOrdersVue />
    </div>
</template>

<script>
import pendingOrdersVue from '@/components/dashboard/orders/pending-orders.vue'
export default {
    components:{
        pendingOrdersVue
    }
}
</script>

<style>

</style>