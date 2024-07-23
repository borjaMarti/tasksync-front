<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { RouterLink } from 'vue-router';
import { buttonVariants } from '@/components/ui/button';
import { computed } from 'vue';

const props = defineProps<{
  id: string;
}>();

const linkClass = buttonVariants({ variant: 'outline', size: 'icon' });
const toRoute = computed(() => {
  return `/tasker/${props.id}`;
});
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child
        ><RouterLink :to="toRoute" :class="linkClass"
          ><Icon icon="radix-icons:pencil-2" class="h-[1.2rem] w-[1.2rem]" /></RouterLink
      ></TooltipTrigger>
      <TooltipContent>
        <p>Modify task</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
