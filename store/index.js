import { defineStore } from "pinia";

export const useAppStore = defineStore({
  id: "app-store",
  state: () => {
    return {
      currentSlide: 1,
      swiperInstance: null,
      gallery: null,
    };
  },
  actions: {
    async setSlide(value) {
      this.currentSlide = value;
    },
    async setSwiper(value) {
      this.swiperInstance = value;
    },
    async setGallery(value) {
      this.gallery = value;
    },
    async closeGallery() {
      this.gallery = null;
    },
  },
  getters: {
    getSlide: (state) => state.currentSlide,
    getSwiper: (state) => state.swiperInstance,
    getGallery: (state) => state.gallery,
  },
});
