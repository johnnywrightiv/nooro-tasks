"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Task } from "@/types/task";
import Link from "next/link";
import { ArrowLeft, CheckIcon, PlusCircle } from "lucide-react";

const COLORS = [
  "#EF4444", // Red
  "#F97316", // Orange
  "#EAB308", // Yellow
  "#22C55E", // Green
  "#3B82F6", // Blue
  "#6366F1", // Indigo
  "#A855F7", // Purple
  "#EC4899", // Pink
  "#78716C", // Warm Gray
];

interface TaskFormProps {
  task?: Task;
}

export default function TaskForm({ task }: TaskFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(task?.title ?? "");
  const [color, setColor] = useState(task?.color ?? null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = task
        ? `http://localhost:4000/api/tasks/${task.id}`
        : "http://localhost:4000/api/tasks";
      const method = task ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, color }),
      });

      if (response.ok) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error("Error saving task:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center">
        <Link href="/" className="text-gray-400 hover:text-white">
          <ArrowLeft className="h-6 w-6" />
        </Link>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-bold text-primary">
            Title
          </label>
          <div className="p-2">
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full bg-gray-400/10 text-white border-gray-100/10 border"
              placeholder="Ex: Give this guy an interview!"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-primary">Color</label>
          <div className="p-2 mt-2 flex flex-wrap justify-start gap-8 ">
            {COLORS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                className={`h-10 w-10 rounded-full ${
                  color === c ? "ring-2 ring-white" : ""
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        <Button type="submit" className="w-full font-bold" disabled={loading}>
          {loading ? "Saving..." : task ? "Save" : "Add Task"}
          {loading ? null : task ? (
            <CheckIcon className="h-5 w-5" />
          ) : (
            <PlusCircle className="h-5 w-5" />
          )}
        </Button>
      </div>
    </form>
  );
}
