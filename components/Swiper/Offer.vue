<template>
  <section class="offer slide">
    <div class="offer__titles">
      <small class="offer__small-title"> XTRC Studio Horror </small>
      <p class="offer__title">Присоединяйся к ужасной битве за выживание</p>
    </div>
    <div class="offer__lists">
      <ul class="offer__list">
        <li class="offer__list-item">Реалистичная графика</li>
        <li class="offer__list-item">Большие локации</li>
        <li class="offer__list-item">Свой подход к музыке и звуку</li>
      </ul>
      <ul class="offer__list">
        <li class="offer__list-item">Уникальная механика пряток</li>
        <li class="offer__list-item">Атмосфера страха и ужаса</li>
        <li class="offer__list-item">Интересный сюжет</li>
      </ul>
    </div>
    <div class="offer__buttons">
      <UIButton typeStyle="red">Приобрести игру</UIButton>
      <UIButton typeStyle="transparent">О проекте</UIButton>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "@/assets/variables.scss";
.offer {
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: $medium) {
    margin-left: 100px;
  }
  @media screen and (max-width: $small) {
    margin-left: 17px;
  }

  &__titles {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: $medium) {
      gap: 15px;
    }
  }

  &__small-title {
    font-size: 18px;
    color: var(--gray);
    @media screen and (max-width: $x-small) {
      font-size: 14px;
    }
  }

  &__title {
    width: 50%;

    font-size: 68px;
    @media screen and (max-width: $medium) {
      font-size: 36px;
    }
    @media screen and (max-width: $x-small) {
      font-size: 24px;
    }
  }

  &__lists {
    display: flex;
    gap: 25px;
    margin: 0 0px 0 20px;
    @media screen and (max-width: $medium) {
      flex-direction: column;
      gap: 10px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    list-style-image: url("/marker.svg");

    &-item {
      font-size: 18px;
      color: var(--white);
      text-align: left;
      line-height: 24px;
    }
  }

  &__buttons {
    display: flex;
    gap: 15px;
    margin: 15px 0 0 0;
    @media screen and (max-width: $x-small) {
      flex-direction: column;
      margin: unset;
    }
  }
}
</style>
