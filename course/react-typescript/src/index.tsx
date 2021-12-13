import React, { useEffect, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { request } from "./server";

// TODOタスクの型
export type Task = {
  label: string,
  isDone: boolean,
}

const App: React.VFC = () => {
  // タスクリストを格納する
  const [tasks, setTasks] = useState<Task[]>([])

  // 追加前のタスクを格納する
  const [newTaskLabel, setNewtasLabel] = useState<string>('')
  // ページマウント時にモックAPIからデータを取得
  useEffect(() => {
      request.fetchTasks((payload: Task[]) => setTasks(payload) )
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
      <TaskList tasks={tasks} setTasks={setTasks}/>

      {/* タスク追加、削除 */}
      <TaskForm
      tasks={tasks}
      setNewTaskLabel={setNewtasLabel}
      newTaskLabel={newTaskLabel}
      setTasks={setTasks}
       />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
