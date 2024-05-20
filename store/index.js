import { defineStore } from "pinia";

export const useAppStore = defineStore({
  id: "app-store",
  state: () => {
    return {
      currentSlide: 1,
      swiperInstance: null,
    };
  },
  actions: {
    async setSlide(value) {
      this.currentSlide = value;
    },
    async setSwiper(value) {
      this.swiperInstance = value;
    },
  },
  getters: {
    getSlide: (state) => state.currentSlide,
    getSwiper: (state) => state.swiperInstance,
  },
});
