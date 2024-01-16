<template>

  <section class="flex_between">
    <div>
        <h6 class="black_color fs-25"> المشرفين </h6>
        <div>
          <span> هنا يمكنك إضافة مشرفين وتعديل بيانات المشرفين </span>
        </div>
    </div>

    <div>
      <button class="btn main_btn px-3 pt-1 pb-1"> 
        <router-link to="/directors/add" class="fs-26"> + </router-link>
      </button>
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
          <Column field="name" sortable header="اسم المستخدم"></Column>
          <Column field="name" sortable header="الوظيفة"></Column>
          <Column field="name" sortable header="تاريخ الاضافة"></Column>
          <Column header="التفاصيل">
            <template #body="slotProps">
              <span v-if="slotProps"></span>
              <router-link to="/directors/show/1" class="table_details flex_center">
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

</style>