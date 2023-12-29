export interface Task {
  status: TaskStatus;
  title: string;
  id: number | string;
}

export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}
