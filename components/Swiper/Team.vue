<template>
  <section class="team slide">
    <p class="slide__title">Наша команда</p>
    <div class="team__content">
      <div class="team__slider">
        <div class="swiper-button-prev">
          <UIButton class="team__button" typeStyle="transparent">
            <IconsAccArrow
          /></UIButton>
        </div>
        <Swiper
          :navigation="{
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`,
          }"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: true,
          }"
          @slideChange="updateCurrentPerson"
          :modules="[SwiperNavigation, SwiperAutoplay]"
          :slides-per-view="1"
          :space-between="20"
        >
          <SwiperSlide v-for="(item, index) in peoples" :key="index">
            <img class="team__image" :src="item.img" alt="" />
          </SwiperSlide>
        </Swiper>
        <div class="swiper-button-next">
          <UIButton class="team__button" typeStyle="transparent">
            <IconsAccArrow
          /></UIButton>
        </div>
      </div>
      <div class="team__text">
        <p class="team__name">{{ currentPerson.name }}</p>
        <p class="team__description">{{ currentPerson.description }}</p>
      </div>
    </div>
  </section>
</template>
<script setup>
const peoples = [
  {
    name: "НИКИТА, АКА torro.ixq",
    description:
      "17 лет, веб-дизайнер и разработчик веб-приложений и игр. Основатель компаний, таких как aepstore, nekomi и xtrc-studio+.",
    img: "/peoples/nikita.jpg",
  },
  {
    name: "Никитос",
    description: "Туда сюда программист",
    img: "/peoples/nikita2.jpg",
  },
  {
    name: "Анна",
    description:
      "Дизайнер по отраслям. работала над разработкой интерфейса и постера.",
    img: "/peoples/anna.jpg",
  },
  {
    name: "Микрюкова Виктория",
    description:
      "Место учебы: Мвек (графический дизайнер) / Возраст:20 / Что делала? Я создавала макет игры ( загрузка + несколько пунктов), а также помогала в создании персонажей и созданием постера. Придумывала идеи связанные с игровым процессом и создавала (характеристику в таблице).",
    img: "/peoples/viktoria.jpg",
  },
  {
    name: "Калашникова Дарья",
    description:
      "16 лет, живу в Ижевске, студентка МВЕК по специальности графический дизайнер / Хобби - играть на укулеле  / Любимый цвет - серый / Знак зодиака - стрелец.",
    img: "/peoples/darya.jpg",
  },
  {
    name: "Максим",
    description: "Нет данных",
    img: "/NoData.png",
  },
  {
    name: "Аня",
    description: "Учусь на дизайнера, я разрабатывала персонажей для игры.",
    img: "/peoples/anna2.jpg",
  },
  {
    name: "Алексей",
    description: "Нет данных",
    img: "/peoples/aleksey.jpg",
  },
  {
    name: "Державин Михаил",
    description:
      "Наставник команды XTRC-Studio+. Без него не было бы команды. Набор и помощь были с его стороны, и мы все благодарны ему.",
    img: "/NoData.png",
  },
  {
    name: "Дарья",
    description: "Нет данных",
    img: "/NoData.png",
  },
  {
    name: "Ксения",
    description: "Нет данных",
    img: "/peoples/kseniya.jpg",
  },
  {
    name: "Анастасия",
    description: "Учусь на рекламе, работала над таблицами.",
    img: "/peoples/nastya.jpg",
  },
  {
    name: "Дарья",
    description: "Нет данных",
    img: "/NoData.png",
  },
];
const currentPerson = ref(peoples[0]);

const updateCurrentPerson = (swiper) => {
  const currentIndex = swiper.activeIndex;
  currentPerson.value = peoples[currentIndex];
};
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 73px;
  justify-content: center;
  @media screen and (max-width: $medium) {
    align-items: flex-start;
  }
  @media screen and (max-width: $small) {
    align-items: center;
  }
  &__button {
    padding: unset;
  }
  &__content {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 77px;
    @media screen and (max-width: $large) {
      gap: 25px;
    }
    @media screen and (max-width: $medium) {
      gap: 50px;
    }
    @media screen and (max-width: $small) {
      flex-direction: column;
    }
  }
  &__image {
    width: 100%;
    height: 484px;
    object-fit: cover;
    border-radius: 25px;
    @media screen and (max-width: $medium) {
      height: 290px;
    }
    @media screen and (max-width: $small) {
      height: 218px;
    }
  }
  &__name {
    font-size: 24px;
  }
  &__description {
    font-size: 16px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: max-content;
    padding: 22px 26px;
    border-radius: 20px;
    border: 3px solid var(--white);
    position: relative;
    &::before {
      content: "";
      border-radius: 20px;
      background: var(--white);
      opacity: 20%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  &__slider {
    display: flex;
    max-width: 547px;
    gap: 30px;
    align-items: center;
    @media screen and (max-width: $medium) {
      max-width: 393px;
      gap: 27px;
    }
    @media screen and (max-width: $small) {
      max-width: 330px;
      gap: 15px;
    }
    .swiper {
      width: 100%;
      border-radius: 25px;
    }
    .swiper-button-next {
      rotate: 270deg;
    }
    .swiper-button-prev {
      rotate: 90deg;
    }
    .swiper-button-next,
    .swiper-button-prev {
      position: unset;
      margin-top: unset;

      width: fit-content;
      height: fit-content;
      svg {
        min-width: 50px;
        @media screen and (max-width: $small) {
          min-width: unset;
          width: 40px;
        }
      }
      &::after,
      &::before {
        content: unset;
      }
    }
  }
}
</style>
