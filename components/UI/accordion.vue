<template>
  <div class="accordion" :class="{ disabled: disabled }" @click="handleToggle">
    <div class="accordion__header">
      {{ header }}
      <IconsAccArrow v-if="!disabled" :class="{ isOpen: active }" />
      <IconsCancel v-else />
    </div>
    <div class="accordion__content" v-show="active"><slot></slot></div>
    <div class="pollup">Нету информации</div>
  </div>
</template>
<style lang="scss" scoped>
.pollup {
  opacity: 0;

  position: absolute;

  top: 120%;
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

.isOpen {
  transform: rotate(180deg);
  transition: all 0.3s ease-in-out;
}

.disabled {
  opacity: 0.7;

  &:hover {
    .pollup {
      opacity: 1;
      top: 100%;
    }
  }
}

.accordion {
  cursor: pointer;

  width: 100%;

  padding: 20px 25px;

  background: #ffffff38;
  backdrop-filter: blur(4px);

  border-radius: 25px;
  border: 1px solid var(--white);

  display: flex;
  flex-direction: column;
  gap: 10px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 24px;
  }

  &__content {
    font-size: 18px;

    opacity: 0.75;
  }
}
</style>
<script setup>
const props = defineProps({
  header: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const active = ref(false);

const handleToggle = () => {
  if (!props.disabled) {
    active.value = !active.value;
    return;
  }
};
</script>
