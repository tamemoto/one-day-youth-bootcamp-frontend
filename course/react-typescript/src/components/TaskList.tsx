import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Task } from '..';
import { setTasks, changedTasks } from '../features/Task/TaskSlice';
type Props = {
  tasks: Task[],
}
export const TaskList: React.FC<Props> = ({tasks}) => {
  const dispatch = useDispatch()
  // Taskの状態を切り替える
  const handleCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number,
  ) => {
    const newTasks = tasks.map((task, _i) => {
      return _i === i ? {...task, isDone: e.target.checked}: task
    })
    dispatch(changedTasks(newTasks))
  }

  return (
    <>
    <ul>
      {tasks.map((task, i) => (
        <Fragment key={`TODO-${i}`}>
        <li>{task.label}</li>
        <input type="checkbox" onChange={(e) => handleCheckBox(e,i)} />
        </Fragment>
      ))}
    </ul>
    </>
  );
};
