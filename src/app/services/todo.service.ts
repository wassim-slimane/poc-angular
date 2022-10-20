export class TodoService {
  todoList = [
    {
      title: "tache 1",
      status: false,
    },
    {
      title: "tache 2",
      status: false,
    },
    {
      title: "tache 3",
      status: false,
    },
    {
      title: "tache 4",
      status: false,
    },
    {
      title: "tache 5",
      status: false,
    }
  ];

  deleteAll() {
    this.todoList = [];
  }

  deleteOne(index: number) {
      this.todoList.splice(index, 1);
  }

  addOne(title: string, status: boolean) {
    this.todoList.push({ title: title, status: status });
  }
}