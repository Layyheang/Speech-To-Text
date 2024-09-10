<script setup lang="ts"></script>

<template>
  <RouterView v-slot="{ Component, route }">

    <Transition name="fade-slow" mode="out-in">
      <div :key="route.path">
        <h3
          v-if="route.meta?.title"
          class="font-bold text-[18px] p-0 m-0 mb-5 text-[#035F9E]"
        >
          {{ route.meta?.title }}
        </h3>
        <component :is="Component"></component>
      </div>
    </Transition>
  </RouterView>
</template>

<style scoped></style>
