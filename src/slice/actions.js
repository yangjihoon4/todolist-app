export const addSection = 'ADD_SECTION';
export const deleteSection = 'DELETE_SECTION';
export const addTask = 'ADD_TASK';
export const deleteTask = 'DELETE_TASK';
export const completeTask = 'COMPLETE_TASK';

let id = 1;

export const add_section = ({ id, textValue }) => {
  return {
    type: addSection,
    section: {
      sectionId: id++,
      textValue,
    },
  };
};

export const delete_section = sectionId => {
  return {
    type: deleteSection,
    sectionId,
  };
};

export const add_task = ({ taskId, textValue, isComplete, sectionId }) => {
  return {
    type: addTask,
    task: {
      taskId: taskId++,
      textValue,
      state: sectionId,
      isComplete,
    },
  };
};

export const delete_task = taskId => {
  return {
    type: deleteTask,
    taskId,
  };
};

export const complete_task = isComplete => {
  return {
    type: completeTask,
    isComplete,
  };
};
