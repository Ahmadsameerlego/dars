<template>
  <div>
      <h6 class="black_color fs-20"> المراحل </h6>
  </div>

  <!-- add department  -->
  <div class="row mt-4">
      <div class="col-md-8">
          <form action="">
              <div class="form-group position-relative">
                  <label for="" class="fw-bold fs-16"> اضافة مرحلة جديدة </label>
                  <input type="text" v-model="depart_name" class="form-control h-45 border-none" placeholder="اكتب اسم المرحلة هنا">

                  <div class="add_depart">
                      <button class="btn main_btn br-4 px-3  fs-20" @click.prevent="addDepart"> + </button>
                  </div>
              </div>
          </form>

          <!-- added depratment  -->
          <section class="added_department mt-5">
            <label for="" class="fw-bold fs-16 mb-2" v-if="departs.length > 0"> المراحل </label>
              <!-- single department  -->
              <div class="single_faculty position-relative mb-3" v-for="(depart, index) in departs" :key="index">

                  <div class="name">
                  <span> {{ depart }} </span>
                  </div>

                  <div class="edits" style="left:-9%">
                      <button class="btn flex_center btn-danger br-50 delete" type="button" @click="removeDepart(index)"> 
                          <i class="fa-solid fa-xmark"></i>
                      </button>                    
                  </div>
              </div>

          </section>

          <div class="mt-4" v-if="departs.length>0">
              <button class="btn main_btn pt-2 pb-2 w-25" > حفظ التغييرات </button>
          </div>
      </div>
  </div>
  
</template>

<script>
import {ref} from 'vue';
export default {
  setup(){
      const depart_name = ref('');
      const departs = ref([]);

      // methods 
      const addDepart = ()=>{
          if( depart_name.value.trim('') != ''){
              departs.value.push(depart_name.value.trim(''));
              depart_name.value = ''; 
          }
      }

      const removeDepart = (index)=>{
          departs.value.splice(index , 1);
      }
      return{
          depart_name,
          departs,
          addDepart,
          removeDepart
      }
  }
}
</script>

<style>
  .add_depart{
      position: absolute;
      left: -10%;
      top: 43%;
  }
</style>