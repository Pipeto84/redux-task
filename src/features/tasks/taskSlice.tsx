import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Task 1",
    description: "Description task 1",
  },
  {
    name: "Task 2",
    description: "Description task 2",
  },
];

export const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default TaskSlice.reducer;
