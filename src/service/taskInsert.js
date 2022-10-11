import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const TaskInsert = ({ onAddTask }) => {
  const [NewTaskItem, setNewTaskItem] = useState('');
  const TaskInputHandler = newTask => {
    setNewTaskItem(newTask);
  };
  const addTaskHandler = () => {
    onAddTask(NewTaskItem);
    setNewTaskItem('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="New task"
        placeholderTextColor={'#999'}
        onChangeText={TaskInputHandler}
        value={NewTaskItem}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={'ADD'} onPress={addTaskHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    // padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TaskInsert;
