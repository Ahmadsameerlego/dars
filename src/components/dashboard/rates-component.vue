<template>
    <div>
        <h6 class="black_color fs-19"> التقييمات </h6>
    </div>
    <div class="white_bg pt-3 pb-3 mb-3 mt-5 mb-3 flex_center flex-column">
        <div>
            <h5 class="black_color fw-6 rate_head_num"> 4.0 </h5>
        </div>

        <Rating v-model="total_rate" readonly class="mb-3" :cancel="false" />

        <div>
            <span class="fw-16"> (400) تقييما </span>
        </div>
    </div>
    <div class="white_bg  pt-3 pb-3 mb-3">
        <div class="border-bottom">
            <h5 class="black_color mx-3 fw=6"> أراء العملاء </h5>
        </div>

        <div class="rates mx-5 pt-3 pb-3">
            <!-- single rate  -->
            <div class="single_rate border-bottom pb-3">
                <div class="d-flex align-items-center">
                    <div class="rate_image w-45  h-45">
                        <img :src="require('@/assets/imgs/profile.jpeg')" alt="">
                    </div>
                    <div class="mx-3">
                        <div class="mb-2">
                            <span class="fw-bold fs-15 black_color"> الاسم هنا  </span>
                        </div>
                        <div class="d-flex">
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                    <span class="mx-1">  منذ ساعة </span>
                                </span>
                            </div>
                            <Rating v-model="total_rate" readonly class="single_rate_icon" :cancel="false" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Rating from 'primevue/rating';
import { ref } from 'vue';
export default {
    setup(){
        const total_rate = ref(4);

        return{
            total_rate
        }
    },
    components:{
        Rating
    }
}
</script>

<style lang="scss">
    .rate_head_num{
        font-size: 35px;
    }
    .rate_image{border-radius: 50%;}
    .single_rate_icon .p-rating-icon{
        width: 12px !important;
        height: 12px !important;
    }
</style>