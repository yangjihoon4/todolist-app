/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import uuid from 'react-uuid';
import Task from './task';

const { width, height } = Dimensions.get('window');

const SectionListItem = ({ textValue, sectionId, checked, onRemove }) => {


  const [Tasks, setTasks] = useState([]);



  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTasks(Tasks);
  }, []);

  const addTask = text => {
    setTasks([
      ...Tasks,
      { taskId: uuid(), textValue: text, section: sectionId, checked: false },
    ]);
  };


  const onRemoveTask = taskId => e => {
    setTasks(Tasks.filter(task => task.taskId !== taskId));
  };

  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  const onCheck = id => e => {
    setTasks(
      Tasks.map(Task =>
        Task.taskId === id ? { ...Task, checked: !Task.checked } : Task,
      ),
    );
  };
  console.log('here', Tasks);

  return (
    <View>
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.text,
            checked ? styles.strikeText : styles.unstrikeText,
          ]}>
          {textValue}
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text onPress={onRemove(sectionId)}>ㅇ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text onPress={() => onToggle(isOpen)}>ㅁ</Text>
        </TouchableOpacity>
      </View>
      {isOpen ? (
        <View>
          <Task Tasks={Tasks} onRemoveTask={onRemoveTask} onCheck={onCheck} onAddTask={addTask} />
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: width - 70,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#3867d6',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  listContainer: {
    alignItems: 'center',
  },
});

export default SectionListItem;
