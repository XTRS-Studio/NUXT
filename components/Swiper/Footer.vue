<template>
  <section class="slide slide__footer">
    <div class="slide__footer-top">
      <NuxtImg class="slide__footer-logo" src="/Logotype.svg" />
      <div class="slide__footer-section">
        <p class="slide__footer-section-title">Навигация</p>
        <div class="slide__footer-top-links">
          <UIButton @click="goToSlide(0)">Главная</UIButton>
          <UIButton @click="goToSlide(2)">О игре</UIButton>
          <UIButton @click="goToSlide(7)">Возможности</UIButton>
          <UIButton @click="goToSlide(3)">Локации</UIButton>
          <UIButton @click="goToSlide(5)">О команде</UIButton>
          <UIButton @click="goToSlide(6)">FAQ</UIButton>
        </div>
      </div>
      <div class="slide__footer-section">
        <p class="slide__footer-section-title">Разное</p>
        <div class="slide__footer-top-links">
          <UIButton>Поддержать проект</UIButton>
          <UIButton>Благодарности</UIButton>
          <UIButton>Контакты</UIButton>
        </div>
      </div>
      <div class="slide__footer-section">
        <p class="slide__footer-section-title">Соц. сети</p>
        <div class="slide__footer-top-links slide__footer-top-links--social">
          <IconsVK class="button" />
          <IconsYoutube class="button" />
          <IconsInsta class="button" />
          <IconsDiscord class="button" />
          <IconsTwitch class="button" />
        </div>
      </div>
    </div>
    <div class="slide__footer-bottom">
      <hr class="slide__footer-line" />
      <div class="slide__footer-bottom-links">
        <p><span>&#169;</span> 2024 Все права защищены</p>
        <NuxtLink>Правила пользования</NuxtLink>
        <NuxtLink>Политика конфиденциальности</NuxtLink>
      </div>
    </div>
  </section>
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
.slide {
  &__footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 90px;

    &-logo {
      width: 174px;
      height: 88px;
    }
    &-section {
      display: flex;
      flex-direction: column;
      gap: 35px;
      &-title {
        color: var(--gray);
        font-size: 24px;
      }
    }
    &-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      &-links {
        display: flex;
        flex-direction: column;
        gap: 10px;
        button {
          padding: 15px 0;
        }
        &--social {
          padding: 0 15px;
          gap: 40px;
        }
      }
    }
    &-bottom {
      display: flex;
      flex-direction: column;
      gap: 43px;
      &-links {
        display: flex;
        align-items: center;
        gap: 10.5vw;
        p,
        a {
          span {
            color: currentColor;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
          }
          color: var(--gray);
        }
      }
    }
    &-line {
      width: 100%;
      height: 1px;
      background: var(--white);
      opacity: 25%;
    }
  }
}
</style>
