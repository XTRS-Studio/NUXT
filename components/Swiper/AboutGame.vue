<template>
  <section class="aboutGame slide">
    <img class="aboutGame__img" loading="lazy" src="/Poster.JPEG" />
    <div class="aboutGame__text">
      <h1 class="slide__title">О игре</h1>
      <p class="aboutGame__description">
        Глубоко в заброшенной деревне Скорбово, окруженной мрачными лесами,
        развернется таинственное и напряженное приключение. В роли репортера
        Михаила ты отправишься на опасный квест, чтобы раскрыть мистические
        загадки этого места. Столкнувшись с ужасными существами и зловещими
        секретами, тебе придется использовать свой ум и ловкость, чтобы выжить и
        раскрыть правду. вас ждет экшен-хоррор с элементами прятанья и
        умственных задач, который погрузит вас в атмосферу страха и напряжения
        до самого конца. Готовы ли вы на этот ужасный вызов?
      </p>
      <UIButton typeStyle="red">Присоединиться</UIButton>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.aboutGame {
  display: flex;
  gap: 35px;
  justify-content: center;
  align-items: center;

  &__img {
    min-width: 720px;
    height: 512px;

    object-fit: cover;

    border: 4px solid var(--white);
    border-radius: 25px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__description {
    opacity: 0.75;

    font-size: 20px;
  }
}
</style>
<script setup></script>
