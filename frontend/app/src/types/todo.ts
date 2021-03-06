export interface Todo {
  id: number
  title: string
  description: string
  owner_id: number
}

export interface TodosState {
  todos: Todo[]
}

export interface TodoPost {
  title: string
  description: string
  userId: number
}
