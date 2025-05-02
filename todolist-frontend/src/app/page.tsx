"use client";

import { useEffect, useState } from "react";
import { Task } from "@/types/Task";
import { getTasks, createTask, updateTask, deleteTask } from "@/lib/api";
import TaskForm from "@/components/TaskForm";
import TaskItem from "@/components/TaskItem";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch {
      setError("Erro ao carregar tarefas.");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task);
  };

  const handleUpdateTask = async (updatedTask: Task) => {
    try {
      await updateTask(updatedTask.id, updatedTask);
      loadTasks();
      setTaskToEdit(null); // Fecha o formulário de edição
    } catch {
      setError("Erro ao atualizar tarefa.");
    }
  };

  const handleCompleteAndDelete = async (task: Task) => {
    try {
      // Marca a tarefa como concluída
      await updateTask(task.id, { ...task, completed: !task.completed });
      loadTasks();

      // Inicia a transição de fade-out e exclui imediatamente
      setTimeout(async () => {
        try {
          await deleteTask(task.id);
          loadTasks();
        } catch {
          setError("Erro ao excluir tarefa.");
        }
      }, 1000); // Exclui após 1 segundo da animação
    } catch {
      setError("Erro ao atualizar tarefa.");
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      {error && <p className="text-red-500">{error}</p>}

      <TaskForm
        taskToEdit={taskToEdit}
        onAdd={async (task) => {
          try {
            await createTask(task);
            loadTasks();
          } catch {
            setError("Erro ao adicionar tarefa.");
          }
        }}
        onEdit={handleUpdateTask}
      />

      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={async () => {
              try {
                await deleteTask(task.id);
                loadTasks();
              } catch {
                setError("Erro ao excluir tarefa.");
              }
            }}
            onToggle={() => handleCompleteAndDelete(task)} // Agora chama a função que completa e deleta
            onEdit={handleEditTask}
          />
        ))}
      </ul>
    </main>
  );
}