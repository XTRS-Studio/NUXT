<template>
  <button
    :class="classes"
    :disabled="props.disabled"
    :type="props.type"
    @click="props.onClick"
  >
    <slot></slot>
  </button>
</template>
<script setup>
const props = defineProps({
  typeStyle: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "button",
  },
  onClick: {
    type: Function,
  },
});

const classes = computed(() => ({
  button: true,
  transparent: props.typeStyle.includes("transparent"),
  red: props.typeStyle.includes("red"),
}));
</script>
<style lang="scss" scoped>
.button {
  cursor: pointer;

  padding: 20px;
  border-radius: 15px;
  color: var(--white);
  font-size: 18px;
  transition: var(--transition);
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  transition: var(--transition);

  &:hover {
    opacity: 0.7;
  }
}

.red {
  @extend .button;

  padding: 20px 35px;
  background: var(--red);
  color: var(--white);

  &:hover {
    background: var(--dark-red);

    opacity: unset;
  }
}

.transparent {
  padding: 20px 35px;
  border: 1px solid var(--white);

  &:hover {
    background: var(--white);
    color: var(--black);

    opacity: unset;
  }
}
</style>
