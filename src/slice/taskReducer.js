import { addTask, deleteTask, completeTask } from './actions';

const initialState = {
  tasks: [],
};

export const tasks = (state = initialState, action) => {
  if (action.type === addTask) {
    return {
      tasks: [...state.tasks, action.tasks],
    };
  } else if (action.type === deleteTask) {
    return {
      tasks: [...state.tasks.filter(task => task.id !== action.id)],
    };
  } else if (action.type === completeTask) {
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, isComplete: !task.isComplete } : task,
      ),
    };
  } else {
    return state;
  }
};
