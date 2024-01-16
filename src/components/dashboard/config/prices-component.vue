<template>
  <div>
    <h6 class="black_color fs-25"> الاسعار </h6>
  </div>

  <!-- اعملها زي منت عاوز tabs or buttons radio buttons  -->
  <section class="prices mt-4">
    <TabView>
        <TabPanel header="الأسعار للسعوديين">
          <div class="row">
            <div class="col-md-11">
              <form action="" class="position-relative ">
                <div class="d-flex align-items-center">
                  <div class="form-group  mb-3">
                      <label for="" class="fw-bold fs-17"> اضافة سعر جديد </label> 
                      
                      <div class="row">
                        <div class="col-md-3">
                          <Dropdown v-model="selectedCollege" :options="colleges" optionLabel="name" placeholder="الكلية" class="w-100 w-full md:w-14rem" />
                        </div>
                        <div class="col-md-3">
                          <Dropdown v-model="selectedDepart" :options="departs" optionLabel="name" placeholder="القسم" class="w-100 w-full md:w-14rem" />
                        </div>
                        <div class="col-md-3">
                          <Dropdown v-model="selectedYear" :options="stude_years" optionLabel="name" placeholder="السنة الدراسية" class="w-100 w-full md:w-14rem" />
                        </div>
                        <div class="col-md-3">
                          <InputText type="text" class="w-100" v-model="year_name"  placeholder="السعر"/>
                        </div>

                      </div>
                  </div>  

                  <div class="mx-3 mt-3">
                    <button class="btn main_btn br-4 px-3  fs-20" @click.prevent="addDepart"> + </button>
                  </div>
                </div>
                <!-- added prices  -->
                <section class="mt-4">
                  <!-- single year  -->
                  <div class="d-flex align-items-center mb-3">
                    <div class="form-group  mb-3">
                        <label for="" class="fw-bold fs-17" v-if="years.length > 0"> الأسعار </label> 
                        
                        <div class="row position-relative mb-2"  v-for="(year, index) in years" :key="index">
                          <div class="col-md-3">
                            <Dropdown v-model="year.college" :options="colleges" optionLabel="name" placeholder="الكلية" class="w-100 w-full md:w-14rem" />
                          </div>
                          <div class="col-md-3">
                            <Dropdown v-model="year.depart" :options="departs" optionLabel="name" placeholder="القسم" class="w-100 w-full md:w-14rem" />
                          </div>
                          <div class="col-md-3">
                            <Dropdown v-model="year.study_year" :options="stude_years" optionLabel="name" placeholder="السنة الدراسية" class="w-100 w-full md:w-14rem" />
                          </div>
                          <div class="col-md-3">
                            <InputText type="text" class="w-100" v-model="year.year"  placeholder="السعر"/>
                            
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
          
        </TabPanel>


        <TabPanel header="الأسعار للمقيمين">
          
        </TabPanel>
    </TabView>
  </section>
</template>

<script>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
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

    const stude_years = ref([
      {
        id : 1 , 
        name : 'السنة الدراسية الأولى'
      },
      {
        id : 2 , 
        name : 'السنة الدراسية الثانية'
      },
    ]) ;

    const years = ref([]);

    const selectedCollege = ref(null);
    const selectedDepart = ref(null);
    const year_name = ref('');
    const selectedYear = ref(null);

    // ================== methods  =================

    // add year 
    const addDepart = ()=>{
      if( selectedCollege.value !== null &&  selectedDepart.value !== null && year_name.value !== ''  ){

        years.value.push({
          college : selectedCollege.value ,
          depart : selectedDepart.value ,
          year : year_name.value ,
          study_year : selectedYear.value
        })

        // empty values 
        selectedCollege.value = null ;
        selectedDepart.value = null ;
        selectedYear.value = null ;
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
      selectedYear,
      stude_years ,
      addDepart,
      removeDepart
    }
  },
  components:{
    TabView,
    TabPanel,
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
    .p-dropdown{border: none !important;}
    .p-inputtext{
      background-color: #fff !important;
    }
    .p-dropdown-trigger-icon {
        color: #8b8b8b !important;
    }
  
  .p-dropdown .p-dropdown-trigger {
    background: #fff;
  }
</style>