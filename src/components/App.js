import TodoList from './TodoList';
import TodoWorkspace from './TodoWorkspace';
import './App.css'
import React, { useState } from 'react'




function App() {
  // Первое состояние – массив объектов с данными для отрисовки TODO элементов в списке
  const [todoItems, setTodos] = useState([])
  // Второе состояние – выбранный в TODO списке объект
  const [toggledItem, setToggled] = useState({})

  // Функция для добавления новых заметок. Передается в TodoWorkspace. Принимает значение из input
  const addItem = (userInput) => {
    if (userInput) {
      const newItem = {
        taskText: userInput,
        taskStatus: 'awaits'
      }
      setTodos([...todoItems, newItem])
    }
  }


  // Функция для удаления заметок. Передается в TodoWorkspace. Принимает объект из списка todoItems
  const deleteItem = (task) =>{
    const newTodoItems = [...todoItems].filter(el => el !== task)
    setTodos(newTodoItems)
    setToggled({})
  }

  // Функция нужна для отображения элемента из списка задач в области взаимодействия. Берет индекс массива
  // todoItems и помещает элемент массива с этим индексом в состояние toggledItem
  const toggleItem = (taskIndex) =>{
    if (typeof taskIndex === 'number' && taskIndex !== -1){
      setToggled(todoItems[parseInt(taskIndex)])
    } else {
      setToggled({})
    }
  }

  // Функция для изменения статуса задачи
  const changeStatus = (newStatus) => {
    toggledItem.taskStatus = newStatus
    setToggled({})
  }

  // Функция для изменения текста задачи
  const changeText = (newText) => {
    if (newText) {
      toggledItem.taskText = newText
      setToggled({})
    }
  }



  return (
    <div className='main-wrapper'>
      {/* Два основных компонента – список с наименованиями и область взаимодействия */}
      <TodoList taskList={todoItems} toggleItem={toggleItem}/>
      <TodoWorkspace toggledItem={toggledItem} addItem={addItem}  changeStatus={changeStatus} changeText={changeText} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
