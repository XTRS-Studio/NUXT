import { defineStore } from "pinia";

export const useAppStore = defineStore({
  id: "app-store",
  state: () => {
    return {
      currentSlide: 1,
    };
  },
  actions: {
    async setSlide(value) {
      this.currentSlide = value;
    },
  },
  getters: {
    getSlide: (state) => state.currentSlide,
  },
});
