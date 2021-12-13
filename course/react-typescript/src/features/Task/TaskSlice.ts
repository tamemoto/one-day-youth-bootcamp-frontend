import {createSlice} from '@reduxjs/toolkit'
import { Task } from '../..'

const initialState: Task[] = []

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        changedTasks: (state, data) => {
            state = data.payload
        },
        setTasks: (state, data) => {
            state.push(...data.payload)
        },
        addTask: (state, data) => {
            state.push(data.payload)
        },
        clearTask: (state) => {
            state = state.filter((task) => !task.isDone)
        }
    }
})

export const {addTask, clearTask, setTasks, changedTasks} = taskSlice.actions
export const selectTasks = (state) => state.task

export default taskSlice.reducer