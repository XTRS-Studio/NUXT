<template>
  <footer class="footer">
    <Transition>
      <div v-show="appStore.getSlide < 9 && !error" class="footer__scroll">
        Скролль, чтобы увидеть больше <IconsAccArrow />
      </div>
    </Transition>

    <div class="footer__tooltip">
      БЕТА-ВЕРСИЯ
      <IconsQuestion />
      <div class="pollup">
        Во время открытого бета-тестирования будет доступна часть функций
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useAppStore } from "@/store/index";
const appStore = useAppStore();
const { error } = defineProps({
  error: {
    type: Boolean,
  },
});
</script>
<style lang="scss" scoped>
.pollup {
  opacity: 0;

  position: absolute;

  top: -180%;
  left: 0%;

  transform: translate(-45%, -10%);

  width: 200px;

  padding: 5px 15px;

  background: #272727;
  color: var(--white);
  border-radius: 10px;

  font-size: 12px;
  text-align: center;
  z-index: 1;

  transition: var(--transition);

  &:before {
    content: "";

    position: absolute;

    width: 20px;
    height: 20px;

    top: 44px;
    left: 50%;

    transform: translateX(-50%) rotate(180deg);

    background: url("/Polygon.svg") no-repeat center;
  }
}

.footer {
  display: flex;
  justify-content: flex-end;

  &__scroll {
    position: fixed;

    z-index: 1;

    bottom: 30px;
    right: 50%;

    transform: translateX(50%);

    display: flex;
    flex-direction: column;
    align-items: center;

    color: var(--gray);

    &:deep(svg) {
      path {
        stroke: var(--gray);
      }
    }
  }

  &__tooltip {
    position: relative;
    display: flex;
    align-items: center;
    cursor: help;
    gap: 10px;
    color: var(--gray);

    &:hover {
      .pollup {
        opacity: 1;
        top: -200%;
      }
    }
  }
}
</style>
