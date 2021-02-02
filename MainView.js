import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import StudentFormView from './StudentFormView.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Separator = () => (
  <View style={styles.separator} />
);

export default function MainView({ navigation }) {
  return (
    <View>
        <Button
            title="Student"
            onPress={() => navigation.navigate('StudentFormView')}
            color="#841584"
            accessibilityLabel="Student button"
        />
        <Separator />
        <Button
            title="Parent/Guardian"
            onPress={() => navigation.navigate('ParentFormView')}
            color="#841584"
            accessibilityLabel="Parent Guardian button"
        />
        <Separator />
        <Button
            title="Visitor"
            onPress={() => navigation.navigate('VisitorFormView')}
            color="#841584"
            accessibilityLabel="Visitor button"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
  },
});
