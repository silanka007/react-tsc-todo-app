/// <reference types="react-scripts" />

export type iTodo = {
  id: number;
  title: string;
  description: string;
  status: "completed" | "pending"
}

export type iTodos = iTodo[];
