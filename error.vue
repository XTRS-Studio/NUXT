@ -1,38 +0,0 @@
<template>
  <div class="wrapper">
    <UIHeader />
    <main class="main">
      <div class="error-page">
        <div>
          <h1 class="error-page__status">{{ error.statusCode }}</h1>
          <span class="error-page__text">Ошибка</span>
        </div>
        <NuxtLink to="/">
          <UIButton typeStyle="error">Перейти на главную страницу</UIButton>
        </NuxtLink>
      </div>
    </main>
    <UIFooter />
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
.error-page {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 50px;
  &__status {
    font-size: 250px;
  }
  &__text {
    font-size: 96px;
  }
}
</style>
