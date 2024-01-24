<template>
    <form>
        <div class="form-group  mb-3">
            <label for="" class="mx-4"> شعار الكيان </label>

            <div class="position-relative">
                <InputText type="text" v-model="logoValue" readonly placeholder="يرجى ارفاق شعار الكيان"/>
                <!-- file  -->
                <input type="file" name="logo" class="entity_logo upload absolute" @change="handleLogoUpload">
                <i class="fa-solid fa-paperclip main_color"></i>
            </div>
            
            <!-- uploaded image  -->
            <div class="uploaded_image position-relative mx-4 mt-2" v-if="logoUploadedImage">
                <img :src="logoUploadedImage"  alt="">
                <span class="remove_image flex_center" @click="removeLogo"> x </span>
            </div>
        </div>  


        <div class="form-group  mb-3">
            <label for="" class="mx-4"> صورة الغلاف </label>
            
            <div class="position-relative">
                <InputText type="text" v-model="coverValue" readonly placeholder="يرجى ارفاق صورة الغلاف"/>
                <!-- file  -->
                <input type="file" name="cover" class="entity_logo upload absolute"  @change="handleCoverUpload">
                <i class="fa-solid fa-paperclip main_color"></i>
            </div>

            <!-- uploaded image  -->
            <div class="uploaded_image mx-4 position-relative mt-2" v-if="coverUploadedImage">
                <img :src="coverUploadedImage"  alt="">
                <span class="remove_image flex_center" @click="removeCover"> x </span>
            </div>
        </div>  

        <div class="form-group  mb-3">
            <label for="" class="mx-4"> اسم الكيان </label>            
            <InputText type="text" v-model="entity_name" name="entity_name"  placeholder="يرجى ادخال اسم الكيان"/>
        </div>  

        <div class="form-group  mb-3">
            <label for="" class="mx-4"> نوع الكيان </label>            
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="يرجى اختيار نوع الكيان" class="w-full md:w-14rem" />
        </div> 
        
        <div class="form-group  mb-3">
            <label for="" class="mx-4"> القسم الفرعي </label>            
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="يرجى اختيار القسم الفرعي" class="w-full md:w-14rem" />
        </div> 

        <div class="form-group mx-4  mb-3">
            <label for="" class=""> النوع </label>   
            
            <div class="genders d-flex">
                <div class="gender flex_center position-relative">
                    <i class="fa-solid fa-square-check main_color"></i>
                    <span class="mx-3">بنين</span>
                    <input type="radio" name="gender" value="male" class="absolute upload select_gender">
                </div>
                <div class="gender flex_center mx-2  position-relative">
                    <i class="fa-solid fa-square-check main_color"></i>
                    <span class="mx-3">بنات</span>
                    <input type="radio" name="gender" value="female"  class="absolute upload select_gender">
                </div>
            </div>
        </div>
        
        <div class="form-group  mb-3">
            <label for="" class="mx-4"> نبذه عن الكيان </label>   
            <Textarea v-model="value" rows="10" cols="30" placeholder="يرجى ادخال نبذه عن الكيان" />         
        </div> 

        <div class="form-group  mb-3">
            <label for="" class="mx-4"> المدينة </label>            
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="يرجى اختيار المدينة" class="w-full md:w-14rem" />
        </div> 


        <div class="form-group mb-3">
            <label for="" class="mx-4"> عنوان الكيان </label>            
            <GMapAutocomplete
                placeholder="ابحث عن عنوان الكيان"
                @place_changed="onPlaceChanged"
                class="mb-3 px-3"
                :value="address"
            >
            </GMapAutocomplete>
            <GMapMap
                :center="locations"
                :zoom="11"
                map-type-id="terrain"
                style="height:350px"
                class="mx-4"
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
            <label for="" class="mx-4"> المميزات </label>            
            <InputText type="text" v-model="feature"  placeholder="يرجى ادخال المميزات"/>
            <button class="btn main_btn" type="button" @click="addFeature"
                style="
                    height: 55px;
                    position: absolute;
                    left: 18px;
                    top: 35px;
                    width: 52px;
                    font-size: 35px;
                    padding-top: 0;
                "
            >+</button>
        </div> 

        <div v-for="(single, index) in features" class="position-relative" :key="index">
            <div class="form-group mb-3">
                <InputText type="text" :value="single"  placeholder="يرجى ادخال المميزات"/>
                <button class="btn btn-danger" type="button" @click="removeFeature(index)"
                    style="
                        height: 55px;
                        position: absolute;
                        left: 18px;
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
            <label for="" class="mx-4"> رقم التواصل </label>
            <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" placeholder="يرجى ادخال رقم التواصل"/>
            <div class="country_code_reg">
                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
            </div>
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
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import InputNumber from 'primevue/inputnumber';

import { ref , onMounted , computed} from 'vue';
import { useStore } from 'vuex';
export default {

    setup(){
        const { uploadedImage : logoUploadedImage, handleImageUpload:handleLogoUpload  , removeImage : removeLogo} = useImageUploader();
        const { uploadedImage : coverUploadedImage, handleImageUpload :handleCoverUpload  , removeImage: removeCover} = useImageUploader();
        const store = useStore()
        const logoValue = ref('');
        const coverValue = ref('');
        const features = ref([]);
        const feature = ref('');
        const cities = computed(() => {
            return  store.state.general.cities
        } )

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

        // ============= mounted =============

        onMounted(() => {
            store.dispatch('general/getCities');
            
        })


        // 
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
            cities
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
        InputNumber
    }
}
</script>

<style lang="scss">
    .p-inputtextarea{height: 110px !important;}
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
    
    .upload{
        opacity: 0;
    }
    .fa-paperclip{
        position: absolute;
        left: 32px;
        top: 35%;
        font-size: 22px;
        transform: rotate(-44deg);
    }
</style>