"use client";

import { useState, useEffect } from "react";
import { Task } from "@/types/Task";

interface Props {
  taskToEdit: Task | null;
  onAdd: (task: { title: string; description: string; completed: boolean }) => void;
  onEdit: (task: Task) => void;
}

export default function TaskForm({ taskToEdit, onAdd, onEdit }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    if (taskToEdit) {
      onEdit({ ...taskToEdit, title, description });
    } else {
      onAdd({ title, description, completed: false });
    }
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        value={title}
        placeholder="Título"
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        value={description}
        placeholder="Descrição"
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {taskToEdit ? "Editar" : "Adicionar"}
      </button>
    </form>
  );
}