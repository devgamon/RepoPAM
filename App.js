import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Object from './src/components/ClassObject/'
import Abstract from './src/components/Abstract';
import Heranca from './src/components/Heranca';

const App = () => {
  return (
    <View style={styles.container}>
      <Abstract />
      <Heranca />
      <Object />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#F0F0F0',
  } 
});

export default App;