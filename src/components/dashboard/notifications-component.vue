<template>
    <section class="pt-3 pb-3 ">
        <div>
            <h6 class=" fs-20 black_color">  الاشعارات </h6>
        </div>
    </section>

    <!-- notification items  -->
    <section id="notifications" class="pt-3 pb-3 " >
        <!-- single notification  -->
        <div class="single_not mb-3 px-4 pt-3 pb-3 white_bg d-flex align-items-center">
            <!-- icon  -->
            <div class="icon flex_center">
                <i class="fa-solid fa-bell whiteColor"></i>
            </div>
            <!-- content  -->
            <div class="content mx-4 ">
                <div class="mb-2">
                    <span class="fw-6 fs-16 black_color">هذا انص هو مثال على نص يمكن أن يستبدل </span>
                </div>
                <div class="time fs-13 d-flex align-items-center">
                    <span class="time_icon">
                        <i class="fa-regular fa-clock"></i>
                    </span>
                    <span class="mx-2">
                        منذ 5 دقائق
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
.single_not{
        position: relative;
        .icon{
            background-color: #2858f6;
            width:55px;
            height:55px;
            border-radius: 50%;
            svg{
                font-size: 30px;
                color: #fff;
            }
        }
    }
</style>