<template>
  <Transition>
    <header v-show="appStore.getSlide !== 9" class="header">
      <NuxtImg class="header__logo" src="/Logotype.svg" />
      <ul class="header__nav">
        <UIButton @click="goToSlide(0)">Главная</UIButton>
        <UIButton @click="goToSlide(2)">О игре</UIButton>
        <UIButton @click="goToSlide(7)">Возможности</UIButton>
        <UIButton @click="goToSlide(3)">Локации</UIButton>
        <UIButton @click="goToSlide(5)">О команде</UIButton>
        <UIButton @click="goToSlide(6)">FAQ</UIButton>
      </ul>
      <div class="header__buttons">
        <UIButton disabled>Войти</UIButton>
        <UIButton disabled typeStyle="red">Регистрация</UIButton>
      </div>
    </header>
  </Transition>
</template>
<script setup>
import { useAppStore } from "@/store/index";
const appStore = useAppStore();
const goToSlide = (index) => {
  if (appStore.getSwiper) {
    appStore.getSwiper.slideTo(index);
  }
};
</script>

<style lang="scss" scoped>
.header {
  max-width: 1345px;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__logo {
    width: 115px;
    height: 58px;
    object-fit: cover;
  }
  &__nav {
    display: flex;
    align-items: center;
    gap: 5px;
    li {
      padding: 20px;
    }
  }
  &__buttons {
    display: flex;
    gap: 5px;
  }
}
</style>
