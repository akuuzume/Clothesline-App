import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function SplashScreen() {
  useEffect(() => {
    console.log('Custom splash loaded');
    const timeout = setTimeout(() => {
      console.log('Navigating to login');
      router.replace('/login');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clothesline App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#DAE4ED' },
  text: { fontSize: 24, fontWeight: 'bold', color: '#333' },
});