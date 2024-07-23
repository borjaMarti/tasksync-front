import { useQuery } from '@tanstack/vue-query';
import type { Task } from '@/types/task.types';

const fetcher = async () =>
  await fetch(`${import.meta.env.VITE_SERVER_URL}/tasks`).then((response) => response.json());

export default function useGetTasksQuery() {
  return useQuery<Task[]>({
    queryKey: ['tasks'],
    queryFn: fetcher,
    retry: 1,
  });
}
