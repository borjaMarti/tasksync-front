<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { buttonVariants } from '@/components/ui/button';
import { Icon } from '@iconify/vue';

const linkClass = buttonVariants();
</script>

<template>
  <main class="hero">
    <RouterLink to="/dashboard" :class="linkClass"
      ><Icon icon="radix-icons:enter" class="h-[1.2rem] w-[1.2rem] mr-2" /> To Dashboard</RouterLink
    >
  </main>
</template>

<style>
.hero {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
