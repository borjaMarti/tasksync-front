<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DeleteTask } from '@/components/delete-task';
import { TaskBadge } from '@/components/task-card/task-badge';
import { Priority } from '@/types/task.types';
import { ModifyTask } from '@/components/modify-task';

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
      <DeleteTask :id="props.id" :title="props.title" :priority="props.priority" />
      <ModifyTask :id="props.id" :title="props.title" :priority="props.priority" />
    </CardContent>
  </Card>
</template>
