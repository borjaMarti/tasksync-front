<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { RouterView } from 'vue-router';
import socket from './socket';
import { ThemeButton } from '@/components/theme-button';
import { RouterLink } from 'vue-router';
import { buttonVariants } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';

const linkClass = buttonVariants({ variant: 'link' });
const queryClient = useQueryClient();
socket.connect();
// Borja: When recieving a tasksUpdated event from the server, invalidate queries triggering a refetch.
socket.on('tasksUpdated', () => {
  queryClient.invalidateQueries({ queryKey: ['tasks'] });
});
</script>

<template>
  <header class="header">
    <div class="header__container">
      <RouterLink to="/" :class="linkClass">
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">TaskSync</h1>
      </RouterLink>
      <ThemeButton />
    </div>
  </header>
  <Toaster />
  <RouterView />
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  z-index: 10;
  width: 100%;
  position: fixed;
  top: 0px;
  height: 7.5rem;
  backdrop-filter: blur(0.5rem);
}

@media (max-width: 768px) {
  .header {
    height: 4rem;
  }
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 57rem;
  padding: 0 1rem 0 1rem;
}
</style>
