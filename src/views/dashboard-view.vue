<script setup lang="ts">
import useGetTasksQuery from '@/queries/use-get-tasks-query';
import { TaskCard } from '@/components/task-card';
import { computed } from 'vue';
import { LoadingSpiner } from '@/components/loading-spinner';
import { IconLink } from '@/components/icon-link';
import { buttonVariants } from '@/components/ui/button';
import { Icon } from '@iconify/vue';

const linkClass = buttonVariants();
const { isPending, data: tasks, isError } = useGetTasksQuery();
const priorityOrder = {
  important: 1,
  backlog: 2,
  completed: 3,
};
const sortedTasks = computed(() => {
  if (!tasks.value) {
    return [];
  }
  return [...tasks.value].sort((a, b) => {
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
});
</script>

<template>
  <main class="pt-40 flex justify-center mb-10">
    <div v-if="isError" class="flex flex-col justify-center gap-8">
      <p>Something is failing in the server...</p>
      <div class="flex justify-center">
        <a href="mailto:borjamarti@outlook.com?subject=TaskSync Fail" :class="linkClass"
          ><Icon icon="radix-icons:envelope-closed" class="h-[1.2rem] w-[1.2rem] mr-2" />Tell me
          about it?</a
        >
      </div>
    </div>
    <LoadingSpiner v-else-if="isPending" />
    <div v-else-if="sortedTasks" class="flex flex-col justify-center gap-8">
      <div class="flex justify-center">
        <IconLink to="/tasker" icon="radix-icons:plus" text="New Task" />
      </div>
      <ul class="flex flex-col gap-6">
        <li v-for="task in sortedTasks" :key="task.id">
          <TaskCard :id="task.id" :priority="task.priority" :title="task.title" />
        </li>
      </ul>
    </div>
  </main>
</template>
