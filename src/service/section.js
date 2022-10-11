import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SectionInsertItem from './sectionInsertItem';

const Section = ({ Sections, onRemove, onToggle }) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {Sections.map(Section => (
        <SectionInsertItem
          key={Section.SectionId}
          {...Section}
          sectionId={Section.SectionId}
          onRemove={onRemove}
          onToggle={onToggle}
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

export default Section;
