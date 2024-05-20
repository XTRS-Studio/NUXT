@ -1,38 +0,0 @@
<template>
  <div class="wrapper">
    <UIHeader />
    <main class="main">
      <div class="error-page">
        <div class="error-page__container">
          <h1 class="error-page__status">{{ error.statusCode }}</h1>
          <span class="error-page__text">Ошибка</span>
        </div>
        <NuxtLink to="/">
          <UIButton typeStyle="error">Перейти на главную страницу</UIButton>
        </NuxtLink>
      </div>
    </main>
    <UIFooter :error="true" />
  </div>
</template>
<script setup>
const { error } = defineProps({
  error: {
    type: Object,
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";
.error-page {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  @media screen and (max-width: $x-small) {
    gap: 25px;
  }
  button,
  a {
    @media screen and (max-width: $x-small) {
      width: 100%;
    }
  }
  &__container {
    @media screen and (max-width: $x-small) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media screen and (max-width: $x-small) {
    align-items: center;
    justify-content: flex-start;
  }
  &__status {
    font-size: 250px;
    @media screen and (max-width: $x-small) {
      font-size: 150px;
    }
  }
  &__text {
    font-size: 96px;
    @media screen and (max-width: $x-small) {
      font-size: 54px;
    }
  }
}
</style>
