<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Priority } from '@/types/task.types';
import { computed } from 'vue';

const props = defineProps<{ priority: Priority }>();

const badgeBorderColor = computed(() => {
  switch (props.priority) {
    case 'important':
      return 'border-amber-400 mr-auto';
    case 'backlog':
      return 'border-cyan-400 mr-auto';
    default:
      return 'border-current mr-auto';
  }
});

const badgeIndicatorStyle = computed(() => {
  switch (props.priority) {
    case 'important':
      return 'flex h-2 w-2 rounded-full mr-2 bg-amber-400';
    case 'backlog':
      return 'flex h-2 w-2 rounded-full mr-2 bg-cyan-400';
    default:
      return 'flex h-2 w-2 rounded-full mr-2 bg-current';
  }
});

const capitalizeFirstLetter = (string: String) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
</script>

<template>
  <Badge variant="outline" :class="badgeBorderColor"
    ><span :class="badgeIndicatorStyle"></span>{{ capitalizeFirstLetter(priority) }}</Badge
  >
</template>
