<template>
    <section id="otp" class="pt-4 px-5">
        <h5 class="fw-bold main_color text-center"> رمز التفعيل </h5>

        <!-- gif  -->
        <div class="otp_gif mx-auto d-flex mt-4">
            <img :src="require('@/assets/imgs/PGdkpvJS0N.gif')" class="image" alt="">
        </div>


        <form @submit.prevent="sendCode" class="mt-5">
            <h6 class="text-center fs-20 mb-4"> ادخل رمز التفعيل المرسل لك عبر الجوال </h6>
                <div class="form-group position-relative">  

                    <!-- otp  -->
                    <div class="position-relative flex-auto">
                        <div
                            style="
                            display: flex;
                            flex-direction: row;
                            justify-content: space-evenly;
                            "
                        >
                            <v-otp-input
                                ref="otpInput"
                                v-model:value="code"
                                name="code"
                                input-classes="otp-input"
                                separator=""
                                :num-inputs="4"
                                :should-auto-focus="true"
                                autofocus
                                input-type="letter-numeric"
                                style="flex-direction: row-reverse;"
                            />
                        </div>
                    </div>

                </div>


                <div class="mt-3 mb-3 flex_between">
                    <div class="resend">
                        <span class="cursor-pointer main_color fs-18"> إعادة إرسال الرمز </span>
                    </div>
                    <div class="time">
                        <span class="counter main_color fs-17"> {{ timer }}  </span>
                    </div>
                </div>

                <div class="flex_between mt-4">
                    <button class="main_btn btn pt-3 pb-3 w-50"> تأكيد </button>
                    <button class="border_btn btn pt-3 pb-3 w-50 mx-2" type="button" @click="closeOtp"> الرجوع </button>
                </div>
        </form>
    </section>
</template>

<script>
import { ref , onBeforeMount } from 'vue';
export default {
    setup(props ,context){
        const code = ref('');
        const disabled = ref(true)
        const loader = ref(false);
        const timer = ref(120);
        const intervalId = ref(null)
         
        // ================= methods ==========================
        const startTimer = ()=> {
            intervalId.value = setInterval(() => {
                if (timer.value > 0) {
                    timer.value --;
                } else {
                    clearInterval(intervalId.value);
                    disabled.value = false
                }
            }, 1000);
        }

        const closeOtp = ()=>{
            context.emit('closeOtpModal', false) ;
        }
        // ================= mounted ==========================

        onBeforeMount( ()=>{
            startTimer() ;
        } )

        return{
            code ,
            disabled,
            loader,
            timer,
            intervalId ,
            startTimer,
            closeOtp
        }
    }
}
</script>

<style lang="scss">
    #otp{
        .otp_gif{
            width: 250px;
            height: 247px;
        }
    }

    .otp-input{
        width: 70px;
        height: 60px;
        margin: 0 10px;
        border: 1px solid #346cf6;
        border-radius: 15px;
        text-align: center;
    }
</style>