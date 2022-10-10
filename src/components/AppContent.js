import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import styles from '../styles/modules/app.module.scss';

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  const filterTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  });
  return (
    <div className={styles.content__wrapper}>
      {filterTodoList && filterTodoList.length > 0
        ? filterTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : 'no todo found'}
    </div>
  );
}

export default AppContent;
