export interface Task {
  id: number
  title: string
  color: string
  completed: boolean | null
}

export interface CreateTaskInput {
  title: string
  color: string
}

export interface UpdateTaskInput extends Partial<CreateTaskInput> {
  completed?: boolean
}

export interface TaskCardProps {
  task: Task
  onToggle: () => void
  onDelete: () => void
}
