import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home({ navigation }) {
  return (
    <View style={styles.viewContainer}>
      <Button
        title="Student"
        onPress={() => navigation.navigate('StudentFormView')}
        accessibilityLabel="Student button"
      />
      <View style={styles.separator} />
      <Button
        title="Parent/Guardian"
        onPress={() => navigation.navigate('ParentFormView')}
        accessibilityLabel="Parent Guardian button"
      />
      <View style={styles.separator} />
      <Button
        title="Visitor"
        onPress={() => navigation.navigate('VisitorFormView')}
        accessibilityLabel="Visitor button"
      />
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  separator: {
    marginVertical: 8,
  },
});
