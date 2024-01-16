<template>
  <div>
      <h6 class="black_color fs-25"> الكليات </h6>
  </div>

  <section class="faculty mt-5">
    <!-- add  -->
    <div class="add">
      <router-link to="/addFaculty" class="main_btn pt-2 pb-2 fw-bold px-5 fs-16">
        اضافة كلية جديدة
        <span class="mx-2">+</span>
      </router-link>
    </div>

    <!-- faculties  -->
    <section class="faculties mt-5">
      <h6 class="black_color fw-bold mb-3 fs-17"> الكليات </h6>

      <div class="row">
        
        <!-- single faculty  -->
        <div class="col-md-8">
          <div class="single_faculty position-relative mb-3">

            <div class="name">
              <span> كلية التربية </span>
            </div>

            <div class="edits">
              <button class="btn flex_center btn-danger br-50 delete"> 
                <i class="fa-solid fa-xmark"></i>
              </button>
              <button class="btn flex_center main_btn br-50 mx-2 edit"> 
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          </div>
        </div>

      </div>
     
    </section>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  
</style>