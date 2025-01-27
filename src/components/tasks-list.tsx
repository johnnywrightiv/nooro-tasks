"use client";

import { useEffect, useState } from "react";
import TasksSummary from "./tasks-summary";
import TaskCard from "./task-card";
import { ClipboardList } from "lucide-react";
import { Task } from "@/types/task";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/tasks");
      const data: Task[] = await response.json();
      setTasks(data);
    } catch (error) {
      alert("Error fetching tasks, check that your API server is running on localhost:4000");
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = async (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    try {
      const response = await fetch(`http://localhost:4000/api/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed }),
      });

      if (response.ok) {
        setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !task.completed } : t)));
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async () => {
    if (selectedTaskId === null) return;

    try {
      const response = await fetch(`http://localhost:4000/api/tasks/${selectedTaskId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setTasks(tasks.filter((t) => t.id !== selectedTaskId));
        setSelectedTaskId(null); // Clear the selected task
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const completedTasks = tasks.map((task) => ({
    ...task,
    completed: task.completed === null ? false : task.completed,
  }));

  if (loading) {
    return <div className="text-center text-gray-500">Loading tasks...</div>;
  }

  if (tasks.length === 0) {
    return (
      <div className="mt-8 flex flex-col items-center justify-center text-center text-gray-500">
        <TasksSummary tasks={completedTasks} />
        <div className="border-b border-gray-500/40 my-4 w-full"></div>
        <ClipboardList className="mt-20 mb-4 h-12 w-12" />
        <strong className="mb-2">You don&apos;t have any tasks registered yet.</strong>
        <div>Create tasks and organize your to-do items.</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <TasksSummary tasks={completedTasks} />
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={() => toggleTask(task.id)}
          onDelete={() => setSelectedTaskId(task.id)}
        />
      ))}

      {/* Delete Confirmation Dialog */}
      <Dialog open={selectedTaskId !== null} onOpenChange={(open) => !open && setSelectedTaskId(null)}>
        <DialogContent className="bg-zinc-800 border border-gray-400/20 text-white">
          <DialogHeader>
            <DialogTitle>Delete Task</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this task? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-4 mt-4">
            <DialogClose asChild>
              <Button variant={"outline"}>Cancel</Button>
            </DialogClose>
            <Button
              variant={"destructive"}
              onClick={deleteTask}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
