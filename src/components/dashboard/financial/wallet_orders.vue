<template>
    <div>
      <h6 class="black_color fs-25"> المالية </h6>
      <div>
        <span> التقارير المالية والرصيد المالي </span>
      </div>
    </div>

    <!-- wallet head  -->
    <section class="wallet_head white_bg mt-4 px-4 pt-4 pb-4">
      <div class="row align-items-center">

        <div class="col-md-5">
          <div class="total_prices">
            <!-- single price  -->
            <div class="flex_between mb-3">
              <span class="fs-17">
                إجمالي الطلبات
              </span>
              <span  class="fs-17">
                100 رس
              </span>
            </div>
            <!-- single price  -->
            <div class="flex_between mb-3">
              <span  class="fs-17">
                إجمالي العمولة
              </span>
              <span  class="fs-17">
                100 رس
              </span>
            </div>
            <!-- single price  -->
            <div class="flex_between mb-3">
              <span  class="fs-17">  
                إجمالي القيمة المضافة
              </span>
              <span  class="fs-17">
                100 رس
              </span>
            </div>

            <div class="price_deserved mt-4 flex_between">
              <span class="main_color  fs-18 fw-bold">
                المستحق لك
              </span>
              <span class="main_color fs-18 fw-bold">
                100 رس
              </span>
            </div>

          </div>
        </div>

        <div class="col-md-3 flex_center">
          <div class="wallet_image">
            <img :src="require('@/assets/imgs/Wavy_Tech-31_Single-01 [Converted].png')" class="image" alt="">
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="ask_settleme flex_center flex-column">

            <div>
              <span class="fs-16 text-center d-flex lh-2">
                يمكنك ارسال طلب تسوية لتحويل الاموال عبر حسابك البنكي
              </span>
            </div>

            <div class="mt-3">
              <button class="btn main_btn pt-3 w-100 px-5 pb-3 fs-19 fw-bold p-ripple" v-ripple>   طلب تسوية </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- table  -->
    <section class="table mt-5">
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

<style lang="scss">
  .total_prices{
    .price_deserved{
        border-top: 1px solid #cccccc4a;
        padding-top: 8px;
    }
  }

  .wallet_image{
    width: 200px;
    height: 200px;
    img{
      object-fit: contain;
    }
  }
</style>