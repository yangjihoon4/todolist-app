import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const SectionInsert = ({ onAddSection }) => {
  const [NewSectionItem, setNewSectionItem] = useState('');
  const sectionInputHandler = newSection => {
    setNewSectionItem(newSection);
    console.log(newSection);
    console.log();
  };
  const addSectionHandler = () => {
    onAddSection(NewSectionItem);
    setNewSectionItem('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="New section"
        placeholderTextColor={'#999'}
        onChangeText={sectionInputHandler}
        value={NewSectionItem}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={'ADD'} onPress={addSectionHandler} />
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
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default SectionInsert;
