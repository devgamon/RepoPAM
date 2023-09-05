import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FirstText from './src/components/ClassObject/'
import SecondText from './src/components/Heranca';
import ThirdText from './src/components/Abstract';

const App = () => {
  return (
    <View style={styles.container}>
      <FirstText />
      <SecondText />
      <ThirdText />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;