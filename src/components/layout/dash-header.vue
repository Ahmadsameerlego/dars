<template>
    <header id="header" class="pt-4 pb-4 px-4">
        <section class="header_content flex_end">
           
            <!-- user interaction  -->
           <div class="d-flex align-items-baseline">
                
                <div class="mx-3">
                    <button class="btn main_btn pt-2 pb-2 px-5" @click="send_nots=true"> ارسال اشعار للمستخدمين </button>
                </div>

                <!-- notfications  -->
                <router-link to="/notifications" class="position-relative btn nots mx-3">
                    <i class="fa-regular fa-bell"></i>
                    <span class="not_count" >
                        3
                    </span>
                </router-link>

                <!-- admin  -->
                

                <div class="admin dropdown">
                    <button class="btn  d-flex dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <div class="admin_image">
                            <img :src="require('@/assets/imgs/profile.jpeg')" alt="admin image">
                        </div>
                        <div class="admin_info mx-2">
                            <h6 class="name fw-bold"> الاسم هنا </h6>
                            <span class="title fw-6 gray_color">مدير النظام </span>
                        </div>
                        

                    </button>
                    <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                        <li class="single">
                            <router-link to="/center/about"> من نحن</router-link>
                        </li>
                        <li class="single">
                            <router-link to="/center/faqs">الاسئلة الشائعة </router-link>
                        </li>
                        <li class="single">
                            <router-link to="/center/terms"> الشروط والأحكام </router-link>
                        </li>
                    </ul>
                </div>

                
            </div>
        </section>
    </header>

    <!-- send notification to users  -->
    <!-- otp  -->
    <Dialog v-model:visible="send_nots" modal   :style="{ width: '34rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <form action="" class="send_not_form">
            <div class="form-group">
                <label for=""> نص الإشعار </label>
                <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="يرجى ادخال نص الإشعار هنا"></textarea>
            </div>
            <div class="mt-3">
                <button class="btn main_btn pt-2 pb-2 w-100 fs-19 fw-6"> إرسال إشعار </button>
            </div>
        </form>
    </Dialog>
</template>

<script>
import axios from 'axios';
import Dialog from 'primevue/dialog';

export default {
    data(){
        return{
            name : '',
            title : '',
            image : '',
            notifyCount : '',
            send_nots : false
        }
    },
    components:{
        Dialog
    },
    methods:{
        switchLanguage(locale) {
            let lang = locale;
            if(this.$i18n.locale == 'ar'){
                lang = 'en';
            }

            if(localStorage.getItem('locale')){
                localStorage.removeItem('locale');
            }
            localStorage.setItem('locale' ,lang);

            location.reload()

        },
        switchDrop(){
            this.$refs.profile.classList.toggle('active')
        },

        // get home 
        async getHome(){
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            await axios.get('/home-center', {headers})
            .then( (res)=>{
                this.notifyCount = res.data.data.notifyCount ;
            } )
        },

        switchSide(){
            document.querySelector('#sidebar').classList.toggle('active');
            document.querySelector('#header').classList.toggle('active');
            document.querySelector('#content').classList.toggle('active');
        }
        ,
        opeSide(){
            document.querySelector('#sidebar').classList.add('active');

        }
    },
    mounted(){
        // let user = JSON.parse( localStorage.getItem('user') );
        // this.name = user.name ;
        // this.title = user.ownerName ;
        // this.image = user.avatar ;

        // this.getHome();
    }
}
</script>

<style lang="scss">
    .send_not_form{
        textarea{
            height: 100px;
            background: whitesmoke;
            border: none ;
        }
    }
    .admin{
        margin-left: 100px;
    }
    .openSide{
        display: none !important; 
    }
    .not_count{
        position: absolute;
        background: #2858f6;
        color: #fff;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        top: -10px;
        right: -8px;
        font-size: 12px;
    }
    .dropdown-menu{
        border-radius: 6px !important;
        background-color: #fff !important;
        box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.262745098) !important;
        width: 170px;
        transition: 0.6s all;
        border: none !important;
        .single{
            color:#333;
            text-align: center;
            padding-bottom: 8px;
            &:not(:last-of-type){
                border-bottom: 1px solid #cccccc4d;
            }
        }
        &.active{
            opacity: 1;
        }
    }
    .profile_icon{
        position: absolute;
        left: 3px;
        font-size: 13px;
        top: 27%;
    }
    .flag_img{
        width: 25px;
    }
    .dropdown-toggle::after{display: none !important;}
    .admin{
        cursor: pointer;
    }
    .btn.show{
        border: none !important;
    }
</style>