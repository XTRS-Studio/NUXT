<template>
  <button :class="classes" :disabled="disabled" :type="type" @click="onClick">
    <slot></slot>

    <div v-if="disabled" class="pollup">Не работает</div>
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
  error: props.typeStyle.includes("error"),
}));
</script>
<style lang="scss" scoped>
.pollup {
  opacity: 0;

  position: absolute;

  top: 100%;
  left: 50%;

  transform: translate(-50%, -10%);

  width: fit-content;

  white-space: nowrap;

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

    top: -10px;
    left: 50%;

    transform: translateX(-50%);

    background: url("/Polygon.svg") no-repeat center;
  }
}

.button {
  position: relative;

  cursor: pointer;

  width: fit-content;

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

  &:active {
    transform: scale(0.93);
  }

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.7;

    &:active {
      transform: unset;
    }

    &:hover {
      .pollup {
        opacity: 1;
      }
    }
  }
}

.red {
  @extend .button;

  padding: 20px 35px;
  background: var(--red);
  color: var(--white);

  box-shadow: 0 0 25px rgb(255 0 0 / 58%);

  &:hover:not(.button:disabled) {
    background: var(--dark-red);

    box-shadow: 0 0 25px rgb(0 0 0 / 58%);

    opacity: unset;
  }
}

.transparent {
  padding: 20px 35px;
  border: 1px solid var(--white);

  &:deep svg {
    path {
      stroke: var(--white);

      transition: var(--transition);
    }
  }

  &:hover:not(.button:disabled) {
    background: var(--white);
    color: var(--black);

    opacity: unset;

    &:deep svg {
      path {
        stroke: var(--black);
      }
    }
  }
}

.error {
  @extend .button;

  padding: 20px 35px;
  background: var(--light-red);
  color: var(--white);

  box-shadow: 0 0 25px rgb(255 0 0 / 58%);

  &:hover:not(.button:disabled) {
    background: var(--dark-red);

    box-shadow: 0 0 25px rgb(0 0 0 / 58%);

    opacity: unset;
  }
}
</style>
