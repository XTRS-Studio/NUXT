<template>
  <section class="slogan slide">
    <p class="slogan__text">
      Окунитесь в захватывающий хоррор с завораживающим сюжетом, потрясающими
      локациями и инновационной механикой пряток! Выживайте в мире ужасов, где
      каждый шаг может стать последним. Не раздумывай, присоединяйся к
      бета-версии игры одним из первых!
    </p>
  </section>
</template>
<style lang="scss" scoped>
@import "@/assets/variables.scss";
.slogan {
  display: flex;
  justify-content: center;
  align-items: center;
  &__text {
    font-size: 70px;
    @media screen and (max-width: $x-large) {
      font-size: 60px;
    }
    @media screen and (max-width: $large) {
      font-size: 55px;
    }
    @media screen and (max-width: $medium) {
      font-size: 45px;
    }
    @media screen and (max-width: $small) {
      font-size: 30px;
      max-width: 70%;
    }
    @media screen and (max-width: $x-small) {
      font-size: 30px;
      max-width: 80%;
    }
  }
}
</style>
