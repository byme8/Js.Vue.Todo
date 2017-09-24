import Rx from 'rxjs'
import 'materialize-css'

// Only for test!
function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

export class TodoItem {
    constructor(id, title, description, isDone) {
        this.id = id
        this.title = title
        this.description = description
        this.isDone = isDone
    }

    static makeTodo(title)
    {
        return new TodoItem(guid(), title, '', false)
    }
}

export class TodoService {
    
    constructor() {
        this.todos = []
        
        for (var i = 0; i < 10; i++) {
            this.todos.push(new TodoItem(i, 'Title' + i, 'Description' + i, i % 2))
        }
    }

    update(todoItem)
    {
        Materialize.toast('Changes saved for item with id ' + todoItem.id, 1000)
    }

    addTodo(title)
    {
        this.todos.push(TodoItem.makeTodo(title));
    }

    remove(todoItemId)
    {
        let todo = this.todos.find(o => o.id == todoItemId)
        if (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1 );
        }
    }
}



const todoService = new TodoService()

export default todoService