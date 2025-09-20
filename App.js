import * as React from 'react';
import { StyleSheet, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RootStack from '../piper/src/navigation/RootStack';

function App() {
  const isDark = useColorScheme() === 'dark';
  const bgColor = isDark ? '#000' : '#fff';

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[styles.container, { backgroundColor: bgColor }]}
        edges={['left', 'right', 'bottom']}
      >
        <StatusBar
          barStyle={isDark ? 'light-content' : 'dark-content'}
          backgroundColor={bgColor}
        />

        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
