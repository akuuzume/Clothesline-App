import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  console.log('Login screen rendered');

  const handleLogin = async () => {
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      console.log('Login successful');
      navigation.navigate("(tabs)");
    } catch (error) {
      console.error('Login error:', error.code, error.message);
      Alert.alert('Login Failed', 'Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Clothesline App</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Logging In...' : 'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 30, color: '#333' },
  input: { width: '100%', height: 50, borderWidth: 1, borderRadius: 12, marginBottom: 20, paddingHorizontal: 15, backgroundColor: '#F0FFF0' },
  button: { backgroundColor: '#007BFF', paddingVertical: 15, borderRadius: 12, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});