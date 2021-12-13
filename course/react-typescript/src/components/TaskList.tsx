import React from 'react';
import { Task } from '..';
type Props = {
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}
export const TaskList: React.FC<Props> = ({tasks, setTasks}) => {
  // Taskの状態を切り替える
  const handleCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number,
  ) => {
    const newTasks = tasks.map((task, _i) => {
      return _i === i ? {...task, isDone: e.target.checked}: task
    })
    setTasks(newTasks)
  }

  return (
    <>
    <ul>
      {tasks.map((task, i) => (
        <>
        <li key={`TODO-${i}`}>{task.label}</li>
        <input type="checkbox" onChange={(e) => handleCheckBox(e, i)} />
        </>
      ))}
    </ul>
    </>
  );
};
