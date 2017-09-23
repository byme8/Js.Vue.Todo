
export class TodoItem {
    constructor(id, title, description, isDone) {
        this.id = id
        this.title = title
        this.description = description
        this.isDone = isDone
    }
}

export class TodoService {
    
    constructor() {
        this.todos = []
        for (var i = 0; i < 10; i++) {
            this.todos.push(new TodoItem(i, 'Title' + i, 'Description' + i, i % 2))
        }
    }
}

const todoService = new TodoService()

export default todoService