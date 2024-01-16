<template>
  <div>
      <h6 class="black_color fs-21"> الاعدادات </h6>
      <div>
        <span> ما يظهر للمستخدم في نموذج الحجز </span>
      </div>
  </div>

  <section class="white_bg shape_form mt-4 px-4 pt-4 pb-4" v-if="checkBoxes">
    <form action="">


      <div class="row">

        <div class="col-md-3 mb-2">
          <div class="form-group d-flex align-items-center">
            <input type="checkbox" class="shap_checkBox w-22 h-22">
            <label for="" class="mx-2 mt-2 fs-14"> إسم المستخدم المسجل بالهوية </label>
          </div>
        </div>

        <div class="col-md-3 mb-2">
          <div class="form-group d-flex align-items-center">
            <input type="checkbox" class="shap_checkBox w-22 h-22">
            <label for="" class="mx-2 mt-2 fs-14"> إسم المستخدم المسجل بالهوية </label>
          </div>
        </div>

        <div class="col-md-3 mb-2">
          <div class="form-group d-flex align-items-center">
            <input type="checkbox" class="shap_checkBox w-22 h-22">
            <label for="" class="mx-2 mt-2 fs-14"> إسم المستخدم المسجل بالهوية </label>
          </div>
        </div>

        <div class="col-md-3 mb-2">
          <div class="form-group d-flex align-items-center">
            <input type="checkbox" class="shap_checkBox w-22 h-22">
            <label for="" class="mx-2 mt-2 fs-14"> إسم المستخدم المسجل بالهوية </label>
          </div>
        </div>

        <div class="col-md-3 mb-2">
          <div class="form-group d-flex align-items-center">
            <input type="checkbox" class="shap_checkBox w-22 h-22">
            <label for="" class="mx-2 mt-2 fs-14"> إسم المستخدم المسجل بالهوية </label>
          </div>
        </div>

        <div class="col-md-3 mb-2">
          <div class="form-group d-flex align-items-center">
            <input type="checkbox" class="shap_checkBox w-22 h-22">
            <label for="" class="mx-2 mt-2 fs-14"> إسم المستخدم المسجل بالهوية </label>
          </div>
        </div>

        <div class="col-md-3 mb-2">
          <div class="form-group d-flex align-items-center">
            <input type="checkbox" class="shap_checkBox w-22 h-22">
            <label for="" class="mx-2 mt-2 fs-14"> إسم المستخدم المسجل بالهوية </label>
          </div>
        </div>

        <div class="col-md-3 mb-2">
          <div class="form-group d-flex align-items-center">
            <input type="checkbox" class="shap_checkBox w-22 h-22">
            <label for="" class="mx-2 mt-2 fs-14"> إسم المستخدم المسجل بالهوية </label>
          </div>
        </div>

        <div class="col-md-3 mb-2">
          <div class="form-group d-flex align-items-center">
            <input type="checkbox" class="shap_checkBox w-22 h-22">
            <label for="" class="mx-2 mt-2 fs-14"> إسم المستخدم المسجل بالهوية </label>
          </div>
        </div>

        <div class="col-md-3 mb-2">
          <div class="form-group d-flex align-items-center">
            <input type="checkbox" class="shap_checkBox w-22 h-22">
            <label for="" class="mx-2 mt-2 fs-14"> إسم المستخدم المسجل بالهوية </label>
          </div>
        </div>


      </div>

      <div class="d-flex mt-4">
        <button class="btn main_btn pt-2  pb-2 w-25 fs-19 fw-6"> حفظ التغييرات </button>
        <button class="btn white_color third_btn mx-3 pt-2 pb-2 w-25 fs-19 fw-6" type="button" @click="switch_forms"> تعديل عناوين فورم التسجيل </button>
      </div>
    </form>
  </section>


  <!-- inputs  -->
  <section v-if="inputs" class="mt-4">
    <div class="row">
      <div class="col-md-8">
        <form action="">
          <section class="white_bg shape_inputs pt-3 pb-3 px-4">

              <div class="form-group mb-2">
                <label for=""> اسم المستخدم</label>
                <input type="text" class="form-control" placeholder="اسم المستخدم المسجل بالهوية" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> اسم المستخدم (بالإنجليزية)</label>
                <input type="text" class="form-control" placeholder="Username registered on th ID" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> اسم الطالب</label>
                <input type="text" class="form-control" placeholder="اسم الطالب المسجل بالهوية" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> اسم الطالب (بالإنجليزية)</label>
                <input type="text" class="form-control" placeholder="student name registered on th ID" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> القرابة</label>
                <input type="text" class="form-control" placeholder="صلة القرابة" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> القرابة (بالإنجليزية)</label>
                <input type="text" class="form-control" placeholder="Relationship" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> تاريخ الميلاد</label>
                <input type="text" class="form-control" placeholder="تاريخ الميلاد المسجل بالهوية" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> تاريخ الميلاد (بالإنجليزية)</label>
                <input type="text" class="form-control" placeholder="Date of birth registered on the ID" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> الجنس</label>
                <input type="text" class="form-control" placeholder="جنس الطالب" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> الجنس (بالإنجليزية)</label>
                <input type="text" class="form-control" placeholder="student gender" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> الكلية</label>
                <input type="text" class="form-control" placeholder="الكلية" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> الكلية (بالإنجليزية)</label>
                <input type="text" class="form-control" placeholder="Faculty" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> القسم</label>
                <input type="text" class="form-control" placeholder="القسم" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> القسم (بالإنجليزية)</label>
                <input type="text" class="form-control" placeholder="Major" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> السنة الدراسية</label>
                <input type="text" class="form-control" placeholder="السنة الدراسية" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> السنة الدراسية (بالإنجليزية)</label>
                <input type="text" class="form-control" placeholder="Grade" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> الموقع الجغرافى</label>
                <input type="text" class="form-control" placeholder="الموقع الجغرافى" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> الموقع الجغرافى (بالإنجليزية)</label>
                <input type="text" class="form-control" placeholder="Locationd" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>


              <div class="form-group mb-2">
                <label for=""> نوع الطالب</label>
                <input type="text" class="form-control" placeholder="نوع الطالب" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> نوع الطالب (بالإنجليزية)</label>
                <input type="text" class="form-control" placeholder="ID type" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> الشهادات</label>
                <input type="text" class="form-control" placeholder="الشهادات" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>

              <div class="form-group mb-2">
                <label for=""> الشهادات (بالإنجليزية)</label>
                <input type="text" class="form-control" placeholder="Certification" v-model="name">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>


          </section>

          <div class="mt-3 mb-3">
            <button class="btn main_btn px-5 pt-2 pb-2  fs-19 fw-6"> حفظ التغييرات </button>
          </div>
        </form>

      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
export default {
  setup(){
    const inputs = ref( true );
    const checkBoxes = ref( false );

    // methods 
    const switch_forms = ()=>{
      inputs.value = true ;
      checkBoxes.value = false ;
    }

    return{
      inputs,
      checkBoxes,
      switch_forms
    }
  }
}
</script>

<style lang="scss">
  .shape_form{
    label{color: #605e5e;}
  }
  .shape_inputs{
    .form-group{position: relative;}
    .form-control{
      background-color: #f5f5f5;
      border: none;
      height: 45px;
    }
    label{color: #605e5e;}
    .fa-pen-to-square{
      position: absolute;
      left:10px;
      top:60%
    }
  }
  .third_btn{
    background-repeat: no-repeat !important;  
    background-position:0% !important;
    background-size:300% !important; 
    background-color: #59cae6 !important;
    background: linear-gradient(135deg,  #59cae6 0%,#59cae6 40%,#ffffff 50%,#59cae6 60%,#59cae6 100%);
    &:hover{
        animation:light .7s;
    }
  }
  @keyframes light {
      0% {
            background-position: 100%; 
      }
      100% { 
            background-position:0%; 
      }
  }
</style>