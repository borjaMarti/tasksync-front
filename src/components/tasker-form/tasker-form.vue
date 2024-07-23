<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
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

const formSchema = toTypedSchema(
  z.object({
    title: z.string().min(2).max(50),
    priority: z.nativeEnum(Priority),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  await fetch(`${import.meta.env.VITE_SERVER_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ title: values.title, priority: values.priority }),
  });
  toast(`Added ${values.priority} task!`);
  resetForm();
});
</script>

<template>
  <div class="flex flex-col gap-8 w-full max-w-96">
    <h2 class="scroll-m-20 text-2xl font-semibold tracking-tight">Add a new Task</h2>
    <form class="space-y-6" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="title">
        <FormItem>
          <FormLabel>Task</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Your task" v-bind="componentField" />
          </FormControl>
          <FormDescription> You can do it. </FormDescription>
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
          <FormDescription> How important is it? </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit"> Submit </Button>
    </form>
  </div>
</template>
