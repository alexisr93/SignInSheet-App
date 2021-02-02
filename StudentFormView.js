import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function StudentFormView() {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.text}>Heyo! I'm a student view!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
