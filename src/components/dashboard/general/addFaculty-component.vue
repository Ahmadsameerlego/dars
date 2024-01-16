<template>
    <div>
        <h6 class="black_color fs-20"> إضافة الكلية </h6>
        <div>
            <span> يرجى ادخال اسم الكلية </span>
        </div>
    </div>

    <section class="white_bg pt-5 pb-5 px-5 mt-5">
        <form action="">
            <div class="form-group  mb-3">
                <label for="" class=""> اسم الكلية </label>            
                <InputText type="text" class="w-100" v-model="entity_name"  placeholder="يرجى ادخال اسم الكلية"/>
            </div>  

            <div class="flex_center mt-3">
                <button class="btn main_btn w-25 fs-17 fw-bold pt-2 pb-2" @click.prevent="$router.push('/addDepartment')"> التالي </button>
            </div>
        </form>
    </section>
</template>

<script>
import InputText from 'primevue/inputtext';
export default {
    components:{
        InputText
    }
}
</script>

<style>

</style>