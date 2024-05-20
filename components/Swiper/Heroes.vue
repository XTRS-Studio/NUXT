<template>
  <section class="heroes slide">
    <div class="heroes__text">
      <p class="heroes__title">Персонажи</p>
      <p class="heroes__description">{{ currentHero.description }}</p>
    </div>
    <div class="heroes__slider">
      <Swiper
        :centeredSlides="true"
        :grabCursor="true"
        @slideChange="updateCurrentHero"
        :slides-per-view="1.7"
      >
        <SwiperSlide v-for="(item, index) in heroes" :key="index">
          <img class="heroes__img" :src="item.img" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<script setup>
const heroes = [
  {
    description:
      "Михаил, главный герой. Общая характеристика и внешний вид: Михаил - главный герой игры, начинающий блогер, решил сделать вирусный ролик о тайнах отдаленной деревни Скорбово в Швеции. Смелый и решительный, он не боится трудностей и опасностей, которые подстерегают его на пути к истине. Михаил выглядит как взрослый мужчина среднего телосложения. Имеет средние по длине светло-коричневые волосы, а также карие глаза. Одет он просто. Черная жилетка, серая толстовка и светлые штаны дополняют его стиль спокойного и устойчивого в своих убеждениях мужчины.",
    img: "/Michail.jpg",
  },
  {
    description:
      "Монстр деревни. Общая характеристика и внешний вид: Житель деревни, который подвергся страшному проклятию и превратился в уродливое существо. Он нападает на любое существо, не похожее на своих сородичей. Имеет очень агрессивное поведение и медленную скорость передвижения. В истории имеет второстепенный характер и составляет помеху главному персонажу. Монстр из деревни представляет собой огромное существо, похожее на обычного человека с растрепанной одеждой и окровавленным телом. Имеет красные глаза, острыми выростами из пальцев.",
    img: "/Monster.png",
  },
];
const currentHero = ref(heroes[0]);

const updateCurrentHero = (swiper) => {
  const currentIndex = swiper.activeIndex;
  currentHero.value = heroes[currentIndex];
};
</script>
<style lang="scss" scoped>
.heroes {
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
  &__text {
    display: flex;
    flex-direction: column;
    gap: 70px;
  }
  &__title {
    font-size: 46px;
  }
  &__description {
    width: 408px;
    font-size: 24px;
    text-align: center;
  }
  &__img {
    border-radius: 25px;
    border: 3px solid var(--black);
  }
  &__slider {
    display: flex;
    width: 70%;
    gap: 30px;
    align-items: center;
    .swiper {
      width: 100%;
      border-radius: 25px;
    }
    .swiper-slide {
      transition: var(--transition);
    }
    .swiper-slide-next {
      transform: scale(0.9) translateX(-400px);
      filter: blur(4px);
    }
    .swiper-slide-prev {
      transform: scale(0.9) translateX(400px);
      filter: blur(4px);
    }
    .swiper-slide-active {
      transform: scale(1) translateX(0);
      filter: blur(0);
      z-index: 1;
    }
  }
}
</style>
