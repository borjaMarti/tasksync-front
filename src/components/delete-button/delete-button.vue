<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';

const props = defineProps<{
  id: string;
  title: string;
  priority: string;
}>();

async function deleteTask() {
  await fetch(`http://localhost:3000/tasks/${props.id}`, {
    method: 'DELETE',
  });

  toast('Task deleted', {
    action: {
      label: 'Undo',
      onClick: async () => {
        await fetch('http://localhost:3000/tasks', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ id: props.id, title: props.title, priority: props.priority }),
        });
      },
    },
  });
}
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child
        ><Button @click="deleteTask" variant="destructive" size="icon"
          ><Icon icon="radix-icons:trash" class="h-[1.2rem] w-[1.2rem]" /></Button
      ></TooltipTrigger>
      <TooltipContent>
        <p>Delete task</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
