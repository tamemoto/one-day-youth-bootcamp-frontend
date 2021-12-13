import React, { useEffect, useState } from "react";
import { store } from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { request } from "./server";
import { addTask, selectTasks, setTasks } from "./features/Task/TaskSlice";

// TODOタスクの型
export type Task = {
  label: string,
  isDone: boolean,
}

const App: React.VFC = () => {
  // タスクリストを格納する
  const taskList = useSelector(selectTasks);
  const dispatch = useDispatch()

  // 追加前のタスクを格納する
  const [newTaskLabel, setNewtasLabel] = useState<string>('')
  // ページマウント時にモックAPIからデータを取得
  useEffect(() => {
      request.fetchTasks((payload: Task[]) => dispatch(setTasks(payload)) )
  }, [])
  const containerStyle = {
    maxWidth: "700px",
    margin: "0 auto"
  }
  return (
    <div style={containerStyle}>
      {/* ヘッダー */}
      <h1>Tutorial Works</h1>

      {/* 一覧表示 */}
      <TaskList tasks={taskList}/>

      {/* タスク追加、削除 */}
      <TaskForm
      tasks={taskList}
      setNewTaskLabel={setNewtasLabel}
      newTaskLabel={newTaskLabel}
       />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
,
document.querySelector("#app"));
