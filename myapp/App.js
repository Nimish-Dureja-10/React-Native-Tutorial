// App.js

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import SplashScreen from './src/components/SplashScreen';
import HomeScreen from './src/components/HomeScreen';

export default function App() {
  const [splashAnimationComplete, setSplashAnimationComplete] = useState(false);

  const handleAnimationFinish = () => {
    // Animation has finished, navigate to home screen
    setSplashAnimationComplete(true);
  };

  return (
    <>
      <StatusBar style="auto" />
      {!splashAnimationComplete ? (
        <SplashScreen onAnimationFinish={handleAnimationFinish} />
      ) : (
        <HomeScreen />
      )}
    </>
  );
}
