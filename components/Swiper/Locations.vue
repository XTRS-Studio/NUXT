<template>
  <div class="locations slide">
    <p class="locations__title">Локации</p>
    <div class="locations__items">
      <div class="locations__item">
        <IconsMicro />
        <div class="locations__item-info">
          <p class="locations__item-name">ДРЕМУЧИЙ ЛЕС</p>
          <p class="locations__item-description">
            Начни свой путь в Темном лесу, наполняющем ужасом и отчаянием тех,
            кто решится исследовать его. Пробирайся сквозь Корявые деревья и не
            наткнись на монстра!
          </p>
        </div>
        <span class="locations__item-show"
          >Смотреть фото локации <i>{{ ">>>" }}</i></span
        >
      </div>
      <NuxtImg class="locations__way" src="/arrows/top1.png" />
      <div class="locations__item">
        <IconsAchieve />
        <div class="locations__item-info">
          <p class="locations__item-name">КЛАДБИЩЕ</p>
          <p class="locations__item-description">
            Кладбище, окутанное пеленой мрака, напоминает сферу зловещих тайн.
            Могила за могилой красуется призрачными фигурами, жаждущими новых
            жертв и запечатывая участь тех, кто смеет вступить.
          </p>
        </div>
        <span class="locations__item-show"
          >Смотреть фото локации <i>{{ ">>>" }}</i></span
        >
      </div>
      <NuxtImg class="locations__way" src="/arrows/top2.png" />
      <NuxtImg class="locations__way" src="/arrows/bottom1.png" />
      <div class="locations__item">
        <IconsLightning />
        <div class="locations__item-info">
          <p class="locations__item-name">ПОЛЕ</p>
          <p class="locations__item-description">
            Поляна, окруженная лесом и деревней, исполнена страха, смерти и
            искушающего тайного магнетизма, между миром живых и мертвых.
          </p>
        </div>
        <span class="locations__item-show"
          >Смотреть фото локации <i>{{ ">>>" }}</i></span
        >
      </div>
      <NuxtImg class="locations__way" src="/arrows/bottom2.png" />
      <div class="locations__item">
        <IconsBag />
        <div class="locations__item-info">
          <p class="locations__item-name">ДЕРЕВНЯ</p>
          <p class="locations__item-description">
            Вас встречает деревня “Скорбово” - мир, наполненный страхом и
            ужасом, способным поглотить вас до дна. Здесь тебя уже поджидает
            нежить. Попробуй остаться незамеченным.
          </p>
        </div>
        <span class="locations__item-show"
          >Смотреть фото локации <i>{{ ">>>" }}</i></span
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.locations {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  width: 100%;
  &__title {
    font-size: 46px;
  }
  &__way {
    width: 80%;
    height: 100%;
    object-fit: contain;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    &-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &-name {
      font-size: 24px;
    }
    &-show {
      font-size: 14px;
      color: var(--white);
      opacity: 25%;
      cursor: pointer;
      i {
        font-size: inherit;
        color: currentColor;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
    }
  }
  &__items {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
