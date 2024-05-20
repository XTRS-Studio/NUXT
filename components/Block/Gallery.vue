<template>
  <div class="modal">
    <div v-click-outside="closeGallery" class="modal__slider">
      <Swiper
        :navigation="{
          nextEl: `.swiper-button-next`,
          prevEl: `.swiper-button-prev`,
        }"
        :modules="[SwiperNavigation]"
        :slides-per-view="1"
        :space-between="20"
      >
        <SwiperSlide v-for="(image, index) in images[name]" :key="index">
          <img :src="image" />
        </SwiperSlide>
      </Swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from "@/store/index";
const appStore = useAppStore();

const { name } = defineProps({
  name: {
    type: String,
  },
});
const images = {
  forest: [
    "/gallery/forest/1.jpg",
    "/gallery/forest/2.jpg",
    "/gallery/forest/3.jpg",
    "/gallery/forest/4.jpg",
    "/gallery/forest/5.jpg",
  ],
  mogila: ["/gallery/mogila/1.png", "/gallery/mogila/2.png"],
  pole: [
    "/gallery/pole/1.png",
    "/gallery/pole/2.png",
    "/gallery/pole/3.png",
    "/gallery/pole/5.png",
  ],
  village: ["/gallery/village/1.png", "/gallery/village/2.png"],
};
const closeGallery = async () => {
  appStore.closeGallery();
};
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  &__slider {
    display: grid;
    max-width: 1194px;
    width: 100%;
    position: relative;
    height: 596px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 25px;
      border: 2px solid var(--white);
    }
    .swiper-button-prev {
      left: var(--swiper-navigation-sides-offset, 30px);
    }
    .swiper-button-next {
      right: var(--swiper-navigation-sides-offset, 30px);
    }
    .swiper {
      width: 100%;
    }
  }
}
</style>
