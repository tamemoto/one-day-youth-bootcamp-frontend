import React from 'react';
import { Task } from '..';
import {useDispatch} from 'react-redux'
import { addTask, clearTask } from '../features/Task/TaskSlice';

type Props = {
  tasks: Task[];
  newTaskLabel: string,
  setNewTaskLabel: React.Dispatch<React.SetStateAction<string>>
}
export const TaskForm: React.FC<Props> = ({
  newTaskLabel,
  setNewTaskLabel
}) => {
  const dispatch = useDispatch()
  // フォームの値を保持する
  const handleNewTaskLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value)
  }

  // Taskの登録
  const handleAddTask = () => {
    const newTask = {label: newTaskLabel, isDone: false}
    dispatch(addTask(newTask))
    setNewTaskLabel('')
  }
  // 完了したTaskを削除する
  const handleClearTasks = () => {
    dispatch(clearTask())
  }

  return (
    <>
      <input
        onChange={handleNewTaskLabel}
        type="text"
        value={newTaskLabel}
        placeholder="enter"
      />
      <button onClick={handleAddTask}>add</button> <button onClick={handleClearTasks}>clear</button>
    </>
  );
};

