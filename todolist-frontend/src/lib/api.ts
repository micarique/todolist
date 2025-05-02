import { Task } from "@/types/Task";
import api from "./axios";

export async function getTasks(): Promise<Task[]> {
  const res = await api.get("");
  return res.data;
}

export async function createTask(task: Omit<Task, "id">) {
  const res = await api.post("", task);
  return res.data;
}

export async function updateTask(id: number, task: Task) {
  const res = await api.put(`/${id}`, task);
  return res.data;
}

export async function deleteTask(id: number) {
  await api.delete(`/${id}`);
}