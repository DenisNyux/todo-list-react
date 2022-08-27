import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

// В этот компонент передаем список задач для отрисовки, а также функцию для того чтобы выбрать для
// редактирования ту или иную задачу
export default function TodoList({taskList, toggleItem}) {

  // Идем по массиву задач и на основе его элементов формируем li. 
  // На клик по элементу li также вешаем функцию toggleTask для выбора редактируемого элемента
  const tasksArr = taskList.map((el, index) => 
    <li key={index} onClick = {() => toggleItem(index)}>
      {/* В li кладем компонент TodoItem */}
      <TodoItem taskText={el.taskText} taskStatus={el.taskStatus} />
    </li>
  );
  

  return (
    <div className='todo-list'>
      <ul>
        {tasksArr}
      </ul>
    </div>
  )
}
