<template>
  <div>
    <Transition>
      <header v-show="appStore.getSlide !== 9" class="header">
        <NuxtImg class="header__logo" src="/Logotype.svg" />
        <div class="header__nav">
          <UIButton @click="goToSlide(0)">Главная</UIButton>
          <UIButton @click="goToSlide(2)">О игре</UIButton>
          <UIButton @click="goToSlide(7)">Возможности</UIButton>
          <UIButton @click="goToSlide(3)">Локации</UIButton>
          <UIButton @click="goToSlide(5)">О команде</UIButton>
          <UIButton @click="goToSlide(6)">FAQ</UIButton>
        </div>
        <div class="header__buttons">
          <UIButton disabled>Войти</UIButton>
          <UIButton disabled typeStyle="red">Регистрация</UIButton>
        </div>
        <UIButton @click="openMenu">
          <IconsBurger class="header__burger"
        /></UIButton>
      </header>
    </Transition>
    <Transition>
      <div v-if="menu" class="background-menu">
        <div class="menu" v-click-outside="closeMenu">
          <UIButton @click="goToSlide(0)">Главная</UIButton>
          <UIButton @click="goToSlide(2)">О игре</UIButton>
          <UIButton @click="goToSlide(7)">Возможности</UIButton>
          <UIButton @click="goToSlide(3)">Локации</UIButton>
          <UIButton @click="goToSlide(5)">О команде</UIButton>
          <UIButton @click="goToSlide(6)">FAQ</UIButton>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { useAppStore } from "@/store/index";
const appStore = useAppStore();
const goToSlide = (index) => {
  if (appStore.getSwiper) {
    appStore.getSwiper.slideTo(index);

    closeMenu();
  }
};

const menu = ref(false);

const openMenu = () => {
  menu.value = true;
};

const closeMenu = () => {
  menu.value = false;
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

    .button {
      @media (max-width: 1280px) {
        font-size: 12px !important;
      }
    }

    @media (max-width: 960px) {
      display: none;
    }
  }
  &__buttons {
    display: flex;
    gap: 5px;

    @media (max-width: 640px) {
      display: none;
    }
  }
  &__burger {
    display: none;

    cursor: pointer;

    @media (max-width: 960px) {
      display: block;
    }
  }
}

.background-menu {
  position: fixed;
  top: 0;
  left: 0;

  z-index: 100;

  width: 100dvw;
  height: 100dvh;

  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
}

.menu {
  position: absolute;
  top: 0;
  right: 0;

  padding: 116px 162px 116px 30px;

  height: 100dvh;

  display: flex;
  flex-direction: column;
  gap: 5px;

  background: var(--dark-red);

  border-left: 2px solid var(--gray-secondary);
}
</style>
