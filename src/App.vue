<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
const defaultLayout = "default";
const { currentRoute } = useRouter();
const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
);
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
body {
      font-family: "Montserrat";
}
</style>