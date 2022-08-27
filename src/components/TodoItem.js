import React, { useState } from 'react'
import './TodoItem.css'


// Каждый элемент списка было решено вынести в отдельный компонент
// В него передается текст задачи и статус
export default function TodoItem({taskText, taskStatus}) {
  
  const itemClasses = {
    awaits: 'item awaits',
    inProgress: 'item in-progress',
    done: 'item done'
  }

  // Для индикации прогресса задачи, по её статусу будем применять тот или иной стиль.  
  const checkStatus = (status) => {
    if (itemClasses[status] !== undefined) {
      return itemClasses[status];
    } else {
      return 'item'
    }
  }

  return (
    <div className={checkStatus(taskStatus)}>
      {taskText}
    </div>
  )
}
