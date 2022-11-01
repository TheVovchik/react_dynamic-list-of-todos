import React, { useContext } from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';
import { UserContext } from '../UserContext';

export const TodoList: React.FC = () => {
  const {
    todos,
    sortType,
    appliedQuery,
  } = useContext(UserContext);
  const filterTodosByComplete = (completed: boolean) => {
    return todos.filter(todo => todo.completed === completed);
  };

  const filterTodosByQuery = (todosList: Todo[], currentQuery: string) => {
    return todosList
      .filter(todo => todo.title
        .toLowerCase()
        .includes(currentQuery.toLowerCase()));
  };

  const getVisibleTodos = (currentTodos: Todo[]) => {
    switch (sortType) {
      case 'all':
        return currentTodos;

      case 'active':
        return filterTodosByComplete(false);

      case 'completed':
        return filterTodosByComplete(true);
      default:
        return currentTodos;
    }
  };

  const filtredTodos: Todo[] = getVisibleTodos(todos);
  const visibleTodos: Todo[] = filterTodosByQuery(filtredTodos, appliedQuery);

  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {visibleTodos.map(todo => (
          <React.Fragment key={todo.id}>
            <TodoItem todo={todo} />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};
