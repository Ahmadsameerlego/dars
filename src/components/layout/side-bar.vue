<template>
    <section id="sidebar">
      <!-- logo  -->
      <section class="logo">
          <img :src="require('@/assets/imgs/logo.png')" alt="logo">
          <button class="btn close_nav" @click="closeSide">
            <i class="fas fa-x"></i>
          </button>
      </section>
  
      <!-- navigation  -->
      <nav class="sidebar_nav mt-4">
        <ul class="list">
  
          <!-- single nav item  -->
          <li class="nav_item">
            <router-link to="/" class="flex_between">
              <div class="d-flex align-items-center">
                <span class="icon">
                  <i class="fa-solid fa-desktop"></i>
                </span>
  
                <span class="nav_name mx-2 nav_name">
                  {{  $t('nav.main') }}
                </span>
              </div>
  
              <span class="left">
                <i class="fa-solid fa-chevron-left"></i>
              </span>
            </router-link>
  
          </li>

          <!-- طلباتي -->
          <li class="nav_item nested_item cursor-pointer"  @click="toggleNestedNav">
              <div :class="{'router-link-active':$route.fullPath.includes('pending')||$route.fullPath.includes('waitingPay')||$route.fullPath.includes('finished')}">
                <div class="d-flex align-items-center">
                  <span class="icon">
                    <i class="fa-solid fa-list-check"></i>
                  </span>
    
                  <span class="nav_name mx-2 nav_name">
                    طلباتي
                  </span>
                </div>
    
                <span class="left">
                  <i class="fa-solid fa-chevron-left"></i>
                </span>
              </div>

              <transition name="slide">
                <ul class="nested_nav list-style-none pt-3 " v-if="showNestedNav||$route.fullPath.includes('pending')||$route.fullPath.includes('waitingPay')||$route.fullPath.includes('finished')">
                  <li class="nav_item">
                    <router-link to="/orders/pending" class="flex_between">
                      <div class="d-flex align-items-center">
                        <span class="icon">
                          <i class="fa-solid fa-folder-plus"></i>
                        </span>
          
                        <span class="nav_name mx-2 nav_name">
                          قيد الموافقة
                        </span>
                      </div>
          
                      <span class="left">
                        <i class="fa-solid fa-chevron-left"></i>
                      </span>
                    </router-link>
          
                  </li>
                  <li class="nav_item">
                    <router-link to="/orders/waitingPay" class="flex_between">
                      <div class="d-flex align-items-center">
                        <span class="icon">
                          <i class="fa-solid fa-arrows-spin"></i>
                        </span>
          
                        <span class="nav_name mx-2 nav_name">
                          بانتظار الدفع
                        </span>
                      </div>
          
                      <span class="left">
                        <i class="fa-solid fa-chevron-left"></i>
                      </span>
                    </router-link>
          
                  </li>
                  <li class="nav_item">
                    <router-link to="/orders/finished" class="flex_between">
                      <div class="d-flex align-items-center">
                        <span class="icon">
                          <i class="fa-solid fa-envelope-circle-check"></i>
                        </span>
          
                        <span class="nav_name mx-2 nav_name">
                         تم الانتهاء
                        </span>
                      </div>
          
                      <span class="left">
                        <i class="fa-solid fa-chevron-left"></i>
                      </span>
                    </router-link>
          
                  </li>
                </ul>
              </transition>
              
              
          </li>

           <!-- المالية -->
           <li class="nav_item nested_item cursor-pointer"  @click="toggleNestedFinancial">
              <div :class="{'router-link-active':$route.fullPath.includes('wallet')||$route.fullPath.includes('settlement')}">
                <div class="d-flex align-items-center">
                  <span class="icon">
                    <i class="fa-solid fa-money-bills"></i>
                  </span>
    
                  <span class="nav_name mx-2 nav_name">
                    المالية
                  </span>
                </div>
    
                <span class="left">
                  <i class="fa-solid fa-chevron-left"></i>
                </span>
              </div>

              <transition name="slide">
                <ul class="nested_nav list-style-none pt-3 " v-if="showNestedFinancial||$route.fullPath.includes('wallet')||$route.fullPath.includes('settlement')">
                  <li class="nav_item">
                    <router-link class="flex_between" to="/financial/wallet">
                      <div class="d-flex align-items-center">
                        <!-- <span class="icon">
                          <i class="fa-solid fa-folder-plus"></i>
                        </span> -->
          
                        <span class="nav_name mx-2 nav_name">
                          المحفظة والطلبات
                        </span>
                      </div>
          
                      <span class="left">
                        <i class="fa-solid fa-chevron-left"></i>
                      </span>
                    </router-link>
          
                  </li>
                  <li class="nav_item">
                    <router-link to="/financial/settlement" class="flex_between">
                      <div class="d-flex align-items-center">
                          <!-- <span class="icon">
                            <i class="fa-solid fa-arrows-spin"></i>
                          </span>
            -->
                        <span class="nav_name mx-2 nav_name">
                          طلبات التسوية
                        </span>
                      </div>
          
                      <span class="left">
                        <i class="fa-solid fa-chevron-left"></i>
                      </span>
                    </router-link>
          
                  </li>
                </ul>
              </transition>
              
              
          </li>

           <!-- الاعدادات -->
           <li class="nav_item nested_item cursor-pointer"  @click="toggleNestedEdits">
              <div :class="{'router-link-active':$route.fullPath.includes('register')||$route.fullPath.includes('school')||$route.fullPath.includes('entity')||$route.fullPath.includes('department')||$route.fullPath.includes('faculty')||$route.fullPath.includes('prices')||$route.fullPath.includes('shape')||$route.fullPath.includes('studYears')}">
                <div class="d-flex align-items-center">
                  <span class="icon">
                    <i class="fa-solid fa-gear"></i>
                  </span>
    
                  <span class="nav_name mx-2 nav_name">
                    الاعدادات
                  </span>
                </div>
    
                <span class="left">
                  <i class="fa-solid fa-chevron-left"></i>
                </span>
              </div>

              <!-- 
                  common => for all entities

               -->
              <transition name="slide">
                <ul class="nested_nav list-style-none pt-3 " v-if="showNestedEdits||$route.fullPath.includes('register')||$route.fullPath.includes('school')||$route.fullPath.includes('entity')||$route.fullPath.includes('department')||$route.fullPath.includes('faculty')||$route.fullPath.includes('prices')||$route.fullPath.includes('shape')||$route.fullPath.includes('studYears')">

                  <!-- common  -->
                  <li class="nav_item">
                    <router-link to="/config/register" class="flex_between">
                      <div class="d-flex align-items-center">
                        <span class="nav_name mx-2 nav_name">
                          اعدادات التسجيل
                        </span>
                      </div>
          
                      <span class="left">
                        <i class="fa-solid fa-chevron-left"></i>
                      </span>
                    </router-link>
                  </li>
                  <!-- common  -->
                  <li class="nav_item">
                    <router-link to="/config/entity" class="flex_between">
                      <div class="d-flex align-items-center">
                        <span class="nav_name mx-2 nav_name">
                          بيانات الكيان
                        </span>
                      </div>
          
                      <span class="left">
                        <i class="fa-solid fa-chevron-left"></i>
                      </span>
                    </router-link>
                  </li>

                  <!-- for schools  -->
                  <li class="nav_item">
                    <router-link to="/config/school" class="flex_between">
                      <div class="d-flex align-items-center">
                        <span class="nav_name mx-2 nav_name">
                          المراحل
                        </span>
                      </div>
          
                      <span class="left">
                        <i class="fa-solid fa-chevron-left"></i>
                      </span>
                    </router-link>
                  </li>
                  <!-- for unversities  -->
                  <li class="nav_item">
                    <router-link to="/config/faculty" class="flex_between">
                      <div class="d-flex align-items-center">
                        <span class="nav_name mx-2 nav_name">
                          الكليات
                        </span>
                      </div>
          
                      <span class="left">
                        <i class="fa-solid fa-chevron-left"></i>
                      </span>
                    </router-link>
                  </li>
                  <!-- for  instituates -->
                  <li class="nav_item">
                    <router-link to="/config/department" class="flex_between">
                      <div class="d-flex align-items-center">
                        <span class="nav_name mx-2 nav_name">
                          الأقسام
                        </span>
                      </div>
          
                      <span class="left">
                        <i class="fa-solid fa-chevron-left"></i>
                      </span>
                    </router-link>
                  </li>

                  <!-- common  -->
                  <li class="nav_item">
                    <router-link to="/config/studYears" class="flex_between">
                      <div class="d-flex align-items-center">
                        <span class="nav_name mx-2 nav_name">
                          السنين الدراسية
                        </span>
                      </div>
          
                      <span class="left">
                        <i class="fa-solid fa-chevron-left"></i>
                      </span>
                    </router-link>
                  </li>
                  <!-- common  -->
                  <li class="nav_item">
                    <router-link to="/config/prices" class="flex_between">
                      <div class="d-flex align-items-center">
                        <span class="nav_name mx-2 nav_name">
                          الاسعار 
                        </span>
                      </div>
          
                      <span class="left">
                        <i class="fa-solid fa-chevron-left"></i>
                      </span>
                    </router-link>
                  </li>
                  <!-- common  -->
                  <li class="nav_item">
                    <router-link to="/config/shape" class="flex_between">
                      <div class="d-flex align-items-center">
                        <span class="nav_name mx-2 nav_name">
                          نموذج تسجيل الطلاب 
                        </span>
                      </div>
          
                      <span class="left">
                        <i class="fa-solid fa-chevron-left"></i>
                      </span>
                    </router-link>
                  </li>

                  
                </ul>
              </transition>
              
              
          </li>
                
          <!-- single nav item  -->
          <li class="nav_item">
            <router-link to="/rates" class="flex_between">
              <div class="d-flex align-items-center">
                <span class="icon">
                  <i class="fa-solid fa-message"></i>
                </span>
  
                <span class="mx-2 nav_name">
                  التقييمات
                </span>
              </div>
  
              <span class="left">
                <i class="fa-solid fa-chevron-left"></i>
              </span>
            </router-link>
  
          </li>

          
          <!-- single nav item  -->
          <li class="nav_item nested_item cursor-pointer" @click="toggleNestedDirector">
            <div class="flex_between" :class="{'router-link-active':$route.fullPath.includes('management')||$route.fullPath.includes('reports')}">
              <div class="d-flex align-items-center">
                <span class="icon">
                  <i class="fa-regular fa-user"></i>
                </span>
  
                <span class="mx-2 nav_name">
                  المشرفين
                </span>
              </div>
  
              <span class="left">
                <i class="fa-solid fa-chevron-left"></i>
              </span>
            </div>

            <ul class="nested_nav list-style-none pt-3 " v-if="showNestedDirector||$route.fullPath.includes('management')||$route.fullPath.includes('reports')">
                <li class="nav_item">
                  <router-link to="/directors/management" class="flex_between">
                    <div class="d-flex align-items-center">
                      <!-- <span class="icon">
                        <i class="fa-solid fa-folder-plus"></i>
                      </span> -->
        
                      <span class="nav_name mx-2 nav_name">
                        إدارة المشرفين
                      </span>
                    </div>
        
                    <span class="left">
                      <i class="fa-solid fa-chevron-left"></i>
                    </span>
                  </router-link>
        
                </li>
                <li class="nav_item">
                  <router-link to="/directors/reports" class="flex_between">
                    <div class="d-flex align-items-center">
                        <!-- <span class="icon">
                          <i class="fa-solid fa-arrows-spin"></i>
                        </span>
          -->
                      <span class="nav_name mx-2 nav_name">
                        تقارير المشرفين
                      </span>
                    </div>
        
                    <span class="left">
                      <i class="fa-solid fa-chevron-left"></i>
                    </span>
                  </router-link>
        
                </li>
              </ul>
          </li>
  
          <!-- single nav item  -->
          <li class="nav_item">
            <router-link to="/contact" class="flex_between">
              <div class="d-flex align-items-center">
                <span class="icon">
                  <i class="fa-solid fa-phone-volume"></i>
                </span>
  
                <span class="mx-2 nav_name">
                  {{  $t('nav.contact')  }}
                </span>
              </div>
  
              <span class="left">
                <i class="fa-solid fa-chevron-left"></i>
              </span>
            </router-link>
  
          </li>
  
          <!-- single nav item  -->
          <li class="nav_item">
            <button @click="signOut" class="btn flex_between px-0 pt-0 pb-0" :disabled="disabled" style="color: inherit !important;">
              <div class="d-flex align-items-center">
                <span class="icon logout">
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </span>
  
                <span class="mx-2 nav_name">
                  {{  $t('nav.logout')  }}
                </span>
              </div>
  
              <div class="spinner-border" role="status" v-if="disabled">
                  <span class="visually-hidden">Loading...</span>
              </div>
  
              <span class="left">
                <i class="fa-solid fa-chevron-left"></i>
              </span>
            </button>
  
          </li>
          
        </ul>
      </nav>
    </section>
    <Toast />
  </template>
  
  <script>
  import axios from 'axios';
  import Toast from 'primevue/toast';
  
  export default {
    data(){
      return{
        disabled : false,
        showNestedNav: false,
        showNestedFinancial: false,
        showNestedDirector : false,
        showNestedEdits : false
      }
    },
    components:{
      Toast
    },
    methods:{
      toggleNestedNav() {
        this.showNestedNav = !this.showNestedNav;
      },
      toggleNestedFinancial() {
        this.showNestedFinancial = !this.showNestedFinancial;
      },
      toggleNestedDirector(){
        this.showNestedDirector = !this.showNestedDirector;
      },
      toggleNestedEdits(){
        this.showNestedEdits = !this.showNestedEdits;
      },
      closeSide(){
        document.querySelector('#sidebar').classList.remove('active');
        // document.querySelector('#header').classList.remove('active');
        // document.querySelector('#content').classList.remove('active');
      },
      async signOut(){
        const fd = new FormData;
        this.disabled = true ;
        fd.append('deviceId', localStorage.getItem('device_id'));
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };
  
        await axios.post('/sign-out-center', fd , {headers})
        .then( (res)=>{
          if( res.data.key === 'success' ){
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            this.$toast.add({ severity: 'success', summary: res.data.message, life: 3000 });
            setTimeout(() => {
              this.$router.push('/center/login')
            }, 1000);
            this.disabled = false ;
          }else{
            this.$toast.add({ severity: 'error', summary: res.data.message, life: 3000 });
            this.disabled = false ;
          }
        } )
        .catch( (err)=>{
            this.$toast.add({ severity: 'error', summary: err.response.data.message, life: 3000 });
            this.disabled = false ;
        } )
      }
    }
  }
  </script>
  
  <style  scoped>
  .nested_item .left{transition: .3s all;}
  .nested_item .left.active{transform: rotate(45deg);}


  .nested_nav .router-link-active{
    background: #d1f3fd !important;
   
  }
  .nested_nav .router-link-active .nav_name{
    color: #346cf6  !important;
  }
  .nested_nav .router-link-active::before{display: none !important;}
  .nested_item .router-link-active::before{height: 50px !important;}
    .slide-enter-active, .slide-leave-active {
      transition:  0.5s all;
      height: auto;
    }
    .slide-enter, .slide-leave-to {
      max-height: 0;
      overflow: hidden;
    }
    .list-style-none{list-style: none;}
    .close_nav{
      display: none;
      
    }
    .spinner-border{
      position: absolute;
      top: 19%;
      left: 49%;
      width: 25px;
      height: 25px;
    }
  </style>
  