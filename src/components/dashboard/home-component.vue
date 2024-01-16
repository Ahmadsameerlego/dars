<template>
  <div>
    <h6 class="black_color fs-19">لوحة التحكم</h6>
    <div>
      <span>مرحبا بك اهلا بعودتك</span>
    </div>
  </div>

  <section class="cards mt-4">

    <div class="row">

      <div class="col-md-3">
        <section class="single_card px-3 pt-4 pb-3 flex_between dark">
          <div>
            <h4 class="fw-6 white_color">997</h4>
            <p class="fs-18 white_color">الطلبات الواردة</p>
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
            <p class="fs-18 white_color">الطلبات النشطة</p>
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
            <p class="fs-18 white_color">الطلبات المكتملة</p>
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

    >
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
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