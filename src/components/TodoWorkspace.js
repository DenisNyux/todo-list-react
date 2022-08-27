import React, { useState } from 'react'
import './TodoWorkspace.css'
import plusIco from '../static/plus-ico.svg'
import trashIco from '../static/trash-ico.svg'
import TodoItem from './TodoItem'
import editIco from '../static/edit-ico.svg'

export default function TodoWorkspace({addItem, toggledItem, deleteItem, changeStatus, changeText}) {

  // Состояние для отслеживания текста в input
  const [userInput, setInput] = useState('')

  // Вызывается при сабмите формы для добавления элемента.
  // В ней вызываем функцию добавления из родительского компонента и очищаем инпут.
  const handleAdding = (e) => {
    e.preventDefault()
    addItem(userInput)
    setInput('')
  }

  // Вызывается при сабмите формы для изменения элемента.
  // В ней вызываем функцию изменения из родительского компонента и очищаем инпут.
  const handleEditing = (e) => {
    e.preventDefault()
    changeText(userInput)
    setInput('')
  }

  // Отслеживаем изменение текста в инпуте. Он один для изменения и добавления
  const handleChange = (e) => {
    setInput(e.currentTarget.value)
  }


  return (
    <div className='todo-workspace'>
    {/* 
      Если пользователь не выбрал элемент из левого списка, то выводим форму для добавления элемента
      в список. Если элемент уже выбран, то выводится форма для редактирования уже существующего 
      элемента.
    */}
    {Object.keys(toggledItem).length === 0 ? 
      <form className='adding-area' onSubmit={handleAdding}>
      <input 
        placeholder='Добавьте задачу'
        value={userInput}
        type="text"
        onChange={handleChange}
      />
      <button className='functional-buttons'>
        <img src={plusIco}/> 
      </button>
      </form>
      :
      <form className='adding-area' onSubmit={handleEditing}>
        <input 
          placeholder='Измените задачу'
          value={userInput}
          type="text"
          onChange={handleChange}
        />
        <button className='functional-buttons'>
          <img src={editIco}/> 
        </button>
        <button className='functional-buttons' onClick={() => deleteItem(toggledItem)}>
          <img src={trashIco}/> 
        </button>
      </form>
    }

      <div className='toggled'>
        {/* 
          Если пользователь не выбрал никакой элемент, то выводим текст в span. 
          При выборе компонента отрисуем TodoItem
        */}
        {Object.keys(toggledItem).length === 0 ? <span><i>Выберите элемент из списка слева...</i></span>:
        <TodoItem taskText={toggledItem.taskText} taskStatus={toggledItem.taskStatus}/>
        }
        
      </div>


        {/* 
          Кнопки для изменения статуса задачи
        */}
      <div className='operations'>
        <button className='status-buttons awaits' onClick={() => changeStatus('awaits')}>
          Ожидает
        </button>
        <button className='status-buttons in-progress' onClick={() => changeStatus('inProgress')}>
          В работе 
        </button>
        <button className='status-buttons done' onClick={() => changeStatus('done')}>
          Сделано 
        </button>

        
        
      </div>
        
    </div>
  )
}
