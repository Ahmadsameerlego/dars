<template>
  <div>
      <h6 class="black_color fs-19">تفاصيل الطلب</h6>
      <div>
          <span>الطلبات / الطلبات الجديدة   <span class="main_color"> / تفاصيل الطلب  </span></span>
      </div>
  </div>

  <!-- success payment  -->
  <div class="success_payment flex_end">
    <i class="fa-solid fa-circle-check main_color fs-20"></i>
    <span class="mx-3 main_color">
      تهانينا ! تم الدفع بنجاح
    </span>
  </div>
  <!-- steps  -->
  <section
    class="white_bg steps flex_between pt-4 pb-4 px-5 br-5 mb-3 mt-4"
    
  >
    <!-- single step  -->
    <div class="step d-flex align-items-center">
      <span
        class="step_number active"
      >
        1
      </span>
      <span
        class="step-text grayColor mx-2 active"
      >
        قيد الموافقة
      </span>
    </div>

    <span
      class="line active"
      
    ></span>
    <!-- single step  -->
    <div class="step d-flex align-items-center">
      <span
        class="step_number"
        
      >
        2
      </span>
      <span
        class="step-text grayColor mx-2"
        
      >
        بانتظار الدفع
      </span>
    </div>
    <span
      class="line"
      
    ></span>
    <!-- single step  -->
    <div class="step d-flex align-items-center">
      <span
        class="step_number"
        
      >
        3
      </span>
      <span
        class="step-text grayColor mx-2"
        
      >
        تم الانتهاء 
      </span>
    </div>
    
  </section>

  <!-- all infos  -->
  <section class="white_bg pt-3  br-5 mb-3">
      <h5 class="fw-bold px-4 black_color"> بيانات الطلب :  </h5>
      <!-- single info -->
      <div class="gray_bg pt-2 pb-2 px-4">
          <div class="row">
            <div class="col-md-6">
              <div class="single_info flex_between">
                <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">اسم المستخدم </span>
                <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> الاسم هنا </span>
            </div>
            </div>
          </div>
      </div>
      <div class="pt-2 pb-2 px-4">
          <div class="row">
            <div class="col-md-6">
              <div class="single_info flex_between">
                  <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">صلة القرابة </span>
                  <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> الاب </span>
              </div>
            </div>
          </div>
      </div>

      <div class="gray_bg pt-2 pb-2 px-4">
          <div class="row">
            <div class="col-md-6">
              <div class="single_info flex_between">
                  <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">تاريخ الميلاد </span>
                  <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> ٢٠ اغسطس ٢٠٠٨ </span>
              </div>
            </div>
          </div>
      </div>
      
  </section>

  <!-- all infos  -->
  <section class="white_bg pt-3  br-5 mb-3">
      <h5 class="fw-bold px-4 black_color"> اسم الطالب :  </h5>
      <!-- single info -->
      <div class="gray_bg pt-2 pb-2 px-4">
          <div class="row">
            <div class="col-md-6">
              <div class="single_info flex_between">
                <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">تاريخ ميلاد الطالب </span>
                <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> ٢٠ اغسطس ٢٠٠٨  </span>
            </div>
            </div>
          </div>
      </div>
      <div class="pt-2 pb-2 px-4">
          <div class="row">
            <div class="col-md-6">
              <div class="single_info flex_between">
                  <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">جنس الطالب </span>
                  <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> ذكر </span>
              </div>
            </div>
          </div>
      </div>

      <div class="gray_bg pt-2 pb-2 px-4">
          <div class="row">
            <div class="col-md-6">
              <div class="single_info flex_between">
                  <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">القسم </span>
                  <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> القسم العام</span>
              </div>
            </div>
          </div>
      </div>
      
      <div class="pt-2 pb-2 px-4">
          <div class="row">
            <div class="col-md-6">
              <div class="single_info flex_between">
                  <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">السنة الدراسية </span>
                  <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> السنة الدراسية الأولى</span>
              </div>
            </div>
          </div>
      </div>
      
      <div class="gray_bg pt-2 pb-2 px-4">
          <div class="row">
            <div class="col-md-6">
              <div class="single_info flex_between">
                  <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">سعر السنة </span>
                  <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> ٢٠٠٠ رس</span>
              </div>
            </div>
          </div>
      </div>
      
      <div class="pt-2 pb-2 px-4">
          <div class="row">
            <div class="col-md-6">
              <div class="single_info flex_between">
                  <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">نوع الطالب  </span>
                  <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> مقيم</span>
              </div>
            </div>
          </div>
      </div>

      <div class="mt-3 px-4 pb-4">
        <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">الشهادات السابقة  </span>

        <div class="pdfs mt-2">
          <div class="single_pdf flex_center mx-3">
            <a href="https://www.africau.edu/images/default/sample.pdf" target="_blank">
              <img :src="require('@/assets/imgs/pdf.png')" alt="pdf">
            </a>
          </div>
        </div>
      </div>
  </section>

  <section class="white_bg flex_between pt-4 px-4 pb-4 br-5 mb-3">
    <div>
      <span class="fs-23 fw-bold">
        <span class="main_color fs-30 "> % </span>
        <span class="mx-2 black_color"> تطبيق خصم الأخوة </span>
      </span>
    </div>

    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
    </div>
  </section>

  <!-- all infos  -->
  <section class="white_bg pt-3  br-5 mb-3">
      <h5 class="fw-bold px-4 black_color"> ملخص الطلب :  </h5>
      <!-- single info -->
      <div class="pt-2 pb-2 px-4">
        <div class="single_info flex_between">
            <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">قيمة الطلب </span>
            <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> 4000 رس </span>
        </div>
      </div>
      <div class="pt-2 pb-2 px-4">
          <div class="single_info flex_between">
              <span class="info_key pt-2 pb-3 fs-18 main_color">مبلغ التسجيل الرمزى </span>
              <span class="info_value pt-2 pb-2 fs-18 main_color"> ٢٠٠ رس </span>
          </div>
      </div>
      <div class="pt-2 pb-2 px-4">
          <div class="single_info flex_between">
              <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">عمولة التطبيق </span>
              <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> ٢٠٠ رس </span>
          </div>
      </div>
      <div class="pt-2 pb-2 px-4">
          <div class="single_info flex_between">
              <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">القيمة المضافة </span>
              <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> ٢٠٠ رس </span>
          </div>
      </div>
      <div class="pt-2 pb-2 px-4">
          <div class="single_info flex_between">
              <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">خصم الأخوة </span>
              <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> ٢٠٠ رس </span>
          </div>
      </div>
      <div class="pt-2 pb-2 px-4">
          <div class="single_info flex_between">
              <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">كوبون الخصم </span>
              <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> ٢٠٠ رس </span>
          </div>
      </div>
      <div class="pt-2 pb-2 px-4">
          <div class="single_info flex_between">
              <span class="info_key pt-2 pb-3 fs-18 o-5 black_color">الإجمالي </span>
              <span class="info_value pt-2 pb-2 fs-18 o-5 black_color"> ٢٠٠ رس </span>
          </div>
      </div>

      <div class="required_paid pt-2 pb-2 px-4">
          <div class="single_info flex_between">
              <span class="info_key pt-2 pb-3 fs-21 fw-bold  main_color">المطلوب دفعة </span>
              <span class="info_value pt-2 pb-2 fs-21 fw-bold  main_color"> ٢٠٠ رس </span>
          </div>
      </div> 
      
  </section>

  <!-- submit  -->
  <section class="mt-3 mb-3">
    <button class="btn main_btn w-25 pt-2 pb-2 fs-19 fw-6"> قبول الطلب </button>
    <button class="btn btn-danger mx-3 w-25 pt-2 pb-2 fs-19 fw-6"> رفض الطلب </button>
  </section>

</template>

<script>
export default {

}
</script>

<style lang="scss">
  .required_paid{
    background-color: #d1f3fd;
  }
  .form-check-input{
    width: 55px !important;
    height: 25px !important;
  }
   .steps{    
        .step{
            position: relative;
            .step_number{
                width:20px;
                height: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                border: 1px solid #bbbbbb;
                color: #bbbbbb ;
                font-size: 12px;
                &.active{
                    color: #3290d8;
                    border: 1px solid #3290d8;
                    background-color: #3290d830;
                }
            }
            .step-text{
                &.active{
                    color: #333 !important;
                }
            }
        }
        .line{
            width:210px;
            height: 2px;
            background-color:#bbbbbb ;
            &.active{
                background-color: #3290d8;
            }
        }
    }
    .gray_bg{background-color: #fafafa;}
    .single_pdf{
      width: 150px;
      height:150px;
      background-color: #fafafa;
      border-radius: 5px;
      img{
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
    }
    .success_payment{
      background-color: #d1f3fd;
      width: 200px;
      padding: 8px 10px;
      margin-right: auto;
    }
</style>