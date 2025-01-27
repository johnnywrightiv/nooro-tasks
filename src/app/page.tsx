import TaskList from "@/components/task-list"
import CreateTaskButton from "@/components/create-task-button"

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <div className="mx-auto max-w-2xl">
        <CreateTaskButton />
        <TaskList />
      </div>
    </main>);
}