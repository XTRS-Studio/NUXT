<template>
  <footer class="footer">
    <div class="footer__tooltip">
      БЕТА-ВЕРСИЯ
      <IconsQuestion />
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  &__tooltip {
    display: flex;
    align-items: center;
    cursor: help;
    gap: 10px;
    color: var(--gray);
  }
}
</style>
