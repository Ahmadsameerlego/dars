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
                        <span class="fas fa-check white_color fs-18" v-if="isResponsibleDataDone"></span>
                    </div>
                    <div class="step_name fs-18 black_color"> مدير النظام </div>
                    <span class="line" :class="{'active' : !isResponsibleDataDone==false}"></span>
                </div>
                <!-- single step  -->
                <div class="single_step flex_center flex-column" >
                    <div class="circle_step" :class="{'active' : entityInfo == true}"></div>
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
            <section class="management mb-3" v-if="!isResponsibleDataDone">

                <form @submit.prevent="register" ref="registerForm">
                    <div class="profile_image">
                        <img  ref="profile" :src="require('@/assets/imgs/profile.jpeg')" alt="profile">
                        <span class="edit flex_center" >
                            <span class="fas fa-edit white_color"></span>
                        </span>
                        <input type="file" name="image" @change="changeProfilePic" class="absolute" style="opacity:0;">
                    </div>


                    

                    <div class="form-group mb-3">
                        <label for="" class="mx-4"> اسم مدير النظام </label>
                        <InputText type="text" :class="{'p-invalid' : errorMessage !== ''}" v-model="user_name" name="user_name"  placeholder="يرجى ادخال اسم مدير النظام" /> 
                        <span class="p-error"> {{ errorMessage  }} </span>
                    </div>  


                    <div class="form-group mb-3 position-relative">
                        <label for="" class="mx-4"> رقم الجوال </label>
                        <InputText v-model="user_phone" name="user_phone" :class="{'p-invalid' : phoneError !== '' }" inputId="withoutgrouping" :useGrouping="false" placeholder="يرجى ادخال رقم الجوال"    @keypress="numericOnly"
                        />
                        <div class="country_code_reg">
                            <Dropdown v-model="selectedCountry" :options="countries" optionLabel="key"  class="w-full md:w-14rem" @change="chooseCountryCode" />
                        </div>

                        <span class="p-error">
                            {{  phoneError  }}
                        </span>
                    </div>  

                    <div class="flex_center">
                        <button class="main_btn pt-3 pb-3 w-100 btn br-5 fs-18 fw-6" :disabled="disabled"> التالي  </button>
                    </div>
                </form>
               
            </section>




            <!-- بيانات الكيان  -->
            <section id="entity_info" v-if="entityInfo">
                <entity_infoVue />
            </section>

            <!-- بيانات اضافية -->
            <section id="additional_info" v-if="additionalInfo">
                <additional_info />
            </section>

            <!-- كلمة المرور  -->
            <section id="password" v-if="password">
                <passwordConfirm />
            </section>


            <!-- otp  -->
            <Dialog v-model:visible="otp" modal   :style="{ width: '34rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <otp @closeOtpModal="otp=false" @responsibleData="saveResponsible" />
            </Dialog>

        </div>
    </div>
       <Toast />


   </section>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import otp from './otpActive.vue';
import entity_infoVue from './entity_info.vue';
import additional_info from './additional_info.vue';
import passwordConfirm from './passwordConfirmation.vue'
import { ref  , onMounted , computed , watch } from 'vue';
import { useStore } from 'vuex';
import { useToast } from "primevue/usetoast";
import Toast from 'primevue/toast';


