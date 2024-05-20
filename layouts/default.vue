<template>
  <div
    v-if="!loading"
    :class="appStore.getGallery ? 'wrapper--dark' : null"
    class="wrapper"
  >
    <UIHeader />
    <main class="main">
      <NuxtPage />
    </main>
    <Transition name="scale">
      <BlockGallery v-if="appStore.getGallery" :name="appStore.getGallery" />
    </Transition>
    <UIFooter />
  </div>
  <div v-else class="wrapper">
    <div class="loader-container">
      <span class="loader"></span>
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from "@/store/index";

const appStore = useAppStore();

const loading = ref(true);
onMounted(() => {
  loading.value = false;
});
</script>
<style lang="scss">
.loader-container {
  display: grid;
  place-content: center;
  height: 100%;
}
.loader {
  width: 250px;
  height: 250px;
  background-color: var(--red);
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.5) inset,
    0 5px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 45%;
  top: -40%;
  background-color: #fff;
  animation: wave 5s linear infinite;
}
.loader:before {
  border-radius: 30%;
  background: rgba(255, 255, 255, 0.4);
  animation: wave 5s linear infinite;
}
@keyframes wave {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
