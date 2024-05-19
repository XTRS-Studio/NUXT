<template>
  <header class="header">
    <NuxtImg class="header__logo" src="/Logotype.svg" />
    <ul class="header__nav">
      <UIButton>Главная</UIButton>
      <UIButton>О игре</UIButton>
      <UIButton>Возможности</UIButton>
      <UIButton>Локации</UIButton>
      <UIButton>О команде</UIButton>
      <UIButton>FAQ</UIButton>
    </ul>
    <div class="header__buttons">
      <UIButton>Войти</UIButton>
      <UIButton typeStyle="red">Регистрация</UIButton>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
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
