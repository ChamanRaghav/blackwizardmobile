import React from 'react';
import { StyleSheet, StatusBar, Platform, View, SafeAreaView } from 'react-native';
import ImagePreview from './components/ImagePreview';
import Login from './components/Login';
import ViewImageScreen from './components/ViewImageScreen';
import WelcomeScreen from './components/WelcomeScreen'

export default function App() {
  return (
    <SafeAreaView style={{
      backgroundColor: '#fff',
      flex: 1
    }}>
      {/* <Login /> */}
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
      {/* <ImagePreview /> */}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
