<template>
  <div>
      <h6 class="black_color fs-20"> السنين الدراسية </h6>
  </div>

  <section class="add_years pt-5 pb-5  mt-5">
    <div class="row">
      <div class="col-md-8">
        <form action="" class="position-relative ">

          <div class="d-flex align-items-center">
            <div class="form-group  mb-3">
                <label for="" class="fw-bold fs-17"> اضافة سنة دراسية </label> 
                
                <div class="row">
                  <div class="col-md-4">
                    <Dropdown v-model="selectedCollege" :options="colleges" optionLabel="name" placeholder="الكلية" class="w-100 w-full md:w-14rem" />
                  </div>
                  <div class="col-md-4">
                    <Dropdown v-model="selectedDepart" :options="departs" optionLabel="name" placeholder="القسم" class="w-100 w-full md:w-14rem" />
                  </div>
                  <div class="col-md-4">
                    <InputText type="text" class="w-100" v-model="year_name"  placeholder="السنة الدراسية"/>
                  </div>

                </div>
            </div>  

            <div class="mx-3 mt-3">
              <button class="btn main_btn br-4 px-3  fs-20" @click.prevent="addDepart"> + </button>
            </div>
          </div>



          <!-- added years  -->

          <section class="mt-4">
            <!-- single year  -->
            <div class="d-flex align-items-center mb-3">
              <div class="form-group  mb-3">
                  <label for="" class="fw-bold fs-17" v-if="years.length > 0"> السنين الدراسية </label> 
                  
                  <div class="row position-relative mb-2"  v-for="(year, index) in years" :key="index">
                    <div class="col-md-4">
                      <Dropdown v-model="year.college" :options="colleges" optionLabel="name" placeholder="الكلية" class="w-100 w-full md:w-14rem" />
                    </div>
                    <div class="col-md-4">
                      <Dropdown v-model="year.depart" :options="departs" optionLabel="name" placeholder="القسم" class="w-100 w-full md:w-14rem" />
                    </div>
                    <div class="col-md-4">
                      <InputText type="text" class="w-100" v-model="year.year"  placeholder="السنة الدراسية"/>
                      
                    </div>

                    <!-- delete year  -->
                    <button class="btn flex_center btn-danger br_50 w-30 h-30 delete delete_year" type="button" @click="removeDepart(index)"> 
                        <i class="fa-solid fa-xmark"></i>
                    </button>

                  </div>
              </div>  

              
            </div>
          </section>   
          
          <div v-if="years.length > 0">
            <button class="btn main_btn w-50 pt-3 pb-3 fs-19 fw-6"> حفظ التغييرات </button>
          </div>
        </form>
      </div>
    </div>
      
  </section>
</template>

<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import { ref } from 'vue';
export default {
  setup(){
    const colleges = ref([
      {
        id : 1 ,
        name : 'تربية'
      },
      {
        id : 2,
        name : 'هندسة'
      },
    ]);

    const departs = ref([
      {
        id : 1 ,
        name  :'طيران'
      },
      {
        id : 2 ,
        name  :'مدني'
      },
    ]);

    const years = ref([]);

    const selectedCollege = ref(null);
    const selectedDepart = ref(null);
    const year_name = ref('');

    // ================== methods  =================

    // add year 
    const addDepart = ()=>{
      if( selectedCollege.value !== null &&  selectedDepart.value !== null && year_name.value !== ''  ){

        years.value.push({
          college : selectedCollege.value ,
          depart : selectedDepart.value ,
          year : year_name.value 
        })

        // empty values 
        selectedCollege.value = null ;
        selectedDepart.value = null ;
        year_name.value = '' ;
      }
    }

    // remove year 
    const removeDepart = (index)=>{
      years.value.splice(index , 1)
    }



    return{
      colleges,
      departs,
      selectedCollege,
      selectedDepart,
      year_name,
      years,
      addDepart,
      removeDepart
    }
  },
  components:{
    InputText,
    Dropdown
  }
}
</script>

<style lang="scss">
  .delete_year{
    position: absolute;
    left: -40px;
    top: 15px;
  }
  .br_50{border-radius: 50%;}
  .add_years{
    .p-dropdown{border: none !important;}
    .p-inputtext{
      background-color: #fff !important;
    }
    .p-dropdown-trigger-icon {
        color: #8b8b8b !important;
    }
  }
  .p-dropdown .p-dropdown-trigger {
    background: #fff;
  }
</style>