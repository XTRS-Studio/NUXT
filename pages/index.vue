<template>
  <Swiper
    @swiper="onSwiper"
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
    <SwiperSlide> <SwiperHeroes /></SwiperSlide>
    <SwiperSlide> <SwiperTeam /></SwiperSlide>
    <SwiperSlide> <SwiperFAQ /></SwiperSlide>
    <SwiperSlide> <SwiperOffer /></SwiperSlide>
    <SwiperSlide> <SwiperFooter /></SwiperSlide>
  </Swiper>
</template>
<script setup>
import { useAppStore } from "@/store/index";

const appStore = useAppStore();
const currentSlide = ref(1);
const loading = ref(true);

onMounted(() => {
  currentSlide.value = localStorage.getItem("currentSlide");
  loading.value = false;
});

const handleSlideChange = async (swiper) => {
  localStorage.setItem("currentSlide", swiper.realIndex);
  await appStore.setSlide(swiper.realIndex + 1);
};

async function onSwiper(swiper) {
  await appStore.setSwiper(swiper);
}

useSeoMeta({
  title: "The Veil of Dread",
  meta: [
    {
      hid: "Horror game",
      name: "Horror game",
      content: "The Veil of Dread",
    },
  ],
});
</script>
