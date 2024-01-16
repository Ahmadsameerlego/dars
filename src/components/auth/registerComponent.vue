<template>
   <section class="auth">


    <div class="register_section">
        <h5 class="text-center fw-bold white_color mb-3"> 
            <router-link to="/login"> لديك حساب بالفعل ؟ تسجيل الدخول </router-link>
        </h5>
        <div class="register_form">
            <h6 class="fw-bold black_color text-center fs-18"> مرحبا بك </h6>
            <div class="text-center">
                <span class="fw-bold text-center fs-16"> يرجى ادخال البيانات التالية للانضمام الينا </span>
            </div>


            <!-- start steps  -->
            <section class="steps flex_center mt-4 mb-5">

                <!-- single step  -->
                <div class="single_step flex_center flex-column">
                    <div class="circle_step active finished flex_center">
                        <span class="fas fa-check white_color fs-18"></span>
                    </div>
                    <div class="step_name fs-18 black_color"> مدير النظام </div>
                    <span class="line active"></span>
                </div>
                <!-- single step  -->
                <div class="single_step flex_center flex-column">
                    <div class="circle_step"></div>
                    <div class="step_name fs-18 black_color"> بيانات الكيان </div>
                    <span class="line"></span>

                </div>
                <!-- single step  -->
                <div class="single_step flex_center flex-column">
                    <div class="circle_step"></div>
                    <div class="step_name fs-18 black_color"> بيانات اضافية </div>
                    <span class="line"></span>

                </div>
                <!-- single step  -->
                <div class="single_step flex_center flex-column">
                    <div class="circle_step"></div>
                    <div class="step_name fs-18 black_color"> كلمة المرور </div>

                </div>


            </section>
            <!-- end steps  -->


            <!-- مدير النظام  -->
            <section class="management mb-3" v-if="false">

                <form action="">
                    <div class="profile_image">
                        <img  ref="profile" :src="require('@/assets/imgs/profile.jpeg')" alt="profile">
                        <span class="edit flex_center" >
                            <span class="fas fa-edit white_color"></span>
                        </span>
                        <input type="file" @change="changeProfilePic" class="absolute" style="opacity:0;">
                    </div>


                    

                    <div class="form-group mb-3">
                        <label for="" class="mx-4"> اسم مدير النظام </label>
                        <InputText type="text" v-model="value"  placeholder="يرجى ادخال اسم مدير النظام"/>
                       
                    </div>  


                    <div class="form-group mb-3 position-relative">
                        <label for="" class="mx-4"> رقم الجوال </label>
                        <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" placeholder="يرجى ادخال رقم الجوال"/>
                        <div class="country_code_reg">
                            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
                        </div>
                    </div>  

                    <div class="flex_center">
                        <button class="main_btn pt-3 pb-3 w-100 btn br-5 fs-18 fw-6"> التالي  </button>
                    </div>
                </form>
               
            </section>




            <!-- بيانات الكيان  -->
            <section id="entity_info" v-if="true">
                <entity_infoVue />
            </section>

            <!-- بيانات اضافية -->
            <section id="additional_info" v-if="false">
                <additional_info />
            </section>

            <!-- كلمة المرور  -->
            <section id="password" v-if="false">
                <passwordConfirm />
            </section>


            <!-- otp  -->
            <Dialog v-model:visible="otp" modal   :style="{ width: '34rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <otp @closeOtpModal="otp=false" />
            </Dialog>

        </div>
    </div>
   </section>
</template>

<script>
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import otp from './otpActive.vue';
import entity_infoVue from './entity_info.vue';
import additional_info from './additional_info.vue';
import passwordConfirm from './passwordConfirmation.vue'
import { ref } from 'vue';
export default {

    setup(){
        const profile  = ref(null);
        const otp = ref(false) ;

        const changeProfilePic = (e)=>{
            const file = e.target.files[0];
            profile.value.src = URL.createObjectURL(file);
        }


        return{
            changeProfilePic,
            profile,
            otp
        }

    },

    components:{
        InputNumber,
        Dropdown,
        InputText,
        Dialog,
        otp,
        entity_infoVue,
        additional_info,
        passwordConfirm
        
    }
}
</script>

<style lang="scss">
    .p-inputtext , .p-inputnumber , .p-dropdown , .pac-target-input{
        color: #4b5563;
        background: #f6f6f6;
        border: none;
        width: 95%;
        margin: auto;
        height: 55px;
        display: flex;
    }
    label{color: #000; font-size: 16px;display: block;margin-bottom:10px}
    
    
    .steps{
        .single_step{
            position: relative;
            width: 200px;
            .circle_step{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 2px solid #9e9e9e;
                &.active{
                    box-shadow: 0px 0px 10px #33333332;
                    border: 7px solid #fff;
                    background-color: #346cf6;
                }
            }
            .line{
                content: "";
                position: absolute;
                left: -39%;
                width: 78%;
                top: 33%;
                border: 1px dashed #9e9e9e;
                &.active{
                    border: 1px dashed #346cf6;
                }
            }
        }
    }
    .auth{
        position: relative;
        background-image: url('@/assets/imgs/Group 178306.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 115vh;
        overflow: hidden;
        .register_section{margin-top: 120px;}
        .register_form{
            background-color: #fff;
            border-radius: 20px;
            padding: 20px;
            width: 50%;
            margin:auto;
        }
    }
</style>