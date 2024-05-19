<template>
  <Swiper
    v-if="!loading"
    :direction="'vertical'"
    :pagination="{
      clickable: true,
    }"
    :mousewheel="{
      enabled: true,
    }"
    :initialSlide="currentSlide"
    @slideChange="handleSlideChange"
    :modules="[SwiperPagination, SwiperMousewheel]"
    :slides-per-view="1"
  >
    <SwiperSlide> <SwiperName /></SwiperSlide>
    <SwiperSlide> <SwiperSlogan /></SwiperSlide>
    <SwiperSlide> <SwiperAboutGame /></SwiperSlide>
    <SwiperSlide> <SwiperLocations /></SwiperSlide>
    <SwiperSlide> <SwiperTeam /></SwiperSlide>
    <SwiperSlide> <SwiperFAQ /></SwiperSlide>
    <SwiperSlide> <SwiperTeam /></SwiperSlide>
    <SwiperSlide> <SwiperTeam /></SwiperSlide>
    <SwiperSlide> <SwiperTeam /></SwiperSlide>
  </Swiper>
  <div v-else>loading...</div>
</template>
<script setup>
const loading = ref(true);
const currentSlide = ref(1);
function handleSlideChange(swiper) {
  localStorage.setItem("currentSlide", swiper.realIndex);
}
onMounted(() => {
  loading.value = false;
  currentSlide.value = localStorage.getItem("currentSlide");
});
// console.log(localStorage.getItem("currentSlide"));
// function getInitialSlide() {
//   return localStorage.getItem("currentSlide");
// }
</script>
