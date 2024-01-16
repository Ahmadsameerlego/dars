    <template>
    <div class="mt-4">
        <div class="flex_between">
            <div>
                <h6 class="black_color fs-19">بانتظار الدفع</h6>
                <div>
                <span>ظهور الطلبات في حالة انتظار الدفع من قبل العميل</span>
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

</style>