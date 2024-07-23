<script setup lang="ts">
import useGetTasksQuery from '@/queries/use-get-tasks-query';

const { isPending, data } = useGetTasksQuery();
</script>

<template>
  <div class="about">
    <h1 v-if="isPending">This is an about page</h1>
    <ul v-else-if="data">
      <li v-for="task in data" :key="task.id">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
