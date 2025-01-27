import type { TaskCardProps } from "@/types/task"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2 } from "lucide-react"
import Link from "next/link"

export default function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  return (
    <div
      className="flex items-center justify-between rounded-lg bg-gray-400/10 p-4 border border-gray-400/20"
      style={{ borderLeft: `4px solid ${task.color}` }}
    >
      <div className="flex items-center space-x-3">
        <Checkbox
          className={`rounded-full ${
            task.completed ? "border-secondary" : " border-primary"
          }`}
          checked={task.completed ?? false}
          onCheckedChange={onToggle}
        />
        <Link href={`/tasks/${task.id}`}>
          <span className={`${task.completed ? "text-gray-500 line-through" : "text-white"}`}>
            {task.title}
          </span>
        </Link>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault()
          onDelete()
        }}
        className="text-gray-500 hover:text-red-500"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  )
}

