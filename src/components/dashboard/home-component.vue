<template>
  <div>
    <h6 class="black_color fs-19">{{ $t('home.dash') }}</h6>
    <div>
      <span>{{ $t('home.intro') }}</span>
    </div>
  </div>

  <section class="cards mt-4">

    <div class="row">

      <div class="col-md-3">
        <section class="single_card px-3 pt-4 pb-3 flex_between dark">
          <div>
            <h4 class="fw-6 white_color">997</h4>
            <p class="fs-18 white_color">{{ $t('home.income') }}</p>
          </div>
          <div class="card_icon">
            <img
                :src="require('@/assets/imgs/noun_Box_-4.png')"
                alt=""
            />
          </div>
        </section>
      </div>
      <div class="col-md-3">
        <section class="single_card px-3 pt-4 pb-3 flex_between dark">
          <div>
            <h4 class="fw-6 white_color">9</h4>
            <p class="fs-18 white_color">{{ $t('home.active') }}</p>
          </div>
          <div class="card_icon">
            <img
                :src="require('@/assets/imgs/noun_shipping box_-2.png')"
                alt=""
            />
          </div>
        </section>
      </div>
      <div class="col-md-3">
        <section class="single_card px-3 pt-4 pb-3 flex_between dark">
          <div>
            <h4 class="fw-6 white_color">9</h4>
            <p class="fs-18 white_color">{{  }}</p>
          </div>
          <div class="card_icon">
            <img
                :src="require('@/assets/imgs/noun_Box_-5.png')"
                alt=""
            />
          </div>
        </section>
      </div>
      <div class="col-md-3">
        <section class="single_card px-3 pt-4 pb-3 flex_between dark">
          <div>
            <h4 class="fw-6 white_color">9</h4>
            <p class="fs-18 white_color">كل الطلبات</p>
          </div>
          <div class="card_icon">
            <img
                :src="require('@/assets/imgs/noun_products_1375567 (1).png')"
                alt=""
            />
          </div>
        </section>
      </div>

    </div>

  </section>


  <div class="mt-4">
    <div class="flex_between">
        <div>
            <h6 class="black_color fs-19">الطلبات الجديدة</h6>
            <div>
            <span>ظهور احدث الطلبات التي تحتاج الى الموافقة</span>
            </div>
        </div>

         <!-- search  -->
        <div class="form-group position-relative">
            <InputText v-model="filters['global'].value" class="tableSearch" placeholder="يمكنك البحث برقم الطلب هنا" />
            <span class="search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </span>
        </div>
    </div>
  </div>
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
          <Column field="name" sortable header="اسم العميل"></Column>
          <Column field="name" sortable header="الموقع"></Column>
          <Column field="name" sortable header="السعر الإجمالي"></Column>
          <Column field="name" sortable header="تاريخ الطلب"></Column>
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
import InputText from 'primevue/inputtext';
import { ProductService } from '@/services/customerServices.js';

export default {
    data(){
        return{
            products : null,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },

        }
    },
    components:{
        DataTable,
        Column,
        InputText,
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }

};
</script>

<style>
    
   
    .cards .single_card {
        position: relative;
        min-height: 140px;
        border-radius: 4px;
        background: linear-gradient(90deg, rgba(87,212,249,1) 0%, rgba(70,183,248,1) 33%, rgba(52,132,247,1) 100%);
    }
    .cards .single_card:before {
        content: "";
        position: absolute;
        width: 44px;
        height: 40px;
        left: 9px;
        bottom: 57px;
        z-index: 0;
        transition: all .3s;
        background: linear-gradient(90deg,hsla(0,0%,100%,.01),hsla(0,0%,100%,.24) 38%);
        border-radius: 8px;
    }
    .cards .single_card:hover:before {
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
    }
    .cards .single_card .card_icon{
        width: 50px;
        height: 50px;
    }
</style>