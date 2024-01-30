import React, { useState } from 'react';
import '../components/todo.css';
import TodoList from '../components/todoList';

const TodoInput = () => {

    const [text, setText] = useState('')
    const [taskList, setTaskList] = useState([])

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleAddTask = () => {
        if (text) {
            if (taskList.includes(text)) {
                alert('Task already exists')
            } else {
                setTaskList(
                    [...taskList,
                        text]
                );
                setText('');
            }
        } else {
            alert('Please enter a task')
        }
    }

    const handleDelete = (index) => {
        if (index === 'deleteAll') {
            setTaskList([])
        } else {
            setTaskList((taskList) => {
                return taskList.filter((item, i) => {
                    return i !== index
                })
            })
        }
    }

    return (
        <div>
            <h1 className='todo-heading'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height='60px' width='40px'>
                    <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                </svg>
                Welcome to To-do List
            </h1>
            <div>
                <input className='input-box-todo' type='text' placeholder='Add a new task' value={text} onChange={(e) => handleChange(e)}></input>
                <button className='add-btn' onClick={handleAddTask}>+</button>
            </div>
            <TodoList taskList={taskList} handleDelete={handleDelete} />
        </div>
    )
}

export default TodoInput;