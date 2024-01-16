<template>
    <div>
        <h6 class="black_color fs-19"> اتصل بنا </h6>
        <div>
            <span> يمكنك التواصل معنا أو ارسال رسالة لنا </span>
        </div>
    </div>

    <section class="contact_us_section white_bg pt-4 mt-4 pb-4 px-5">

        <div class="d-flex align-items-center">
            <div class="contact_svg">
                <img :src="require('@/assets/imgs/Wavy_Bus-22_Single-03 [Converted].png')" alt="">
            </div>

            <div class="mx-5">
                <div class="d-flex mb-2">
                    <div class="contact_icon">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div class="mx-3">
                        <span class="contact_info fs-18">العنوان هنا بالتفصيل</span>
                    </div>
                </div>
                <div class="d-flex mb-2">
                    <div class="contact_icon">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="mx-3">
                        <span class="contact_info fs-18">ahmadsamerlego@gmail.com</span>
                    </div>
                </div>
                <div class="d-flex mb-2">
                    <div class="contact_icon">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <div class="mx-3">
                        <span class="contact_info fs-18">01013746111</span>
                    </div>
                </div>
            </div>
        </div>

        <form action="" class="mt-5">
            <div class="row">

                <div class="col-md-6 mb-3">
                    <div class="form-group">
                        <label for="" class=""> اسم المستخدم </label>            
                        <InputText type="text" v-model="entity_name"  placeholder="يرجى ادخال اسم المستخدم"/>
                    </div>
                </div>

                <div class="col-md-6 mb-3">
                    <div class="form-group mb-3 position-relative">
                        <label for="" class=""> رقم الجوال </label>
                        <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" placeholder="يرجى ادخال رقم الجوال"/>
                        <div class="country_code_reg">
                            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
                        </div>
                    </div>  
                </div>

                <div class="col-md-12 mb-3">
                    <div class="form-group  mb-3">
                        <label for="" class=""> رسالتك </label>   
                        <Textarea v-model="value" rows="10" cols="30" class="w-100"  placeholder="يرجى ادخال رسالتك" />         
                    </div> 
                </div>


                <div>
                    <button class="btn main_btn pt-3 pb-3 px-5 fs-18 fw-bold"> ارسال رسالتك </button>
                </div>
                
            </div>
        </form>
    </section>
</template>

<script>
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';

export default {
    components:{
        InputText,
        Dropdown,
        InputNumber,
        Textarea
    }
}
</script>

<style lang="scss">
    .country_code_reg .p-dropdown{
        position: absolute;
            left: 16px;
            top: 32px;
            width: 85px;
    }
    .p-inputtextarea{height: 110px !important;}

    .country_code_reg .p-dropdown .p-dropdown-trigger {
        background: #f6f6f6;
        color: #6b7280;
        width: 1rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .white_bg{
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 0px 0px 10px #716f6f25;
        .contact_svg{
            width: 180px;
            height: 180px;
            img{width: 100%;height: 100%;object-fit: cover;}
        }
        .contact_icon{
            width: 35px;
            height:35px;
            background-color: #d1f3fd;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #346cf6;
            font-size: 20px;
        }
        .contact_info{
            color:#50586f ;
        }
    }
</style>