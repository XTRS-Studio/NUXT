<template>
  <div class="accordion" :class="{ disabled: disabled }" @click="handleToggle">
    <div class="accordion__header">
      {{ header }}
      <IconsAccArrow v-if="!disabled" :class="{ isOpen: active }" />
      <IconsCancel v-else />
    </div>
    <div class="accordion__content" v-show="active"><slot></slot></div>
  </div>
</template>
<style lang="scss" scoped>
.isOpen {
  transform: rotate(180deg);
  transition: all 0.3s ease-in-out;
}

.disabled {
  opacity: 0.7;

  pointer-events: none;
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
