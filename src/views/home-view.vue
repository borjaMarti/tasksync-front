<script setup lang="ts">
import { IconLink } from '@/components/icon-link';
import { buttonVariants } from '@/components/ui/button';

const linkClass = buttonVariants({ variant: 'ghost' });
</script>

<template>
  <main class="pt-40 flex flex-col justify-center gap-10">
    <div class="flex justify-center">
      <IconLink to="/dashboard" icon="radix-icons:enter" text="To Dashboard" />
    </div>
    <div class="flex justify-center">
      <a
        href="https://borjamarti.dev"
        :class="linkClass + ' underline scroll-m-20 text-2xl font-semibold tracking-tight'"
        >borjaMarti.dev</a
      >
    </div>
  </main>
</template>
