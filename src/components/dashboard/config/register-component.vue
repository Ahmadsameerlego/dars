<template>
  <div>
      <h6 class="black_color fs-25"> الاعدادات </h6>
      <div>
        <span> هنا يمكنك تعديل بيانات الكيانات </span>
      </div>
  </div>

  <section class="white_bg mt-3 pt-3 pb-3 px-4">
    <section class="management mb-3">

      <form action="">
          <div class="profile_image">
              <img  ref="profile" :src="require('@/assets/imgs/profile.jpeg')" alt="profile">
              <span class="edit flex_center" >
                  <span class="fas fa-edit white_color"></span>
              </span>
              <input type="file" @change="changeProfilePic" class="absolute" style="opacity:0;">
          </div>


          

          <div class="form-group mb-3">
              <label for="" class=""> اسم مدير النظام </label>
              <InputText type="text" class="w-100" v-model="value"  placeholder="يرجى ادخال اسم مدير النظام"/>
            
          </div>  


          <div class="form-group mb-3 position-relative">
              <label for="" class=""> رقم الجوال </label>
              <InputNumber v-model="value2" class="w-100" inputId="withoutgrouping" :useGrouping="false" placeholder="يرجى ادخال رقم الجوال"/>
              <div class="country_code_reg">
                  <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
              </div>
          </div> 

          <!-- change password  -->
          <h4 class="mt-5 change_pass_title black_color fs-18 pt-4"> تغيير كلمة المرور </h4>

          <!-- current password  -->
          <div class="position-relative flex-auto mt-3">
              <label for="integeronly" class="label mx-4  block mb-2">كلمة المرور الحالية </label>
              <Password v-model="old_password" :feedback="false"  toggleMask class="defaultInput password w-100" placeholder="يرجى ادخال كلمة المرور هنا" name="password" />
          </div>
          <!-- newpassword password  -->
          <div class="position-relative flex-auto mt-3">
              <label for="integeronly" class="label mx-4  block mb-2"> كلمة المرور الجديدة </label>
              <Password v-model="new_password"  toggleMask class="defaultInput password w-100" placeholder="يرجى ادخال كلمة المرور الجديدة هنا" name="password" />
          </div>

          <!-- confirm password  -->
          <div class="position-relative flex-auto mt-3">
              <label for="integeronly" class="label mx-4 block mb-2"> تأكيد كلمة المرور الجديدة </label>
              <Password v-model="confirm_password" :feedback="false" toggleMask class="defaultInput password w-100" name="password_confirmation" placeholder="يرجى ادخال كلمة المرور الجديدة هنا" />
          </div>

          <div v-if="showValid" class="showValid">
            <p v-if="passwordMatch" class="passwordConfirmed d-flex align-items-center text-success">
              <i class="fa-regular fa-circle-check"></i>
              <span>{{ $t('auth.iden')  }}</span>
            </p>
            <p v-else class="passwordWrong d-flex align-items-center text-danger">
                <i class="fa-regular fa-circle-xmark"></i>
                <span>{{ $t('auth.notIden') }}</span>
            </p>
          </div>


          <div class=" mt-4">
              <button class="main_btn pt-3 pb-3 w-25 btn br-5 fs-18 fw-6"> حفظ التغييرات  </button>
          </div>
      </form>

    </section>
  </section>
</template>

<script>
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { ref  , watch , computed} from 'vue';
export default {
  setup(){
    // data
    const old_password = ref('');
    const new_password = ref('');
    const confirm_password = ref('');
    const showValid = ref(false);


    // watch 
    watch( confirm_password , ()=>{
      showValid.value = true ;
    } )

    // computed 
    const passwordMatch = computed( ()=>{
      return new_password.value === confirm_password.value; 
    } )
    return{
      old_password,
      new_password,
      confirm_password,
      showValid,
      passwordMatch
    }
  },
  components:{
    InputNumber,
    Dropdown,
    InputText,
    Password
  }
}
</script>

<style>
  .country_code_reg .p-dropdown{left:0}
  .password .p-inputtext{
    width: 100% !important;
  }
  .change_pass_title{
    border-top: 1px solid #cccccc69;
  }
</style>