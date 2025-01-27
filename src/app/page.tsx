import TaskList from "@/components/tasks-list"
import CreateTaskButton from "@/components/create-task-button"

export default function Home() {
  return (
    <main className="p-4">
      <div className="mx-auto max-w-2xl">
        <CreateTaskButton />
        <TaskList />
      </div>
    </main>);
}