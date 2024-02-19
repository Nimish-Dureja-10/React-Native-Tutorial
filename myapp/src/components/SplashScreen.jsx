// SplashScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function SplashScreen({ onAnimationFinish }) {
  return (
    <View style={styles.container}>
      <LottieView
        style={{ width: '75%', height: '80%' }}
        source={require('../../assets/Animations/splashScreen.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
      <Text style={styles.mainHeading}>Welcome to E-CAMPUS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
  mainHeading: {
    fontSize: 24,
    color: '#B5C0D0',
  },
});
