import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DefaultForm from './DefaultForm';

export default function ParentFormView({ navigation }) {
  return (
    <View style={styles.viewContainer}>
      <DefaultForm navigation={navigation} disableEmail={false} disablePhone={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
