<template>
    <div>
        <h6 class="black_color fw-6 fs-21"> أضف مشرف </h6>
        <div>
          <span> هنا يمكنك إضافة مشرف جديد </span>
        </div>
    </div>

    <section class="white_bg pt-3 pb-3 px-4 mt-3 mb-4">
        <form action="" class="add_director_form">
            <div class="row">

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for=""> اسم المستخدم بالعربية </label>
                        <input type="text" class="form-control" placeholder="يرجى ادخال اسم مدير النظام هنا" >
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for=""> اسم المستخدم بالإنجليزية </label>
                        <input type="text" class="form-control" placeholder="يرجى ادخال اسم مدير النظام هنا" >
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for=""> الوظيفة بالعربية </label>
                        <input type="text" class="form-control" placeholder="يرجى ادخال اسم الوظيفة هنا" >
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for=""> الوظيفة بالإنجليزية </label>
                        <input type="text" class="form-control" placeholder="يرجى ادخال اسم الوظيفة هنا" >
                    </div>
                </div>

                <div class="col-md-12 mb-3">
                    <div class="form-group position-relative">
                        <label for="">
                            رقم الجوال
                        </label>
                        <input type="tel" class="form-control" placeholder="يرجى ادخال رقم الجوال هنا" style="direction:rtl">

                        <span class="edit_phone main_color fs-17">
                            تعديل
                            <i class="fa-solid fa-pen-to-square mx-2"></i>
                        </span>
                    </div>
                </div>

                <div class="col-md-12 mb-3">
                    <div class="form-group position-relative">
                        <label for="">
                            كلمة المرور
                        </label>
                        <Password v-model="value" class="w-100" :feedback="false" toggleMask  placeholder="يرجى ادخال  كلمة المرور هنا"/>
                    </div>
                </div>

                <div class="col-md-12 mb-3">
                    <div class="form-group position-relative">
                        <label for="">
                            الصلاحيات
                        </label>

                        <section class="d-flex">
                            <div class="form-group d-flex align-items-center mx-3">
                                <input type="checkbox" class="w-20 h-20">
                                <label for="" class="mx-1 o-5 mt-2"> استقبال طلبات جديدة </label>
                            </div>

                            <div class="form-group d-flex align-items-center mx-3">
                                <input type="checkbox" class="w-20 h-20">
                                <label for="" class="mx-1 o-5 mt-2"> استقبال طلبات جديدة </label>
                            </div>

                            <div class="form-group d-flex align-items-center mx-3">
                                <input type="checkbox" class="w-20 h-20">
                                <label for="" class="mx-1 o-5 mt-2"> استقبال طلبات جديدة </label>
                            </div>

                            <div class="form-group d-flex align-items-center mx-3">
                                <input type="checkbox" class="w-20 h-20">
                                <label for="" class="mx-1 o-5 mt-2"> استقبال طلبات جديدة </label>
                            </div>

                            
                        </section>
                    </div>  
                </div>

                <div class="mt-3 mb-3">
                    <button class="btn main_btn pt-2 pb-2 w-25 fs-19 fw-6"> أضف المستخدم </button>
                </div>                
            </div>
        </form>
    </section>
</template>

<script>
import Password from 'primevue/password';

export default {
    components : {
        Password
    }
}
</script>

<style lang="scss">
    .add_director_form{
        input{
            background: whitesmoke;
            border: none;
            height: 55px;
            &:focus{
                background-color: whitesmoke;
            }
        }
        .p-password-input{width:100% !important;}
        .edit_phone{
            position: absolute;
            left:15px;
            top:50%;
            cursor: pointer;
        }
    }
</style>