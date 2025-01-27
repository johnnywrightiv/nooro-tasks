import React from "react";

type TaskSummaryProps = {
  tasks: { completed: boolean }[];
};

const TaskSummary = ({ tasks }: TaskSummaryProps) => {
  const completedTasks = tasks.filter((t) => t.completed).length;
  return (
    <div className="flex justify-between text-sm text-gray-400 w-full">
      <div className="text-primary font-bold">Tasks
        <span className="bg-gray-700/50 text-white px-2 py-1 rounded-xl ml-2">{tasks.length}</span>
      </div>
      <div className="text-secondary font-bold">
        Completed
        <span className="bg-gray-700/50 text-white px-2 py-1 rounded-xl ml-2">{completedTasks} of {tasks.length}</span>
      </div>
    </div>
  );
};

export default TaskSummary;
