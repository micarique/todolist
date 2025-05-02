"use client";

import { Task } from "@/types/Task";
import { useState } from "react";

interface Props {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (task: Task) => void;
}

export default function TaskItem({ task, onToggle, onDelete, onEdit }: Props) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCompleteWithFadeOut = async () => {
    setIsCompleted(true);
    setTimeout(() => {
      onDelete();
    }, 2000);
  };

  const handleDeleteWithFadeOut = async () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete();
    }, 1000);
  };

  return (
    <li
      className={`border p-2 rounded flex items-center justify-between transition-opacity ${
        isDeleting || isCompleted ? "opacity-0 duration-1000" : "opacity-100"
      }`}
    >
      <div className="flex items-center space-x-2">
        {/* Custom checkbox */}
        <button
          onClick={handleCompleteWithFadeOut}
          className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
            task.completed || isCompleted
              ? "bg-green-500 border-green-500 text-white"
              : "bg-white border-gray-400"
          }`}
        >
          {(task.completed || isCompleted) && (
            <span className="text-sm font-bold">✔</span>
          )}
        </button>

        <span
          className={`${
            task.completed || isCompleted ? "line-through text-gray-500" : ""
          }`}
        >
          <strong>{task.title}</strong>: {task.description}
        </span>
      </div>

      <div className="flex space-x-2">
        <button onClick={() => onEdit(task)} className="text-blue-500">
          Editar
        </button>
        <button onClick={handleDeleteWithFadeOut} className="text-red-500">
          Excluir
        </button>
      </div>
    </li>
  );
}