export default {

    setup() {

        // ========= data =========
        const store = useStore();
        const toast = useToast();

        const profile  = ref(null);
        const otp = ref(false);
        const selectedCountry = ref({
            "id": 1,
            "name": "السعودية",
            key: "+966",
            "flag": "https://dev.dras-sa.com/public/admin/assets/flags/svg/sa.svg",
        });
        const user_phone = ref('');
        const user_name = ref('');
        const isResponsibleDataDone = ref(false);
        // entities 
        const responsible = ref(true);
        const entityInfo = ref(false);
        const additionalInfo = ref(false);
        const password = ref(false);

        // validations 
        const errorMessage = ref('')
        const phoneError = ref('')
        const isNameValid = ref(true);
        const isPhoneValid = ref(true);
        const disabled = ref(true);
        const registerForm = ref(null)



        // ========= computed =========
        const countries = computed(() => {
            return store.state.general.countries
        } )

        // ========= watchers =========
        // watch for name 
        watch(user_name, (newUserName  ) => {
            if (newUserName.trim() == '') {
                errorMessage.value = 'يرجى إدخال الإسم';
                isNameValid.value = true;
            } else {
                errorMessage.value = '';
                isNameValid.value = false;
            }
            // disable button 
            if (isNameValid.value == false && isPhoneValid.value == false) {
                disabled.value = false;
            }else {
                disabled.value = true;
            }
            
        })

        // watch for phone 
        watch(user_phone, () => {
            let phoneToString = user_phone.value.toString();
            if (phoneToString.length < 9) {
                phoneError.value = 'يجب أن يكون رقم الهاتف أكبر من 9 أرفام';
                isPhoneValid.value = true;
            } else {
                phoneError.value = '';
                isPhoneValid.value = false;
            }
            // disable button 
            if (isNameValid.value == false && isPhoneValid.value == false) {
                disabled.value = false;
            } else {
                disabled.value = true;
            }

            
        } )


        // ========= methods =========
        // profile preview 
        const changeProfilePic = (e)=>{
            const file = e.target.files[0];
            profile.value.src = URL.createObjectURL(file);
        }

        // pervent chars in input phone 
        const numericOnly = (event)=>{
            const charCode = event.charCode;

            // Allow numeric characters (0-9)
            if (charCode < 48 || charCode > 57) {
                event.preventDefault();
            }

        }

        const chooseCountryCode = () => {
            document.querySelector('.p-dropdown-label').innerHTML = selectedCountry.value.key ;
        }

        // save responsible data comes from otp 
        const saveResponsible = () => {
            isResponsibleDataDone.value = true;
            entityInfo.value = true;
        }

        // main register 
        const register = async () => {
            
            if (disabled.value == false) {
                disabled.value = true;
                const fd = new FormData(registerForm.value);
                fd.append('user_country_code', selectedCountry.value.key);
                try {
                    // response comes from vuex action => register 
                    const response = await store.dispatch('auth/register', fd);

                    // if res.data.key == success or fail 
                    if (response.success == true) {
                        toast.add({ severity: 'success', summary: response.message, life: 3000 });

                        // open otp modal 
                        setTimeout(() => {
                            otp.value = true;
                        }, 1000);

                        // save id of entity 
                        localStorage.setItem('entity_id', response.entity_id);

                    } else {
                        toast.add({ severity: 'error', summary: response.message, life: 3000 });
                    }
                } catch(error){
                    toast.add({ severity: 'error', summary: error, life: 3000 });
                }

                disabled.value = false;
            }

            else {
                console.log('not');
            }
        } 


        //  ========= mounted =========
        onMounted(
            async () => {
                try {
                    store.dispatch('general/getCountries');
                } catch (error) {
                    console.error('error while get Api : ', error);
                }
            },

            
            
        );

        onMounted(
            () => {
                document.querySelector('.p-dropdown-label').innerHTML = selectedCountry.value.key;

                // save responsible data permenant 
                if (localStorage.getItem('responsibleDataDone') == 'true') {
                    isResponsibleDataDone.value = true;
                    entityInfo.value = true;
                }
            }
        );


        return{
            changeProfilePic,
            profile,
            otp,
            responsible,
            entityInfo,
            password,
            additionalInfo,
            countries,
            selectedCountry,
            user_name,
            user_phone,
            register,
            errorMessage,
            phoneError,
            numericOnly,
            isNameValid,
            isPhoneValid,
            disabled,
            registerForm,
            chooseCountryCode,
            saveResponsible,
            isResponsibleDataDone
        }

    },

    components:{
        Dropdown,
        InputText,
        Dialog,
        otp,
        entity_infoVue,
        additional_info,
        passwordConfirm,
        Toast
        
    }
}
</script>

<style lang="scss">
    .p-dropdown-label{
        color: #333 !important;
        opacity: 1;
    }
    .p-inputtext , .p-inputnumber , .p-dropdown , .pac-target-input{
        color: #4b5563;
        background: #f6f6f6;
        border: none;
        width: 95%;
        margin: auto;
        height: 55px;
        display: flex;
    }
    .p-inputtext.p-invalid.p-component {
        border: 1px solid #E24C4B !important;
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