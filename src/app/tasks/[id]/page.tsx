import TaskForm from "@/components/task-form";

interface Props {
  params: { id: string };
}

export default async function EditTaskPage({ params }: Props) {
  console.log(params.id);
  const response = await fetch(`http://localhost:4000/api/tasks/${params.id}`);
  const task = await response.json();

  return (
    <div className="p-4">
      <div className="mx-auto max-w-2xl pt-20">
        <TaskForm task={task} />
      </div>
    </div>
  );
}
