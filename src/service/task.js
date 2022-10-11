import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import TaskInsertItem from './taskInsertItem';
import TaskInsert from './taskInsert';

const Task = ({ Tasks, onRemoveTask, onCheck, onAddTask }) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <TaskInsert onAddTask={onAddTask} />
      {Tasks?.map(Task => (
        <TaskInsertItem
          key={Task.taskId}
          {...Task}
          onRemoveTask={onRemoveTask}
          taskId={Task.taskId}
          onCheck={onCheck}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default Task;
