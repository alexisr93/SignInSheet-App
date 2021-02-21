import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function DefaultForm({ navigation, disableEmail, disablePhone }) {
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();
  const [reason, setReason] = React.useState();

  const emailInput = disableEmail ? null : (
    <TextInput
      placeholder="Email"
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={input => setEmail(input)}
      value={email}
    />
  );

  const phoneInput = disablePhone ? null : (
    <TextInput
      placeholder="Phone"
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={input => setPhone(input)}
      value={phone}
    />
  );

  const submitData = () => {
    navigation.navigate('Submitted')
  }

  return (
    <View>
      {/* This will be text */}
      <TextInput
        placeholder="First Name"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={input => setFirstName(input)}
        value={firstName}
      />
      <TextInput
        placeholder="Last Name"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={input => setLastName(input)}
        value={lastName}
      />
      {emailInput}
      {phoneInput}
      <TextInput
        placeholder="Reason"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={input => setReason(input)}
        value={reason}
      />
      <Button
        title="Submit"
        onPress={submitData}
        color="#841584"
        accessibilityLabel="Submit Button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
