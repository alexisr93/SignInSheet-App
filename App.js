import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainView from './MainView.js';
import StudentFormView from './StudentFormView.js';
import ParentFormView from './ParentFormView.js';
import VisitorFormView from './VisitorFormView.js';

function HomeScreen({navigation}) {
  return (
    <View>
      <MainView navigation={navigation}/>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }}/>
      <Stack.Screen name="StudentFormView" component={StudentFormView} options={{ title: 'Student' }}/>
      <Stack.Screen name="ParentFormView" component={ParentFormView} options={{ title: 'Parent/Guardian' }}/>
      <Stack.Screen name="VisitorFormView" component={VisitorFormView} options={{ title: 'Visitor' }}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
