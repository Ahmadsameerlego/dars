<template>
    <form>
        <div class="form-group  mb-3">
            <label for="" class="mx-4"> شعار الكيان </label>

            <div class="position-relative">
                <InputText type="text" v-model="logoValue" readonly placeholder="يرجى ارفاق شعار الكيان"/>
                <!-- file  -->
                <input type="file" class="entity_logo upload absolute" @change="handleLogoUpload">
                <i class="fa-solid fa-paperclip main_color"></i>
            </div>
            
            <!-- uploaded image  -->
            <div class="uploaded_image position-relative mx-4 mt-2" v-if="logoUploadedImage">
                <img :src="logoUploadedImage"  alt="">
                <span class="remove_image flex_center" @click="removeLogo"> x </span>
            </div>
        </div>  

        <div class="form-group mb-3 mx-4">
            <label for="" class=""> الرخص </label>
            <section class="d-flex">

                <div class="img-upload-show " >
                    <div class="d-flex" >
                        <div class="d-flex" style="flex-wrap:wrap">
                            <div class="position-relative mx-2" v-for="(image, key) in images" :key="key" >
                                <button class="remove-img text-white" type="button" @click="removeImage(image, key)">
                                    &times;
                                </button>
                                <img class="preview img-thumbnail" width="100" height="100" :ref="'image1'" /> 

                            </div>

                        </div>
                    </div>
                </div>

                <div class="upload_file_container flex-column position-relative mx-4">
                    <input
                        type="file" 
                        class="upload_file_input"
                        accept="image/*"
                        multiple
                        name="images"
                        @change="uploadAdImages($event.target)"
                        >
                    <span class="icon main_color">
                        <i class="fa-solid fa-cloud-arrow-up main_color fs-21"></i>
                    </span>
                    <span class="text-center"> إرفاق ملف </span>
                </div>      
            </section>

        </div>


        <!-- <div>
            <input type="file" multiple @change="handleImageUpload" />

            <div v-for="(item, index) in uploadedImages" :key="index">
            <img v-if="item.file.type.startsWith('image/')" :src="item.dataURL" alt="" />
            
            <embed v-else-if="item.file.type === 'application/pdf'" :src="item.dataURL" type="application/pdf" width="500" height="400" />
            
            <button @click="removeImage(index)">Remove</button>
            </div>
        </div> -->

        <div class="row">
            <div class="col-md-6 mb-3">
                <div class="form-group mb-3 position-relative">
                    <label for="" class="mx-4"> اسم البنك </label>
                    <InputText type="text" v-model="logoValue"  placeholder="يرجى ادخال اسم البنك"/>
                </div>  
            </div>
            <div class="col-md-6 mb-3">
                <div class="form-group mb-3 position-relative">
                    <label for="" class="mx-4"> اسم صاحب الحساب البنكي </label>
                    <InputText type="text" v-model="logoValue"  placeholder="يرجى ادخال الاسم"/>
                </div>  
            </div>
            <div class="col-md-6 mb-3">
                <div class="form-group mb-3 position-relative">
                    <label for="" class="mx-4"> رقم الحساب البنكي </label>
                    <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" placeholder="يرجى ادخال رقم الحساب البنكي"/>
                </div>  
            </div>

            <div class="col-md-6 mb-3">
                <div class="form-group mb-3 position-relative">
                    <label for="" class="mx-4"> رقم الايبان </label>
                    <InputText type="text" v-model="logoValue"  placeholder="يرجى ادخال رقم الايبان"/>
                </div>  
            </div>
        </div>

        <div class="form-group  mb-3">
            <label for="" class="mx-4"> بيانات STC PAY </label>   
            <Textarea v-model="value" rows="10" cols="30" placeholder="يرجى ادخال بيانات STC PAY هنا" />         
        </div> 

        <div class="form-group mb-3 position-relative">
            <label for="" class="mx-4"> مبلغ التسجيل الرمزي </label>
            <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" placeholder="يرجى ادخال مبلغ التسجيل الرمزي"/>
        </div>  

        <div class="form-group mb-3 position-relative">
            <label for="" class="mx-4"> هل يوجد خصم للأخوة </label>

            <div class="radio_check_brother mx-4  d-flex">
                <div class="form-group flex_center align-items-baseline">
                    <input type="radio">
                    <label for="" class="mx-2">نعم</label>
                </div>
                <div class="form-group flex_center align-items-baseline mx-5">
                    <input type="radio">
                    <label for="" class="mx-2">لا</label>
                </div>
            </div>
        </div>  

        <div class="form-group mb-3 position-relative">
            <label for="" class="mx-4"> نسبة الخصم </label>
            <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" placeholder="يرجى ادخال نسبة الخصم"/>
        </div> 

        <div class="row mx-2" >
            <label for="" class=""> مواعيد التسجيل </label>
            <div class="col-md-6 mb-3 position-relative">
                <Calendar v-model="date" class="w-100" placeholder="من"/>
                <i class="fa-solid fa-calendar-days main_color"></i>
            </div>
            <div class="col-md-6 mb-3 position-relative">
                <Calendar v-model="date" class="w-100" placeholder="إلى" />
                <i class="fa-solid fa-calendar-days main_color"></i>
            </div>
        </div>

        <div class="form-group  mb-3">
            <label for="" class="mx-4"> نوع الحجز </label>            
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="يرجى اختيار نوع الحجز" class="w-full md:w-14rem" />
        </div> 

        <div class="flex_center mb-4 mx-4">
            <button class="pt-3 br-5 pb-3 fs-18 fw-bold px-5 main_btn btn w-100">
                التالي
            </button>
        </div>
            
    </form>
</template>

<script>
import InputText from 'primevue/inputtext';
import useImageUploader from '@/global/uploadImage.js';
// import useImageMultiUploader from '@/global/uploadMutipleFiles'
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';

import { ref} from 'vue';

export default {
    setup(){
        const { uploadedImage : logoUploadedImage , handleImageUpload :handleLogoUpload , removeImage : removeLogo } = useImageUploader();
        // const { uploadedImages, handleImageUpload, removeImage } = useImageMultiUploader();

        const logoValue = ref('');
        return{
            logoUploadedImage,
            handleLogoUpload,
            logoValue,
            removeLogo,


    //         uploadedImages,
    //   handleImageUpload,
    //   removeImage,


        }
    },
    data(){
        return{
            images : [],
            imagesName : []
        }
    },
    methods:{
        // upload images 
        uploadAdImages(file){
            // preview operation 
            let selectedImages2 = file.files ;

            for( let i = 0 ; i < selectedImages2.length ; i++ ){
                this.images.push( selectedImages2[i] )
                this.imagesName.push(selectedImages2[i].name);
            }
                 
            
              
            this.applyImage();
        },
        // remvoe image 
        removeImage(image, key){
            this.images.splice(key, 1);
            this.applyImage();

        },
        // apply image 
        applyImage() {
          for (let i = 0; i < this.images.length; i++) {
            let reader = new FileReader();
            reader.onload = () => {
              this.$refs.image1[i].src = reader.result;
            };
            reader.readAsDataURL(this.images[i]);
          }
        },
    },
    components:{
        InputText,
        InputNumber,
        Textarea,
        Dropdown,
        Calendar
    }
}
</script>

<style lang="scss">

</style>