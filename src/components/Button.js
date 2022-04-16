import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function Button({onPress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    marginTop: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  textSkill: {
    color: '#fff',
  },
});
