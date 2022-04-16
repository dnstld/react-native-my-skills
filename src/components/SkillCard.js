import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    marginTop: 8,
    backgroundColor: '#1f1e25',
    padding: 12,
    borderRadius: 8,
  },
  textSkill: {
    color: '#fff',
  },
});
