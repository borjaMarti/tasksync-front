<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { toast } from 'vue-sonner';
import { Priority } from '@/types/task.types';

const props = defineProps<{ id: string; title: string; priority: Priority }>();

const formSchema = toTypedSchema(
  z.object({
    title: z.string().min(2).max(50),
    priority: z.nativeEnum(Priority),
  })
);

const { handleSubmit } = useForm({
  initialValues: {
    title: props.title,
    priority: props.priority,
  },
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values) => {
  await fetch(`${import.meta.env.VITE_SERVER_URL}/tasks/${props.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ id: props.id, title: values.title, priority: values.priority }),
  });
  toast(`Task modified!`);
});
</script>

<template>
  <div class="flex flex-col gap-8 w-full max-w-96">
    <form class="space-y-6" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="title">
        <FormItem>
          <FormLabel>Task</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Your task" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="priority">
        <FormItem>
          <FormLabel>Priority</FormLabel>
          <Select v-bind="componentField">
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a priority level" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="important"> Important </SelectItem>
                <SelectItem value="backlog"> Backlog </SelectItem>
                <SelectItem value="completed"> Completed </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit"> Save </Button>
    </form>
  </div>
</template>
