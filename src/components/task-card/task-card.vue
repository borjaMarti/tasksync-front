<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DeleteButton } from '@/components/delete-button';
import { TaskBadge } from '@/components/task-card/task-badge';
import { Priority } from '@/types/task.types';
import { ModifyButton } from '@/components/modify-button';

const props = defineProps<{
  id: string;
  title: string;
  priority: Priority;
}>();
</script>

<template>
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle class="mb-2">{{ title }}</CardTitle>
    </CardHeader>
    <CardContent class="flex justify-end items-center gap-2">
      <TaskBadge :priority="props.priority" />
      <DeleteButton :id="props.id" :title="props.title" :priority="props.priority" />
      <ModifyButton :id="props.id" />
    </CardContent>
  </Card>
</template>
