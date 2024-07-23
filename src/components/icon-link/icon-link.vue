<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { buttonVariants } from '@/components/ui/button';
import { Icon } from '@iconify/vue';

const linkClass = buttonVariants();
const props = defineProps<{
  to: string;
  icon: string;
  text: string;
}>();
</script>

<template>
  <RouterLink :to="props.to" :class="linkClass"
    ><Icon :icon="props.icon" class="h-[1.2rem] w-[1.2rem] mr-2" />{{ props.text }}</RouterLink
  >
</template>
