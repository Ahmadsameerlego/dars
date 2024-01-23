<template>
  <div>
    <h6 class="black_color fw-6 fs-21"> بيانات المشرف </h6>
  </div>
  <section class="white_bg w-75 pt-3 pb-3 px-4 mt-3">
    <!-- single row  -->
    <div class="d-flex mb-4">

      <div class="single_info">
        <div class="mb-2">
          <span class="black_color fs-17">اسم المستخدم بالعربية</span>
        </div>
        <div>
          <span class="fs-15">أحمد سمير</span>
        </div>
      </div>


      <div class="single_info mx-5 px-5">
        <div class="mb-2">
          <span class="black_color fs-17">اسم المستخدم بالإنجليزية</span>
        </div>
        <div>
          <span class="fs-15">Ahmed Samir</span>
        </div>
      </div>


    </div>

    <!-- single row  -->
    <div class="d-flex mb-4">

        <div class="single_info">
          <div class="mb-2">
            <span class="black_color fs-17">الوظيفة بالعربية</span>
          </div>
          <div>
            <span class="fs-15">فرونت اند</span>
          </div>
        </div>


        <div class="single_info mx-5 px-5">
          <div class="mb-2">
            <span class="black_color fs-17">الوظيفة بالإنجليزية</span>
          </div>
          <div>
            <span class="fs-15">Frontend</span>
          </div>
        </div>


    </div>

    <!-- single row  -->
    <div class="d-flex mb-4">

        <div class="single_info">
          <div class="mb-2">
            <span class="black_color fs-17">رقم الجوال</span>
          </div>
          <div>
            <span class="fs-15">01013746111</span>
          </div>
        </div>


        <div class="single_info mx-5 px-5">
          <div class="mb-2">
            <span class="black_color fs-17">كلمة المرور</span>
          </div>
          <div>
            <Password v-model="value" class="" :feedback="false" toggleMask disabled />
          </div>
        </div>


    </div>

    <!-- single row  -->
    <div>
      <div class="mb-2">
        <span class="black_color fs-17">الصلاحيات</span>
      </div>

      <div class="d-flex">
        <div class="">
          <span class="fs-18">استقبال طلبات جديدة</span>
        </div>
        <div class="mx-4">
          <span class="fs-18">عمل تسوية</span>
        </div>
        <div class="mx-4">
          <span class="fs-18">تعديل بيانات الكيان </span>
        </div>
        <div class="mx-4">
          <span class="fs-18">تعديل الأسعار</span>
        </div>
      </div>
    </div>

    <div class="mt-4 d-flex mb-4">
      <div>
        <router-link to="/directors/add" class="btn main_btn pt-2 pb-2  fs-19 px-5 fw-6"> تعديل المشرف </router-link>
      </div>
      <div class="mx-4">
        <button class="btn btn-danger pt-2 pb-2  fs-19 px-5 fw-6"> إزالة المشرف </button>
      </div>
    </div>
      
  </section>
</template>

<script >
  import Password from 'primevue/password'; 
  import {ref } from 'vue';

  export default{
    setup(){
      const value = ref(12345678);

      return{
        value
      }
    },

    components:{
      Password
    }
  }

  

</script>

<style lang="scss">
  .single_info{
    min-width: 290px;
    width: fit-content;
    .p-password-input{
      width: 190px !important;
      background: transparent !important;
      height: 5px;
    }
  }
  
</style>