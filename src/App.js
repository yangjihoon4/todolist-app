/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
// import { Provider, useDispatch, useSelector } from 'react-redux';
import {
  StatusBar,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import uuid from 'react-uuid';
import SectionInsert from './service/sectionInsert';
import Section from './service/section';
// import Realm from 'realm';
// import store from './slice/store';



// let SectionSchema = {
//   name: 'Section',
//   properties: {
//     textValue: 'string',
//     SectionId: 'string',
//   },
// };
// var SectionRealm = new Realm({
//   path: 'section.realm',
//   schema: [SectionSchema],
// });



const { height, width } = Dimensions.get('window');
const AppWrapper = () => {
  return (
    // <Provider store={store}>
    <App />
    // </Provider>
  );
};
const App = () => {
  const [Sections, setSections] = useState([]);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   Realm.SectionRealm
  //     .objects('Section');
  // }, []);




  const addSection = text => {
    setSections([
      ...Sections,
      { SectionId: uuid(), textValue: text }]);
    //   Realm.SectionRealm.write(() => {
    //     Realm.SectionRealm.create('Section', { SectionId: uuid(), textValue: text });
    // });
  };

  const onRemove = SectionId => e => {
    setSections(Sections.filter(Section => Section.SectionId !== SectionId));
  };
  console.log(Sections);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>TODOLIST</Text>
      <View style={styles.card}>
        <SectionInsert onAddSection={addSection} />
        <Section Sections={Sections} onRemove={onRemove} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8977AD',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 50,
    fontWeight: '400',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    width: width - 35,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    borderRadius: 25,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {
          height: 30,
          width: 0,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  },
});

export default AppWrapper;
