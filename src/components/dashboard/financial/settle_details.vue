<template>
    <div>
        <h6 class="black_color fs-19">تفاصيل الطلب</h6>
        
    </div>


    <!-- order send success  -->
    <div class="success_send flex_end  mt-3 mb-3">
        <span class="mx-3 main_color pt-2 pb-2">
            تم إرسال الطلب ، بانتظار المراجعة
        </span>
    </div>

    <!-- order refused  -->
    <div class="order_refused  flex_center mt-3 mb-3">
        <i class="fa-solid fa-circle-xmark text-danger fs-19"></i>
        <span class="mx-3 text-danger pt-2 pb-2">
            تم رفض طلبك
        </span>
    </div>

    <!-- order accepted  -->
    <div class="success_send flex_end  mt-3 mb-3">
        <i class="fa-solid fa-circle-check main_color fs-20"></i>
        <span class="mx-3 main_color pt-2 pb-2">
        تهانينا ! تم الموافقة على طلبك
        </span>
    </div>

     <!-- all infos  -->
    <section class="white_bg pt-3  br-5 mb-3">
        <h5 class="fw-bold px-4 black_color border-bottom pb-2"> ملخص الطلب :  </h5>
        <!-- single info -->
        <div class="pt-1 pb-1 px-4">
            <div class="single_info flex_between">
                <span class="info_key pt-1 pb-1 fs-18 o-5 black_color">إجمالي الطلبات </span>
                <span class="info_value pt-1 pb-1 fs-18 o-5 black_color"> 4000 رس </span>
            </div>
        </div>
        <div class="pt-1 pb-1 px-4">
            <div class="single_info flex_between">
                <span class="info_key pt-1 pb-1 fs-18 o-5 black_color">إجمالي العمولة </span>
                <span class="info_value pt-1 pb-1 fs-18 o-5 black_color"> ٢٠٠ رس </span>
            </div>
        </div>
        <div class="pt-1 pb-1 px-4">
            <div class="single_info flex_between">
                <span class="info_key pt-1 pb-1 fs-18 o-5 black_color">عمولة التطبيق </span>
                <span class="info_value pt-1 pb-1 fs-18 o-5 black_color"> ٢٠٠ رس </span>
            </div>
        </div>
        <div class="pt-1 pb-1 px-4">
            <div class="single_info flex_between">
                <span class="info_key pt-1 pb-1 fs-18 o-5 black_color">إجمالي القيمة المضافة </span>
                <span class="info_value pt-1 pb-1 fs-18 o-5 black_color"> ٢٠٠ رس </span>
            </div>
        </div>
        
        <div class="required_paid pt-2 pb-2 px-4">
            <div class="single_info flex_between">
                <span class="info_key pt-2 pb-2 fs-18  main_color">المستحق </span>
                <span class="info_value pt-2 pb-2 fs-18  main_color"> ٢٠٠ رس </span>
            </div>
        </div> 
        
    </section>

    <!-- refused reason  -->
    <section class="white_bg pt-3 pb-3 br-5 mb-3">
        <h5 class="fw-bold px-4 black_color border-bottom pb-3"> سبب الرفض :  </h5>

        <div class="reason px-4 pt-3">
            <p class="fs-17">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda minima enim voluptate. Ullam obcaecati sunt inventore, quaerat sapiente aperiam.
            </p>
        </div>
    </section>


    <!-- table  -->
    <section class="table mt-3">
      <DataTable 
          :value="products" 
          tableStyle="min-width: 50rem"
          paginator :rows="5"  
          :rowsPerPageOptions="[5, 10, 20, 50]" 
          sortMode="multiple"
          v-model:filters="filters"
          stripedRows
      >
          <Column  header="رقم">
            <template #body="slotProps">
              {{ slotProps.index+1 }}
            </template>
          </Column>
          <Column field="name" sortable header="رقم الطلب"></Column>
          <Column field="name" sortable header="قيمة الطلب"></Column>
          <Column field="name" sortable header="العمولة"></Column>
          <Column field="name" sortable header="القيمة المضافة"></Column>
          <Column field="name" sortable header="المستحق"></Column>
          <Column   >
            <template #body="slotProps">
              <span v-if="slotProps"></span>
              <router-link to="/order/details/1" class="table_details flex_center">
                <span class="table_eye">
                  <i class="fas fa-eye"></i>
                </span>
                <span class="mx-2"> التفاصيل </span>
              </router-link>
          </template>
          </Column>
      </DataTable>
    </section>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { FilterMatchMode } from 'primevue/api';
import { ProductService } from '@/services/customerServices.js';

import { ref , onMounted } from 'vue';

export default {
    setup(){
        // ================= data properties =================
        const products = ref(null);
        const filters = ref({global: { value: null, matchMode: FilterMatchMode.CONTAINS }})

        // ================= methods =================

        // ================= mounted =================
        onMounted( ()=>{
        ProductService.getProductsMini().then((data) => (products.value = data));
        } )
        return{
        // data 
        products,
        filters
        }
    },
    components:{
        DataTable,
        Column,
    },
}
</script>

<style>
    .success_send{
        background-color: #d1f3fd;
        width: 250px;
        padding: 8px 10px;
        margin-right: auto;
    }
    .order_refused{
        width: 250px;
        padding: 8px 2px;
        margin-right: auto;
        background-color: #fadcdb;
    }
</style>