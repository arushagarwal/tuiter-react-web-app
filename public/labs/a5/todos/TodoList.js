import TodoItem from "./TodoItem.js";
import Todos from "./todos.js";

const TodoList = () => {
  return(`
       <ul>
           ${Todos.map(todo => TodoItem(todo)).join('')}
       </ul>
   `);
}
export default TodoList;

