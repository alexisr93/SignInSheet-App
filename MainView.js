import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Separator = () => (
  <View style={styles.separator} />
);

export default function MainView({ navigation }) {
  return (
    <View style={styles.viewContainer}>
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
        <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 40,
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
  },
});
