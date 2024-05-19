<template>
  <footer class="footer">
    <div
      aria-label="ВО ВРЕМЯ ОТКРЫТОГО БЕТА-ТЕСТИРОВАНИЯ БУДЕТ ДОСТУПНА ЧАТЬ ФУНКЦИЙ"
      data-balloon-pos="up"
      class="footer__tooltip"
    >
      БЕТА-ВЕРСИЯ
      <IconsQuestion />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: flex-end;
  &__tooltip {
    position: relative;
    display: flex;
    align-items: center;
    cursor: help;
    gap: 10px;
    color: var(--gray);
  }
}
</style>
