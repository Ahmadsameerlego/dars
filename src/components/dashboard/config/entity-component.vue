<template>
  <div>
      <h6 class="black_color fs-25"> الاعدادات </h6>
      <div>
        <span> هنا يمكنك تعديل بيانات الكيانات </span>
      </div>
  </div>

  <section class="white_bg mt-3 pt-3 pb-3 px-4">
    <form>
        <div class="form-group  mb-3">
            <label for="" class=""> شعار الكيان </label>

            <div class="position-relative">
                <InputText class="w-100" type="text" v-model="logoValue" readonly placeholder="يرجى ارفاق شعار الكيان"/>
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


        <div class="form-group  mb-3">
            <label for="" class=""> صورة الغلاف </label>
            
            <div class="position-relative">
                <InputText type="text" class="w-100"  v-model="coverValue" readonly placeholder="يرجى ارفاق صورة الغلاف"/>
                <!-- file  -->
                <input type="file" class="entity_logo upload absolute"  @change="handleCoverUpload">
                <i class="fa-solid fa-paperclip main_color"></i>
            </div>

            <!-- uploaded image  -->
            <div class="uploaded_image  position-relative mt-2" v-if="coverUploadedImage">
                <img :src="coverUploadedImage"  alt="">
                <span class="remove_image flex_center" @click="removeCover"> x </span>
            </div>
        </div>  

        <div class="form-group  mb-3">
            <label for="" class=""> اسم الكيان </label>            
            <InputText type="text" class="w-100" v-model="entity_name"  placeholder="يرجى ادخال اسم الكيان"/>
        </div>  

     
        <div class="form-group  mb-3">
            <label for="" class=""> نبذه عن الكيان </label>   
            <Textarea v-model="value" class="w-100" rows="10" cols="30" placeholder="يرجى ادخال نبذه عن الكيان" />         
        </div> 

        <div class="form-group  mb-3">
            <label for="" class=""> المدينة </label>            
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="يرجى اختيار المدينة" class="w-100 w-full md:w-14rem" />
        </div> 


        <div class="form-group mb-3">
            <label for="" class=""> عنوان الكيان </label>            
            <GMapAutocomplete
                placeholder="ابحث عن عنوان الكيان"
                @place_changed="onPlaceChanged"
                class="mb-1 w-100 px-3"
                :value="address"
            >
            </GMapAutocomplete>
            <GMapMap
                :center="locations"
                :zoom="11"
                map-type-id="terrain"
                style="height:350px"
                class=""
            >
            <GMapMarker
                :position="locations"
                :clickable="true"
                :draggable="true"
                @mouseover="onMarkerDragEnd($event)"
            />
            </GMapMap>
        </div>

        <div class="form-group position-relative  mb-3">
            <label for="" class=""> المميزات </label>            
            <InputText type="text" class="w-100" v-model="feature"  placeholder="يرجى ادخال المميزات"/>
            <button class="btn main_btn" type="button" @click="addFeature"
                style="
                    height: 55px;
                    position: absolute;
                    left: 0px;
                    top: 35px;
                    width: 52px;
                    font-size: 35px;
                    padding-top: 0;
                "
            >+</button>
        </div> 

        <div v-for="(single, index) in features" class="position-relative" :key="index">
            <div class="form-group mb-3">
                <InputText type="text" class="w-100"  :value="single"  placeholder="يرجى ادخال المميزات"/>
                <button class="btn btn-danger" type="button" @click="removeFeature(index)"
                    style="
                        height: 55px;
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        width: 52px;
                        font-size: 16px;
                        padding-top: 10px;
                    "
                > <i class="fas fa-x"></i> </button>
            </div>
            <!-- <span> {{ feature }} </span> -->
        </div>


        <div class="form-group mb-3 position-relative">
            <label for="" class=""> رقم التواصل </label>
            <InputNumber v-model="value2" class="w-100" inputId="withoutgrouping" :useGrouping="false" placeholder="يرجى ادخال رقم التواصل"/>
            <div class="country_code_reg">
                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
            </div>
        </div>  


        <div class="form-group  mb-3">
            <label for="" class=""> السجل الضريبي </label>

            <div class="position-relative">
                <InputText type="text" class="w-100" v-model="taxValue" readonly placeholder="يرجى ارفاق السجل الضريبي"/>
                <!-- file  -->
                <input type="file" class="entity_logo upload absolute" @change="handleTaxUpload">
                <i class="fa-solid fa-paperclip main_color"></i>
            </div>
            
            <!-- uploaded image  -->
            <div class="uploaded_image position-relative mx-4 mt-2" v-if="taxUploadImage">
                <img :src="taxUploadImage"  alt="">
                <span class="remove_image flex_center" @click="removeTax"> x </span>
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

                <div class="upload_file_container flex-column position-relative">
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


        <div class="row">
            <div class="col-md-6 mb-3">
                <div class="form-group mb-3 position-relative">
                    <label for="" class=""> اسم البنك </label>
                    <InputText type="text" class="w-100" v-model="logoValue"  placeholder="يرجى ادخال اسم البنك"/>
                </div>  
            </div>
            <div class="col-md-6 mb-3">
                <div class="form-group mb-3 position-relative">
                    <label for="" class=""> اسم صاحب الحساب البنكي </label>
                    <InputText type="text" class="w-100" v-model="logoValue"  placeholder="يرجى ادخال الاسم"/>
                </div>  
            </div>
            <div class="col-md-6 mb-3">
                <div class="form-group mb-3 position-relative">
                    <label for="" class=""> رقم الحساب البنكي </label>
                    <InputNumber v-model="value2" class="w-100" inputId="withoutgrouping" :useGrouping="false" placeholder="يرجى ادخال رقم الحساب البنكي"/>
                </div>  
            </div>

            <div class="col-md-6 mb-3">
                <div class="form-group mb-3 position-relative">
                    <label for="" class=""> رقم الايبان </label>
                    <InputText type="text" class="w-100" v-model="logoValue"  placeholder="يرجى ادخال رقم الايبان"/>
                </div>  
            </div>
        </div>

        <div class="form-group  mb-3">
            <label for="" class=""> بيانات STC PAY </label>   
            <Textarea v-model="value" class="w-100" rows="10" cols="30" placeholder="يرجى ادخال بيانات STC PAY هنا" />         
        </div> 

        <div class="form-group mb-3 position-relative">
            <label for="" class=""> مبلغ التسجيل الرمزي </label>
            <InputNumber class="w-100" v-model="value2" inputId="withoutgrouping" :useGrouping="false" placeholder="يرجى ادخال مبلغ التسجيل الرمزي"/>
        </div>  

        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="form-group mb-3 position-relative">
                <label for="" class=""> هل يوجد خصم للأخوة </label>

                <div class="radio_check_brother   d-flex">
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
          </div>
            

          <div class="col-md-6 mb-3">
            <div class="form-group mb-3 position-relative">
                <label for="" class=""> نسبة الخصم </label>
                <InputNumber v-model="value2" class="w-100" inputId="withoutgrouping" :useGrouping="false" placeholder="يرجى ادخال نسبة الخصم"/>
            </div> 
          </div>
        </div>

        <div class="row " >
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
            <label for="" class=""> نوع الحجز </label>            
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="يرجى اختيار نوع الحجز" class="w-100 w-full md:w-14rem" />
        </div> 

       
        


        <div class="mb-4">
            <button class="pt-3 br-5 pb-3 fs-16 fw-bold main_btn btn w-25">
                ارسال طلب التعديل
            </button>
        </div>
    </form>
  </section>
