<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import type { Priority } from '@/types/task.types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { EditForm } from '@/components/modify-task/edit-form';

const props = defineProps<{
  id: string;
  title: string;
  priority: Priority;
}>();
</script>

<template>
  <Dialog>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>
          <DialogTrigger as-child>
            <Button variant="outline" size="icon"
              ><Icon icon="radix-icons:pencil-2" class="h-[1.2rem] w-[1.2rem]"
            /></Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Modify task</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogDescription>
          Make changes to your task here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <EditForm :id="props.id" :title="props.title" :priority="props.priority" />
    </DialogContent>
  </Dialog>
</template>
