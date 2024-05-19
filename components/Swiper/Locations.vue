<template>
  <div>
    <section class="locations slide">
      <p class="locations__title">Локации</p>
      <div class="locations__items">
        <div class="locations__item">
          <IconsMicro />
          <div class="locations__item-info">
            <p class="locations__item-name">ДРЕМУЧИЙ ЛЕС</p>
            <p class="locations__item-description">
              Начни свой путь в Темном лесу, наполняющем ужасом и отчаянием тех,
              кто решится исследовать его. Пробирайся сквозь Корявые деревья и
              не наткнись на монстра!
            </p>
          </div>
          <span @click="openGallery('forest')" class="locations__item-show"
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
    </section>
    <div v-if="active" class="locations__modal">
      <div v-click-outside="closeGallery" class="locations__slider">
        <Swiper
          :navigation="{
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`,
          }"
          :modules="[SwiperNavigation]"
          :slides-per-view="1"
        >
          <SwiperSlide
            v-for="(image, index) in images[currentGallery]"
            :key="index"
          >
            <img :src="image" alt="Slide Image" />
          </SwiperSlide>
        </Swiper>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
const images = {
  forest: [
    "/gallery/forest/1.jpg",
    "/gallery/forest/2.jpg",
    "/gallery/forest/3.jpg",
    "/gallery/forest/4.jpg",
    "/gallery/forest/5.jpg",
  ],
};
const active = ref(false);
const currentGallery = ref("");
const closeGallery = () => {
  active.value = false;
};
const openGallery = (name) => {
  currentGallery.value = name;
  active.value = true;
};
</script>
<style lang="scss" scoped>
.locations {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  width: 100%;
  &__slider {
    display: grid;
    max-width: 1194px;
    width: 100%;
    position: relative;
    height: 596px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 25px;
      border: 2px solid var(--white);
    }
    .swiper-button-prev {
      left: var(--swiper-navigation-sides-offset, 30px);
    }
    .swiper-button-next {
      right: var(--swiper-navigation-sides-offset, 30px);
    }
    .swiper {
      width: 100%;
    }
  }
  &__modal {
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(3px);
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
  }
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
