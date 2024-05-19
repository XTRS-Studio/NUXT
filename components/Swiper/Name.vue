<template>
  <section class="name">
    <h1 class="name__title">
      The <span class="name__title--red">Veil</span> of
      <span class="name__title--big">Dread</span>
    </h1>
  </section>
</template>
<style lang="scss" scoped>
.name {
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;

  &__title {
    width: 75%;

    font-size: 180px;
    color: var(---white);

    &--red {
      font-size: 270px;
      color: var(--red);
    }

    &--big {
      font-size: 270px;
    }
  }
}
</style>
<script setup></script>
