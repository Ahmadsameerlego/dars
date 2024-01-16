<template>
  <div>
      <h6 class="black_color fs-20"> تقارير المستخدمين </h6>
  </div>

  <section class="mt-4 reports">
    <div class="single_report white_bg px-4 pt-3 pb-3 mb-2 d-flex">
      <!-- icon  -->
      <div class="report_icon flex_center">
        <i class="fa-regular fa-user"></i>
      </div>

      <!-- details  -->
      <div class="mx-3">

        <div class="mb-2">
          <span class="main_color fw-6 fs-18">
            إسم المشرف / الوظيفة
          </span>
        </div>

        <div class="mb-2"> 
          <span class="black_color fs-17">
            قام الموظف بإرسال اشعار للمستخدمين "هذا النص يمكن ان يستبدل"
          </span>
        </div>

        <div>
          <span class="d-flex align-items-center">
            <i class="fa-regular fa-clock"></i>
            <span class="mx-2">
              منذ خمس دقائق
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .single_report{
    .report_icon{
      width: 50px;
      height:50px;
      border-radius: 50%;
      background-color: #2858f6;
      svg{
        color:#fff;
        font-size: 30px;
      }
    }
  }
</style>