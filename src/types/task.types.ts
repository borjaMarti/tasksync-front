export enum Priority {
  Completed = 'completed',
  Backlog = 'backlog',
  Important = 'important',
}

export interface Task {
  id: string;
  title: string;
  priority: Priority;
}
