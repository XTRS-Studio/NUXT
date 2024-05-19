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
.offer {
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: flex-start;

  &__titles {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__small-title {
    font-size: 18px;
    color: var(--gray);
  }

  &__title {
    width: 50%;

    font-size: 68px;
  }

  &__lists {
    display: flex;
    flex-direction: row;
    gap: 25px;

    margin: 0 0px 0 20px;
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
    flex-direction: row;
    gap: 15px;

    margin: 15px 0 0 0;
  }
}
</style>
