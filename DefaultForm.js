import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function DefaultForm({ navigation, disableEmail, disablePhone }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [reason, setReason] = React.useState("");

  const emailInput = disableEmail ? null : (
    <TextInput
      style={styles.input}
      placeholder="Email"
      onChangeText={input => setEmail(input)}
      value={email}
    />
  );

  const phoneInput = disablePhone ? null : (
    <TextInput
      style={styles.input}
      placeholder="Phone"
      onChangeText={input => setPhone(input)}
      value={phone}
    />
  );

  const submitData = () => {
    const customerData = { firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      reason: reason
    }

    fetch('http://localhost:3000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      },
      body: JSON.stringify(customerData)
    })
    .then(res => res.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    navigation.navigate('Submitted')
  }

  return (
    <View style={styles.viewContainer}>
      {/* This will be text */}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={input => setFirstName(input)}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={input => setLastName(input)}
        value={lastName}
      />
      {emailInput}
      {phoneInput}
      <TextInput
        style={styles.input}
        placeholder="Reason"
        onChangeText={input => setReason(input)}
        value={reason}
      />
      <View style={styles.separator} />
      <Button
        style={styles.button}
        title="Submit"
        onPress={submitData}
        accessibilityLabel="Submit Button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'stretch',
    width: '80%',
    backgroundColor: '#FFFFFF',
  },
  input: {
    height: 40,
    marginTop: 20,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
  },
  separator: {
    marginVertical: 12,
  }
});
