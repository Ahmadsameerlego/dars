<template>
    <div>
        <h6 class="black_color fs-25"> المالية </h6>
        <div>
          <span> التقارير المالية والرصيد المالي </span>
        </div>
    </div>

    <section class="settle_orders_types mt-4">
      <TabView>
          <TabPanel header="قيد الانتظار">
              <div class="row">

                <!-- single order  -->
                <div class="col-md-4 mb-2">
                  <div class="single_settle_order main_shadow">
                    
                    <div class="abs_time">
                      <span>
                        منذ 2 ساعة
                      </span>
                    </div>
                    <div class="order_head">
                      <!-- order number  -->
                      <div>
                        <span class="fw-17 fw-6 black_color">
                          رقم الطلب #12345
                        </span>
                      </div>
                      <!-- price  -->
                      <div class="mt-2 order_value">
                        <span>
                          قيمة الطلب  : 
                          <span class="fs-15 price_num"> 2000 رس </span>
                        </span>
                      </div>
                    </div>

                    <div class="order_footer mt-3 flex_between">

                        <div>
                          <span>
                            <i class="fa-solid fa-box-archive"></i>
                          </span>
                          <span class="mx-2 status">
                            الحالة : 
                          </span>
                          <span class="main_color fs-15">
                            قيد المراجعة
                          </span>
                        </div>

                        <div>
                          <router-link to="/financial/details/1" class="black_color">
                            عرض المزيد
                            <i class="fa-solid fa-angle-left mx-2"></i>
                          </router-link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
          </TabPanel>
          <TabPanel header="تم الانتهاء">
            <div class="row">
              <!-- single order  -->
              <div class="col-md-4 mb-2">
                <div class="single_settle_order main_shadow">
                  
                  <div class="abs_time">
                    <span>
                      منذ 2 ساعة
                    </span>
                  </div>
                  <div class="order_head">
                    <!-- order number  -->
                    <div>
                      <span class="fw-17 fw-6 black_color">
                        رقم الطلب #12345
                      </span>
                    </div>
                    <!-- price  -->
                    <div class="mt-2 order_value">
                      <span>
                        قيمة الطلب  : 
                        <span class="fs-15 price_num"> 2000 رس </span>
                      </span>
                    </div>
                  </div>

                  <div class="order_footer mt-3 flex_between">

                      <div>
                        <span>
                          <i class="fa-solid fa-box-archive"></i>
                        </span>
                        <span class="mx-2 status">
                          الحالة : 
                        </span>
                        <span class="text-danger fs-15">
                          مرفوض
                        </span>
                      </div>

                      <div>
                        <router-link to="/financial/details/1" class="black_color">
                          عرض المزيد
                          <i class="fa-solid fa-angle-left mx-2"></i>
                        </router-link>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
      </TabView>

    </section>
</template>

<script>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

export default {
  components:{
    TabView,
    TabPanel
  }
}
</script>

<style lang="scss">
  .single_settle_order{
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    padding: 17px 20px;
    transition: .3s all;
    &:hover{
      box-shadow: 0px 0px 12px #33333394;
    }
    .abs_time{
      position: absolute;
      left: 11px;
      font-size: 12px;
      color: #ccc;
    }
    .order_value{
      color: #c1bbbb;
      font-size: 14px;
    }
    .order_footer{
      border-top: 1px solid #cccccc53;
      padding-top: 6px;
      font-size: 13px;
      & :is( svg , .status ){
        color: #bbb5b5;
        font-size: 13px;
      }
    }
    .price_num{
      color: #333333b3 !important;
    }
  }
</style>