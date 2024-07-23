import { useQuery } from '@tanstack/vue-query';
import type { Task } from '@/types/task.types';

const fetcher = async (): Promise<Task[]> =>
  await fetch('http://localhost:3000/tasks').then((response) => response.json());

export default function useGetTasksQuery() {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: fetcher,
  });
}