</template>

<script>
import InputText from 'primevue/inputtext';
import useImageUploader from '@/global/uploadImage.js';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';

import { ref} from 'vue';
export default {

    setup(){
        const { uploadedImage : logoUploadedImage, handleImageUpload:handleLogoUpload  , removeImage : removeLogo} = useImageUploader();
        const { uploadedImage : coverUploadedImage, handleImageUpload :handleCoverUpload  , removeImage: removeCover} = useImageUploader();
        const { uploadedImage : taxUploadImage , handleImageUpload :handleTaxUpload , removeImage : removeTax } = useImageUploader();
        // const { uploadedImages, handleImageUpload, removeImage } = useImageMultiUploader();

        const taxValue = ref('');

        const logoValue = ref('');
        const coverValue = ref('');
        const features = ref([]);
        const feature = ref('');

        // methods 
        const addFeature = ()=>{
            if( feature.value.trim('') != '' ) {
                features.value.push(feature.value.trim(''));
                feature.value = '';
            }
        }
        const removeFeature = (index)=>{
            features.value.splice( index , 1 )
        }


        return{
            logoUploadedImage,
            coverUploadedImage,
            handleLogoUpload,
            handleCoverUpload,
            removeCover,
            removeLogo,
            logoValue,
            coverValue,
            features,
            feature,
            addFeature,
            removeFeature,
            taxUploadImage,
            handleTaxUpload,
            removeTax,
            taxValue
        }
    },

    data(){
        return{
            locations:
            {
                lat: 0,
                lng: 0
            },
            currentLocation: {},
            address: '',

        }
    },

    methods:{
         // get current location  
      geolocation() {
          navigator.geolocation.getCurrentPosition((position) => {
              this.locations = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
              };
          });
      },
      
      // get new value after dragged 
      onMarkerDragEnd(event) {
          // get new lat lang value 
          const newLat = event.latLng.lat()
          const newLng = event.latLng.lng()
          this.locations = {
              lat: newLat,
              lng: newLng
          }

          // get format_address 
          const latLng = event.latLng
          const geocoder = new window.google.maps.Geocoder()
          geocoder.geocode({ location: latLng }, (results, status) => {
              if (status === 'OK') {
                  this.address = results[0].formatted_address
              } else {
                  console.error('Geocode was not successful for the following reason: ' + status)
              }
          })

      },

      onPlaceChanged(place) {
        if (place.geometry) {
          this.locations = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };
          this.address = place.formatted_address;
        }
      },
    },
    mounted(){
        this.geolocation();

      },
    components:{
        InputText,
        Dropdown,
        Textarea,
        InputNumber,
        Calendar
    }
}
</script>


<style lang="scss">
.genders{
      .gender{
          background-color: #f6f6f6;
          border-radius: 20px;
          height: 40px;
          color: #4b5563;
          font-weight: 600;
          width:150px;
          cursor: pointer;
          input{cursor: pointer;}
          .fa-square-check{display: none; font-size: 18px;}
          &:has(.select_gender:checked){
              border: 1px solid #3290d8;
              background-color: #3290d82a;
              color: #3290d8;
              .fa-square-check{
                  display: block;    
              }
          }
      }
}
.p-dropdown .p-dropdown-trigger {
    background: #f6f6f6;
    color: #6b7280;
    width: 3rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}


.upload{
    opacity: 0;
}
.country_code_reg .p-dropdown{
  left:0 ;
}
.fa-paperclip{
    position: absolute;
    left: 32px;
    top: 35%;
    font-size: 22px;
    transform: rotate(-44deg);
}
.pac-target-input {
    color: #4b5563;
    background: #f6f6f6;
    border: none;
    width: 95%;
    margin: auto;
    height: 55px;
    display: flex;
}
</style>