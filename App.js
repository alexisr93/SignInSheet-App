import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Parent/Guardian"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        title="Student"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        title="Visitor"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
