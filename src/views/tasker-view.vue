<script setup lang="ts">
import { IconLink } from '@/components/icon-link';
import { TaskerForm } from '@/components/tasker-form';
</script>

<template>
  <main class="pt-40 flex flex-col justify-center gap-20">
    <div class="flex justify-center">
      <IconLink
        to="/dashboard"
        icon="radix-icons:exit"
        text="Back to
          Dashboard"
      />
    </div>
    <div class="flex justify-center">
      <TaskerForm />
    </div>
  </main>
</template>
