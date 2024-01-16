<template>
  <form action="" id="password">
      <!-- password  -->
      <div class="position-relative flex-auto mt-3">
          <label for="integeronly" class="label mx-4  block mb-2"> {{ $t('auth.pass')  }} </label>
          <Password v-model="password"  toggleMask class="defaultInput" :placeholder="$t('auth.passPlc')" name="password" @input="checkValid" />
      </div>

      <!-- confirm password  -->
      <div class="position-relative flex-auto mt-3">
          <label for="integeronly" class="label mx-4 block mb-2"> {{  $t('auth.confirmPass')  }} </label>
          <Password v-model="confirm_password" :feedback="false" toggleMask class="defaultInput" name="password_confirmation" :placeholder="$t('auth.confirmPlc')"  @input="checkValid"/>
      </div>

      <div v-if="showValid">
        <p v-if="passwordMatch" class="passwordConfirmed d-flex align-items-center text-success">
          <i class="fa-regular fa-circle-check"></i>
          <span>{{ $t('auth.iden')  }}</span>
        </p>
        <p v-else class="passwordWrong d-flex align-items-center text-danger">
            <i class="fa-regular fa-circle-xmark"></i>
            <span>{{ $t('auth.notIden') }}</span>
        </p>
      </div>


      <div class="flex_center mb-4 mx-4">
          <button class="pt-3 br-5 pb-3 fs-18 fw-bold px-5 main_btn btn w-100">
              التالي
          </button>
      </div>

  </form>
</template>

<script>
import Password from 'primevue/password';

export default {
  data(){
    return{
      password : '',
      confirm_password : '',

    }
  },
  watch:{
    confirm_password(){
          this.showValid = true ;
      },
  },
  computed:{
    passwordMatch() {
          return this.password === this.confirm_password;  
      },
  },
  components:{
    Password
  }
}
</script>

<style>
  #password .p-input-icon-right > svg:last-of-type, .p-input-icon-right > i:last-of-type{left:30px !important}
  .p-password{
    width: 100%;
  }
</style>